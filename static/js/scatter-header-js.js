function refreshIQ() {
    $.ajax({
        type: "POST",
        url: EosNetURL + "/v1/chain/get_table_rows",
        // cannot filter by proposal ID until secondary indexes are fixed by Dan. Also cannot set proposal ID as primary key due to uniqueness issues...
        data: JSON.stringify({"scope":scatterAccountNameUInt64, "code":"everipediaiq", "table":"accounts", "limit":"999999999999", "json": true}),
        beforeSend: function( xhr ) {
        },
        success: function (data) {
            $.each(data.rows, function( index, value ) {
                let theBalance = value.balance;
                let theSplit = theBalance.split(/[ ,]+/);
                if(theSplit[1] == "IQ" ){
                    iqBalance = parseFloat(theSplit[0]);
                    // Fix this later
                    // var iqElement = '<a href="/editor/' + scatterAccountName + '/">' + iqBalance.toLocaleString() +' IQ</a>';
                    let iqElement = '<a href="/transfer-iq/"><span id="header_iq_count">' + iqBalance.toLocaleString() +' IQ</span></a>';
                    $(".navbar-nav #header_iq_count").parent().parent().html(iqElement);
                    return false;
                }
            });

        }
    });
}

function refreshBrainpower(){
    $.ajax({
        type: "POST",
        url: EosNetURL + "/v1/chain/get_table_rows",
        data: JSON.stringify({
            "scope": "eparticlectr", "code": "eparticlectr", "table": "brainpwrtbl",
            "lower_bound": scatterAccountName, "upper_bound": scatterAccountNameCharPlusOne, "json": true
        }),
        beforeSend: function (xhr) {
        },
        success: function (data) {
            var brainpower;
            try {
                brainpower = data.rows[0].power;
                brainpower = brainpower.toLocaleString() + " BRAIN";
            }
            catch(err) {
                brainpower = "GET BRAINPOWER";
            }
            var brainElement = '<a href="/brainpower/' + scatterAccountName + '/"><span id="header_bpwr_count">' + brainpower + '</span></a>';
            $(".navbar-nav #header_bpwr_count").parent().parent().html(brainElement);

            var rewardElement = '<a href="/rewards/' + scatterAccountName + '/"><span id="header_rwd_claim">' + gettext("Claim Rewards") + '</span></a>';
            $(".navbar-nav #header_rwd_claim").parent().parent().html(rewardElement);
        }
    });
}

function getBrainpower(){
    let quickString = $("#header_bpwr_count").html();
    let quickSplit = quickString.replace(",", "").split(" ");
    let brainValue = quickSplit[0];
    if (isNormalInteger(brainValue)){
        return parseInt(brainValue);
    }
    else{
        return 0;
    }
}

ScatterJS.plugins( new ScatterEOS() );
var rpc = new eosjs_jsonrpc.JsonRpc('https://nodes.get-scatter.com:443');

// Mainnet alt
var EosNetHost = "proxy.eosnode.tools";
var EosNetProtocol = "https";
var EosNetPort = 443;
var EosNetPortString = "443";
var EosNetChainID = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";

// Mainnet
// var EosNetHost = "mainnet.libertyblock.io";
// var EosNetProtocol = "https";
// var EosNetPort = 7777;
// var EosNetPortString = "7777";
// var EosNetChainID = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";

// Debug
// var EosNetHost = "127.0.0.1";
// var EosNetProtocol = "http";
// var EosNetPort = 8888;
// var EosNetPortString = "8888";
// var EosNetChainID = "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f";

var eos = "";
var iqBalance = "0 IQ";
var scatterAccountName = ""; // need to fix this later
var scatterAccountNameUInt64 = "";
var scatterAccountNameCharPlusOne = ""; // need to fix this later
var isMobile = parseInt('{{request.mobile|yesno:"1,0"}}');
var isTablet = parseInt('{{request.tablet|yesno:"1,0"}}');
var IQ_PRECISION_MULTIPLIER = 10000;

var network = {
    protocol: EosNetProtocol,
    blockchain: 'eos',
    host: EosNetHost, // ( or null if endorsed chainId )
    port: EosNetPort, // ( or null if defaulting to 80 )
    chainId: EosNetChainID // FILL THIS IN WITH MAINNET https://mainnet.libertyblock.io:7777/v1/chain/get_info
};

var EosNetURL = EosNetProtocol + "://" + EosNetHost + ":" + EosNetPortString;

var eosOptions = {
    // broadcast: true,
    // sign: true,
    expireInSeconds: 3600, // 1 hr
    verbose: false,
    httpEndpoint: 'http://mainnet.libertyblock.io:8888',
    chainId: EosNetChainID // FILL THIS IN WITH MAINNET https://mainnet.libertyblock.io:7777/v1/chain/get_info
};

var scatter = ScatterJS.scatter;

// https://get-scatter.com/docs/dev/setting-up-for-web-apps
scatter.connect("Everipedia").then(connected => {
    // User does not have Scatter Desktop, Mobile or Classic installed.
    if(!connected) return false;
    document.dispatchEvent(new CustomEvent("scatterLoaded"));
    // window.scatter = null;

    var requiredFields = {accounts:[ network ]};
    scatter.getIdentity(requiredFields).then(identity => {
        scatterAccountName = identity.accounts[0].name;
        var account = identity.accounts.find(x => x.blockchain === 'eos');
        var scatterAccountNameBigInt = bigInt(encodeName(scatterAccountName, 0));
        scatterAccountNameUInt64 = scatterAccountNameBigInt.toString();
        scatterAccountNameCharPlusOne = increaseLastCharByOne(scatterAccountName);

        eos = new eosjs.Api({ rpc, signatureProvider:scatter.eosHook(network) });

        // Need to handle mobile eventually
        $(".scatter-username").html(scatterAccountName);

        refreshIQ();
        refreshBrainpower();

        document.dispatchEvent(new CustomEvent("scatterNavbarDone"));

    }).catch(error => {
        console.log(error);
        console.log("Failed to get Scatter identity")
    });
});

$(document).on("scatterNavbarDone", function () {
    // Show the create page button
    $(".create-page-plus").attr('style', 'margin-right: 10px; display: block !important');
});

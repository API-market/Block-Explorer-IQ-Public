

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s/%(cnt)s kijel\u00f6lve", 
      "%(sel)s/%(cnt)s kijel\u00f6lve"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Opcion\u00e1lis) Adja hozz\u00e1 a cryptop\u00e9nz p\u00e9nzt\u00e1rca c\u00edmeket", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Opcion\u00e1lis) \u00cdrja be a nev\u00e9t, e-mail c\u00edm\u00e9t, \u00e1llampolg\u00e1rs\u00e1g\u00e1t, nyelv\u00e9t, stb.", 
    "6 a.m.": "Reggel 6 \u00f3ra", 
    "6 p.m.": "Este 6 \u00f3ra", 
    "Add File": "F\u00e1jl hozz\u00e1ad\u00e1sa", 
    "Add Link": "Link hozz\u00e1ad\u00e1sa", 
    "Add Links, Files, Etc.": "Linkek, f\u00e1jlok stb. hozz\u00e1ad\u00e1sa", 
    "Add New Infobox": "\u00daj Infobox hozz\u00e1ad\u00e1sa", 
    "Add Row": "\u00daj sor", 
    "Add an additional description for this category": "Adjon hozz\u00e1 egy tov\u00e1bbi le\u00edr\u00e1st ehhez a kateg\u00f3ri\u00e1hoz", 
    "Add media to article text": "M\u00e9dia hozz\u00e1ad\u00e1sa a cikk sz\u00f6veg\u00e9hez", 
    "Added pictures will show up here.": "A hozz\u00e1adott k\u00e9pek itt jelennek meg.", 
    "Adding infobox item, please wait...": "Infobox hozz\u00e1ad\u00e1sa, k\u00e9rem v\u00e1rjon...", 
    "Adding, please wait...": "Hozz\u00e1ad\u00e1s, k\u00e9rem v\u00e1rjon...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Ha m\u00e1r hozz\u00e1adott egy linket, f\u00e1jlt vagy k\u00e9pet az oldalhoz, akkor a 'Hivatkoz\u00e1s' gombra kattintva id\u00e9zheti. Nyomja meg a '^' vagy a '*' gombot, hogy megjelenjen egy leg\u00f6rd\u00fcl\u0151 men\u00fc.", 
    "April": "\u00e1prilis", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Biztosan kil\u00e9p az oldalr\u00f3l? A nem mentett m\u00f3dos\u00edt\u00e1sok elveszhetnek.", 
    "Article proposal submission failed!": "A cikk javaslat\u00e1nak beny\u00fajt\u00e1sa sikertelen!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Linkek \u00e9s f\u00e1jlok hozz\u00e1ad\u00e1sakor megjelenik a Hivatkoz\u00e1sok r\u00e9szen. Ezeket szerkeszheti \u00e9s t\u00f6r\u00f6lheti is.", 
    "August": "augusztus", 
    "Available %s": "El\u00e9rhet\u0151 %s", 
    "Back": "Vissza", 
    "Cancel": "M\u00e9gsem", 
    "Choose": "V\u00e1laszt\u00e1s", 
    "Choose a Date": "V\u00e1lassza ki a d\u00e1tumot", 
    "Choose a Time": "V\u00e1lassza ki az id\u0151t", 
    "Choose a time": "V\u00e1lassza ki az id\u0151t", 
    "Choose all": "Mindet kijel\u00f6lni", 
    "Chosen %s": "%s kiv\u00e1lasztva", 
    "Cite": "Hivatkoz\u00e1s", 
    "Cite as verified editor": "Hivatalos szerkeszt\u0151 hivatkoz\u00e1sa", 
    "Cite links, files, etc": "Hivatkoz\u00e1sok, f\u00e1jlok, stb.", 
    "Cite my own knowledge / experience as a verified editor": "Hivatkozom saj\u00e1t tud\u00e1somra / tapasztalatomra, mint meger\u0151s\u00edtett szerkeszt\u0151", 
    "Claim": "Lefoglal\u00e1s", 
    "Click here to upload a picture for your editor profile.": "Ide kattintva felt\u00f6lthet egy k\u00e9pet a profilj\u00e1ba.", 
    "Click to choose all %s at once.": "Kattintson az \u00f6sszes %s kiv\u00e1laszt\u00e1s\u00e1hoz.", 
    "Click to remove all chosen %s at once.": "Kattintson az \u00f6sszes %s elt\u00e1vol\u00edt\u00e1s\u00e1hoz.", 
    "Completing transaction...": "A tranzakci\u00f3 befejez\u00e9se ...", 
    "Create Page": "Oldal l\u00e9trehoz\u00e1sa", 
    "Create page": "Oldal l\u00e9trehoz\u00e1sa", 
    "December": "december", 
    "Delete this tag": "T\u00f6r\u00f6lje ezt a c\u00edmk\u00e9t", 
    "Drag and drop your photo here or click to upload.": "H\u00fazza ide a k\u00e9p\u00e9t, \u00e9s kattintson ide a felt\u00f6lt\u00e9shez.", 
    "Edit": "Szerkeszt\u00e9s", 
    "Editor profile": "Szerkeszt\u0151 profilja", 
    "Enter the page title here": "Adja meg itt az oldal c\u00edm\u00e9t", 
    "Enter your profile info": "Adja meg az adatait", 
    "Error: proposal not found. Please try submitting again.": "Hiba: a javaslat nem tal\u00e1lhat\u00f3. Pr\u00f3b\u00e1lja \u00fajra elk\u00fcldeni.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Az Everipedia pont olyan, mint a Wikipedia, csak sokkal egyszer\u0171bb szerkeszteni \u00e9s hozz\u00e1j\u00e1rulni. Minden oldal egy infobox ter\u00fcletb\u0151l \u00e1ll a t\u00e9nyekhez, egy k\u00f6zponti sz\u00f6vegb\u0151l, ami semleges, harmadik szem\u00e9lyben van \u00edrva. Van m\u00e9g egy m\u00e9diagal\u00e9ria k\u00e9peknek, vide\u00f3knak \u00e9s stb, valamint egy hivatkoz\u00e1s lista a weboldalakra \u00e9s f\u00e1jlokra, amikre a sz\u00f6veg hivatkozik.", 
    "February": "febru\u00e1r", 
    "File uploaded successfully.": "A f\u00e1jl felt\u00f6lt\u00e9se sikeres.", 
    "Filter": "Sz\u0171r\u0151", 
    "Font Style": "Bet\u0171st\u00edlus", 
    "Here you can add the main photo for the article.": "Itt adhatja hozz\u00e1 a cikk f\u0151 f\u00e9nyk\u00e9p\u00e9t.", 
    "Hide": "Elrejt", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Ha m\u00e1r van egy Everipedia cikke \u00f6nmag\u00e1r\u00f3l, akkor itt hivatkozhat r\u00e1.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Ha van cr\u00edptop\u00e9nze, akkor itt adhatja hozz\u00e1 a p\u00e9nzt\u00e1rc\u00e1i c\u00edm\u00e9t. Az emberek adom\u00e1nyozhatnak \u00d6nnek, ha kedvelik a munk\u00e1j\u00e1t! Ha nincs p\u00e9nzt\u00e1rc\u00e1ja, akkor itt kaphat egyet: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ", 
    "Infobox": "Inf\u00f3box", 
    "Introduction": "Bemutatkoz\u00e1s", 
    "January": "janu\u00e1r", 
    "July": "j\u00falius", 
    "June": "j\u00fanius", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Hivatkoz\u00e1s m\u00e1s Everipedia oldalra", 
    "Link your Everipedia page": "Hivatkozzon Everipedia oldal\u00e1ra", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "A Wikip\u00e9dia oldalakra mutat\u00f3 linkek technikai okokb\u00f3l nem enged\u00e9lyezettek. K\u00e9rem, pr\u00f3b\u00e1lja \u00fajra.", 
    "Loading more activity, please wait...": "Tov\u00e1bbi tev\u00e9kenys\u00e9gek bet\u00f6lt\u00e9se, k\u00e9rem v\u00e1rjon...", 
    "Loading...": "Bet\u00f6lt\u00e9s...", 
    "Main article body": "F\u0151cikk", 
    "Main photo": "F\u0151 f\u00e9nyk\u00e9p", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Gy\u0151z\u0151dj\u00f6n meg arr\u00f3l, hogy minden forr\u00e1sra hivatkozik az oldalon linkek hozz\u00e1ad\u00e1s\u00e1val, hogy az emberek tudj\u00e1k, hogy honnan sz\u00e1rmazik az inform\u00e1ci\u00f3.", 
    "March": "m\u00e1rcius", 
    "May": "m\u00e1jus", 
    "Media": "M\u00e9dia", 
    "Media Gallery": "M\u00e9diat\u00e1r", 
    "Midnight": "\u00c9jf\u00e9l", 
    "Next": "K\u00f6vetkez\u0151", 
    "No URL provided, please try again": "Nincs URL megadva, k\u00e9rem, pr\u00f3b\u00e1lja \u00fajra", 
    "Noon": "D\u00e9l", 
    "Not Ready": "Nincs k\u00e9sz", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Ne feledje, hogy Brainpower n\u00e9lk\u00fcl nem tud m\u00f3dos\u00edt\u00e1sokat javasolni. A munk\u00e1ja el fog veszni!", 
    "Note: You are %s hour ahead of server time.": [
      "Megjegyz\u00e9s: %s \u00f3r\u00e1val a szerverid\u0151 el\u0151tt j\u00e1rsz", 
      "Megjegyz\u00e9s: %s \u00f3r\u00e1val a szerverid\u0151 el\u0151tt j\u00e1rsz"
    ], 
    "Note: You are %s hour behind server time.": [
      "Megjegyz\u00e9s: %s \u00f3r\u00e1val a szerverid\u0151 m\u00f6g\u00f6tt j\u00e1rsz", 
      "Megjegyz\u00e9s: %s \u00f3r\u00e1val a szerverid\u0151 m\u00f6g\u00f6tt j\u00e1rsz"
    ], 
    "November": "november", 
    "Now": "Most", 
    "October": "okt\u00f3ber", 
    "Please enter a description for the photo": "K\u00e9rem, adja meg a k\u00e9p le\u00edr\u00e1s\u00e1t", 
    "Please provide a description for the link or file.": "Adja meg a link vagy a f\u00e1jl le\u00edr\u00e1s\u00e1t.", 
    "Please provide a more scholarly description.": "K\u00e9rem, adjon meg tudom\u00e1nyosabb le\u00edr\u00e1st.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "K\u00e9rem, cser\u00e9ljen be egy kis IQ Brainpowerre, miel\u0151tt folytatn\u00e1. Kattintson az OK gombra, hogy megnyissa az Brainpower-kezel\u0151 ablakot. MEGJEGYZ\u00c9S: K\u00e9rem, bizonyosodjon meg, hogy a felugr\u00f3 ablakok enged\u00e9lyezve vannak.", 
    "Pre": "El\u0151", 
    "Profile photo": "Profilk\u00e9p", 
    "Reference links": "Hivatkoz\u00e1sok", 
    "Remove": "Elt\u00e1vol\u00edt\u00e1s", 
    "Remove all": "\u00d6sszes t\u00f6rl\u00e9se", 
    "Save": "Ment\u00e9s", 
    "Save changes": "Be\u00e1ll\u00edt\u00e1sok ment\u00e9se", 
    "Search Everipedia": "Keres\u00e9s az Everipedi\u00e1n", 
    "Searching...": "Keres\u00e9s...", 
    "September": "szeptember", 
    "Show": "Mutat", 
    "Style": "St\u00edlus", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "A szerkeszt\u0151 profiloldal\u00e1n megtal\u00e1lhat\u00f3 a felhaszn\u00e1l\u00f3 \u00e1ltal szerkesztett oldalak, valamint a hivatkoz\u00e1sok \u00e9s kommentek, amelyeket k\u00f6zz\u00e9tettek.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Az inf\u00f3box a t\u00f6m\u00f6r, egy\u00e9rtelm\u0171 \u00e9s gyors t\u00e9nyekhez k\u00e9sz\u00fclt. A kiv\u00e1lasztott t\u00e9ma f\u00fcggv\u00e9ny\u00e9ben a kiv\u00e1lasztott t\u00e9telek a leg\u00f6rd\u00fcl\u0151 men\u00fcben jelennek meg, de b\u00e1rmilyen t\u00edpus\u00fa inf\u00f3boxot hozz\u00e1 lehet adni.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ez az el\u00e9rhet\u0151 %s list\u00e1ja. \u00dagy v\u00e1laszthat k\u00f6z\u00fcl\u00fck, hogy r\u00e1kattint az al\u00e1bbi dobozban, \u00e9s megnyomja a dobozok k\u00f6zti \"V\u00e1laszt\u00e1s\" nyilat.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ez a kiv\u00e1lasztott %s list\u00e1ja. Elt\u00e1vol\u00edthat k\u00f6z\u00fcl\u00fck, ha r\u00e1kattint, majd a k\u00e9t doboz k\u00f6zti \"Elt\u00e1vol\u00edt\u00e1s\" ny\u00edlra kattint.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Ez a link m\u00e1r l\u00e9tezik az oldalon, de m\u00e9g szerkesztheti, hogy jav\u00edtsa az inform\u00e1ci\u00f3t!", 
    "Title": "C\u00edm", 
    "To add an image or video to the article text, click the 'Media' button.": "Ha k\u00e9pet vagy vide\u00f3t szeretne hozz\u00e1adni a cikk sz\u00f6veg\u00e9hez, kattintson a 'M\u00e9dia' gombra.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Egy m\u00e1sik Everipedia oldalhoz val\u00f3 hivatkoz\u00e1shoz kattintson a 'Hivatkoz\u00e1s oldalra' gombra. Nyomja meg a '@' gombot, \u00e9s egy leg\u00f6rd\u00fcl\u0151 men\u00fc meg fog jelenni. Pr\u00f3b\u00e1ljon meg csak annyi oldalra hivatkozni, amennyire csak sz\u00fcks\u00e9ges.", 
    "Today": "Ma", 
    "Tomorrow": "Holnap", 
    "Type into this box to filter down the list of available %s.": "\u00cdrjon a mez\u0151be az el\u00e9rhet\u0151 %s sz\u0171r\u00e9s\u00e9hez.", 
    "When you are done, click here to save your changes.": "Kattintson ide, ha v\u00e9gzett a v\u00e1ltoztat\u00e1sokkal.", 
    "When you are finished, click here to save your changes.": "Ha elk\u00e9sz\u00fclt, kattintson ide a v\u00e1ltoz\u00e1sok ment\u00e9s\u00e9hez.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Objekt\u00edven \u00e9s harmadik szem\u00e9lyben \u00edrja meg a sz\u00f6veget, b\u00e1rmilyennem\u0171 marketinges sz\u00f6veg n\u00e9lk\u00fcl. Ez egy enciklop\u00e9dia, nem egy k\u00f6z\u00f6ss\u00e9gi oldal.", 
    "Yesterday": "Tegnap", 
    "You can also create a new wiki article by clicking here.": "Ide kattintva k\u00e9sz\u00edthet egy \u00faj wiki cikket is.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Ma m\u00e1r rengeteg linket posztolt. K\u00e9rem v\u00e1rjon egy kicsit, hogy az emberek reag\u00e1ljanak. \u00daj szerkeszt\u0151k csak napi 250 posztot adhatnak k\u00f6zz\u00e9.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Kiv\u00e1lasztott egy m\u0171veletet, \u00e9s nem m\u00f3dos\u00edtott egyetlen mez\u0151t sem. Feltehet\u0151en a Mehet gombot keresi a Ment\u00e9s helyett.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Kiv\u00e1lasztott egy m\u0171veletet, de nem mentette az egyes mez\u0151kh\u00f6z kapcsol\u00f3d\u00f3 m\u00f3dos\u00edt\u00e1sait. Kattintson az OK gombra a ment\u00e9shez. \u00dajra kell futtatnia az m\u0171veletet.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "M\u00e9g el nem mentett m\u00f3dos\u00edt\u00e1sai vannak egyes szerkeszthet\u0151 mez\u0151k\u00f6n. Ha most futtat egy m\u0171veletet, akkor a m\u00f3dos\u00edt\u00e1sok elvesznek.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "P", 
    "one letter Monday\u0004M": "H", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "V", 
    "one letter Thursday\u0004T": "C", 
    "one letter Tuesday\u0004T": "K", 
    "one letter Wednesday\u0004W": "S", 
    "paused": "sz\u00fcnetelve", 
    "reset": "vissza\u00e1ll\u00edt\u00e1s", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "elind\u00edtva", 
    "stopped": "le\u00e1ll\u00edtva", 
    "targetAchieved": "targetAchieved"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y. F j. G.i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y.%m.%d. %H.%M.%S", 
      "%Y.%m.%d. %H.%M.%S.%f", 
      "%Y.%m.%d. %H.%M", 
      "%Y.%m.%d.", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "Y. F j.", 
    "DATE_INPUT_FORMATS": [
      "%Y.%m.%d.", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "F j.", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y.m.d. G.i", 
    "SHORT_DATE_FORMAT": "Y.m.d.", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "G.i", 
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S", 
      "%H.%M", 
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "Y. F"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


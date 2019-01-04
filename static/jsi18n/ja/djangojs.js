

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
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
      "%(cnt)s\u500b\u4e2d%(sel)s\u500b\u9078\u629e"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09\u4eee\u60f3\u901a\u8ca8\u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30c9\u30ec\u30b9\u3092\u8ffd\u52a0\u3059\u308b", 
    "(Optional) Enter your name, email, nationality, language, etc.": "\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09\u540d\u524d\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u56fd\u7c4d\u3001\u8a00\u8a9e\u306a\u3069\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "6 a.m.": "\u5348\u524d 6 \u6642", 
    "6 p.m.": "\u5348\u5f8c 6 \u6642", 
    "Add File": "\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b", 
    "Add Link": "\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3059\u308b", 
    "Add Links, Files, Etc.": "\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u3092\u8ffd\u52a0\u3059\u308b\u3002", 
    "Add New Infobox": "\u65b0\u3057\u3044\u30a4\u30f3\u30d5\u30a9\u30dc\u30c3\u30af\u30b9\u3092\u8ffd\u52a0\u3059\u308b", 
    "Add Row": "\u884c\u3092\u8ffd\u52a0\u3059\u308b", 
    "Add an additional description for this category": "\u3053\u306e\u30ab\u30c6\u30b4\u30ea\u306e\u8ffd\u52a0\u8aac\u660e\u3092\u8ffd\u52a0\u3059\u308b", 
    "Add media to article text": "\u8a18\u4e8b\u306e\u30c6\u30ad\u30b9\u30c8\u306b\u30e1\u30c7\u30a3\u30a2\u3092\u8ffd\u52a0\u3059\u308b", 
    "Added pictures will show up here.": "\u8ffd\u52a0\u3055\u308c\u305f\u753b\u50cf\u304c\u3053\u3053\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002", 
    "Adding infobox item, please wait...": "\u60c5\u5831\u9805\u76ee\u3092\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044...", 
    "Adding, please wait...": "\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059\u3001\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u3001\u307e\u305f\u306f\u753b\u50cf\u3092\u30da\u30fc\u30b8\u306b\u8ffd\u52a0\u3057\u305f\u3089\u3001\u300cCite\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5f15\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5165\u529b\u6642\u306b\u201d^\u201d\u307e\u305f\u306f\u201d*\u201d\u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002", 
    "April": "4\u6708", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u30da\u30fc\u30b8\u3092\u9589\u3058\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f\u4fdd\u5b58\u3057\u3066\u3044\u306a\u3044\u5909\u66f4\u306f\u5931\u308f\u308c\u307e\u3059\u3002", 
    "Article proposal submission failed!": "\u8a18\u4e8b\u7533\u8acb\u306e\u63d0\u51fa\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\u30ea\u30f3\u30af\u3068\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u305d\u308c\u3089\u306f\u53c2\u8003\u30ea\u30f3\u30af\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u3089\u306f\u7de8\u96c6\u307e\u305f\u306f\u524a\u9664\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002", 
    "August": "8\u6708", 
    "Available %s": "\u5229\u7528\u53ef\u80fd %s", 
    "Back": "\u623b\u308b", 
    "Cancel": "\u30ad\u30e3\u30f3\u30bb\u30eb", 
    "Choose": "\u9078\u629e", 
    "Choose a Date": "\u65e5\u4ed8\u3092\u9078\u629e", 
    "Choose a Time": "\u6642\u9593\u3092\u9078\u629e", 
    "Choose a time": "\u6642\u9593\u3092\u9078\u629e", 
    "Choose all": "\u5168\u3066\u9078\u629e", 
    "Chosen %s": "\u9078\u629e\u3055\u308c\u305f %s", 
    "Cite": "\u5f15\u7528\u3059\u308b", 
    "Cite as verified editor": "\u691c\u8a3c\u3055\u308c\u305f\u7de8\u96c6\u8005\u3068\u3057\u3066\u5f15\u7528\u3059\u308b", 
    "Cite links, files, etc": "\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u3092\u5f15\u7528\u3059\u308b", 
    "Cite my own knowledge / experience as a verified editor": "\u691c\u8a3c\u6e08\u307f\u306e\u7de8\u96c6\u8005\u3068\u3057\u3066\u81ea\u5206\u306e\u77e5\u8b58\u3084\u7d4c\u9a13\u3092\u5f15\u7528\u3059\u308b", 
    "Claim": "\u6a29\u5229", 
    "Claim Rewards": "\u7533\u3057\u7acb\u3066\u5831\u916c", 
    "Click here to upload a picture for your editor profile.": "\u30a8\u30c7\u30a3\u30bf\u30fc\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0b\u3055\u3044\u3002", 
    "Click to choose all %s at once.": "\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3059\u3079\u3066\u306e %s \u3092\u9078\u629e\u3057\u307e\u3059\u3002", 
    "Click to remove all chosen %s at once.": "\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3059\u3079\u3066\u306e %s \u3092\u9078\u629e\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u3002", 
    "Completing transaction...": "\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u5b8c\u4e86\u4e2d...", 
    "Connect Languages": "\u8a00\u8a9e\u3092\u63a5\u7d9a\u3059\u308b", 
    "Create Page": "\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b", 
    "Create page": "\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b", 
    "December": "12\u6708", 
    "Delete this tag": "\u3053\u306e\u30bf\u30b0\u3092\u524a\u9664\u3059\u308b", 
    "Drag and drop your photo here or click to upload.": "\u3053\u3053\u306b\u5199\u771f\u3092\u30c9\u30e9\u30c3\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Edit": "\u7de8\u96c6", 
    "Editor profile": "\u30a8\u30c7\u30a3\u30bf\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb", 
    "Enter the page title here": "\u3053\u3053\u306b\u30da\u30fc\u30b8\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044", 
    "Enter your profile info": "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044", 
    "Error: proposal not found. Please try submitting again.": "\u30a8\u30e9\u30fc\uff1a\u7533\u8acb\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u3054\u63d0\u51fa\u4e0b\u3055\u3044\u3002", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia\u306fWikipedia\u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u7de8\u96c6\u3084\u8ca2\u732e\u304c\u3088\u308a\u7c21\u5358\u3067\u3059\u3002\u5404\u30da\u30fc\u30b8\u306f\u3001\u77ed\u3044\u7c21\u6f54\u306a\u4e8b\u5b9f\u306e\u305f\u3081\u306e\u30a4\u30f3\u30d5\u30a9\u30dc\u30c3\u30af\u30b9\u3001\u4e2d\u7acb\u306e\u7b2c\u4e09\u8005\u306e\u6642\u5236\u3067\u66f8\u304b\u308c\u305f\u4e3b\u8981\u306a\u8a18\u4e8b\u3001\u30c8\u30d4\u30c3\u30af\u306b\u95a2\u3059\u308b\u5199\u771f\u3001\u30d3\u30c7\u30aa\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u306a\u3069\u306e\u30e1\u30c7\u30a3\u30a2\u30ae\u30e3\u30e9\u30ea\u30fc\u3001\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3078\u306e\u53c2\u7167\u306e\u30ea\u30b9\u30c8\u3001\u304a\u3088\u3073\u8a18\u4e8b\u3084\u60c5\u5831\u306e\u5f15\u7528\u304b\u3089\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002", 
    "February": "2\u6708", 
    "File uploaded successfully.": "\u30d5\u30a1\u30a4\u30eb\u304c\u6b63\u5e38\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3057\u305f\u3002", 
    "Filter": "\u30d5\u30a3\u30eb\u30bf\u30fc", 
    "Font Style": "\u30d5\u30a9\u30f3\u30c8\u30b9\u30bf\u30a4\u30eb", 
    "Help": "\u30d8\u30eb\u30d7", 
    "Here you can add the main photo for the article.": "\u3053\u3053\u3067\u8a18\u4e8b\u306e\u30e1\u30a4\u30f3\u5199\u771f\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002", 
    "Hide": "\u975e\u8868\u793a", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "\u81ea\u5206\u306b\u3064\u3044\u3066Everipedia\u306e\u8a18\u4e8b\u3092\u3059\u3067\u306b\u4f5c\u6210\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u3053\u306b\u30ea\u30f3\u30af\u3092\u8cbc\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\u4eee\u60f3\u901a\u8ca8\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u3053\u306b\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30c9\u30ec\u30b9\u3092\u8ffd\u52a0\u3057\u3066\u4e0b\u3055\u3044\u3002\u8a18\u4e8b\u304c\u6c17\u306b\u5165\u308c\u3070\u3001\u5bc4\u4ed8\u3055\u308c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff01\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u3053\u306f\u767b\u9332\u53ef\u80fd\u3067\u3059\uff1a <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3</a> \u3001 <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\u30a8\u30c6\u30ea\u30a2\u30e0</a> \u3001 <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>\u30c9\u30b0\u30b3\u30a4\u30f3</a>\u3000", 
    "Infobox": "\u30a4\u30f3\u30d5\u30a9\u30dc\u30c3\u30af\u30b9", 
    "Introduction": "\u306f\u3058\u3081\u306b", 
    "January": "1\u6708", 
    "July": "7\u6708", 
    "June": "6\u6708", 
    "Link": "\u30ea\u30f3\u30af", 
    "Link to other Everipedia pages": "\u4ed6\u306eEveripedia\u306e\u30da\u30fc\u30b8\u3078\u306e\u30ea\u30f3\u30af", 
    "Link your Everipedia page": "Everipedia\u306e\u30da\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3055\u305b\u3066\u4e0b\u3055\u3044", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "\u6280\u8853\u7684\u306a\u7406\u7531\u306b\u3088\u308a\u3001Wikipedia\u30da\u30fc\u30b8\u3078\u306e\u30ea\u30f3\u30af\u306f\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002", 
    "Loading more activity, please wait...": "\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3001\u5c11\u3005\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u2026", 
    "Loading...": "\u8aad\u307f\u8fbc\u307f\u4e2d...", 
    "Main article body": "\u30e1\u30a4\u30f3\u8a18\u4e8b\u672c\u6587", 
    "Main photo": "\u30e1\u30a4\u30f3\u5199\u771f", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\u30da\u30fc\u30b8\u306b\u60c5\u5831\u3092\u8ffd\u52a0\u3059\u308b\u969b\u306f\u3001\u30ea\u30f3\u30af\u5148\u3084\u30d5\u30a1\u30a4\u30eb\u3092\u3053\u3053\u306b\u8ffd\u52a0\u3057\u3066\u60c5\u5831\u304c\u3069\u3053\u306b\u6765\u308b\u306e\u304b\u3092\u793a\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u30bd\u30fc\u30b9\u3092\u5f15\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "March": "3\u6708", 
    "May": "5\u6708", 
    "Media": "\u30e1\u30c7\u30a3\u30a2", 
    "Media Gallery": "\u30e1\u30c7\u30a3\u30a2\u30ae\u30e3\u30e9\u30ea\u30fc", 
    "Merge": "\u30da\u30fc\u30b8\u3092\u30de\u30fc\u30b8\u3059\u308b", 
    "Midnight": "0\u6642", 
    "Next": "\u6b21\u3078", 
    "No URL provided, please try again": "URL\u306f\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3001\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u4e0b\u3055\u3044", 
    "Noon": "12\u6642", 
    "Not Ready": "\u4f7f\u7528\u4e0d\u53ef", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Brainpower\u306a\u3057\u3067\u7de8\u96c6\u3092\u7533\u8acb\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u4ed5\u4e8b\u304c\u5931\u308f\u308c\u307e\u3059\uff01", 
    "Note: You are %s hour ahead of server time.": [
      "\u30ce\u30fc\u30c8: \u3042\u306a\u305f\u306e\u74b0\u5883\u306f\u30b5\u30fc\u30d0\u30fc\u6642\u9593\u3088\u308a\u3001%s\u6642\u9593\u9032\u3093\u3067\u3044\u307e\u3059\u3002"
    ], 
    "Note: You are %s hour behind server time.": [
      "\u30ce\u30fc\u30c8: \u3042\u306a\u305f\u306e\u74b0\u5883\u306f\u30b5\u30fc\u30d0\u30fc\u6642\u9593\u3088\u308a\u3001%s\u6642\u9593\u9045\u308c\u3066\u3044\u307e\u3059\u3002"
    ], 
    "November": "11\u6708", 
    "Now": "\u73fe\u5728", 
    "October": "10\u6708", 
    "Please enter a description for the photo": "\u5199\u771f\u306e\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044", 
    "Please provide a description for the link or file.": "\u30ea\u30f3\u30af\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Please provide a more scholarly description.": "\u3088\u308a\u5b66\u8853\u7684\u306a\u8a18\u8ff0\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "\u7d9a\u884c\u3059\u308b\u524d\u306b\u3044\u304f\u3064\u304b\u306eIQ\u3092Brainpower\u306b\u7a4d\u307f\u91cd\u306d\u3066\u304f\u3060\u3055\u3044\u3002 [OK]\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Brainpower\u7ba1\u7406\u753b\u9762\u3092\u65b0\u3057\u3044\u30bf\u30d6\u306b\u958b\u3044\u3066\u4e0b\u3055\u3044\u3000\u6ce8\u610f\uff1a\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306f\u3001\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Pre": "\u524d\u306e", 
    "Profile photo": "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5199\u771f", 
    "Reference links": "\u53c2\u8003\u30ea\u30f3\u30af", 
    "Remove": "\u524a\u9664", 
    "Remove all": "\u3059\u3079\u3066\u524a\u9664", 
    "Save": "\u4fdd\u5b58", 
    "Save changes": "\u5909\u66f4\u3092\u4fdd\u5b58\u3059\u308b", 
    "Search Everipedia": "Everipedia\u3092\u691c\u7d22", 
    "Searching...": "\u691c\u7d22\u4e2d...", 
    "September": "9\u6708", 
    "Show": "\u8868\u793a", 
    "Style": "\u30b9\u30bf\u30a4\u30eb", 
    "Submit": "\u9001\u4fe1", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "\u30a8\u30c7\u30a3\u30bf\u306e\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30da\u30fc\u30b8\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u7de8\u96c6\u3057\u305f\u30da\u30fc\u30b8\u3001\u30da\u30fc\u30b8\u306b\u8ffd\u52a0\u3057\u305f\u53c2\u7167\u3001\u4f5c\u6210\u3057\u305f\u30b3\u30e1\u30f3\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "\u30a4\u30f3\u30d5\u30a9\u30dc\u30c3\u30af\u30b9\u306f\u3001\u7c21\u6f54\u3067\u8fc5\u901f\u306a\u4e8b\u5b9f\u3092\u8003\u616e\u3057\u3066\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u9078\u629e\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306b\u5fdc\u3058\u3066\u3001\u63d0\u6848\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u304c\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u304c\u3001\u4efb\u610f\u306e\u30bf\u30a4\u30d7\u306e\u60c5\u5831\u30dc\u30c3\u30af\u30b9\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u3053\u308c\u304c\u4f7f\u7528\u53ef\u80fd\u306a %s \u306e\u30ea\u30b9\u30c8\u3067\u3059\u3002\u4e0b\u306e\u30dc\u30c3\u30af\u30b9\u3067\u9805\u76ee\u3092\u9078\u629e\u3057\u30012\u3064\u306e\u30dc\u30c3\u30af\u30b9\u9593\u306e \"\u9078\u629e\"\u306e\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u3044\u304f\u3064\u304b\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u3053\u308c\u304c\u9078\u629e\u3055\u308c\u305f %s \u306e\u30ea\u30b9\u30c8\u3067\u3059\u3002\u4e0b\u306e\u30dc\u30c3\u30af\u30b9\u3067\u9078\u629e\u3057\u30012\u3064\u306e\u30dc\u30c3\u30af\u30b9\u9593\u306e \"\u524a\u9664\"\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e00\u90e8\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\u3053\u306e\u30ea\u30f3\u30af\u306f\u3059\u3067\u306b\u3053\u306e\u30da\u30fc\u30b8\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30ea\u30f3\u30af\u306e\u6982\u8981\u3092\u7de8\u96c6\u3057\u3066EP\u306e\u60c5\u5831\u3092\u6539\u5584\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01", 
    "Title": "\u30bf\u30a4\u30c8\u30eb", 
    "To add an image or video to the article text, click the 'Media' button.": "\u8a18\u4e8b\u306e\u30c6\u30ad\u30b9\u30c8\u306b\u753b\u50cf\u3084\u52d5\u753b\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001[Media]\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0b\u3055\u3044\u3002", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\u4ed6\u306eEveripedia\u30da\u30fc\u30b8\u306b\u30ea\u30f3\u30af\u3059\u308b\u306b\u306f\u3001[Link Page]\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0b\u3055\u3044\u3002\u5165\u529b\u6642\u306b\u201d@\u201d\u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u5404\u30da\u30fc\u30b8\u3092\u60c5\u5831\u306b\u5bcc\u3080\u3088\u3046\u306b\u4f5c\u308b\u306e\u306b\u3067\u304d\u308b\u3060\u3051\u591a\u304f\u306e\u30da\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3057\u3066\u4e0b\u3055\u3044\u3002", 
    "Today": "\u4eca\u65e5", 
    "Tomorrow": "\u660e\u65e5", 
    "Type into this box to filter down the list of available %s.": "\u4f7f\u7528\u53ef\u80fd\u306a %s \u306e\u30ea\u30b9\u30c8\u3092\u7d5e\u308a\u8fbc\u3080\u306b\u306f\u3001\u3053\u306e\u30dc\u30c3\u30af\u30b9\u306b\u5165\u529b\u3057\u307e\u3059\u3002", 
    "When you are done, click here to save your changes.": "\u5b8c\u4e86\u3057\u305f\u3089\u3001\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5909\u66f4\u3092\u4fdd\u5b58\u3057\u3066\u4e0b\u3055\u3044\u3002", 
    "When you are finished, click here to save your changes.": "\u5b8c\u4e86\u3057\u305f\u3089\u3001\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5909\u66f4\u3092\u4fdd\u5b58\u3057\u3066\u4e0b\u3055\u3044\u3002", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "\u7b2c\u4e09\u8005\u306e\u6642\u5236\u3067\u5ba2\u89b3\u7684\u306b\u8a18\u8ff0\u3057\u3001\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u8a18\u4e8b\u3092\u5165\u308c\u306a\u3044\u3067\u4e0b\u3055\u3044\uff08\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u3001\u78ba\u8a8d\u4e0d\u80fd\u306a\u8acb\u6c42\u306a\u3069\uff09\u3002\u3053\u308c\u306f\u767e\u79d1\u4e8b\u5178\u3067\u3042\u308a\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u306e\u30da\u30fc\u30b8\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002", 
    "Yesterday": "\u6628\u65e5", 
    "You can also create a new wiki article by clicking here.": "\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u65b0\u3057\u3044wiki\u8a18\u4e8b\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "\u4eca\u65e5\u591a\u6570\u306e\u30ea\u30f3\u30af\u304c\u6295\u7a3f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304c\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u53cd\u5fdc\u3059\u308b\u307e\u3067\u5c11\u3005\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002\u65b0\u3057\u3044\u7de8\u96c6\u8005\u306f1\u65e5\u5f53\u305f\u308a\u306b\u6295\u7a3f\u3059\u308b\u6295\u7a3f\u304c250\u4ef6\u306b\u9650\u3089\u308c\u3066\u3044\u307e\u3059\u3002", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u64cd\u4f5c\u3092\u9078\u629e\u3057\u307e\u3057\u305f\u304c\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3057\u304b\u3057\u3066\u4fdd\u5b58\u30dc\u30bf\u30f3\u3067\u306f\u306a\u304f\u3066\u5b9f\u884c\u30dc\u30bf\u30f3\u3092\u304a\u63a2\u3057\u3067\u3059\u304b\u3002", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u64cd\u4f5c\u3092\u9078\u629e\u3057\u307e\u3057\u305f\u304c\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u672a\u4fdd\u5b58\u306e\u5909\u66f4\u304c\u3042\u308a\u307e\u3059\u3002OK\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u5f8c\u3001\u64cd\u4f5c\u3092\u518d\u5ea6\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u672a\u4fdd\u5b58\u306e\u5909\u66f4\u304c\u3042\u308a\u307e\u3059\u3002\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u3068\u672a\u4fdd\u5b58\u306e\u5909\u66f4\u306f\u5931\u308f\u308c\u307e\u3059\u3002", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "\u91d1", 
    "one letter Monday\u0004M": "\u6708", 
    "one letter Saturday\u0004S": "\u571f", 
    "one letter Sunday\u0004S": "\u65e5", 
    "one letter Thursday\u0004T": "\u6728", 
    "one letter Tuesday\u0004T": "\u706b", 
    "one letter Wednesday\u0004W": "\u6c34", 
    "paused": "\u4e00\u6642\u505c\u6b62\u4e2d", 
    "reset": "\u30ea\u30bb\u30c3\u30c8", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "\u8d77\u52d5\u6e08\u307f", 
    "stopped": "\u505c\u6b62\u4e2d", 
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
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "n\u6708j\u65e5", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "Y/m/d G:i", 
    "SHORT_DATE_FORMAT": "Y/m/d", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
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


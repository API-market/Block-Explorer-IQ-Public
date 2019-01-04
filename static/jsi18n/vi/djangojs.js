

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
      " %(sel)s  c\u1ee7a %(cnt)s \u0111\u01b0\u1ee3c ch\u1ecdn"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(T\u00f9y ch\u1ecdn) Th\u00eam \u0111\u1ecba ch\u1ec9 v\u00ed ti\u1ec1n \u0111i\u1ec7n t\u1eed c\u1ee7a b\u1ea1n", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(T\u00f9y ch\u1ecdn) Nh\u1eadp t\u00ean, email, qu\u1ed1c t\u1ecbch, ng\u00f4n ng\u1eef, v.v.", 
    "6 a.m.": "6 gi\u1edd s\u00e1ng", 
    "Add File": "Th\u00eam t\u1ec7p", 
    "Add Link": "Th\u00eam li\u00ean k\u1ebft", 
    "Add Links, Files, Etc.": "Th\u00eam li\u00ean k\u1ebft, t\u1ec7p, v.v.", 
    "Add New Infobox": "Th\u00eam h\u1ed9p th\u00f4ng tin m\u1edbi", 
    "Add Row": "Th\u00eam d\u00f2ng", 
    "Add an additional description for this category": "B\u1ed5 sung m\u00f4 t\u1ea3 cho danh m\u1ee5c n\u00e0y", 
    "Add media to article text": "Th\u00eam \u0111a ph\u01b0\u01a1ng ti\u1ec7n v\u00e0o v\u0103n b\u1ea3n b\u00e0i vi\u1ebft", 
    "Added pictures will show up here.": "C\u00e1c \u1ea3nh \u0111\u00e3 th\u00eam s\u1ebd hi\u1ec3n th\u1ecb \u1edf \u0111\u00e2y.", 
    "Adding infobox item, please wait...": "\u0110ang th\u00eam h\u1ed9p th\u00f4ng tin, vui l\u00f2ng ch\u1edd ...", 
    "Adding, please wait...": "\u0110ang th\u00eam, vui l\u00f2ng ch\u1edd ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Sau khi b\u1ea1n \u0111\u00e3 th\u00eam m\u1ed9t li\u00ean k\u1ebft, t\u1ec7p ho\u1eb7c h\u00ecnh \u1ea3nh v\u00e0o trang, b\u1ea1n c\u00f3 th\u1ec3 tr\u00edch d\u1eabn n\u00f3 b\u1eb1ng c\u00e1ch nh\u1ea5p v\u00e0o n\u00fat 'Tr\u00edch d\u1eabn'. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 nh\u1ea5n ph\u00edm '^' ho\u1eb7c '*' khi nh\u1eadp v\u00e0 menu th\u1ea3 xu\u1ed1ng s\u1ebd xu\u1ea5t hi\u1ec7n.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n tho\u00e1t kh\u1ecfi trang kh\u00f4ng? C\u00e1c thay \u0111\u1ed5i ch\u01b0a l\u01b0u s\u1ebd b\u1ecb m\u1ea5t.", 
    "Article proposal submission failed!": "Kh\u00f4ng th\u1ec3 g\u1eedi \u0111\u1ec1 xu\u1ea5t b\u00e0i vi\u1ebft!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Khi b\u1ea1n th\u00eam li\u00ean k\u1ebft v\u00e0 t\u1ec7p, ch\u00fang s\u1ebd hi\u1ec3n th\u1ecb trong ph\u1ea7n Li\u00ean k\u1ebft Tham chi\u1ebfu. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 ch\u1ec9nh s\u1eeda ho\u1eb7c x\u00f3a ch\u00fang.", 
    "Available %s": "C\u00f3 s\u1eb5n %s", 
    "Back": "Quay l\u1ea1i", 
    "Cancel": "H\u1ee7y", 
    "Choose": "Ch\u1ecdn", 
    "Choose a time": "Ch\u1ecdn gi\u1edd", 
    "Choose all": "Ch\u1ecdn t\u1ea5t c\u1ea3", 
    "Chosen %s": "Ch\u1ecdn %s", 
    "Cite": "tr\u00edch d\u1eabn", 
    "Cite as verified editor": "Tr\u00edch d\u1eabn bi\u00ean t\u1eadp vi\u00ean \u0111\u01b0\u1ee3c x\u00e1c nh\u1eadn", 
    "Cite links, files, etc": "Tr\u00edch d\u1eabn li\u00ean k\u1ebft, t\u1ec7p, v.v.", 
    "Cite my own knowledge / experience as a verified editor": "Tr\u00edch d\u1eabn t\u1eeb ki\u1ebfn \u200b\u200bth\u1ee9c / kinh nghi\u1ec7m c\u1ee7a ri\u00eang t\u00f4i l\u00e0 bi\u00ean t\u1eadp vi\u00ean \u0111\u00e3 x\u00e1c nh\u1eadn", 
    "Claim": "Khi\u1ebfu n\u1ea1i", 
    "Claim Rewards": "Y\u00eau c\u1ea7u ph\u1ea7n th\u01b0\u1edfng", 
    "Click here to upload a picture for your editor profile.": "Nh\u1ea5p v\u00e0o \u0111\u00e2y \u0111\u1ec3 \u0111\u0103ng \u1ea3nh cho h\u1ed3 s\u01a1 bi\u00ean t\u1eadp vi\u00ean c\u1ee7a b\u1ea1n.", 
    "Click to choose all %s at once.": "Click \u0111\u1ec3 ch\u1ecdn t\u1ea5t c\u1ea3 %s .", 
    "Click to remove all chosen %s at once.": "Click \u0111\u1ec3 b\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3 %s", 
    "Completing transaction...": "\u0110ang ho\u00e0n t\u1ea5t giao d\u1ecbch ...", 
    "Connect Languages": "K\u1ebft n\u1ed1i ng\u00f4n ng\u1eef", 
    "Create Page": "T\u1ea1o trang", 
    "Create page": "T\u1ea1o trang", 
    "Delete this tag": "X\u00f3a th\u1ebb tag n\u00e0y", 
    "Drag and drop your photo here or click to upload.": "K\u00e9o v\u00e0 th\u1ea3 \u1ea3nh c\u1ee7a b\u1ea1n \u1edf \u0111\u00e2y ho\u1eb7c nh\u1ea5p \u0111\u1ec3 t\u1ea3i l\u00ean.", 
    "Edit": "Ch\u1ec9nh S\u1eeda", 
    "Editor profile": "Ti\u1ec3u s\u1eed bi\u00ean t\u1eadp vi\u00ean", 
    "Enter the page title here": "Nh\u1eadp ti\u00eau \u0111\u1ec1 c\u1ee7a trang", 
    "Enter your profile info": "Nh\u1eadp th\u00f4ng tin h\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n", 
    "Error: proposal not found. Please try submitting again.": "L\u1ed7i: kh\u00f4ng t\u00ecm th\u1ea5y \u0111\u1ec1 xu\u1ea5t. Vui l\u00f2ng th\u1eed g\u1eedi l\u1ea1i.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia gi\u1ed1ng Wikipedia nh\u01b0ng \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 ch\u1ec9nh s\u1eeda v\u00e0 \u0111\u00f3ng g\u00f3p h\u01a1n. M\u1ed7i trang bao g\u1ed3m m\u1ed9t v\u00f9ng th\u00f4ng tin cho c\u00e1c s\u1ef1 ki\u1ec7n ng\u1eafn g\u1ecdn, m\u1ed9t b\u00e0i vi\u1ebft ch\u00ednh \u0111\u01b0\u1ee3c vi\u1ebft b\u1edfi m\u1ed9t ng\u01b0\u1eddi th\u1ee9 ba trung l\u1eadp, th\u01b0 vi\u1ec7n \u0111a ph\u01b0\u01a1ng ti\u1ec7n g\u1ed3m h\u00ecnh \u1ea3nh, video, \u00e2m thanh v.v. v\u1ec1 ch\u1ee7 \u0111\u1ec1, danh s\u00e1ch t\u00e0i li\u1ec7u tham kh\u1ea3o \u0111\u1ebfn c\u00e1c trang web v\u00e0 t\u1ec7p \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng tr\u00edch d\u1eabn trong b\u00e0i vi\u1ebft v\u00e0 h\u1ed9p th\u00f4ng tin.", 
    "File uploaded successfully.": "T\u1ec7p \u0111\u00e3 \u0111\u01b0\u1ee3c t\u1ea3i l\u00ean th\u00e0nh c\u00f4ng", 
    "Filter": "L\u1ecdc", 
    "Font Style": "Ki\u1ec3u ch\u1eef", 
    "Help": "Tr\u1ee3 gi\u00fap", 
    "Here you can add the main photo for the article.": "B\u1ea1n c\u00f3 th\u1ec3 th\u00eam \u1ea3nh ch\u00ednh cho b\u00e0i vi\u1ebft \u1edf \u0111\u00e2y.", 
    "Hide": "D\u1ea5u \u0111i", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "N\u1ebfu b\u1ea1n \u0111\u00e3 t\u1ea1o m\u1ed9t b\u00e0i vi\u1ebft v\u1ec1 Everipedia v\u1ec1 b\u1ea3n th\u00e2n, b\u1ea1n c\u00f3 th\u1ec3 li\u00ean k\u1ebft v\u1edbi n\u00f3 \u1edf \u0111\u00e2y.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "N\u1ebfu b\u1ea1n c\u00f3 b\u1ea5t k\u1ef3 lo\u1ea1\u1ecb ti\u1ec1n \u0111i\u1ec7n t\u1eed n\u00e0o, h\u00e3y th\u00eam \u0111\u1ecba ch\u1ec9 v\u00ed t\u1ea1i \u0111\u00e2y. M\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 quy\u00ean g\u00f3p cho b\u1ea1n n\u1ebfu h\u1ecd th\u00edch nh\u1eefng g\u00ec b\u1ea1n \u0111\u00e3 l\u00e0m! N\u1ebfu b\u1ea1n kh\u00f4ng c\u00f3 v\u00ed, b\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o v\u00ed t\u1ea1i \u0111\u00e2y: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "H\u1ed9p th\u00f4ng tin", 
    "Introduction": "Gi\u1edbi thi\u1ec7u", 
    "Link": "Li\u00ean k\u1ebft", 
    "Link to other Everipedia pages": "Li\u00ean k\u1ebft \u0111\u1ebfn c\u00e1c trang Everipedia kh\u00e1c", 
    "Link your Everipedia page": "Li\u00ean k\u1ebft trang Everipedia c\u1ee7a b\u1ea1n", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Kh\u00f4ng cho ph\u00e9p li\u00ean k\u1ebft \u0111\u1ebfn c\u00e1c trang Wikipedia v\u00ec l\u00fd do k\u1ef9 thu\u1eadt. Vui l\u00f2ng th\u1eed l\u1ea1i.", 
    "Loading more activity, please wait...": "\u0110ang t\u1ea3i th\u00eam ho\u1ea1t \u0111\u1ed9ng, vui l\u00f2ng ch\u1edd ...", 
    "Loading...": "\u0110ang t\u1ea3i...", 
    "Main article body": "Th\u00e2n b\u00e0i vi\u1ebft ch\u00ednh", 
    "Main photo": "\u1ea2nh ch\u00ednh", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\u0110\u1ea3m b\u1ea3o tr\u00edch d\u1eabn ngu\u1ed3n c\u1ee7a b\u1ea1n khi th\u00eam th\u00f4ng tin v\u00e0o trang b\u1eb1ng c\u00e1ch th\u00eam li\u00ean k\u1ebft v\u00e0 t\u1ec7p \u1edf \u0111\u00e2y \u0111\u1ec3 b\u1ea1n c\u00f3 th\u1ec3 hi\u1ec3n th\u1ecb th\u00f4ng tin \u0111\u1ebfn t\u1eeb \u0111\u00e2u.", 
    "Media": "\u0110a ph\u01b0\u01a1ng ti\u1ec7n", 
    "Media Gallery": "Th\u01b0 vi\u1ec7n \u0110a Ph\u01b0\u01a1ng Ti\u1ec7n", 
    "Merge": "H\u1ee3p nh\u1ea5t", 
    "Midnight": "N\u1eeda \u0111\u00eam", 
    "Next": "Ti\u1ebfp", 
    "No URL provided, please try again": "Kh\u00f4ng c\u00f3 URL n\u00e0o \u0111\u01b0\u1ee3c cung c\u1ea5p, vui l\u00f2ng th\u1eed l\u1ea1i", 
    "Noon": "Bu\u1ed5i tr\u01b0a", 
    "Not Ready": "Ch\u01b0a s\u1eb5n s\u00e0ng", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "L\u01b0u \u00fd r\u1eb1ng b\u1ea1n s\u1ebd kh\u00f4ng th\u1ec3 \u0111\u1ec1 xu\u1ea5t ch\u1ec9nh s\u1eeda n\u1ebfu kh\u00f4ng c\u00f3 Brainpower. \bThao t\u00e1c c\u1ee7a b\u1ea1n s\u1ebd b\u1ecb m\u1ea5t!", 
    "Note: You are %s hour ahead of server time.": [
      "L\u01b0u \u00fd: Hi\u1ec7n t\u1ea1i b\u1ea1n \u0111ang th\u1ea5y th\u1eddi gian tr\u01b0\u1edbc %s gi\u1edd so v\u1edbi th\u1eddi gian m\u00e1y ch\u1ee7."
    ], 
    "Note: You are %s hour behind server time.": [
      "L\u01b0u \u00fd: Hi\u1ec7n t\u1ea1i b\u1ea1n \u0111ang th\u1ea5y th\u1eddi gian sau %s gi\u1edd so v\u1edbi th\u1eddi gian m\u00e1y ch\u1ee7."
    ], 
    "Now": "B\u00e2y gi\u1edd", 
    "Please enter a description for the photo": "Vui l\u00f2ng nh\u1eadp m\u00f4 t\u1ea3 cho \u1ea3nh", 
    "Please provide a description for the link or file.": "Vui l\u00f2ng cung c\u1ea5p m\u00f4 t\u1ea3 cho li\u00ean k\u1ebft ho\u1eb7c t\u1ec7p.", 
    "Please provide a more scholarly description.": "Vui l\u00f2ng cung c\u1ea5p m\u00f4 t\u1ea3 c\u1ee5 th\u1ec3 h\u01a1n.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "H\u00e3y \u0111\u1eb7t m\u1ed9t s\u1ed1 IQ v\u00e0o Brainpower tr\u01b0\u1edbc khi ti\u1ebfp t\u1ee5c. Nh\u1ea5n OK \u0111\u1ec3 m\u1edf m\u00e0n h\u00ecnh qu\u1ea3n l\u00fd Brainpower trong m\u1ed9t tab m\u1edbi. L\u01afU \u00dd: H\u00e3y \u0111\u1ea3m b\u1ea3o r\u1eb1ng c\u1eeda s\u1ed5 popup \u0111\u01b0\u1ee3c b\u1eadt cho trang web n\u00e0y, v\u00ec b\u1ea1n c\u00f3 th\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c c\u1ea3nh b\u00e1o.", 
    "Pre": "Tr\u01b0\u1edbc", 
    "Profile photo": "\u1ea2nh h\u1ed3 s\u01a1", 
    "Reference links": "Li\u00ean k\u1ebft tham chi\u1ebfu", 
    "Remove": "X\u00f3a", 
    "Remove all": "Xo\u00e1 t\u1ea5t c\u1ea3", 
    "Save": "L\u01b0u", 
    "Save changes": "L\u01b0u thay \u0111\u1ed5i", 
    "Search Everipedia": "T\u00ecm ki\u1ebfm Everipedia", 
    "Searching...": "T\u00ecm ki\u1ebfm ...", 
    "Show": "Hi\u1ec7n ra", 
    "Style": "Ki\u1ec3u", 
    "Submit": "G\u1eedi", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Trang ti\u1ec3u s\u1eed bi\u00ean t\u1eadp vi\u00ean hi\u1ec3n th\u1ecb c\u00e1c trang m\u00e0 ng\u01b0\u1eddi d\u00f9ng \u0111\u00e3 ch\u1ec9nh s\u1eeda, c\u00e1c t\u00e0i li\u1ec7u tham chi\u1ebfu h\u1ecd \u0111\u00e3 th\u00eam v\u00e0o m\u1ed9t trang v\u00e0 c\u00e1c nh\u1eadn x\u00e9t h\u1ecd \u0111\u00e3 vi\u1ebft.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "H\u1ed9p th\u00f4ng tin \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf cho c\u00e1c s\u1ef1 ki\u1ec7n ng\u1eafn g\u1ecdn, nhanh ch\u00f3ng. C\u00e1c m\u1ee5c \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t xu\u1ea5t hi\u1ec7n trong menu th\u1ea3 xu\u1ed1ng t\u00f9y thu\u1ed9c v\u00e0o ch\u1ee7 \u0111\u1ec1 \u0111\u00e3 ch\u1ecdn, nh\u01b0ng c\u00f3 th\u1ec3 th\u00eam b\u1ea5t k\u1ef3 lo\u1ea1i th\u00f4ng tin n\u00e0o.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Danh s\u00e1ch c\u00e1c l\u1ef1a ch\u1ecdn \u0111ang c\u00f3 %s. B\u1ea1n c\u00f3 th\u1ec3 ch\u1ecdn b\u1eb1ng b\u00e1ch click v\u00e0o m\u0169i t\u00ean \"Ch\u1ecdn\" n\u1eb1m gi\u1eefa hai h\u1ed9p.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Danh s\u00e1ch b\u1ea1n \u0111\u00e3 ch\u1ecdn %s. B\u1ea1n c\u00f3 th\u1ec3 b\u1ecf ch\u1ecdn b\u1eb1ng c\u00e1ch click v\u00e0o m\u0169i t\u00ean \"Xo\u00e1\" n\u1eb1m gi\u1eefa hai \u00f4.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Li\u00ean k\u1ebft n\u00e0y \u0111\u00e3 c\u00f3 tr\u00ean trang, b\u1ea1n v\u1eabn c\u00f3 th\u1ec3 ch\u1ec9nh s\u1eeda li\u00ean k\u1ebft r\u00fat g\u1ecdn \u0111\u1ec3 c\u1ea3i thi\u1ec7n th\u00f4ng tin tr\u00ean EP!", 
    "Title": "Ti\u00eau \u0111\u1ec1", 
    "To add an image or video to the article text, click the 'Media' button.": "\u0110\u1ec3 th\u00eam h\u00ecnh \u1ea3nh ho\u1eb7c video v\u00e0o v\u0103n b\u1ea3n b\u00e0i vi\u1ebft, h\u00e3y nh\u1ea5p v\u00e0o n\u00fat '\u0110a Ph\u01b0\u01a1ng Ti\u1ec7n'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\u0110\u1ec3 li\u00ean k\u1ebft \u0111\u1ebfn m\u1ed9t trang Everipedia kh\u00e1c, h\u00e3y nh\u1ea5p v\u00e0o n\u00fat 'Li\u00ean k\u1ebft Trang'. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 nh\u1ea5n ph\u00edm'@'; ho\u1eb7c ph\u00edm khi nh\u1eadp v\u00e0 menu th\u1ea3 xu\u1ed1ng s\u1ebd xu\u1ea5t hi\u1ec7n. C\u1ed1 g\u1eafng li\u00ean k\u1ebft t\u1edbi nhi\u1ec1u trang n\u1ebfu c\u1ea7n \u0111\u1ec3 l\u00e0m cho m\u1ed7i trang c\u00e0ng phong ph\u00fa v\u00e0 c\u00f3 nhi\u1ec1u th\u00f4ng tin c\u00e0ng t\u1ed1t.", 
    "Today": "H\u00f4m nay", 
    "Tomorrow": "Ng\u00e0y mai", 
    "Type into this box to filter down the list of available %s.": "B\u1ea1n h\u00e3y nh\u1eadp v\u00e0o \u00f4 n\u00e0y \u0111\u1ec3 l\u1ecdc c\u00e1c danh s\u00e1ch sau %s.", 
    "When you are done, click here to save your changes.": "Khi b\u1ea1n ho\u00e0n t\u1ea5t, h\u00e3y nh\u1ea5p v\u00e0o \u0111\u00e2y \u0111\u1ec3 l\u01b0u c\u00e1c thay \u0111\u1ed5i c\u1ee7a b\u1ea1n.", 
    "When you are finished, click here to save your changes.": "Khi b\u1ea1n ho\u00e0n t\u1ea5t, nh\u1ea5p v\u00e0o \u0111\u00e2y \u0111\u1ec3 l\u01b0u c\u00e1c thay \u0111\u1ed5i c\u1ee7a b\u1ea1n.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Vi\u1ebft m\u1ed9t c\u00e1ch kh\u00e1ch quan v\u1edbi t\u01b0 c\u00e1ch ng\u01b0\u1eddi th\u1ee9 ba, kh\u00f4ng bao g\u1ed3m b\u1ea5t k\u1ef3 th\u00f4ng tin ti\u1ebfp th\u1ecb (cung c\u1ea5p \u0111\u1ed9c quy\u1ec1n, tuy\u00ean b\u1ed1 kh\u00f4ng th\u1ec3 x\u00e1c minh vv). \u0110\u00e2y l\u00e0 m\u1ed9t b\u00e1ch khoa to\u00e0n th\u01b0, kh\u00f4ng ph\u1ea3i l\u00e0 m\u1ed9t trang truy\u1ec1n th\u00f4ng x\u00e3 h\u1ed9i.", 
    "Yesterday": "H\u00f4m qua", 
    "You can also create a new wiki article by clicking here.": "B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 t\u1ea1o m\u1ed9t b\u00e0i vi\u1ebft wiki m\u1edbi b\u1eb1ng c\u00e1ch nh\u1ea5p v\u00e0o \u0111\u00e2y.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "B\u1ea1n \u0111\u00e3 \u0111\u0103ng r\u1ea5t nhi\u1ec1u li\u00ean k\u1ebft ng\u00e0y h\u00f4m nay. \u0110\u1ee3i m\u1ed9t ch\u00fat \u0111\u1ec3 c\u1ed9ng \u0111\u1ed3ng ph\u1ea3n h\u1ed3i n\u1ed9i dung c\u1ee7a b\u1ea1n. Bi\u00ean t\u1eadp vi\u00ean m\u1edbi gi\u1edbi h\u1ea1n ch\u1ec9 \u0111\u0103ng 250 b\u00e0i m\u1ed7i ng\u00e0y.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "B\u1ea1n \u0111\u00e3 l\u1ef1a ch\u1ecdn m\u1ed9t h\u00e0nh \u0111\u1ed9ng, v\u00e0 b\u1ea1n \u0111\u00e3 kh\u00f4ng th\u1ef1c hi\u1ec7n b\u1ea5t k\u1ef3 thay \u0111\u1ed5i n\u00e0o tr\u00ean c\u00e1c tr\u01b0\u1eddng. C\u00f3 l\u1ebd b\u1ea1n \u0111ang t\u00ecm ki\u1ebfm n\u00fat b\u1ea5m Go thay v\u00ec n\u00fat b\u1ea5m Save.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "B\u1ea1n \u0111\u00e3 l\u1ef1a ch\u1ecdn m\u1ed9t h\u00e0nh \u0111\u1ed9ng, nh\u01b0ng b\u1ea1n kh\u00f4ng l\u01b0u thay \u0111\u1ed5i c\u1ee7a b\u1ea1n \u0111\u1ebfn c\u00e1c l\u0129nh v\u1ef1c c\u00e1 nh\u00e2n \u0111\u01b0\u1ee3c n\u00eau ra. Xin vui l\u00f2ng click OK \u0111\u1ec3 l\u01b0u l\u1ea1i. B\u1ea1n s\u1ebd c\u1ea7n ph\u1ea3i ch\u1ea1y l\u1ea1i c\u00e1c h\u00e0nh \u0111\u1ed9ng.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "B\u1ea1n ch\u01b0a l\u01b0u nh\u1eefng tr\u01b0\u1eddng \u0111\u00e3 ch\u1ec9nh s\u1eeda. N\u1ebfu b\u1ea1n ch\u1ecdn h\u00e0nh \u0111\u1ed9ng n\u00e0y, nh\u1eefng ch\u1ec9nh s\u1eeda ch\u01b0a \u0111\u01b0\u1ee3c l\u01b0u s\u1ebd b\u1ecb m\u1ea5t.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "C\u1eadpnh\u1eadtNg\u00e0y", 
    "hoursUpdated": "C\u1eadpnh\u1eadtGi\u1edd", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "C\u1eadpnh\u1eadtPh\u00fat", 
    "paused": "\u0110\u00e3 t\u1ea1m t\u1eebng", 
    "reset": "\u0110\u1eb7t l\u1ea1i", 
    "secondTenthsUpdated": "C\u1eadpnh\u1eadtPh\u1ea7nm\u01b0\u1eddiGi\u00e2y", 
    "secondsUpdated": "C\u1eadpnh\u1eadtGi\u00e2y", 
    "started": "B\u1eaft \u0111\u1ea7u", 
    "stopped": "\u0111\u00e3 d\u1eebng", 
    "targetAchieved": "m\u1ee5c ti\u00eau \u0111\u1ea1t \u0111\u01b0\u1ee3c"
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
    "DATETIME_FORMAT": "H:i \\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y", 
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
    "DATE_FORMAT": "\\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y", 
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
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "H:i d-m-Y", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
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


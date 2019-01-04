

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
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
      "Vybr\u00e1na je %(sel)s polo\u017eka z celkem %(cnt)s.", 
      "Vybr\u00e1ny jsou %(sel)s polo\u017eky z celkem %(cnt)s.", 
      "Vybran\u00fdch je %(sel)s polo\u017eek z celkem %(cnt)s."
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Voliteln\u00e9) P\u0159idejte adresy va\u0161ich kryptom\u011bnov\u00fdch pen\u011b\u017eenek.", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Voliteln\u00e9) Zadejte va\u0161e jm\u00e9no, e-mail, st\u00e1tn\u00ed p\u0159\u00edslu\u0161nost, jazyk atd.", 
    "6 a.m.": "6h r\u00e1no", 
    "6 p.m.": "6h ve\u010der", 
    "Add File": "P\u0159idat soubor", 
    "Add Link": "P\u0159idat odkaz", 
    "Add Links, Files, Etc.": "P\u0159idat odkazy, soubory atd.", 
    "Add New Infobox": "P\u0159idat nov\u00fd Infobox", 
    "Add Row": "P\u0159idat \u0159\u00e1dek", 
    "Add an additional description for this category": "P\u0159idat dal\u0161\u00ed popis t\u00e9to kategorie", 
    "Add media to article text": "P\u0159idat m\u00e9dia do textu \u010dl\u00e1nku", 
    "Added pictures will show up here.": "P\u0159idan\u00e9 obr\u00e1zky se zobraz\u00ed zde.", 
    "Adding infobox item, please wait...": "P\u0159id\u00e1v\u00e1n\u00ed polo\u017eky do infoboxu, \u010dekejte pros\u00edm ...", 
    "Adding, please wait...": "P\u0159id\u00e1v\u00e1n\u00ed, \u010dekejte pros\u00edm ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Pot\u00e9, co jste ji\u017e na str\u00e1nku p\u0159idali odkaz, soubor nebo obr\u00e1zek, m\u016f\u017eete jej citovat kliknut\u00edm na tla\u010d\u00edtko 'Citovat'. P\u0159i psan\u00ed tak\u00e9 m\u016f\u017eete stisknout kl\u00e1vesy '^' nebo '*' a zobraz\u00ed se rozbalovac\u00ed nab\u00eddka.", 
    "April": "duben", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Opravdu chcete opustit tuto str\u00e1nku? Neulo\u017een\u00e9 zm\u011bny budou ztraceny.", 
    "Article proposal submission failed!": "Odesl\u00e1n\u00ed n\u00e1vrhu \u010dl\u00e1nku se nezda\u0159ilo!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "P\u0159idan\u00e9 odkazy a soubory se zobraz\u00ed v sekci Odkazy. M\u016f\u017eete je tak\u00e9 upravovat nebo odstranit.", 
    "August": "srpen", 
    "Available %s": "Dostupn\u00e9 polo\u017eky: %s", 
    "Back": "Zp\u011bt", 
    "Cancel": "Zru\u0161it", 
    "Choose": "Vybrat", 
    "Choose a Date": "Vyberte datum", 
    "Choose a Time": "Vyberte \u010das", 
    "Choose a time": "Vyberte \u010das", 
    "Choose all": "Vybrat v\u0161e", 
    "Chosen %s": "Vybran\u00e9 polo\u017eky %s", 
    "Cite": "Citovat", 
    "Cite as verified editor": "Citovat jako ov\u011b\u0159en\u00fd editor", 
    "Cite links, files, etc": "Citovat odkazy, soubory atd", 
    "Cite my own knowledge / experience as a verified editor": "Cituji moje vlastn\u00ed znalosti / zku\u0161enosti ov\u011b\u0159en\u00e9ho editora", 
    "Claim": "Po\u017eadovat", 
    "Claim Rewards": "N\u00e1rok na odm\u011bny", 
    "Click here to upload a picture for your editor profile.": "Klikn\u011bte zde pro nahr\u00e1n\u00ed obr\u00e1zku pro v\u00e1\u0161 profil editora.", 
    "Click to choose all %s at once.": "Chcete-li najednou vybrat v\u0161echny polo\u017eky %s, klepn\u011bte sem.", 
    "Click to remove all chosen %s at once.": "Chcete-li najednou odebrat v\u0161echny vybran\u00e9 polo\u017eky %s, klepn\u011bte sem.", 
    "Completing transaction...": "Dokon\u010dov\u00e1n\u00ed transakce ...", 
    "Connect Languages": "P\u0159ipojte jazyky", 
    "Create Page": "Vytvo\u0159it str\u00e1nku", 
    "Create page": "Vytvo\u0159it str\u00e1nku", 
    "December": "prosinec", 
    "Delete this tag": "Odstranit tuto zna\u010dku", 
    "Drag and drop your photo here or click to upload.": "P\u0159et\u00e1hn\u011bte sem va\u0161i fotografii nebo klikn\u011bte pro nahr\u00e1n\u00ed.", 
    "Edit": "Upravit", 
    "Editor profile": "Profil editora", 
    "Enter the page title here": "Zadat n\u00e1zev str\u00e1nky", 
    "Enter your profile info": "Zadejte va\u0161e profilov\u00e9 informace", 
    "Error: proposal not found. Please try submitting again.": "Chyba: n\u00e1vrh nebyl nalezen. Zkuste ho, pros\u00edm, odeslat znovu.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedie je jako Wikipedie, ale je mnohem jednodu\u0161\u0161\u00ed ji upravovat ap\u0159isp\u00edvat do n\u00ed. Ka\u017ed\u00e1 str\u00e1nka se skl\u00e1d\u00e1 z infoboxu pro kr\u00e1tk\u00e1 stru\u010dn\u00e1 fakta, hlavn\u00edho \u010dl\u00e1nku napsan\u00e9ho v neutr\u00e1ln\u00ed t\u0159et\u00ed osob\u011b, medi\u00e1ln\u00ed t\u00e9matick\u00e9 galerie obr\u00e1zk\u016f, vide\u00ed, zvuk\u016f apod., ze seznamu odkaz\u016f na webov\u00e9 str\u00e1nky a soubor\u016f, kter\u00e9 jsou pou\u017e\u00edv\u00e1ny jako citace v \u010dl\u00e1nku a infoboxu.", 
    "February": "\u00fanor", 
    "File uploaded successfully.": "Soubor byl \u00fasp\u011b\u0161n\u011b nahr\u00e1n.", 
    "Filter": "Filtr", 
    "Font Style": "Styl p\u00edsma", 
    "Help": "Pomoc", 
    "Here you can add the main photo for the article.": "Zde m\u016f\u017eete p\u0159idat hlavn\u00ed fotografii \u010dl\u00e1nku.", 
    "Hide": "Skr\u00fdt", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Pokud jste ji\u017e o sob\u011b vytvo\u0159ili \u010dl\u00e1nek na Everipedii, m\u016f\u017eete ho zde odkazovat.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Pokud m\u00e1te n\u011bjak\u00e9 kryptom\u011bny, p\u0159idejte zde adresy pen\u011b\u017eenek. Lid\u00e9 v\u00e1s mohou podporovat, pokud se jim l\u00edb\u00ed va\u0161e pr\u00e1ce! Pokud nem\u00e1te pen\u011b\u017eenku, m\u016f\u017eete ji z\u00edskat zde: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "\u00davod", 
    "January": "leden", 
    "July": "\u010dervenec", 
    "June": "\u010derven", 
    "Link": "Odkaz", 
    "Link to other Everipedia pages": "Odkaz na jin\u00e9 str\u00e1nky Everipedie", 
    "Link your Everipedia page": "Vytvo\u0159te odkaz va\u0161\u00ed str\u00e1nky na Everipedii", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Odkazy na str\u00e1nky Wikipedie nejsou z technick\u00fdch d\u016fvod\u016f povoleny. Pros\u00edm, zkuste to znovu.", 
    "Loading more activity, please wait...": "Na\u010d\u00edt\u00e1n\u00ed dal\u0161\u00ed aktivity, \u010dekejte pros\u00edm ...", 
    "Loading...": "Na\u010d\u00edt\u00e1n\u00ed...", 
    "Main article body": "Hlavn\u00ed struktura \u010dl\u00e1nku", 
    "Main photo": "Hlavn\u00ed fotografie", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "P\u0159i p\u0159id\u00e1v\u00e1n\u00ed informac\u00ed na str\u00e1nku nezapome\u0148te uv\u00e9st zdroje p\u0159id\u00e1n\u00edm odkaz\u016f a soubor\u016f, abyste mohli p\u0159edlo\u017eit, odkud poch\u00e1zej\u00ed informace.", 
    "March": "b\u0159ezen", 
    "May": "kv\u011bten", 
    "Media": "M\u00e9dia", 
    "Media Gallery": "Galerie M\u00e9di\u00ed", 
    "Merge": "Slou\u010dit", 
    "Midnight": "P\u016flnoc", 
    "Next": "Dal\u0161\u00ed", 
    "No URL provided, please try again": "Nebyla nalezena \u017e\u00e1dn\u00e1 adresa URL, zkuste to, pros\u00edm, znovu", 
    "Noon": "Poledne", 
    "Not Ready": "Nep\u0159ipraveno", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Upozor\u0148ujeme, \u017ee bez v\u011bdomostn\u00ed s\u00edly nebudete moci navrhnout \u00fapravy. Va\u0161e pr\u00e1ce bude ztracena!", 
    "Note: You are %s hour ahead of server time.": [
      "Pozn\u00e1mka: V\u00e1\u0161 \u010das o %s hodinu p\u0159edstihuje \u010das na serveru.", 
      "Pozn\u00e1mka: V\u00e1\u0161 \u010das o %s hodiny p\u0159edstihuje \u010das na serveru.", 
      "Pozn\u00e1mka: V\u00e1\u0161 \u010das o %s hodin p\u0159edstihuje \u010das na serveru."
    ], 
    "Note: You are %s hour behind server time.": [
      "Pozn\u00e1mka: V\u00e1\u0161 \u010das se o %s hodinu zpo\u017e\u010fuje za \u010dasem na serveru.", 
      "Pozn\u00e1mka: V\u00e1\u0161 \u010das se o %s hodiny zpo\u017e\u010fuje za \u010dasem na serveru.", 
      "Pozn\u00e1mka: V\u00e1\u0161 \u010das se o %s hodin zpo\u017e\u010fuje za \u010dasem na serveru."
    ], 
    "November": "listopad", 
    "Now": "Nyn\u00ed", 
    "October": "\u0159\u00edjen", 
    "Please enter a description for the photo": "Zadejte, pros\u00edm, popis fotografie", 
    "Please provide a description for the link or file.": "Uve\u010fte, pros\u00edm, popis odkazu nebo souboru.", 
    "Please provide a more scholarly description.": "Uve\u010fte, pros\u00edm, odborn\u011bj\u0161\u00ed popis.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "P\u0159ed pokra\u010dov\u00e1n\u00edm, pros\u00edm, vsa\u010fte n\u011bjak\u00e9 IQ do v\u011bdomostn\u00ed s\u00edly. Klepnut\u00edm na tla\u010d\u00edtko OK otev\u0159ete obrazovku spr\u00e1vy Brainpower v nov\u00e9 kart\u011b. POZN\u00c1MKA: Ujist\u011bte se, pros\u00edm, \u017ee jsou pro tento web povolena vyskakovac\u00ed okna, jinak obdr\u017e\u00edte upozorn\u011bn\u00ed.", 
    "Pre": "Pre", 
    "Profile photo": "Profilov\u00e1 fotografie", 
    "Reference links": "Odkazy", 
    "Remove": "Odebrat", 
    "Remove all": "Odebrat v\u0161e", 
    "Save": "Ulo\u017eit", 
    "Save changes": "Ulo\u017eit zm\u011bny", 
    "Search Everipedia": "Prohledat Everipedii", 
    "Searching...": "Vyhled\u00e1v\u00e1n\u00ed...", 
    "September": "z\u00e1\u0159\u00ed", 
    "Show": "Zobrazit", 
    "Style": "Styl", 
    "Submit": "Odeslat", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Str\u00e1nka profilu editora zobrazuje str\u00e1nky, kter\u00e9 u\u017eivatel upravil, odkazy, kter\u00e9 p\u0159idal na str\u00e1nku, a koment\u00e1\u0159e, kter\u00e9 vytvo\u0159il.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox je ur\u010den pro stru\u010dn\u00e1 a kr\u00e1tk\u00e1 fakta. Navrhovan\u00e9 polo\u017eky se zobrazuj\u00ed v rozbalovac\u00ed nab\u00eddce v z\u00e1vislosti na vybran\u00e9m t\u00e9matu, ale m\u016f\u017ee b\u00fdt p\u0159id\u00e1n jak\u00fdkoli typ infoboxu.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Seznam dostupn\u00fdch polo\u017eek %s. Jednotliv\u011b je lze vybrat tak, \u017ee na n\u011b v r\u00e1me\u010dku klepnete a pak klepnete na \u0161ipku \"Vybrat\" mezi r\u00e1me\u010dky.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Seznam vybran\u00fdch polo\u017eek %s. Jednotliv\u011b je lze odebrat tak, \u017ee na n\u011b v r\u00e1me\u010dku klepnete a pak klepnete na \u0161ipku \"Odebrat mezi r\u00e1me\u010dky.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Tento odkaz ji\u017e na t\u00e9to str\u00e1nce je, st\u00e1le m\u016f\u017eete upravovat souhrn odkaz\u016f a t\u00edm vylep\u0161ovat informace na EP!", 
    "Title": "N\u00e1zev", 
    "To add an image or video to the article text, click the 'Media' button.": "Chcete-li do textu \u010dl\u00e1nku p\u0159idat obr\u00e1zek nebo video, klikn\u011bte na tla\u010d\u00edtko \"M\u00e9dia\".", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Chcete-li odkazovat na jinou str\u00e1nku Everipedie, klikn\u011bte na tla\u010d\u00edtko 'Odkaz str\u00e1nky'.M\u016f\u017eete tak\u00e9 stisknout kl\u00e1vesu '@' nebo kl\u00e1vesu p\u0159i psan\u00ed a m\u011bla by se zobrazit rozbalovac\u00ed nab\u00eddka. Sna\u017ete se odkazovat na tolik str\u00e1nek, kolik pot\u0159ebujete, aby byla ka\u017ed\u00e1 str\u00e1nka co nejv\u00edce bohat\u00e1 a informativn\u00ed.", 
    "Today": "Dnes", 
    "Tomorrow": "Z\u00edtra", 
    "Type into this box to filter down the list of available %s.": "Chcete-li filtrovat ze seznamu dostupn\u00fdch polo\u017eek %s, za\u010dn\u011bte ps\u00e1t do tohoto pole.", 
    "When you are done, click here to save your changes.": "Pro dokon\u010den\u00ed klikn\u011bte zde pro ulo\u017een\u00ed zm\u011bn.", 
    "When you are finished, click here to save your changes.": "Po dokon\u010den\u00ed klikn\u011bte zde, abyste ulo\u017eili zm\u011bny.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Pi\u0161te objektivn\u011b ve t\u0159et\u00ed osob\u011b, nezmi\u0148ujte \u017e\u00e1dn\u00e9 marketingov\u00e9 prvky (exkluzivn\u00ed nab\u00eddky, neov\u011b\u0159iteln\u00e1 tvrzen\u00ed apod.). Toto je encyklopedie, nikoliv str\u00e1nka na soci\u00e1ln\u00edch m\u00e9di\u00edch.", 
    "Yesterday": "V\u010dera", 
    "You can also create a new wiki article by clicking here.": "Kliknut\u00edm zde m\u016f\u017eete vytvo\u0159it nov\u00fd wiki \u010dl\u00e1nek.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Dnes jste zve\u0159ejnili mnoho odkaz\u016f. Vy\u010dkejte, pros\u00edm, ne\u017e komunita zareaguje na v\u00e1\u0161 obsah. Nov\u00ed redakto\u0159i mohou zve\u0159ejnit pouze 250 p\u0159\u00edsp\u011bvk\u016f denn\u011b.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Byla vybr\u00e1na operace a jednotliv\u00e1 pole nejsou zm\u011bn\u011bn\u00e1. Patrn\u011b hled\u00e1te tla\u010d\u00edtko Prov\u00e9st sp\u00ed\u0161e ne\u017e Ulo\u017eit.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Byla vybr\u00e1na operace, ale dosud nedo\u0161lo k ulo\u017een\u00ed zm\u011bn jednotliv\u00fdch pol\u00ed. Ulo\u017e\u00edte klepnut\u00edm na tla\u010d\u00edtko OK. Pak bude t\u0159eba operaci spustit znovu.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "V jednotliv\u00fdch pol\u00edch jsou neulo\u017een\u00e9 zm\u011bny, kter\u00e9 budou ztraceny, pokud operaci provedete.", 
    "auth.logout": "autorizovan\u00e9 odhl\u00e1\u0161en\u00ed", 
    "daysUpdated": "dny aktualizov\u00e1ny", 
    "hoursUpdated": "hodiny aktualizov\u00e1ny", 
    "js_sdk_force_status_on_load": "js_sdk_okam\u017eit\u00fd_status_p\u0159i_na\u010dten\u00ed", 
    "minutesUpdated": "minuty aktualizov\u00e1ny", 
    "one letter Friday\u0004F": "P", 
    "one letter Monday\u0004M": "P", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "N", 
    "one letter Thursday\u0004T": "\u010c", 
    "one letter Tuesday\u0004T": "\u00da", 
    "one letter Wednesday\u0004W": "S", 
    "paused": "pozastaveno", 
    "reset": "resetovat", 
    "secondTenthsUpdated": "desetiny sekundy aktualizov\u00e1ny", 
    "secondsUpdated": "sekundy aktualizov\u00e1ny", 
    "started": "zah\u00e1jeno", 
    "stopped": "zastaveno", 
    "targetAchieved": "c\u00edl dosa\u017een"
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
    "DATETIME_FORMAT": "j. E Y G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H.%M", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%d. %m. %Y %H:%M:%S", 
      "%d. %m. %Y %H:%M:%S.%f", 
      "%d. %m. %Y %H.%M", 
      "%d. %m. %Y %H:%M", 
      "%d. %m. %Y", 
      "%Y-%m-%d %H.%M", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%d. %m. %Y", 
      "%d. %m. %y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y G:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H.%M", 
      "%H:%M", 
      "%H:%M:%S.%f"
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


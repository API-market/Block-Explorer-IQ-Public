

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));
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
      "%(sel)s od %(cnt)s izbranih", 
      "%(sel)s od %(cnt)s izbran", 
      "%(sel)s od %(cnt)s izbrana", 
      "%(sel)s od %(cnt)s izbrani"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Neobvezno) Dodajte naziv va\u0161e denarnice s kriptovalutami", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Neobvezno) Vnesite svoje ime, e-po\u0161to, dr\u017eavljanstvo, jezik, itd.", 
    "6 a.m.": "Ob 6h", 
    "6 p.m.": "Ob 18h", 
    "Add File": "Dodaj datoteko", 
    "Add Link": "Dodaj povezavo", 
    "Add Links, Files, Etc.": "Dodaj povezave, datoteke, itd.", 
    "Add New Infobox": "Dodaj nove okence za informacijami", 
    "Add Row": "Dodaj vrstico", 
    "Add an additional description for this category": "Dodajte dodaten opis za to kategorijo", 
    "Add media to article text": "Dodajte medije v besedilo \u010dlanka", 
    "Added pictures will show up here.": "Dodane slike bodo prikazane tukaj.", 
    "Adding infobox item, please wait...": "Dodajanje okenca za informacije, prosimo po\u010dakajte...", 
    "Adding, please wait...": "Dodajanje, prosimo po\u010dakajte...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Ko ste na stran \u017ee dodali povezavo, datoteko ali sliko, jo lahko citate s klikom na gumb \u2018Citiraj\u2019. Med tipkanjem lahko pritisnete tudi tipke '^' ali '*' in prikazal se bo meni.", 
    "April": "april", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Ali ste prepri\u010dani, da \u017eelite zapreti stran? Neshranjene spremembe bodo izgubljene.", 
    "Article proposal submission failed!": "Predlo\u017eitev predloga za \u010dlanek ni uspela!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Ko dodate povezave in datoteke, se bodo prikazali v oddelku Referen\u010dne povezave. Lahko jih tudi uredite ali odstranite.", 
    "August": "avgust", 
    "Available %s": "Mo\u017ene %s", 
    "Back": "Nazaj", 
    "Cancel": "Prekli\u010di", 
    "Choose": "Izberi", 
    "Choose a Date": "Izberite datum", 
    "Choose a Time": "Izberite \u010das", 
    "Choose a time": "Izbor \u010dasa", 
    "Choose all": "Izberi vse", 
    "Chosen %s": "Izbran %s", 
    "Cite": "Citiraj", 
    "Cite as verified editor": "Citiraj kot preverjeni urejevalec", 
    "Cite links, files, etc": "Citirajte povezave, datoteke itd.", 
    "Cite my own knowledge / experience as a verified editor": "Navedite svoje znanje / izku\u0161nje kot preverjeni urejevalec", 
    "Claim": "Zahteva", 
    "Claim Rewards": "Nagrade za zahtevke", 
    "Click here to upload a picture for your editor profile.": "Kliknite tukaj, da nalo\u017eite sliko za svoj urejevalni profil.", 
    "Click to choose all %s at once.": "Kliknite za izbor vseh %s hkrati.", 
    "Click to remove all chosen %s at once.": "Kliknite za odstranitev vseh %s hkrati.", 
    "Completing transaction...": "Dokon\u010danje transakcije...", 
    "Connect Languages": "Pove\u017eite jezike", 
    "Create Page": "Ustvari stran", 
    "Create page": "Ustvari stran", 
    "December": "december", 
    "Delete this tag": "Izbri\u0161ite to oznako", 
    "Drag and drop your photo here or click to upload.": "Povlecite in spustite fotografijo tukaj ali kliknite, da jo nalo\u017eite.", 
    "Edit": "Uredi", 
    "Editor profile": "Profil urejevalca", 
    "Enter the page title here": "Vnesite naslov strani tukaj", 
    "Enter your profile info": "Vnesite informacije za va\u0161 profil", 
    "Error: proposal not found. Please try submitting again.": "Napaka: predlog ni bil najden. Poskusite ponovno.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia je kot Wikipedija, vendar bolj preprosta za urejanje in oddajanje prispevkov. Vsaka stran je sestavljena iz okenca za informacije, kjer so navedena kratka dejstva, glavni \u010dlanek napisan nevtralno in v tretji osebi, medijska galerija slik, video posnetkov, avdio posnetkov itd. o tej temi, seznam referenc na spletne strani in datoteke, ki se uporabljajo kot citati v \u010dlanku in okencu za informacije.", 
    "February": "februar", 
    "File uploaded successfully.": "Datoteka je bila uspe\u0161no nalo\u017eena.", 
    "Filter": "Filtriraj", 
    "Font Style": "Slog pisave", 
    "Help": "Pomo\u010d", 
    "Here you can add the main photo for the article.": "Tukaj lahko dodate glavno fotografijo za \u010dlanek.", 
    "Hide": "Skrij", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "\u010ce ste \u017ee ustvarili Everipedia \u010dlanek o sebi, lahko tukaj oddate povezavo do \u010dlanka.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\u010ce imate kriptovalute, dodajte nazive denarnice tukaj. Posamezniki lahko donirajo, \u010de jim je v\u0161e\u010d va\u0161e delo! \u010ce nimate denarnice, jo lahko pridobite tukaj: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Okence za informacije", 
    "Introduction": "Uvod", 
    "January": "januar", 
    "July": "julij", 
    "June": "junij", 
    "Link": "Povezava", 
    "Link to other Everipedia pages": "Povezava na druge Everipedia strani", 
    "Link your Everipedia page": "Pove\u017eite svojo Everipedia stran", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Povezave do strani Wikipedije iz tehni\u010dnih razlogov niso dovoljene. Prosimo poskusite ponovno.", 
    "Loading more activity, please wait...": "Nalaganje ve\u010d dejavnosti, prosimo po\u010dakajte...", 
    "Loading...": "Nalaganje...", 
    "Main article body": "Glavni del \u010dlanka", 
    "Main photo": "Glavna fotografija", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Ko na stran dodajate informacije, pazite, da citirate va\u0161e vire in dodate povezave in datoteke, da s tem prika\u017eete, od kod prihajajo podatki.", 
    "March": "marec", 
    "May": "maj", 
    "Media": "Mediji", 
    "Media Gallery": "Medijska Galerija", 
    "Merge": "Zdru\u017ei", 
    "Midnight": "Polno\u010d", 
    "Next": "Naprej", 
    "No URL provided, please try again": "Ni navedenega URL-ja, prosimo poskusite znova", 
    "Noon": "Opoldne", 
    "Not Ready": "Ni pripravljeno", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Upo\u0161tevajte, da brez Brainpowerja ne boste mogli predlagati sprememb. Va\u0161e delo bo izgubljeno!", 
    "Note: You are %s hour ahead of server time.": [
      "Opomba: glede na \u010das na stre\u017eniku ste %s uro naprej.", 
      "Opomba: glede na \u010das na stre\u017eniku ste %s uri naprej.", 
      "Opomba: glede na \u010das na stre\u017eniku ste %s ure naprej.", 
      "Opomba: glede na \u010das na stre\u017eniku ste %s ur naprej."
    ], 
    "Note: You are %s hour behind server time.": [
      "Opomba: glede na \u010das na stre\u017eniku ste %s uro zadaj.", 
      "Opomba: glede na \u010das na stre\u017eniku ste %s uri zadaj.", 
      "Opomba: glede na \u010das na stre\u017eniku ste %s ure zadaj.", 
      "Opomba: glede na \u010das na stre\u017eniku ste %s ur zadaj."
    ], 
    "November": "november", 
    "Now": "Takoj", 
    "October": "oktober", 
    "Please enter a description for the photo": "Vnesite opis fotografije", 
    "Please provide a description for the link or file.": "Prosimo, navedite opis povezave ali datoteke.", 
    "Please provide a more scholarly description.": "Navedite bolj znanstveni opis.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Prosimo, da pred nadaljevanjem vlo\u017eite nekaj IQ v Brainpower. Kliknite V redu, da odprete zaslon za upravljanje Brainpower v novem zavihku. OPOMBA: Prepri\u010dajte se, da so pojavna okna omogo\u010deno za to spletno mesto, saj lahko prejmete opozorilo.", 
    "Pre": "Pre", 
    "Profile photo": "Profilna fotografija", 
    "Reference links": "Referen\u010dne povezave", 
    "Remove": "Odstrani", 
    "Remove all": "Odstrani vse", 
    "Save": "Shrani", 
    "Save changes": "Shrani spremembe", 
    "Search Everipedia": "I\u0161\u010di po Everipediji", 
    "Searching...": "Iskanje...", 
    "September": "september", 
    "Show": "Prika\u017ei", 
    "Style": "Slog", 
    "Submit": "Po\u0161lji", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Urejeval\u010dev profil prikazuje strani, ki jih je uporabnik uredil, reference, ki so jih dodali na stran, in njihove oddane komentarje. ", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Okence z informacijami je namenjeno zgo\u0161\u010denim, hitrim dejstvom. Predlagani predmeti se prika\u017eejo v meniju, odvisno od izbrane teme, vendar lahko dodate poljubno vrsto okenca za informacije.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "To je seznam mo\u017enih %s. Izbrane lahko izberete z izbiro v spodnjem okvirju in s klikom na pu\u0161\u010dico \"Izberi\" med okvirjema.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "To je seznam mo\u017enih %s. Odve\u010dne lahko odstranite z izbiro v okvirju in klikom na pu\u0161\u010dico \"Odstrani\" med okvirjema.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Ta povezava je \u017ee na tej strani, \u0161e vedno pa lahko uredite povzetek povezave, da izbolj\u0161ate podatke na EP!", 
    "Title": "Naslov", 
    "To add an image or video to the article text, click the 'Media' button.": "\u010ce \u017eelite v besedilo \u010dlanka dodati sliko ali video, kliknite gumb \u2018Mediji\u2019.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Za povezavo z drugo Everipedia stranjo kliknite gumb \u2018Pove\u017ei stran\u2019. Med vna\u0161anjem lahko pritisnete tudi @ in prikazal se bo meni.Poskusite dodati povezave do toliko strani, kot je potrebno, da bo vsaka stran \u010dim bolj bogata in informativna.", 
    "Today": "Danes", 
    "Tomorrow": "Jutri", 
    "Type into this box to filter down the list of available %s.": "Z vpisom niza v to polje, zo\u017eite izbor %s.", 
    "When you are done, click here to save your changes.": "Ko kon\u010date, kliknite tukaj, da shranite spremembe.", 
    "When you are finished, click here to save your changes.": "Ko kon\u010date, kliknite tukaj, da shranite spremembe.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Pi\u0161ite na objektiven na\u010din in v tretji osebi, ne vklju\u010dujte nobenega marketin\u0161kega govora (ekskluzivne ponudbe, nepreverljive trditve itd.). To je enciklopedija, ne pa stran socialnih medijev.", 
    "Yesterday": "V\u010deraj", 
    "You can also create a new wiki article by clicking here.": "Prav tako lahko ustvarite nov wiki \u010dlanek s klikom tukaj.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Danes ste objavili veliko povezav. Po\u010dakajte malo, da se skupnost odzove na va\u0161o vsebino. Novi urejevalci so omejeni in lahko objavijo samo 250 prispevkov na dan.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Izbrali ste dejanje, vendar niste naredili nobenih sprememb na posameznih poljih. Verjetno i\u0161\u010dete gumb Pojdi namesto Shrani.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Izbrali ste dejanje, vendar niste shranili sprememb na posameznih poljih. Kliknite na 'V redu', da boste shranili. Dejanje boste morali ponovno izvesti.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Na nekaterih poljih, kjer je omogo\u010deno urejanje, so neshranjene spremembe. V primeru nadaljevanja bodo neshranjene spremembe trajno izgubljene.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "dneviPosodobitev", 
    "hoursUpdated": "urePosodobitev", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutePosodobitev", 
    "one letter Friday\u0004F": "P", 
    "one letter Monday\u0004M": "P", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "N", 
    "one letter Thursday\u0004T": "\u010c", 
    "one letter Tuesday\u0004T": "T", 
    "one letter Wednesday\u0004W": "S", 
    "paused": "zaustavljeno", 
    "reset": "ponastavi", 
    "secondTenthsUpdated": "desetinaSekundePosodobitev", 
    "secondsUpdated": "sekundePosodobitev", 
    "started": "Za\u010deto", 
    "stopped": "ustavljeno", 
    "targetAchieved": "ciljDose\u017een"
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
    "DATETIME_FORMAT": "j. F Y. H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%d.%m.%y %H:%M:%S", 
      "%d.%m.%y %H:%M:%S.%f", 
      "%d.%m.%y %H:%M", 
      "%d.%m.%y", 
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%Y", 
      "%d. %m. %Y %H:%M:%S", 
      "%d. %m. %Y %H:%M:%S.%f", 
      "%d. %m. %Y %H:%M", 
      "%d. %m. %Y", 
      "%d. %m. %y %H:%M:%S", 
      "%d. %m. %y %H:%M:%S.%f", 
      "%d. %m. %y %H:%M", 
      "%d. %m. %y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "d. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%d-%m-%Y", 
      "%d. %m. %Y", 
      "%d. %m. %y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j.n.Y. H:i", 
    "SHORT_DATE_FORMAT": "j. M. Y", 
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


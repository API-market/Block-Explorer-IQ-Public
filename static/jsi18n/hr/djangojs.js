

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
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
      "odabrano %(sel)s od %(cnt)s", 
      "odabrano %(sel)s od %(cnt)s", 
      "odabrano %(sel)s od %(cnt)s"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Neobavezno) Dodajte adrese kripto vrijednosti nov\u010danika", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Neobavezno) Unesite svoje ime, e-mail, nacionalnost, jezik itd.", 
    "6 a.m.": "6 ujutro", 
    "6 p.m.": "6 popodne", 
    "Add File": "Dodati datoteku", 
    "Add Link": "Dodati poveznicu", 
    "Add Links, Files, Etc.": "Dodati veze, datoteke itd.", 
    "Add New Infobox": "Dodati novo zaglavlje", 
    "Add Row": "Dodati red", 
    "Add an additional description for this category": "Dodajte dodatni opis za ovu kategoriju", 
    "Add media to article text": "Dodajte medije u tekst \u010dlanka", 
    "Added pictures will show up here.": "Dodavane slike prikazat \u0107e se ovdje.", 
    "Adding infobox item, please wait...": "Dodavanje stavke u zaglavlje, molimo pri\u010dekajte ...", 
    "Adding, please wait...": "Dodavanje, pri\u010dekajte ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Nakon \u0161to ste na stranicu ve\u0107 dodali poveznicu, datoteku ili sliku, mo\u017eete ju i citirati klikom na gumb 'Citiraj'. Tako\u0111er mo\u017eete pritisnuti tipke '^' ili '*' prilikom upisivanja i pojavit \u0107e se padaju\u0107i izbornik.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Jeste li sigurni da \u017eelite iza\u0107i sa stranice? Nespremljene promjene bit \u0107e izgubljene.", 
    "Are you sure you want to remove this link?": "Jeste li sigurni da \u017eelite ukloniti tu poveznicu?", 
    "Article proposal submission failed!": "Podnesak prijedloga \u010dlanka nije uspio!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Dok dodajete poveznice i datoteke, one \u0107e se prikazivati u odjeljku Referentne veze. Mo\u017eete ih tako\u0111er i ure\u0111ivati ili ukloniti.", 
    "Available %s": "Dostupno %s", 
    "Back": "Natrag", 
    "Cancel": "Otkazano", 
    "Choose": "Izaberi", 
    "Choose a Date": "Odaberite datum", 
    "Choose a Time": "Izaberite vrijeme", 
    "Choose a time": "Izaberite vrijeme", 
    "Choose all": "Odaberi sve", 
    "Chosen %s": "Odabrano %s", 
    "Cite": "Citiranje", 
    "Cite as verified editor": "Citirajte kao verificirani urednik", 
    "Cite links, files, etc": "Navedite poveznice, datoteke itd.", 
    "Cite my own knowledge / experience as a verified editor": "Citirajte moje vlastito znanje / iskustvo kao provjerenog urednika", 
    "Claim": "Zahtjevati", 
    "Click here to upload a picture for your editor profile.": "Kliknite ovdje kako bi u\u010ditali sliku za svoj profil urednika.", 
    "Click to choose all %s at once.": "Kliknite da odabrete sve %s odjednom.", 
    "Click to remove all chosen %s at once.": "Kliknite da uklonite sve izabrane %s odjednom.", 
    "Completing transaction...": "Dovr\u0161etak transakcije ...", 
    "Create Page": "Kreirati stranicu", 
    "Create page": "Kreirati stranicu", 
    "Delete this tag": "Izbrisati tu oznaku", 
    "Drag and drop your photo here or click to upload.": "Ovdje povucite i ispustite svoju fotografiju ili kliknite za u\u010ditavanje.", 
    "Edit": "Urediti", 
    "Editor profile": "Profil urednika", 
    "Enter the page title here": "Ovdje unesite naslov stranice", 
    "Enter your profile info": "Unesite podatke o profilu", 
    "Error: proposal not found. Please try submitting again.": "Pogre\u0161ka: prijedlog nije prona\u0111en. Molimo poku\u0161ajte poslati ponovo.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": " Everipedija je poput Wikipedije, ali mnogo je jednostavnija za ure\u0111ivanje i prilaganje. Svaka stranica se sastoji od podru\u010dja zaglavlja za kratke sa\u017eete \u010dinjenice, glavnog \u010dlanka napisanog u neutralnom tre\u0107em licu, medijske galerije slika, video, audio i sli\u010dnog o toj temi, popisa referenci ka web stranicama i datotekama koje se koriste kao citati u \u010dlanku i zaglavlju.", 
    "File uploaded successfully": "Datoteka je uspje\u0161no u\u010ditana", 
    "File uploaded successfully.": "Datoteka je uspje\u0161no prenesena.", 
    "Filter": "Filter", 
    "Font Style": "Stil fonta", 
    "Formats": "Formati", 
    "Here you can add the main photo for the article.": "Ovdje mo\u017eete dodati glavnu fotografiju za \u010dlanak.", 
    "Hide": "Sakri", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Ako ste ve\u0107 stvorili Everipedija \u010dlanak o sebi, mo\u017eete ga povezati ovdje.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Ako imate bilo kakve kripto vrijednosti, ovdje dodajte adrese nov\u010danika. Ljudi vam mogu donirati ako im se svi\u0111a va\u0161 posao! Ako nemate nov\u010danik, mo\u017eete ga dobiti ovdje: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Zaglavlje", 
    "Introduction": "Uvod", 
    "Link": "Poveznica", 
    "Link to other Everipedia pages": "Poveznica ka drugim Everipedija stranicama", 
    "Link your Everipedia page": "Pove\u017eite svoju Everipedija stranicu", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Poveznice na stranice Wikipedije nisu dozvoljene, iz tehni\u010dkih razloga. Molimo poku\u0161ajte ponovno.", 
    "Loading more activity, please wait...": "U\u010ditavanje vi\u0161e aktivnosti, molimo pri\u010dekajte ...", 
    "Loading...": "U\u010ditavanje ...", 
    "Main article body": "Glavni dio \u010dlanka", 
    "Main photo": "Glavna fotografija", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Obavezno treba navesti svoje izvore prilikom dodavanja informacija na stranicu tako da ovdje dodajete poveznice i datoteke kako biste mogli prikazati odakle informacije dolaze.", 
    "Media": "Mediji", 
    "Media Gallery": "Galerija medija", 
    "Merging...": "Integriranje", 
    "Midnight": "Pono\u0107", 
    "Next": "Sljede\u0107i", 
    "No URL provided, please try again": "Nijedan URL nije naveden, molimo poku\u0161ajte ponovo", 
    "Noon": "Podne", 
    "Not Ready": "Nije spremno", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Imajte na umu da ne\u0107ete mo\u0107i predlo\u017eiti izmjene bez Brainpowera. Va\u0161 rad \u0107e biti izgubljen!", 
    "Now": "Sada", 
    "Please enter a description for the photo": "Molimo unesite opis fotografije", 
    "Please enter a headline": "Molimo unesite naslov", 
    "Please provide a description for the link or file.": "Molimo navedite opis poveznice ili datoteke.", 
    "Please provide a more scholarly description.": "Molimo navedite vi\u0161e znanstvenog opisa.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Molimo ulo\u017eite neki IQ u Brainpower prije nastavka. Kliknite OK da biste otvorili zaslon za Brainpower upravljanje u novoj kartici. NAPOMENA: Molimo provjerite jesu li sko\u010dni prozori omogu\u0107eni za tu web lokaciju jer mo\u017eda primite upozorenje.", 
    "Posting comment, please wait..": "Objavljivanje komentara, molimo pri\u010dekajte.", 
    "Posting reply, please wait..": "Objavljivanje odgovora, molimo pri\u010dekajte.", 
    "Pre": "Prije", 
    "Profile photo": "Fotografija profila", 
    "Reference links": "Referentne poveznice", 
    "Remove": "Ukloni", 
    "Remove all": "Ukloni sve", 
    "Save": "Spremiti", 
    "Save changes": "Spremiti promjene", 
    "Search Everipedia": "Pretra\u017eiti Everipediju", 
    "Searching...": "Tra\u017eenje", 
    "Show": "Prika\u017ei", 
    "Style": "Stil", 
    "Submission Successful!": "Podno\u0161enje je uspje\u0161no!", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Stranica profila urednika prikazuje stranice koje je korisnik ure\u0111ivao, reference koje su dodavane na stranicu i komentare koji su napravljeni.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Zaglavlje je namijenjeno kratkim i brzim \u010dinjenicama. Predlo\u017eene stavke prikazuju se na padaju\u0107em izborniku ovisno o odabranoj temi, ali se mo\u017ee dodati bilo koja vrsta zaglavlja.", 
    "This comment is already on this page. Please try again!": "Ovaj komentar se ve\u0107 nalazi na ovoj stranici. Molimo poku\u0161ajte ponovno!", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ovo je popis dostupnih %s. Mo\u017eete dodati pojedine na na\u010din da ih izaberete u polju ispod i kliknete \"Izaberi\" strelicu izme\u0111u dva polja. ", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ovo je popis odabranih %s. Mo\u017eete ukloniti pojedine na na\u010din da ih izaberete u polju ispod i kliknete \"Ukloni\" strelicu izme\u0111u dva polja. ", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Ova poveznica ve\u0107 postoji na ovoj stranici no i dalje mo\u017eete ure\u0111ivati sa\u017eetak poveznice kako bi pobolj\u0161ali informacije na EP!", 
    "Title": "Naslov", 
    "To add an image or video to the article text, click the 'Media' button.": "Da biste dodali sliku ili videozapis u tekst \u010dlanka, kliknite gumb medija.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Da biste se povezali s nekom drugom Everipedija stranicom kliknite na gumb 'Link Page'. Tako\u0111er mo\u017eete pritisnuti tipku '@' ili klju\u010d dok upisujete i pojavit \u0107e se padaju\u0107i izbornik. Poku\u0161ajte se povezati s onoliko stranica koliko je potrebno kako bi svaka stranica bila \u0161to bogatija i informativnija.", 
    "Today": "Danas", 
    "Tomorrow": "Sutra", 
    "Type into this box to filter down the list of available %s.": "Tipkajte u ovo polje da filtrirate listu dostupnih %s.", 
    "When you are done, click here to save your changes.": "Kada ste gotovi, kliknite ovdje kako bi spremili promjene.", 
    "When you are finished, click here to save your changes.": "Kada ste gotovi, kliknite ovdje kako bi spremili promjene.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Pi\u0161ite na objektivan na\u010din u tre\u0107em licu, nemojte uklju\u010divati nikakav marketin\u0161ki govor (ekskluzivna ponuda, nepotvr\u0111ena potra\u017eivanja itd.). Ovo je enciklopedija, a ne stranica dru\u0161tvenih medija.", 
    "Yesterday": "Ju\u010der", 
    "You can also create a new wiki article by clicking here.": "Tako\u0111er mo\u017eete napraviti i novi wiki \u010dlanak klikom ovdje.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Danas ste postavili mnogo poveznica. Pri\u010dekajte malo da zajednica odgovori na va\u0161 sadr\u017eaj. Novi urednici ograni\u010deni su za objavljivanje na samo do 250 podnesaka dnevno.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Odabrali ste akciju, a niste napravili nikakve izmjene na pojedinim poljima. Vjerojatno tra\u017eite gumb Idi umjesto gumb Spremi.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Odabrali ste akciju, ali niste jo\u0161 spremili promjene na pojedinim polja. Molimo kliknite OK za spremanje. Morat \u0107ete ponovno pokrenuti akciju.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Neke promjene nisu spremljene na pojedinim polja za ure\u0111ivanje. Ako pokrenete akciju, nespremljene promjene \u0107e biti izgubljene.", 
    "auth.logout": "auth.odjava", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_forsiranje_statusa_kod_u\u010ditavanja", 
    "minutesUpdated": "minutesUpdated", 
    "paused": "pauzirano", 
    "reset": "resetirano", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "pokrenuto", 
    "stopped": "zaustavljeno", 
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
    "DATETIME_FORMAT": "j. E Y. H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d.%m.%Y. %H:%M:%S", 
      "%d.%m.%Y. %H:%M:%S.%f", 
      "%d.%m.%Y. %H:%M", 
      "%d.%m.%Y.", 
      "%d.%m.%y. %H:%M:%S", 
      "%d.%m.%y. %H:%M:%S.%f", 
      "%d.%m.%y. %H:%M", 
      "%d.%m.%y.", 
      "%d. %m. %Y. %H:%M:%S", 
      "%d. %m. %Y. %H:%M:%S.%f", 
      "%d. %m. %Y. %H:%M", 
      "%d. %m. %Y.", 
      "%d. %m. %y. %H:%M:%S", 
      "%d. %m. %y. %H:%M:%S.%f", 
      "%d. %m. %y. %H:%M", 
      "%d. %m. %y."
    ], 
    "DATE_FORMAT": "j. E Y.", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%d.%m.%Y.", 
      "%d.%m.%y.", 
      "%d. %m. %Y.", 
      "%d. %m. %y."
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j.m.Y. H:i", 
    "SHORT_DATE_FORMAT": "j.m.Y.", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y."
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


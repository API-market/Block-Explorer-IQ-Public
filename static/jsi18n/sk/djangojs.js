

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
      "%(sel)s z %(cnt)s vybran\u00e9", 
      "%(sel)s z %(cnt)s vybran\u00e9", 
      "%(sel)s z %(cnt)s vybran\u00fdch"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Volite\u013en\u00e9) Pridajte adresy pe\u0148a\u017eeniek kryptomien", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Volite\u013en\u00e9) Zadajte svoje meno, e-mail, n\u00e1rodnos\u0165, jazyk at\u010f.", 
    "6 a.m.": "6:00", 
    "Add File": "Prida\u0165 s\u00fabor", 
    "Add Link": "Prida\u0165 odkaz", 
    "Add Links, Files, Etc.": "Prida\u0165 odkazy, s\u00fabory at\u010f.", 
    "Add New Infobox": "Prida\u0165 nov\u00fd infobox", 
    "Add Row": "Prida\u0165 riadok", 
    "Add an additional description for this category": "Pridajte \u010fal\u0161\u00ed popis tejto kateg\u00f3rie", 
    "Add media to article text": "Pridajte m\u00e9di\u00e1 do textu \u010dl\u00e1nku", 
    "Added pictures will show up here.": "Pridan\u00e9 fotografie sa zobrazia tu.", 
    "Adding infobox item, please wait...": "Prid\u00e1vanie polo\u017eky infobox, \u010dakajte ...", 
    "Adding, please wait...": "Prid\u00e1vanie, \u010dakajte ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Po pridan\u00ed odkazu, s\u00faboru alebo obr\u00e1zka na str\u00e1nku m\u00f4\u017eete citova\u0165 kliknut\u00edm na tla\u010didlo 'Citova\u0165'. M\u00f4\u017eete tie\u017e stla\u010di\u0165 kl\u00e1vesy '^'' alebo '*' pri p\u00edsan\u00ed a rozba\u013eovacia ponuka by sa mala objavi\u0165.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Naozaj chcete str\u00e1nku opusti\u0165? Neulo\u017een\u00e9 zmeny sa stratia.", 
    "Article proposal submission failed!": "Predlo\u017eenie n\u00e1vrhu \u010dl\u00e1nku zlyhalo!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Pri prid\u00e1van\u00ed odkazov a s\u00faborov sa zobrazia v sekcii referen\u010dn\u00e9 odkazy. M\u00f4\u017eete ich tie\u017e upravi\u0165 alebo odstr\u00e1ni\u0165.", 
    "Available %s": "Dostupn\u00e9 %s", 
    "Back": "Sp\u00e4\u0165", 
    "Cancel": "Zru\u0161i\u0165", 
    "Choose": "Vybra\u0165", 
    "Choose a time": "Vybra\u0165 \u010das", 
    "Choose all": "Vybra\u0165 v\u0161etko", 
    "Chosen %s": "Vybran\u00e9 %s", 
    "Cite": "Cit\u00e1cia", 
    "Cite as verified editor": "Citova\u0165 ako overen\u00fd editor", 
    "Cite links, files, etc": "Citujte odkazy, s\u00fabory at\u010f.", 
    "Cite my own knowledge / experience as a verified editor": "Uve\u010fte svoje vedomosti / sk\u00fasenosti ako overen\u00fd editor", 
    "Claim": "Za\u017eiada\u0165", 
    "Claim Rewards": "Vy\u017eiada\u0165 odmeny", 
    "Click here to upload a picture for your editor profile.": "Kliknut\u00edm tu m\u00f4\u017eete nahra\u0165 obr\u00e1zok profilu editora.", 
    "Click to choose all %s at once.": "Kliknite sem pre vybratie v\u0161etk\u00fdch %s naraz.", 
    "Click to remove all chosen %s at once.": "Kliknite sem pre vymazanie vybrat\u00fdch %s naraz.", 
    "Completing transaction...": "Dokon\u010denie transakcie ...", 
    "Connect Languages": "Pripojte jazyky", 
    "Create Page": "Vytvori\u0165 str\u00e1nku", 
    "Create page": "Vytvori\u0165 str\u00e1nku", 
    "Delete this tag": "Odstr\u00e1\u0148te t\u00fato zna\u010dku", 
    "Drag and drop your photo here or click to upload.": "Presu\u0148te svoju fotku sem alebo kliknite pre nahratie.", 
    "Edit": "Upravi\u0165", 
    "Editor profile": "Profil editora", 
    "Enter the page title here": "Tu zadajte n\u00e1zov str\u00e1nky", 
    "Enter your profile info": "Zadajte inform\u00e1cie o profile", 
    "Error: proposal not found. Please try submitting again.": "Chyba: n\u00e1vrh nebol n\u00e1jden\u00fd. Sk\u00faste znova odosla\u0165.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia je rovnak\u00e1 ako Wikipedia, ale s ove\u013ea jednoduch\u0161ou mo\u017enos\u0165ou upravova\u0165 a prispieva\u0165. Ka\u017ed\u00e1 str\u00e1nka sa sklad\u00e1 z infoboxu pre kr\u00e1tke stru\u010dn\u00e9 fakty, hlavn\u00fd \u010dl\u00e1nok nap\u00edsan\u00fd v neutr\u00e1lnej tretej osobe, medi\u00e1lnej gal\u00e9rie obr\u00e1zkov, vide\u00ed, zvuku at\u010f. o t\u00e9me, zoznam odkazov na webov\u00e9 str\u00e1nky a s\u00fabory, ktor\u00e9 sa pou\u017e\u00edvaj\u00fa ako cit\u00e1cie v \u010dl\u00e1nku a infobox.", 
    "File uploaded successfully.": "S\u00fabor bol \u00faspe\u0161ne nahrat\u00fd.", 
    "Filter": "Filtrova\u0165", 
    "Font Style": "\u0160t\u00fdl p\u00edsma", 
    "Help": "Pomoc", 
    "Here you can add the main photo for the article.": "Tu m\u00f4\u017eete prida\u0165 hlavn\u00fa fotografiu pre \u010dl\u00e1nok.", 
    "Hide": "Skry\u0165", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Ak ste u\u017e vytvorili \u010dl\u00e1nok o sebe v Everipedia, m\u00f4\u017eete k nemu pripoji\u0165 odkaz tu.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Ak m\u00e1te ak\u00e9ko\u013evek kryptomeny, pridajte tu adresu pe\u0148a\u017eenky. \u013dudia v\u00e1m ich m\u00f4\u017eu darova\u0165, ak sa v\u00e1m p\u00e1\u010di va\u0161a pr\u00e1ca! Ak nem\u00e1te pe\u0148a\u017eenku, m\u00f4\u017eete ju z\u00edska\u0165 tu: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "\u00davod", 
    "Link": "Odkaz", 
    "Link to other Everipedia pages": "Odkaz na in\u00e9 str\u00e1nky Everipedia", 
    "Link your Everipedia page": "Prepojte svoju str\u00e1nku Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Odkazy na str\u00e1nky Wikipedia nie s\u00fa z technick\u00fdch d\u00f4vodov povolen\u00e9. Pros\u00edm sk\u00faste znova.", 
    "Loading more activity, please wait...": "Na\u010d\u00edtava sa viac aktivity, pros\u00edm \u010dakajte ...", 
    "Loading...": "Na\u010d\u00edtavam...", 
    "Main article body": "Hlavn\u00fd telo \u010dl\u00e1nku", 
    "Main photo": "Hlavn\u00fd obr\u00e1zok", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Nezabudnite citova\u0165 zdroje pri prid\u00e1van\u00ed inform\u00e1ci\u00ed na str\u00e1nku pridan\u00edm odkazov a s\u00faborov, aby ste mohli zobrazi\u0165, odkia\u013e prich\u00e1dzaj\u00fa inform\u00e1cie.", 
    "Media": "M\u00e9di\u00e1", 
    "Media Gallery": "Gal\u00e9ria s\u00faborov", 
    "Merge": "Zl\u00fa\u010di\u0165", 
    "Midnight": "Polnoc", 
    "Next": "\u010ealej", 
    "No URL provided, please try again": "Neposkytla sa \u017eiadna adresa URL. Sk\u00faste to znova", 
    "Noon": "Poludnie", 
    "Not Ready": "Nepripraven\u00e9", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Upozor\u0148ujeme, \u017ee nebudete m\u00f4c\u0165 navrhn\u00fa\u0165 \u00fapravy bez funkcie Brainpower. Va\u0161a pr\u00e1ca bude straten\u00e1!", 
    "Note: You are %s hour ahead of server time.": [
      "Pozn\u00e1mka: Ste %s hodinu pred \u010dasom servera.", 
      "Pozn\u00e1mka: Ste %s hodiny pred \u010dasom servera.", 
      "Pozn\u00e1mka: Ste %s hod\u00edn pred \u010dasom servera."
    ], 
    "Note: You are %s hour behind server time.": [
      "Pozn\u00e1mka: Ste %s hodinu za \u010dasom servera.", 
      "Pozn\u00e1mka: Ste %s hodiny za \u010dasom servera.", 
      "Pozn\u00e1mka: Ste %s hod\u00edn za \u010dasom servera."
    ], 
    "Now": "Teraz", 
    "Please enter a description for the photo": "Zadajte pros\u00edm popis fotografie", 
    "Please provide a description for the link or file.": "Poskytnite popis odkazu alebo s\u00faboru.", 
    "Please provide a more scholarly description.": "Uve\u010fte podrobnej\u0161\u00ed opis.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Pred pokra\u010dovan\u00edm pros\u00edm vlo\u017ete nejak\u00fd IQ do Brainpower. Kliknut\u00edm na tla\u010didlo OK otvor\u00edte obrazovku na spr\u00e1vu Brainpower na novej karte. POZN\u00c1MKA: Uistite sa, \u017ee pre t\u00fato str\u00e1nku s\u00fa povolen\u00e9 vyskakovacie okn\u00e1, preto\u017ee m\u00f4\u017eete dosta\u0165 upozornenie.", 
    "Pre": "Pre", 
    "Profile photo": "Profilov\u00e1 fotka", 
    "Reference links": "Referen\u010dn\u00e9 odkazy", 
    "Remove": "Odstr\u00e1ni\u0165", 
    "Remove all": "Odstr\u00e1ni\u0165 v\u0161etky", 
    "Save": "Ulo\u017ei\u0165", 
    "Save changes": "Ulo\u017ei\u0165 zmeny", 
    "Search Everipedia": "H\u013eada\u0165 Everipedia", 
    "Searching...": "Vyh\u013ead\u00e1vanie...", 
    "Show": "Zobrazi\u0165", 
    "Style": "\u0160t\u00fdl", 
    "Submit": "Odosla\u0165", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Na str\u00e1nke profilu editora sa zobrazuj\u00fa str\u00e1nky, ktor\u00e9 pou\u017e\u00edvate\u013e upravil, odkazy, ktor\u00e9 pridal na str\u00e1nkuy, a koment\u00e1re, ktor\u00e9 urobil.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox je ur\u010den\u00fd pre stru\u010dn\u00e9, r\u00fdchle fakty. Navrhovan\u00e9 polo\u017eky sa zobrazia v rozba\u013eovacej ponuke v z\u00e1vislosti od vybranej t\u00e9my, ale m\u00f4\u017ee by\u0165 pridan\u00fd ak\u00fdko\u013evek typ infoboxu.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Toto je zoznam dostupn\u00fdch %s. Pre v\u00fdber je potrebn\u00e9 ozna\u010di\u0165 ich v poli a n\u00e1sledne kliknut\u00edm na \u0161\u00edpku \"Vybra\u0165\" presun\u00fa\u0165.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Toto je zoznam dostupn\u00fdch %s. Pre vymazanie je potrebn\u00e9 ozna\u010di\u0165 ich v poli a n\u00e1sledne kliknut\u00edm na \u0161\u00edpku \"Vymaza\u0165\" vymaza\u0165.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Tento odkaz je u\u017e na tejto str\u00e1nke, m\u00f4\u017eete upravi\u0165 zhrnutie prepojen\u00ed na zlep\u0161enie inform\u00e1ci\u00ed o EP!", 
    "Title": "N\u00e1zov", 
    "To add an image or video to the article text, click the 'Media' button.": "Ak chcete do textu \u010dl\u00e1nku prida\u0165 obr\u00e1zok alebo video, kliknite na tla\u010didlo  'M\u00e9di\u00e1' .", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Pre prepojenie na in\u00fa str\u00e1nku Everipedia kliknite na tla\u010didlo 'Link'. M\u00f4\u017eete tie\u017e stla\u010di\u0165 kl\u00e1vesu '@' alebo kl\u00e1ves pri p\u00edsan\u00ed a rozba\u013eovanie by sa malo objavi\u0165. Sna\u017ete sa prepoji\u0165 na to\u013eko str\u00e1n, ko\u013eko je potrebn\u00fdch na to, aby ka\u017ed\u00e1 str\u00e1nka bola bohat\u00e1 a informat\u00edvna.", 
    "Today": "Dnes", 
    "Tomorrow": "Zajtra", 
    "Type into this box to filter down the list of available %s.": "P\u00ed\u0161te do tohto po\u013ea pre vyfiltrovanie dostupn\u00fdch %s.", 
    "When you are done, click here to save your changes.": "Ke\u010f skon\u010d\u00edte, kliknut\u00edm sem ulo\u017ete zmeny.", 
    "When you are finished, click here to save your changes.": "Ke\u010f skon\u010d\u00edte, kliknut\u00edm sem ulo\u017ete zmeny.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Nap\u00ed\u0161te objekt\u00edvnym sp\u00f4sobom v tretej osobe, nezah\u0155\u0148ajte \u017eiadne marketingov\u00e9 sp\u00f4soby (exkluz\u00edvne ponuky, neoveren\u00e9 reklam\u00e1cie at\u010f.). Toto je encyklop\u00e9dia, nie str\u00e1nka soci\u00e1lnych m\u00e9di\u00ed.", 
    "Yesterday": "V\u010dera", 
    "You can also create a new wiki article by clicking here.": "Nov\u00fd \u010dl\u00e1nok wiki m\u00f4\u017eete tie\u017e vytvori\u0165 kliknut\u00edm sem.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Dnes ste vysielali ve\u013ea odkazov. Po\u010dkajte chv\u00ed\u013eu, k\u00fdm komunita odpovie na v\u00e1\u0161 obsah. Nov\u00fd editory s\u00fa obmedzen\u00ed na odosielanie len 250 pr\u00edspevkov denne.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vybrali ste akciu, ale neurobili ste \u017eiadne zmeny v jednotliv\u00fdch poliach. Pravdepodobne ste chceli pou\u017ei\u0165 tla\u010didlo vykona\u0165 namiesto ulo\u017ei\u0165.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vybrali ste akciu, ale neulo\u017eili ste jednotliv\u00e9 polia. Pros\u00edm, ulo\u017ete zmeny kliknut\u00edm na OK. Akciu budete musie\u0165 vykona\u0165 znova.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vr\u00e1mci jednotliv\u00fdch editovate\u013en\u00fdch pol\u00ed m\u00e1te neulo\u017een\u00e9 zmeny. Ak vykon\u00e1te akciu, va\u0161e zmeny bud\u00fa straten\u00e9.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "paused": "pozastaven\u00e9", 
    "reset": "resetova\u0165", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "spusten\u00e9", 
    "stopped": "zastaven\u00e9", 
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
    "DATETIME_FORMAT": "j. F Y G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%y-%m-%d", 
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


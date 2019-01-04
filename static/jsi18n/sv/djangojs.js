

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
      "%(sel)s av %(cnt)s markerade", 
      "%(sel)s av %(cnt)s markerade"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Valfritt) L\u00e4gg till dina pl\u00e5nbokadresser f\u00f6r kryptovalutor", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Valfritt) Ange ditt namn, e-post, nationalitet, spr\u00e5k etc.", 
    "6 a.m.": "06:00", 
    "6 p.m.": "6 p.m.", 
    "Add File": "L\u00e4gg till fil", 
    "Add Link": "\ufeffL\u00e4gg till l\u00e4nk", 
    "Add Links, Files, Etc.": "L\u00e4gg till l\u00e4nkar, filer, etc.", 
    "Add New Infobox": "L\u00e4gg till ny Infobox", 
    "Add Row": "L\u00e4gg till rad", 
    "Add an additional description for this category": "L\u00e4gg till en extra beskrivning f\u00f6r den h\u00e4r kategorin", 
    "Add media to article text": "L\u00e4gg till media i artikeltext", 
    "Added pictures will show up here.": "Tillagda bilder kommer att dyka upp h\u00e4r.", 
    "Adding infobox item, please wait...": "L\u00e4gger till Infobox-objekt, v\u00e4nta ...", 
    "Adding, please wait...": "L\u00e4gger till, v\u00e4nta ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "N\u00e4r du redan har lagt till en l\u00e4nk, fil eller bild p\u00e5 sidan kan du citera den genom att klicka p\u00e5 &quot;Cite&quot; -knappen. Du kan ocks\u00e5 trycka p\u00e5 knapparna &quot;^&quot; eller &quot;*&quot; n\u00e4r du skriver och en rullgardinsmeny ska visas.", 
    "April": "april", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u00c4r du s\u00e4ker p\u00e5 att du vill l\u00e4mna sidan? Ej sparade \u00e4ndringar kommer att g\u00e5 vilse.", 
    "Article proposal submission failed!": "Inl\u00e4mning av artikelf\u00f6rslag misslyckades!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "N\u00e4r du l\u00e4gger till l\u00e4nkar och filer visas de i avsnittet Referensl\u00e4nkar. Du kan ocks\u00e5 redigera eller ta bort dem ocks\u00e5.", 
    "August": "augusti", 
    "Available %s": "Tillg\u00e4ngliga %s", 
    "Back": "Tillbaka", 
    "Cancel": "Avbryt", 
    "Choose": "V\u00e4lj", 
    "Choose a Date": "V\u00e4lj ett datum", 
    "Choose a Time": "V\u00e4lj en tidpunkt", 
    "Choose a time": "V\u00e4lj en tidpunkt", 
    "Choose all": "V\u00e4lj alla", 
    "Chosen %s": "V\u00e4lj %s", 
    "Cite": "Citat", 
    "Cite as verified editor": "Citera som verifierad redakt\u00f6r", 
    "Cite links, files, etc": "Citera l\u00e4nkar, filer, etc.", 
    "Cite my own knowledge / experience as a verified editor": "Citera min egen kunskap/erfarenhet som verifierad redakt\u00f6r", 
    "Claim": "Skada", 
    "Click here to upload a picture for your editor profile.": "Klicka h\u00e4r f\u00f6r att ladda upp en bild f\u00f6r din redakt\u00f6rsprofil.", 
    "Click to choose all %s at once.": "Klicka f\u00f6r att v\u00e4lja alla %s p\u00e5 en g\u00e5ng.", 
    "Click to remove all chosen %s at once.": "Klicka f\u00f6r att ta bort alla valda %s p\u00e5 en g\u00e5ng.", 
    "Completing transaction...": "Slutf\u00f6r transaktionen ...", 
    "Create Page": "Skapa sida", 
    "Create page": "Skapa sida", 
    "December": "december", 
    "Delete this tag": "Ta bort denna tagg!", 
    "Drag and drop your photo here or click to upload.": "Dra och sl\u00e4pp ditt foto h\u00e4r eller klicka f\u00f6r att ladda upp.", 
    "Edit": "Redigera", 
    "Editor profile": "Redakt\u00f6rsprofil", 
    "Enter the page title here": "Ange sidtitel h\u00e4r", 
    "Enter your profile info": "Ange din profilinformation", 
    "Error: proposal not found. Please try submitting again.": "Fel: f\u00f6rslag hittades inte. Var god f\u00f6rs\u00f6k att skicka igen.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia \u00e4r precis som Wikipedia men mycket enklare att redigera och bidra med. Varje sida best\u00e5r av ett infobox-omr\u00e5de f\u00f6r korta korta fakta, en huvudartikel som skrivs i en neutral tredje personens tid, ett mediegalleri med bilder, videor, ljud etc om \u00e4mnet, en lista \u00f6ver referenser till webbsidor och filer som anv\u00e4nds som citat i artikeln och infobox.", 
    "February": "februari", 
    "File uploaded successfully.": "Filen har \u00f6verf\u00f6rts framg\u00e5ngsrikt.", 
    "Filter": "Filter", 
    "Font Style": "Teckenstil", 
    "Here you can add the main photo for the article.": "H\u00e4r kan du l\u00e4gga till huvudfotot f\u00f6r artikeln.", 
    "Hide": "G\u00f6m", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Om du redan har skapat en Everipediaartikel om dig sj\u00e4lv kan du l\u00e4nka till den h\u00e4r.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Om du har n\u00e5gra kryptovalutor, l\u00e4gg till pl\u00e5nbokadresserna h\u00e4r. Folk kan donera till dig om de gillar ditt jobb! Om du inte har en pl\u00e5nbok kan du f\u00e5 en h\u00e4r: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Eterum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Introduktion", 
    "January": "januari", 
    "July": "juli", 
    "June": "juni", 
    "Link": "L\u00e4nk", 
    "Link to other Everipedia pages": "L\u00e4nk till andra Everipedia-sidor", 
    "Link your Everipedia page": "L\u00e4nk din Everipedia-sida", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "L\u00e4nkar till Wikipedia-sidor \u00e4r inte till\u00e5tna av tekniska sk\u00e4l. Var god f\u00f6rs\u00f6k igen.", 
    "Loading more activity, please wait...": "Laddar mer aktivitet, v\u00e4nligen v\u00e4nta ...", 
    "Loading...": "Laddar..", 
    "Main article body": "Huvudartikelkroppen", 
    "Main photo": "Huvudbild", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Se till att citera dina k\u00e4llor n\u00e4r du l\u00e4gger till information p\u00e5 sidan genom att l\u00e4gga till l\u00e4nkar och filer h\u00e4r s\u00e5 att du kan visa var informationen kommer ifr\u00e5n.", 
    "March": "mars", 
    "May": "maj", 
    "Media": "Media", 
    "Media Gallery": "Mediagalleri", 
    "Midnight": "Midnatt", 
    "Next": "N\u00e4sta", 
    "No URL provided, please try again": "Ingen webbadress tillhandah\u00e5llen, f\u00f6rs\u00f6k igen", 
    "Noon": "Middag", 
    "Not Ready": "Inte klar", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Observera att du inte kommer att kunna f\u00f6resl\u00e5 \u00e4ndringar utan Brainpower. Ditt arbete kommer att g\u00e5 f\u00f6rlorat!", 
    "Note: You are %s hour ahead of server time.": [
      "Notera: Du \u00e4r %s timme f\u00f6re serverns tid.", 
      "Notera: Du \u00e4r %s timmar f\u00f6re serverns tid."
    ], 
    "Note: You are %s hour behind server time.": [
      "Notera: Du \u00e4r %s timme efter serverns tid.", 
      "Notera: Du \u00e4r %s timmar efter serverns tid."
    ], 
    "November": "november", 
    "Now": "Nu", 
    "October": "oktober", 
    "Please enter a description for the photo": "V\u00e4nligen ange en beskrivning f\u00f6r fotot", 
    "Please provide a description for the link or file.": "V\u00e4nligen ange en beskrivning f\u00f6r l\u00e4nken eller filen.", 
    "Please provide a more scholarly description.": "V\u00e4nligen ge en mer vetenskaplig beskrivning.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "V\u00e4nligen s\u00e4tt in n\u00e5gra IQ i Brainpower innan du forts\u00e4tter. Klicka p\u00e5 OK f\u00f6r att \u00f6ppna sk\u00e4rmen Brainpower Management p\u00e5 en ny flik. OBS! Se till att popupf\u00f6nster \u00e4r aktiverade f\u00f6r den h\u00e4r sidan, eftersom du kanske f\u00e5r en varning.", 
    "Pre": "F\u00f6rformaterat", 
    "Profile photo": "Profilbild", 
    "Reference links": "Referensl\u00e4nkar", 
    "Remove": "Ta bort", 
    "Remove all": "Ta bort alla", 
    "Save": "Spara", 
    "Save changes": "Spara \u00e4ndringar", 
    "Search Everipedia": "S\u00f6k p\u00e5 Everipedia", 
    "Searching...": "S\u00f6ker\u2026", 
    "September": "september", 
    "Show": "Visa", 
    "Style": "Stil", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Redigeringsprofilsidan visar de sidor som anv\u00e4ndaren har redigerat, referenser som de har lagt till p\u00e5 en sida och kommentarer de har gjort.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox \u00e4r utformad f\u00f6r korta, fakta. F\u00f6reslagna f\u00f6rem\u00e5l visas i rullgardinsmenyn beroende p\u00e5 det valda \u00e4mnet, men vilken typ av infobox som helst kan l\u00e4ggas till.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Detta \u00e4r listan med tillg\u00e4ngliga %s. Du kan v\u00e4lja ut vissa genom att markera dem i rutan nedan och sedan klicka p\u00e5 \"V\u00e4lj\"-knapparna mellan de tv\u00e5 rutorna.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Detta \u00e4r listan med utvalda %s. Du kan ta bort vissa genom att markera dem i rutan nedan och sedan klicka p\u00e5 \"Ta bort\"-pilen mellan de tv\u00e5 rutorna.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Den h\u00e4r l\u00e4nken finns redan p\u00e5 den h\u00e4r sidan, du kan \u00e4nd\u00e5 redigera l\u00e4nksammanfattningen f\u00f6r att f\u00f6rb\u00e4ttra informationen p\u00e5 EP!", 
    "Title": "Titel", 
    "To add an image or video to the article text, click the 'Media' button.": "Om du vill l\u00e4gga till en bild eller video i artikeltexten klickar du p\u00e5 knappen &quot;Media&quot;.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "F\u00f6r att l\u00e4nka till en annan Everipedia-sida klickar du p\u00e5 l\u00e4nken &quot;L\u00e4nk sida&quot;. Du kan ocks\u00e5 trycka p\u00e5 &#39;@&#39; eller -tangenten n\u00e4r du skriver och en rullgardinsmeny ska visas. F\u00f6rs\u00f6k att l\u00e4nka till s\u00e5 m\u00e5nga sidor som beh\u00f6vs f\u00f6r att g\u00f6ra varje sida s\u00e5 rik och informativ som m\u00f6jligt.", 
    "Today": "I dag", 
    "Tomorrow": "I morgon", 
    "Type into this box to filter down the list of available %s.": "Skriv i denna ruta f\u00f6r att filtrera listan av tillg\u00e4ngliga %s.", 
    "When you are done, click here to save your changes.": "N\u00e4r du \u00e4r klar, klicka h\u00e4r f\u00f6r att spara dina \u00e4ndringar.", 
    "When you are finished, click here to save your changes.": "N\u00e4r du \u00e4r klar klickar du h\u00e4r f\u00f6r att spara dina \u00e4ndringar.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Skriv p\u00e5 ett objektivt s\u00e4tt i tredje persons tid, inkludera inte n\u00e5gon marknadsf\u00f6ringstals (exklusiva erbjudanden, overifierbara p\u00e5st\u00e5enden etc.). Detta \u00e4r en encyklopedi, inte en social media sida.", 
    "Yesterday": "I g\u00e5r", 
    "You can also create a new wiki article by clicking here.": "Du kan ocks\u00e5 skapa en ny wikiartikel genom att klicka h\u00e4r.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Du har lagt upp m\u00e5nga l\u00e4nkar idag. V\u00e4nta lite s\u00e5 att communityn kan svara p\u00e5 ditt inneh\u00e5ll. Nya redakt\u00f6rer \u00e4r begr\u00e4nsade till att l\u00e4gga in endast 250 inl\u00e4gg per dag.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Du har markerat en operation och du har inte gjort n\u00e5gra \u00e4ndringar i enskilda f\u00e4lt. Du letar antagligen efter Utf\u00f6r-knappen snarare \u00e4n Spara.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Du har markerat en operation, men du har inte sparat sparat dina \u00e4ndringar till enskilda f\u00e4lt \u00e4nnu. Var v\u00e4nlig klicka OK f\u00f6r att spara. Du kommer att beh\u00f6va k\u00f6ra operationen p\u00e5 nytt.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Du har \u00e4ndringar som inte sparats i enskilda redigerbara f\u00e4lt. Om du k\u00f6r en operation kommer de \u00e4ndringar som inte sparats att g\u00e5 f\u00f6rlorade.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "F", 
    "one letter Monday\u0004M": "M", 
    "one letter Saturday\u0004S": "L", 
    "one letter Sunday\u0004S": "S", 
    "one letter Thursday\u0004T": "T", 
    "one letter Tuesday\u0004T": "T", 
    "one letter Wednesday\u0004W": "O", 
    "paused": "pausad", 
    "reset": "\u00c5terst\u00e4ll", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "startad", 
    "stopped": "avbruten", 
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
    "DATETIME_FORMAT": "j F Y H:i", 
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
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y-m-d H:i", 
    "SHORT_DATE_FORMAT": "Y-m-d", 
    "THOUSAND_SEPARATOR": "\u00a0", 
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


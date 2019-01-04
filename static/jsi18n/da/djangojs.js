

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
      "%(sel)s af %(cnt)s valgt", 
      "%(sel)s af %(cnt)s valgt"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Valgfrit) Tilf\u00f8j dine cryptocurrency-tegnebogadresser", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Valgfrit) Indtast dit navn, e-mail, nationalitet, sprog osv.", 
    "6 a.m.": "Klokken 6", 
    "6 p.m.": "Klokken 18", 
    "Add File": "Tilf\u00f8j fil", 
    "Add Link": "Tilf\u00f8j link", 
    "Add Links, Files, Etc.": "Tilf\u00f8j Links, Filer, Etc.", 
    "Add New Infobox": "Tilf\u00f8j ny infobox", 
    "Add Row": "Tilf\u00f8j R\u00e6kke", 
    "Add an additional description for this category": "Tilf\u00f8j en ekstra beskrivelse til denne kategori", 
    "Add media to article text": "Tilf\u00f8j medie til artikelteksten", 
    "Added pictures will show up here.": "Tilf\u00f8jede billeder vil dukke op her.", 
    "Adding infobox item, please wait...": "Tilf\u00f8jelse af infobox-element, vent venligst ...", 
    "Adding, please wait...": "Tilf\u00f8jelse, vent venligst ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "N\u00e5r du allerede har tilf\u00f8jet et link, en fil eller et billede til siden, kan du citere det ved at klikke p\u00e5 &#39;Cite&#39;-knappen. Du kan ogs\u00e5 trykke p\u00e5 &#39;^&#39; eller &#39;*&#39; tasterne, n\u00e5r du skriver, og en dropdown skal vises.", 
    "April": "April", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Er du sikker p\u00e5 at du vil afslutte siden? Ubesvarede \u00e6ndringer vil g\u00e5 tabt.", 
    "Article proposal submission failed!": "Forslag til artikelforslag mislykkedes!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "N\u00e5r du tilf\u00f8jer links og filer, vises de i afsnittet Reference Links. Du kan ogs\u00e5 redigere eller fjerne dem.", 
    "August": "August", 
    "Available %s": "Tilg\u00e6ngelige %s", 
    "Back": "Tilbage", 
    "Cancel": "Annuller", 
    "Choose": "V\u00e6lg", 
    "Choose a Date": "V\u00e6lg en Dato", 
    "Choose a Time": "V\u00e6lg et Tidspunkt", 
    "Choose a time": "V\u00e6lg et tidspunkt", 
    "Choose all": "V\u00e6lg alle", 
    "Chosen %s": "Valgte %s", 
    "Cite": "Citeret", 
    "Cite as verified editor": "Cit\u00e9r som verificeret redakt\u00f8r", 
    "Cite links, files, etc": "Cite links, filer osv", 
    "Cite my own knowledge / experience as a verified editor": "Cit\u00e9r min egen viden / erfaring som verificeret redakt\u00f8r", 
    "Claim": "Anmod", 
    "Claim Rewards": "Claim Bel\u00f8nninger", 
    "Click here to upload a picture for your editor profile.": "Klik her for at uploade et billede til din redakt\u00f8rprofil.", 
    "Click to choose all %s at once.": "Klik for at v\u00e6lge alle %s med det samme.", 
    "Click to remove all chosen %s at once.": "Klik for at fjerne alle valgte %s med det samme.", 
    "Completing transaction...": "Afslutter transaktion ...", 
    "Connect Languages": "Tilslut sprog", 
    "Create Page": "Opret side", 
    "Create page": "Opret side", 
    "December": "December", 
    "Delete this tag": "Slet dette tag", 
    "Drag and drop your photo here or click to upload.": "Tr\u00e6k og slip dit billede her eller klik for at uploade.", 
    "Edit": "Rediger", 
    "Editor profile": "Redakt\u00f8rprofil", 
    "Enter the page title here": "Indtast sidetitlen her", 
    "Enter your profile info": "Indtast din profil info", 
    "Error: proposal not found. Please try submitting again.": "Fejl: forslag blev ikke fundet. Pr\u00f8v venligst at sende igen.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia er ligesom Wikipedia, men meget enklere at redigere og bidrage. Hver side er sammensat af et infobox-omr\u00e5de for korte kortfattede fakta, en hovedartikel skrevet i en neutral 3. person-tid, et mediegalleri af billeder, videoer, lyd osv. Om emnet, en liste over referencer til websider og filer, der bruges som citater i artiklen og infobox.", 
    "February": "Februar", 
    "File uploaded successfully.": "Filen er uploadet korrekt.", 
    "Filter": "Filtr\u00e9r", 
    "Font Style": "Skrifttype stil", 
    "Help": "Hj\u00e6lp", 
    "Here you can add the main photo for the article.": "Her kan du tilf\u00f8je hovedfotoet til artiklen.", 
    "Hide": "Skjul", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Hvis du allerede har oprettet en Everipedia-artikel om dig selv, kan du linke til den her.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Hvis du har krypteringsv\u00e6rdier, skal du tilf\u00f8je adresserne til tegnebogen her. Folk kan donere til dig, hvis de kan lide dit arbejde! Hvis du ikke har en tegnebog, kan du f\u00e5 en her: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>dogecoin</a>", 
    "Infobox": "InfoBoks", 
    "Introduction": "Introduktion", 
    "January": "Januar", 
    "July": "Juli", 
    "June": "Juni", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Link til andre Everipedia-sider", 
    "Link your Everipedia page": "Link din Everipedia-side", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Links til Wikipedia-sider er ikke tilladt af tekniske \u00e5rsager. Pr\u00f8v igen.", 
    "Loading more activity, please wait...": "Indl\u00e6ser mere aktivitet, vent venligst ...", 
    "Loading...": "Indl\u00e6ser...", 
    "Main article body": "Hovedartikel krop", 
    "Main photo": "F\u00f8rste Billede", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "S\u00f8rg for at citere dine kilder, n\u00e5r du tilf\u00f8jer oplysninger til siden ved at tilf\u00f8je links og filer her, s\u00e5 du kan vise, hvor oplysningerne kommer fra.", 
    "March": "Marts", 
    "May": "Maj", 
    "Media": "Medier", 
    "Media Gallery": "Medie Galleri", 
    "Merge": "Flet", 
    "Midnight": "Midnat", 
    "Next": "N\u00e6ste", 
    "No URL provided, please try again": "Ingen webadresse angivet, pr\u00f8v igen", 
    "Noon": "Middag", 
    "Not Ready": "Ikke klar", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Bem\u00e6rk at du ikke kan foresl\u00e5 redigeringer uden Brainpower. Dit arbejde vil g\u00e5 tabt!", 
    "Note: You are %s hour ahead of server time.": [
      "Obs: Du er %s time forud i forhold servertiden.", 
      "Obs: Du er %s timer forud i forhold servertiden."
    ], 
    "Note: You are %s hour behind server time.": [
      "Obs: Du er %s time bagud i forhold servertiden.", 
      "Obs: Du er %s timer forud i forhold servertiden."
    ], 
    "November": "November", 
    "Now": "Nu", 
    "October": "Oktober", 
    "Please enter a description for the photo": "Indtast venligst en beskrivelse for billedet", 
    "Please provide a description for the link or file.": "Giv venligst en beskrivelse af linket eller filen.", 
    "Please provide a more scholarly description.": "Giv venligst en mere videnskabelig beskrivelse.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Venligst inds\u00e6t nogle IQ i Brainpower f\u00f8r du forts\u00e6tter. Klik p\u00e5 OK for at \u00e5bne sk\u00e6rmbilledet Brainpower management i en ny fane. BEM\u00c6RK: S\u00f8rg for, at popups er aktiveret for dette websted, da du muligvis f\u00e5r en advarsel.", 
    "Pre": "Pre", 
    "Profile photo": "Profilbillede", 
    "Reference links": "Reference links", 
    "Remove": "Fjern", 
    "Remove all": "Fjern alle", 
    "Save": "Gem", 
    "Save changes": "Gem \u00e6ndringer", 
    "Search Everipedia": "S\u00f8g p\u00e5 Everipedia", 
    "Searching...": "S\u00f8ger...", 
    "September": "September", 
    "Show": "Vis", 
    "Style": "Stil", 
    "Submit": "Send", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Redakt\u00f8rprofilsiden viser siderne, som brugeren har redigeret, referencer, de har tilf\u00f8jet til en side og kommentarer, de har lavet.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox er designet til korte og hurtige fakta. Foresl\u00e5ede elementer vises i rullelisten afh\u00e6ngigt af det valgte emne, men enhver form for infobox kan tilf\u00f8jes.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dette er listen over tilg\u00e6ngelige %s. Du kan v\u00e6lge dem enkeltvis ved at markere dem i kassen nedenfor og derefter klikke p\u00e5 \"V\u00e6lg\"-pilen mellem de to kasser.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dette er listen over valgte %s. Du kan fjerne dem enkeltvis ved at markere dem i kassen nedenfor og derefter klikke p\u00e5 \"Fjern\"-pilen mellem de to kasser.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Dette link er allerede p\u00e5 denne side, du kan stadig redigere linkoversigten for at forbedre informationerne p\u00e5 EP!", 
    "Title": "Titel", 
    "To add an image or video to the article text, click the 'Media' button.": "For at tilf\u00f8je et billede eller en video til artiklen tekst, klik p\u00e5 knappen &quot;Media&quot;.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "For at linke til en anden Everipedia-side, klik p\u00e5 knappen &quot;Link Page&quot;. Du kan ogs\u00e5 trykke p\u00e5 &#39;@&#39; eller tasten, n\u00e5r du skriver, og en rullemenu skal vises. Pr\u00f8v at linke til s\u00e5 mange sider som n\u00f8dvendigt for at g\u00f8re hver side s\u00e5 rig og informativ som muligt.", 
    "Today": "I dag", 
    "Tomorrow": "I morgen", 
    "Type into this box to filter down the list of available %s.": "Skriv i dette felt for at filtrere listen af tilg\u00e6ngelige %s.", 
    "When you are done, click here to save your changes.": "N\u00e5r du er f\u00e6rdig, klik her for at gemme dine \u00e6ndringer.", 
    "When you are finished, click here to save your changes.": "N\u00e5r du er f\u00e6rdig, klik her for at gemme dine \u00e6ndringer.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Skriv p\u00e5 en objektiv m\u00e5de i tredje persons tid, inkluderer ikke nogen markedsf\u00f8ringstale (eksklusive tilbud, uverifiable krav osv.). Dette er en encyklop\u00e6di, ikke en social medie side.", 
    "Yesterday": "I g\u00e5r", 
    "You can also create a new wiki article by clicking here.": "Du kan ogs\u00e5 oprette en ny wikiartikel ved at klikke her.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Du har sendt mange links i dag. Vent lidt for samfundet til at reagere p\u00e5 dit indhold. Nye redakt\u00f8rer er begr\u00e6nset til at sende kun 250 indl\u00e6g om dagen.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Du har valgt en handling, og du har ikke udf\u00f8rt nogen \u00e6ndringer p\u00e5 felter. Det, du s\u00f8ger er formentlig Udf\u00f8r-knappen i stedet for Gem-knappen.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Du har valgt en handling, men du har ikke gemt dine \u00e6ndringer til et eller flere felter. Klik venligst OK for at gemme og v\u00e6lg dern\u00e6st handlingen igen.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Du har ugemte \u00e6ndringer af et eller flere redigerbare felter. Hvis du udf\u00f8rer en handling fra drop-down-menuen, vil du miste disse \u00e6ndringer.", 
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
    "paused": "holder pause", 
    "reset": "Nulstil", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "Startet", 
    "stopped": "standset", 
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
    "DATETIME_FORMAT": "j. F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
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


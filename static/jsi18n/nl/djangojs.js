

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
      "%(sel)s van de %(cnt)s geselecteerd", 
      "%(sel)s van de %(cnt)s geselecteerd"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Optioneel) Voeg je de adressen van je cryptocurrencywallet toe", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Optioneel) Vul je naam, e-mailadres, nationaliteit, en taal etc. in.", 
    "6 a.m.": "6 uur 's ochtends", 
    "6 p.m.": "6 uur 's avonds", 
    "Add File": "Voeg bestand toe", 
    "Add Link": "Voeg link toe", 
    "Add Links, Files, Etc.": "Links en bestanden etc. toevoegen.", 
    "Add New Infobox": "Nieuwe infobox toevoegen", 
    "Add Row": "Rij toevoegen", 
    "Add an additional description for this category": "Voeg een aanvullende beschrijving toe aan deze categorie", 
    "Add media to article text": "Media toevoegen aan artikeltekst", 
    "Added pictures will show up here.": "Toegevoegde foto's zullen hier verschijnen.", 
    "Adding infobox item, please wait...": "Infobox-item toevoegen, even geduld a.u.b...", 
    "Adding, please wait...": "Aan het toevoegen, even geduld a.u.b...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Nadat je al een link, bestand of afbeelding aan de pagina hebt toegevoegd, kun je deze vermelden door op de knop \u2018Vermeld\u2019 te klikken. Je kunt ook op '^' of '*' drukken tijdens het typen en er zal een dropdownmenu verschijnen.", 
    "April": "april", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Weet je zeker dat je de pagina wil verlaten? Niet-opgeslagen wijzigingen gaan verloren.", 
    "Article proposal submission failed!": "Het indienen van artikelvoorstel is mislukt!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Wanneer je links en bestanden toevoegt, verschijnen deze in de sectie Links naar bronnen. Je kunt ze ook bewerken of verwijderen.", 
    "August": "augustus", 
    "Available %s": "Beschikbare %s", 
    "Back": "Terug", 
    "Cancel": "Annuleren", 
    "Choose": "Kiezen", 
    "Choose a Date": "Kies een datum", 
    "Choose a Time": "Kies een tijdstip", 
    "Choose a time": "Kies een tijd", 
    "Choose all": "Kies alle", 
    "Chosen %s": "Gekozen %s", 
    "Cite": "Citaat", 
    "Cite as verified editor": "Vermeld als geverifieerde redacteur", 
    "Cite links, files, etc": "Koppelingen en bestanden etc. vermelden", 
    "Cite my own knowledge / experience as a verified editor": "Vermeld mijn eigen kennis/ervaring als geverifieerd redacteur", 
    "Claim": "Claimen", 
    "Click here to upload a picture for your editor profile.": "Klik hier om een afbeelding voor je redactieprofiel te uploaden.", 
    "Click to choose all %s at once.": "Klik om alle %s te kiezen.", 
    "Click to remove all chosen %s at once.": "Klik om alle gekozen %s tegelijk te verwijderen.", 
    "Completing transaction...": "Transactie afronden...", 
    "Create Page": "Pagina Aanmaken", 
    "Create page": "Pagina aanmaken", 
    "December": "december", 
    "Delete this tag": "Deze tag verwijderen", 
    "Drag and drop your photo here or click to upload.": "Sleep je foto hierheen of klik om te uploaden.", 
    "Edit": "Bewerken", 
    "Editor profile": "Redactieprofiel", 
    "Enter the page title here": "Vul hier de paginatitel in", 
    "Enter your profile info": "Profielgegevens invoeren", 
    "Error: proposal not found. Please try submitting again.": "Fout: voorstel niet gevonden. Probeer opnieuw in te dienen.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia is net als Wikipedia, maar is veel eenvoudiger te bewerken en het is gemakkelijker om bij te dragen. Elke pagina is samengesteld uit een infoboxgebied voor korte beknopte feiten, een hoofdartikel geschreven in de derde persoon , een mediagalerij met foto's, video's, audio, enz. over het onderwerp, een lijst van verwijzingen naar webpagina's en bestanden die worden gebruikt als citaten in het artikel en infobox.", 
    "February": "februari", 
    "File uploaded successfully.": "Bestand succesvol ge\u00fcpload.", 
    "Filter": "Filter", 
    "Font Style": "Lettertype", 
    "Here you can add the main photo for the article.": "Hier kun je de algemene foto van het artikel toevoegen.", 
    "Hide": "Verbergen", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Als je al een Everipedia-artikel over jezelf hebt gemaakt, kun je er hier een link naar plaatsen.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Als je cryptocurrency\u2019s hebt, voeg hier dan de adressen van je wallet toe. Mensen kunnen aan je doneren als ze je werk waarderen! Als je geen wallet hebt, kun je er hier een krijgen: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' stijl='margin-right: 0px';' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a klasse='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img klasse='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin<a>", 
    "Infobox": "Infobox", 
    "Introduction": "Introductie", 
    "January": "januari", 
    "July": "juli", 
    "June": "juni", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Link naar andere Everipedia-pagina's", 
    "Link your Everipedia page": "Koppel je Everipedia-pagina", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Links naar Wikipedia-pagina's zijn om technische redenen niet toegestaan. Probeer het opnieuw.", 
    "Loading more activity, please wait...": "Meer activiteit laden, even geduld a.u.b...", 
    "Loading...": "Bezig met laden...", 
    "Main article body": "Algemene body van artikel", 
    "Main photo": "Algemene foto", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Zorg ervoor dat je je bronnen vermeldt bij het toevoegen van informatie aan de pagina door hier je links en bestanden toe te toevoegen, zodat je kunt laten zien waar de informatie vandaan komt.", 
    "March": "maart", 
    "May": "mei", 
    "Media": "Media", 
    "Media Gallery": "Mediagalerij", 
    "Midnight": "Middernacht", 
    "Next": "Volgende", 
    "No URL provided, please try again": "Er is geen URL opgegeven, probeer het opnieuw", 
    "Noon": "12 uur 's middags", 
    "Not Ready": "Niet Gereed", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Houd er rekening mee dat dat je zonder Brainpower geen bewerkingen kunt voorstellen. Je werk zal verloren gaan!", 
    "Note: You are %s hour ahead of server time.": [
      "Let op: U ligt %s uur voor ten opzichte van de server-tijd.", 
      "Let op: U ligt %s uren voor ten opzichte van de server-tijd."
    ], 
    "Note: You are %s hour behind server time.": [
      "Let op: U ligt %s uur achter ten opzichte van de server-tijd.", 
      "Let op: U ligt %s uren achter ten opzichte van de server-tijd."
    ], 
    "November": "november", 
    "Now": "Nu", 
    "October": "oktober", 
    "Please enter a description for the photo": "Vul een beschrijving van de foto in a.u.b.", 
    "Please provide a description for the link or file.": "Geef een beschrijving van de link of het bestand.", 
    "Please provide a more scholarly description.": "Geef een meer wetenschappelijke beschrijving, a.u.b.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Zet wat IQ in Brainpower voordat je verdergaat. Klik op OK om het Brainpower-managementscherm te openen in een nieuw tabblad. OPMERKING: Zorg ervoor dat pop-ups zijn ingeschakeld voor deze site, want je kunt een waarschuwing krijgen.", 
    "Pre": "Voor", 
    "Profile photo": "Profielfoto", 
    "Reference links": "Links naar bronnen", 
    "Remove": "Verwijderen", 
    "Remove all": "Verwijder alles", 
    "Save": "Opslaan", 
    "Save changes": "Wijzigingen opslaan", 
    "Search Everipedia": "Everipedia zoeken", 
    "Searching...": "Zoeken\u2026", 
    "September": "september", 
    "Show": "Tonen", 
    "Style": "Stijl", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "De pagina met redactieprofielen toont de pagina's die de gebruiker heeft bewerkt, de verwijzingen die ze naar een pagina hebben toegevoegd en de opmerkingen die ze hebben geplaatst.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "De infobox is ontworpen voor beknopte, korte feiten. Voorgestelde items verschijnen in de vervolgkeuzelijst afhankelijk van het geselecteerde onderwerp, maar elk type infobox kan worden toegevoegd.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dit is de lijst met beschikbare %s. U kunt kiezen uit een aantal door ze te selecteren in het vak hieronder en vervolgens op de \"Kiezen\" pijl tussen de twee lijsten te klikken.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dit is de lijst van de gekozen %s. Je kunt ze verwijderen door ze te selecteren in het vak hieronder en vervolgens op de \"Verwijderen\" pijl tussen de twee lijsten te klikken.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Deze link staat al op deze pagina, je kunt de linksamenvatting nog steeds bewerken om de informatie over EP te verbeteren!", 
    "Title": "Titel", 
    "To add an image or video to the article text, click the 'Media' button.": "Om een afbeelding of video aan de artikeltekst toe te voegen, klik je op de knop 'Media'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Om naar een andere Everipedia pagina te linken klik je op de knop 'Linkpagina' . Je kunt ook op '@' of '@' drukken tijdens het typen en er zal een dropdownmenu verschijnen. Probeer naar zoveel pagina's als nodig te linken om elke pagina zo rijk en informatief mogelijk te maken.", 
    "Today": "Vandaag", 
    "Tomorrow": "Morgen", 
    "Type into this box to filter down the list of available %s.": "Type in dit vak om te filteren in de lijst met beschikbare %s.", 
    "When you are done, click here to save your changes.": "Als je klaar bent, klik dan hier om je wijzigingen op te slaan.", 
    "When you are finished, click here to save your changes.": "Als je klaar bent, klik dan hier om je wijzigingen op te slaan.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Schrijf op objectieve wijze in de derde persoon en gebruik geen marketingtermen (exclusieve aanbiedingen, oncontroleerbare claims, etc). Dit is een encyclopedie, geen socialemediapagina.", 
    "Yesterday": "Gisteren", 
    "You can also create a new wiki article by clicking here.": "Je kunt ook een nieuw wiki-artikel aanmaken door hier te klikken.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Je hebt vandaag veel links geplaatst. Wacht even tot de community op je inhoud reageert. Nieuwe redacteurs mogen maximaal 250 inzendingen per dag plaatsen.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "U heeft een actie geselecteerd en heeft geen wijzigingen gemaakt op de individuele velden. U zoekt waarschijnlijk naar de Gaan knop in plaats van de Opslaan knop.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "U heeft een actie geselecteerd, maar heeft de wijzigingen op de individuele velden nog niet opgeslagen. Klik alstublieft op OK om op te slaan. U zult vervolgens de actie opnieuw moeten uitvoeren.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "U heeft niet opgeslagen wijzigingen op enkele indviduele velden. Als u nu een actie uitvoert zullen uw wijzigingen verloren gaan.", 
    "auth.logout": "auth.uitloggen", 
    "daysUpdated": "dagenBijgewerkt", 
    "hoursUpdated": "urenBijgewerkt", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutenBijgewerkt", 
    "one letter Friday\u0004F": "F", 
    "one letter Monday\u0004M": "M", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "S", 
    "one letter Thursday\u0004T": "T", 
    "one letter Tuesday\u0004T": "T", 
    "one letter Wednesday\u0004W": "W", 
    "paused": "gepauzeerd", 
    "reset": "reset", 
    "secondTenthsUpdated": "bijgewerkteTienden", 
    "secondsUpdated": "secondenBijgewerkt", 
    "started": "gestart", 
    "stopped": "gestopt", 
    "targetAchieved": "DoelBereikt"
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
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S", 
      "%Y/%m/%d %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%Y/%m/%d %H:%M:%S.%f", 
      "%d-%m-%Y %H.%M:%S", 
      "%d-%m-%y %H.%M:%S", 
      "%d/%m/%Y %H.%M:%S", 
      "%d/%m/%y %H.%M:%S", 
      "%d-%m-%Y %H.%M:%S.%f", 
      "%d-%m-%y %H.%M:%S.%f", 
      "%d/%m/%Y %H.%M:%S.%f", 
      "%d/%m/%y %H.%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%y %H:%M", 
      "%Y-%m-%d %H:%M", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%y %H:%M", 
      "%Y/%m/%d %H:%M", 
      "%d-%m-%Y %H.%M", 
      "%d-%m-%y %H.%M", 
      "%d/%m/%Y %H.%M", 
      "%d/%m/%y %H.%M", 
      "%d-%m-%Y", 
      "%d-%m-%y", 
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y/%m/%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y", 
      "%d-%m-%y", 
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j-n-Y H:i", 
    "SHORT_DATE_FORMAT": "j-n-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H.%M:%S", 
      "%H.%M:%S.%f", 
      "%H.%M", 
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


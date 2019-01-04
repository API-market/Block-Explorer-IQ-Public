

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
      "%(sel)s av %(cnt)s valgt", 
      "%(sel)s av %(cnt)s valgt"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "fRivillig Legg til din cryptocurrency lommebok adresser", 
    "(Optional) Enter your name, email, nationality, language, etc.": "fRivillig Skriv inn navn, e-post, nasjonalitet, spr\u00e5k, etc.", 
    "6 a.m.": "06:00", 
    "6 p.m.": "18:00", 
    "Add File": "Legg til fil", 
    "Add Link": "Legg til lenke", 
    "Add Links, Files, Etc.": "Legg til linker, filer, etc.", 
    "Add New Infobox": "Legge til nye Infoboks", 
    "Add Row": "Legg til rad", 
    "Add an additional description for this category": "Legg til en tilleggsbeskrivelse for denne kategorien", 
    "Add media to article text": "Legge til medier i Artikkeltekst", 
    "Added pictures will show up here.": "Lagt bilder vil dukke opp her.", 
    "Adding infobox item, please wait...": "Legger til tilgjengelig element, vent litt...", 
    "Adding, please wait...": "Legger til, vent litt...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "N\u00e5r du allerede har lagt til en kobling, fil eller bilde p\u00e5 siden, kan du sitere den ved \u00e5 klikke p\u00e5 knappen \"sitere\". Du kanne likeledes presse det ' ^ ' eller ' * ' keys n\u00e5r maskinskrivning og en dropdown burde komme.", 
    "April": "April", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Er du sikker p\u00e5 at du vil avslutte siden? Ulagrede endringer vil g\u00e5 tapt.", 
    "Article proposal submission failed!": "Artikkel forslag innlevering mislyktes!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "N\u00e5r du legger til koblinger og filer, vises de i delen referanse koblinger. Du kan redigere eller fjerne dem ogs\u00e5.", 
    "August": "August", 
    "Available %s": "Tilgjengelige %s", 
    "Back": "Tilbake", 
    "Cancel": "Avbryt", 
    "Choose": "Velg", 
    "Choose a Date": "Velg en dato", 
    "Choose a Time": "Velg et klokkeslett", 
    "Choose a time": "Velg et klokkeslett", 
    "Choose all": "Velg alle", 
    "Chosen %s": "Valgte %s", 
    "Cite": "Siter", 
    "Cite as verified editor": "Sitere som bekreftet redakt\u00f8r", 
    "Cite links, files, etc": "Sitere lenker, filer, etc", 
    "Cite my own knowledge / experience as a verified editor": "Sitere min egen kunnskap/erfaring som bekreftet redakt\u00f8r", 
    "Claim": "Henvendelse", 
    "Click here to upload a picture for your editor profile.": "Klikk her for \u00e5 laste opp et bilde for din redakt\u00f8r profil.", 
    "Click to choose all %s at once.": "Klikk for \u00e5 velge alle %s samtidig", 
    "Click to remove all chosen %s at once.": "Klikk for \u00e5 fjerne alle valgte %s samtidig", 
    "Completing transaction...": "Fullf\u00f8rer transaksjon...", 
    "Create Page": "Lag side", 
    "Create page": "Lag side", 
    "December": "Desember", 
    "Delete this tag": "Slette denne koden", 
    "Drag and drop your photo here or click to upload.": "Dra og slipp bildet her eller klikk for \u00e5 laste opp.", 
    "Edit": "Rediger", 
    "Editor profile": "Redakt\u00f8r profil", 
    "Enter the page title here": "Skriv inn sidetittelen her", 
    "Enter your profile info": "Angi profilinformasjon", 
    "Error: proposal not found. Please try submitting again.": "Feil: finner ikke forslag. Pr\u00f8v \u00e5 sende p\u00e5 nytt.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia er akkurat som Wikipedia, men mye enklere \u00e5 redigere og bidra. Hver side er sammensatt av et Infoboks omr\u00e5de for korte konsise fakta, en hoved artikkel skrevet i en n\u00f8ytral 3dje person anspent, en Media galleri med bilder, videoer, lyd etc om emnet, en liste over referanser til websider og filer som brukes som henvisninger i artikkelen og i fobox.", 
    "February": "Februar", 
    "File uploaded successfully.": "Filen er lastet opp.", 
    "Filter": "Filter", 
    "Font Style": "Fontstil", 
    "Here you can add the main photo for the article.": "Her kan du legge til hoved bildet for artikkelen.", 
    "Hide": "Skjul", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Hvis du allerede har opprettet en Everipedia artikkel om deg selv, kan du koble til den her.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Hvis du har noen cryptocurrencies, legger lommeboka adressene her. Folk kan donere til deg hvis de liker arbeidet ditt! Hvis du ikke har en lommebok, du kan f\u00e5 en her: < img class = ' userview-crypto-logo-helper ' src = ' https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg '/> < en class = ' helper-crypto-anker ' rel = ' nofollow ' target = ' _ blank ' href = ' https://www.coinbase.com/' > Bitcoin </a>, < img class = ' userview-crypto-logo-hjelper ' style = ' margin-h\u00f8yre: 0px; ' src = ' https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png '/> < a class = ' helper-crypto-anker ' rel = ' nofollow ' target = ' _ blank ' href = ' https://www.coinbase.com/' > Ethereum </a>, < img class = ' userview-crypto-logo-helper ' src = ' https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png '/> < en class = ' helper-crypto-anker ' rel = ' nofollow ' target = ' _ blank ' href = ' https://my.dogechain.info/#/overview ' > Dogecoin </a>", 
    "Infobox": "Infoboks", 
    "Introduction": "Introduksjon", 
    "January": "Januar", 
    "July": "Juli", 
    "June": "Juni", 
    "Link": "Lenke", 
    "Link to other Everipedia pages": "Koble til andre Everipedia-sider", 
    "Link your Everipedia page": "Link din Everipedia side", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Lenker til Wikipedia sider er ikke tillatt, av tekniske grunner. Vennligst pr\u00f8v igjen.", 
    "Loading more activity, please wait...": "Laster inn mer aktivitet, vent litt...", 
    "Loading...": "Laster\u2026", 
    "Main article body": "Hoved artikkel Body", 
    "Main photo": "Hoved Foto", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "S\u00f8rg for \u00e5 sitere kildene dine n\u00e5r du legger til informasjon p\u00e5 siden ved \u00e5 legge til koblinger og filer her, slik at du kan vise hvor informasjonen kommer fra.", 
    "March": "Mars", 
    "May": "Mai", 
    "Media": "Media", 
    "Media Gallery": "Mediagalleri", 
    "Midnight": "Midnatt", 
    "Next": "Neste", 
    "No URL provided, please try again": "Ingen URL gitt, vennligst pr\u00f8v igjen", 
    "Noon": "12:00", 
    "Not Ready": "Ikke klar", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Merk at du ikke vil kunne foresl\u00e5 endringer uten hjernekraft. Ditt arbeid vil g\u00e5 tapt!", 
    "Note: You are %s hour ahead of server time.": [
      "Merk: Du er %s time foran server-tid.", 
      "Merk: Du er %s timer foran server-tid."
    ], 
    "Note: You are %s hour behind server time.": [
      "Merk: Du er %s time bak server-tid.", 
      "Merk: Du er %s timer bak server-tid."
    ], 
    "November": "November", 
    "Now": "N\u00e5", 
    "October": "Oktober", 
    "Please enter a description for the photo": "Skriv inn en beskrivelse av bildet", 
    "Please provide a description for the link or file.": "Vennligst gi en beskrivelse av koblingen eller filen.", 
    "Please provide a more scholarly description.": "Vennligst gi en mer akademisk beskrivelse.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Vennligst stake noen IQ i hjernekraft f\u00f8r du fortsetter. Klikk OK for \u00e5 \u00e5pne vinduet hjernekraft behandling i en ny fane. Merk: Kontroller at popup-vinduer er aktivert for dette omr\u00e5det, siden du kan motta en advarsel.", 
    "Pre": "Pre", 
    "Profile photo": "Profilbilde", 
    "Reference links": "Referanse koblinger", 
    "Remove": "Slett", 
    "Remove all": "Fjern alle", 
    "Save": "Lagre", 
    "Save changes": "Lagre endringer", 
    "Search Everipedia": "S\u00f8k Everipedia", 
    "Searching...": "S\u00f8ker \u2026", 
    "September": "September", 
    "Show": "Vis", 
    "Style": "Stil", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Siden redakt\u00f8r profil viser sidene som brukeren har redigert, referanser de har lagt til p\u00e5 en side og kommentarer de har laget.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "De Infoboks er designet for konsise, raske fakta. Foresl\u00e5tte elementer vises i rullegardinlisten avhengig av det valgte emnet, men alle typer tilgjengelige kan legges til.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dette er listen over tilgjengelige %s. Du kan velge noen ved \u00e5 markere de i boksen under og s\u00e5 klikke p\u00e5 \"Velg\"-pilen mellom de to boksene.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dette er listen over valgte %s. Du kan fjerne noen ved \u00e5 markere de i boksen under og s\u00e5 klikke p\u00e5 \"Fjern\"-pilen mellom de to boksene.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Denne koblingen er allerede p\u00e5 denne siden, kan du fortsatt redigere link sammendraget \u00e5 forbedre informasjonen p\u00e5 EP!", 
    "Title": "Tittel", 
    "To add an image or video to the article text, click the 'Media' button.": "Du legger til et bilde eller en video i artikkelteksten ved \u00e5 klikke ' Media '-knappen.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Hvis du vil koble til en annen Everipedia side, klikker du knappen Koble side. Du kanne likeledes presse det ' @ ' eller n\u00f8kkel n\u00e5r maskinskrivning og en dropdown burde komme. Pr\u00f8v \u00e5 lenke til s\u00e5 mange sider som er n\u00f8dvendig for \u00e5 gj\u00f8re hver side s\u00e5 rik og informativ som mulig.", 
    "Today": "I dag", 
    "Tomorrow": "I morgen", 
    "Type into this box to filter down the list of available %s.": "Skriv i dette feltet for \u00e5 filtrere ned listen av tilgjengelige %s.", 
    "When you are done, click here to save your changes.": "N\u00e5r du er ferdig, klikker du her for \u00e5 lagre endringene.", 
    "When you are finished, click here to save your changes.": "N\u00e5r du er ferdig, klikker du her for \u00e5 lagre endringene.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Skriv p\u00e5 en objektiv m\u00e5te i tredje person anspent, ikke ta med noen markedsf\u00f8ring snakke (eksklusive tilbud, unverifiserbare krav etc). Dette er et leksikon, ikke en sosial media side.", 
    "Yesterday": "I g\u00e5r", 
    "You can also create a new wiki article by clicking here.": "Du kan ogs\u00e5 opprette en ny wiki-artikkel ved \u00e5 klikke her.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Du har v\u00e6rt innlegg mange linker i dag. Vent litt for samfunnet \u00e5 svare p\u00e5 innholdet. Nye redakt\u00f8rer er begrenset til oppslaget bare 250 Submissions en dag.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Du har valgt en handling, og har ikke gjort noen endringer i individuelle felter. Du ser mest sannsynlig etter G\u00e5-knappen, ikke Lagre-knappen.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Du har valgt en handling, men du har ikke lagret dine endringer i individuelle felter enda. Vennligst trykk OK for \u00e5 lagre. Du m\u00e5 utf\u00f8re handlingen p\u00e5 nytt.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Du har ulagrede endringer i individuelle felter. Hvis du utf\u00f8rer en handling, vil dine ulagrede endringer g\u00e5 tapt.", 
    "auth.logout": "Auth. varesymbol", 
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
    "paused": "pause", 
    "reset": "Nullstill", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "startet", 
    "stopped": "stoppet", 
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
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%d.%m.%y %H:%M:%S", 
      "%d.%m.%y %H:%M:%S.%f", 
      "%d.%m.%y %H:%M", 
      "%d.%m.%y"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%d.%m.%Y", 
      "%d.%m.%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
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


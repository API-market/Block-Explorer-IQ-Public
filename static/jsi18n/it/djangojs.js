

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
      "%(sel)s di %(cnt)s selezionato", 
      "%(sel)s di %(cnt)s selezionati"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Facoltativo) Aggiungi i tuoi wallet address", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Facoltativo) Inserire nome, indirizzo e-mail, nazionalit\u00e0, lingua, ecc.", 
    "6 a.m.": "6 del mattino", 
    "6 p.m.": "6 del pomeriggio", 
    "Add File": "Aggiungi File", 
    "Add Link": "Aggiungi link", 
    "Add Links, Files, Etc.": "Aggiungi link, file, ecc.", 
    "Add New Infobox": "Aggiungi nuovo Infobox", 
    "Add Row": "Aggiungi Riga", 
    "Add an additional description for this category": "Aggiungere una descrizione aggiuntiva per questa categoria", 
    "Add media to article text": "Aggiungei media al testo dell'articolo", 
    "Added pictures will show up here.": "Le immagini aggiunte verranno visualizzate qui.", 
    "Adding infobox item, please wait...": "Aggiunta di elementi infobox, attendere...", 
    "Adding, please wait...": "Aggiunta, attendere...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Dopo aver gi\u00e0 aggiunto un link, un file o un'immagine alla pagina, \u00e8 possibile citarlo facendo clic sul pulsante 'Cita'. \u00c8 anche possibile premere i tasti '^' o '*' durante la digitazione per far comparire un men\u00f9 a tendina.", 
    "April": "Aprile", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Sei sicuro di voler uscire dalla pagina? Le modifiche non salvate andranno perse.", 
    "Article proposal submission failed!": "Invio di proposta di articolo fallita!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Aggiungendo link e file, questi verranno visualizzati nella sezione Reference Links. \u00c8 anche possibile modificarli o rimuoverli.", 
    "August": "Agosto", 
    "Available %s": "%s disponibili", 
    "Back": "Indietro", 
    "Cancel": "Annulla", 
    "Choose": "Scegli", 
    "Choose a Date": "Scegli una data", 
    "Choose a Time": "Scegli un orario", 
    "Choose a time": "Scegli un orario", 
    "Choose all": "Scegli tutto", 
    "Chosen %s": "%s scelti", 
    "Cite": "Citazione", 
    "Cite as verified editor": "Cita come editor verificato", 
    "Cite links, files, etc": "Cita link, file, ecc.", 
    "Cite my own knowledge / experience as a verified editor": "Cita la mia conoscenza / esperienza come editore verificato", 
    "Claim": "Reclamo", 
    "Click here to upload a picture for your editor profile.": "Clicca qui per caricare una foto per il tuo profilo editor.", 
    "Click to choose all %s at once.": "Fai clic per scegliere tutti i %s in una volta.", 
    "Click to remove all chosen %s at once.": "Fai clic per eliminare tutti i %s in una volta.", 
    "Completing transaction...": "Completamento transazione...", 
    "Create Page": "Crea Pagina", 
    "Create page": "Crea Pagina", 
    "December": "Dicembre", 
    "Delete this tag": "Elimina questo tag", 
    "Drag and drop your photo here or click to upload.": "Trascina e rilascia la tua foto qui o clicca per caricarla.", 
    "Edit": "Modifica", 
    "Editor profile": "Profilo dell'editor", 
    "Enter the page title here": "Inserisci qui il titolo della pagina", 
    "Enter your profile info": "Inserisci le informazioni del tuo profilo", 
    "Error: proposal not found. Please try submitting again.": "Errore: proposta non trovata. Per favore riprova.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia \u00e8 proprio come Wikipedia, ma modificare e contribuire \u00e8 molto pi\u00f9 semplice. ogni pagina \u00e8 comopsta da un'area infobox per nozioni brevi e concise, un articolo principale scritto in modo neutrale in terza persona, una galleria multimediale di immagini, video, audio ecc. sull'argomento, una lista di riferimenti a pagine web e file utilizzati come citazioni nell'articolo e nell'infobox.", 
    "February": "Febbraio", 
    "File uploaded successfully.": "Il file \u00e8 stato caricato con successo", 
    "Filter": "Filtro", 
    "Font Style": "Stile Carattere", 
    "Here you can add the main photo for the article.": "Qui \u00e8 possibile aggiungere la foto principale per l'articolo.", 
    "Hide": "Nascondi", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Se hai gi\u00e0 creato un articolo Everipedia su di te, puoi linkarlo qui.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Se possedete criptocurrency, aggiungete qui gli indirizzi dei relativi wallet. Le persone possono donarti delle criptovalute se gradiscono il tuo lavoro! Se non si dispone di un portafoglio, \u00e8 possibile ottenerne uno qui: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='src' https://epcdn-vz.azureedge.net/static/images/ethereum-icon.'.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Introduzione", 
    "January": "Gennaio", 
    "July": "Luglio", 
    "June": "Giugno", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Collegamento ad altre pagine Everipedia", 
    "Link your Everipedia page": "Link alla tua pagina Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "I collegamenti alle pagine Wikipedia non sono consentiti, per motivi tecnici. Si prega di riprovare.", 
    "Loading more activity, please wait...": "Caricamento di altre attivit\u00e0, si prega di attendere...", 
    "Loading...": "Caricamento...", 
    "Main article body": "Corpo principale dell'articolo", 
    "Main photo": "Foto principale", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Assicurati di citare le tue fonti aggiungendo informazioni alla pagina, inserendo link e file qui in modo da poter mostrare la provenienza delle suddette informazioni.", 
    "March": "Marzo", 
    "May": "Maggio", 
    "Media": "Media", 
    "Media Gallery": "Media Gallery", 
    "Midnight": "Mezzanotte", 
    "Next": "Successivo", 
    "No URL provided, please try again": "Nessun URL fornito, riprovare", 
    "Noon": "Mezzogiorno", 
    "Not Ready": "Non Pronta", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Nota che non sarai in grado di proporre modifiche senza Brainpower. Il tuo lavoro andr\u00e0 perso!", 
    "Note: You are %s hour ahead of server time.": [
      "Nota: Sei %s ora in anticipo rispetto al server.", 
      "Nota: Sei %s ore in anticipo rispetto al server."
    ], 
    "Note: You are %s hour behind server time.": [
      "Nota: Sei %s ora in ritardo rispetto al server.", 
      "Nota: Sei %s ore in ritardo rispetto al server."
    ], 
    "November": "Novembre", 
    "Now": "Adesso", 
    "October": "Ottobre", 
    "Please enter a description for the photo": "Inserisci una descrizione per la foto", 
    "Please provide a description for the link or file.": "Fornire una descrizione del link o del file.", 
    "Please provide a more scholarly description.": "Si prega di fornire una descrizione pi\u00f9 accademica.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Per favore, investi degli IQ in Brainpower prima di continuare. Clicca oK per aprire la schermata di gestione della Brainpower in una nuova scheda. NOTA: Assicurati che i pop-up siano abilitati per questo sito, o potresti ricevere un messaggio di errore.", 
    "Pre": "Pre", 
    "Profile photo": "Foto del profilo", 
    "Reference links": "Riferimenti:", 
    "Remove": "Elimina", 
    "Remove all": "Elimina tutti", 
    "Save": "Salva", 
    "Save changes": "Salva modifiche", 
    "Search Everipedia": "Ricerca su Everipedia", 
    "Searching...": "Ricerca in corso\u2026", 
    "September": "Settembre", 
    "Show": "Mostra", 
    "Style": "Stile", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "La pagina del profilo dell'editor mostra gli articoli che l'utente ha modificato, i riferimenti che ha aggiunto a una pagina e i commenti che ha fatto.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "L'infobox \u00e8 progettato per nozioni rapide e concise. Gli elementi suggeriti appaiono nella tendina a seconda dell'argomento selezionato, ma \u00e8 possibile aggiungere qualsiasi tipo di infobox.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Questa \u00e8 la lista dei %s disponibili. Puoi sceglierne alcuni selezionandoli nella casella qui sotto e poi facendo clic sulla freccia \"Scegli\" tra le due caselle.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Questa \u00e8 la lista dei %s scelti. Puoi eliminarne alcuni selezionandoli nella casella qui sotto e poi facendo clic sulla freccia \"Elimina\" tra le due caselle.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Questo link \u00e8 gi\u00e0 presente in questa pagina, ma puoi modificare l'elenco dei link per migliorare l'informazione su EP!", 
    "Title": "Titolo", 
    "To add an image or video to the article text, click the 'Media' button.": "Per aggiungere un'immagine o un video al testo dell'articolo, fare clic sul pulsante 'Media'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Per linkare un'altra pagina Everipedia fare clic sul pulsante 'Linka Pagina'. \u00c8 anche possibile premere il tasto '@' o '' quando si digita per far apparire un men\u00f9 a tendina. Si cerchi di linkare quante pi\u00f9 pagine necessarie per rendere ogni pagina quanto pi\u00f9 ricca di informazioni.", 
    "Today": "Oggi", 
    "Tomorrow": "Domani", 
    "Type into this box to filter down the list of available %s.": "Scrivi in questa casella per filtrare l'elenco dei %s disponibili.", 
    "When you are done, click here to save your changes.": "Al termine, fare clic qui per salvare le modifiche.", 
    "When you are finished, click here to save your changes.": "Al termine, fare clic qui per salvare le modifiche.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Scrivere in modo obiettivo e in terza persona, senza utilizzare frasi tipiche di marketing (offerte esclusive, reclami non verificabili, ecc.). Questa \u00e8 un'enciclopedia, non un social media.", 
    "Yesterday": "Ieri", 
    "You can also create a new wiki article by clicking here.": "Puoi anche creare un nuovo articolo wiki cliccando qui.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Oggi ha pubblicato molti link. Aspetta un minuto per permettere alla comunit\u00e0 di rispondere ai tuoi contenuti. I nuovi sono limitati alla pubblicazione di soli 250 contributi al giorno.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Hai selezionato un'azione, e non hai ancora apportato alcuna modifica a campi singoli. Probabilmente stai cercando il pulsante Go, invece di Save.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Hai selezionato un'azione, ma non hai ancora salvato le modifiche apportate a campi singoli. Fai clic su OK per salvare. Poi dovrai ri-eseguire l'azione.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Ci sono aggiornamenti non salvati su singoli campi modificabili. Se esegui un'azione, le modifiche non salvate andranno perse.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "V", 
    "one letter Monday\u0004M": "L", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "D", 
    "one letter Thursday\u0004T": "G", 
    "one letter Tuesday\u0004T": "Ma", 
    "one letter Wednesday\u0004W": "Me", 
    "paused": "paused", 
    "reset": "reset", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "started", 
    "stopped": "stopped", 
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
    "DATETIME_FORMAT": "l d F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%Y", 
      "%d-%m-%y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M", 
      "%d-%m-%y"
    ], 
    "DATE_FORMAT": "d F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%Y/%m/%d", 
      "%d-%m-%Y", 
      "%Y-%m-%d", 
      "%d-%m-%y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j/F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i", 
    "SHORT_DATE_FORMAT": "d/m/Y", 
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


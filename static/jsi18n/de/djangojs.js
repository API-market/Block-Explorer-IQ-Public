

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
      "%(sel)s von %(cnt)s ausgew\u00e4hlt", 
      "%(sel)s von %(cnt)s ausgew\u00e4hlt"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Optional) F\u00fcgen Sie Ihre Krypto-Coin Wallet-Adressen hinzu.", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Optional) Geben Sie Ihren Namen, Ihre E-Mail-Adresse, Ihre Nationalit\u00e4t, Ihre Sprache usw. ein.", 
    "6 a.m.": "6 Uhr", 
    "6 p.m.": "18 Uhr", 
    "Add File": "Datei hinzuf\u00fcgen", 
    "Add Link": "Link hinzuf\u00fcgen", 
    "Add Links, Files, Etc.": "Hinzuf\u00fcgen von Links, Dateien, etc.", 
    "Add New Infobox": "Neue Infobox hinzuf\u00fcgen", 
    "Add Row": "Zeile hinzuf\u00fcgen", 
    "Add an additional description for this category": "Eine zus\u00e4tzliche Beschreibung f\u00fcr diese Kategorie hinzuf\u00fcgen", 
    "Add media to article text": "Medien zum Artikeltext hinzuf\u00fcgen", 
    "Added pictures will show up here.": "Hinzugef\u00fcgte Bilder werden hier angezeigt.", 
    "Adding infobox item, please wait...": "Infoboxartikel wird hinzugef\u00fcgt, bitte warten....", 
    "Adding, please wait...": "Hinzuf\u00fcgen, bitte warten....", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Nachdem Sie der Seite bereits einen Link, eine Datei oder ein Bild hinzugef\u00fcgt haben, k\u00f6nnen Sie diese zitieren, indem Sie auf die Schaltfl\u00e4che \"Zitieren\" klicken. Sie k\u00f6nnen auch die Tasten'^' oder'*' dr\u00fccken, wenn Sie schreiben und ein Dropdown-Men\u00fc sollte erscheinen.", 
    "April": "April", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Sind Sie sicher, dass Sie die Seite verlassen wollen? Nicht gespeicherte \u00c4nderungen gehen verloren.", 
    "Article proposal submission failed!": "Artikelvorschlag fehlgeschlagen!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Wenn Sie Links und Dateien hinzuf\u00fcgen, werden diese im Abschnitt \"Querverweise\" angezeigt. Sie k\u00f6nnen diese auch bearbeiten oder entfernen.", 
    "August": "August", 
    "Available %s": "Verf\u00fcgbare %s", 
    "Back": "Zur\u00fcck", 
    "Cancel": "Abbrechen", 
    "Choose": "Ausw\u00e4hlen", 
    "Choose a Date": "Datum w\u00e4hlen", 
    "Choose a Time": "Uhrzeit w\u00e4hlen", 
    "Choose a time": "Uhrzeit", 
    "Choose all": "Alle ausw\u00e4hlen", 
    "Chosen %s": "Ausgew\u00e4hlte %s", 
    "Cite": "Zitieren", 
    "Cite as verified editor": "Als verifizierter Redakteur zitieren", 
    "Cite links, files, etc": "Links, Dateien, etc. zitieren", 
    "Cite my own knowledge / experience as a verified editor": "Eigenes Wissen / Erfahrung als verifizierter Redakteur zitieren", 
    "Claim": "Anspruch", 
    "Claim Rewards": "Belohnungen einfordern", 
    "Click here to upload a picture for your editor profile.": "Klicken Sie hier, um ein Bild f\u00fcr Ihr Redakteursprofil hochzuladen.", 
    "Click to choose all %s at once.": "Klicken, um alle %s auf einmal auszuw\u00e4hlen.", 
    "Click to remove all chosen %s at once.": "Klicken, um alle ausgew\u00e4hlten %s auf einmal zu entfernen.", 
    "Completing transaction...": "Transaktion abschlie\u00dfen....", 
    "Connect Languages": "Sprachen verbinden", 
    "Create Page": "Seite erstellen", 
    "Create page": "Seite erstellen", 
    "December": "Dezember", 
    "Delete this tag": "Diesen Tag l\u00f6schen", 
    "Drag and drop your photo here or click to upload.": "Ziehen Sie Ihr Foto hierher oder klicken Sie zum Hochladen.", 
    "Edit": "Bearbeiten", 
    "Editor profile": "Redakteur-Profil", 
    "Enter the page title here": "Geben Sie hier den Seitentitel ein", 
    "Enter your profile info": "Geben Sie Ihre Profilinfo ein", 
    "Error: proposal not found. Please try submitting again.": "Fehler: Vorschlag nicht gefunden. Bitte versuchen Sie es erneut.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia ist wie Wikipedia, aber viel einfacher zu bearbeiten und beizutragen. Jede Seite besteht aus einem Infobox-Bereich f\u00fcr kurze, pr\u00e4gnante Fakten, einem Hauptartikel in einer neutralen 3. Person, einer Mediengalerie mit Bildern, Videos, Audio etc. zum Thema, einer Liste von Verweisen auf Webseiten und Dateien, die als Zitate im Artikel und in der Infobox verwendet werden.", 
    "February": "Februar", 
    "File uploaded successfully.": "Datei erfolgreich hochgeladen", 
    "Filter": "Filter", 
    "Font Style": "Schriftart", 
    "Help": "Hilfe", 
    "Here you can add the main photo for the article.": "Hier k\u00f6nnen Sie das Hauptfoto zum Artikel hinzuf\u00fcgen.", 
    "Hide": "Ausblenden", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Wenn Sie bereits einen Everipedia-Artikel \u00fcber sich selbst erstellt haben, k\u00f6nnen Sie ihn hier verlinken.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Wenn Sie irgendwelche Krypto-W\u00e4hrungen haben, f\u00fcgen Sie hier die Wallet-Adressen hinzu. Menschen k\u00f6nnen an Sie spenden, wenn ihnen Ihre Arbeit gef\u00e4llt! Wenn Sie kein Wallet haben, k\u00f6nnen Sie hier eine bekommen: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-cryptoanchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Einf\u00fchrung", 
    "January": "Januar", 
    "July": "Juli", 
    "June": "Juni", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Link zu anderen Everipedia-Seiten", 
    "Link your Everipedia page": "Verlinken Sie Ihre Everipedia-Seite", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Links auf Wikipedia-Seiten sind aus technischen Gr\u00fcnden nicht erlaubt. Bitte versuchen Sie es erneut.", 
    "Loading more activity, please wait...": "Mehr Aktivit\u00e4t laden, bitte warten....", 
    "Loading...": "L\u00e4dt ...", 
    "Main article body": "Hauptartikelk\u00f6rper", 
    "Main photo": "Hauptfoto", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Stellen Sie sicher, dass Sie Ihre Quellen angeben, wenn Sie der Seite Informationen hinzuf\u00fcgen, indem Sie hier Links und Dateien hinzuf\u00fcgen, damit Sie zeigen k\u00f6nnen, woher die Informationen kommen.", 
    "March": "M\u00e4rz", 
    "May": "Mai", 
    "Media": "Medien", 
    "Media Gallery": "Medien-Galerie", 
    "Merge": "Seite zusammenf\u00fchren", 
    "Midnight": "Mitternacht", 
    "Next": "Weiter", 
    "No URL provided, please try again": "Keine URL angegeben, bitte versuchen Sie es erneut.", 
    "Noon": "Mittag", 
    "Not Ready": "Nicht bereit", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Beachten Sie, dass Sie ohne Brainpower keine \u00c4nderungen vorschlagen k\u00f6nnen. Ihre Arbeit wird verloren gehen!", 
    "Note: You are %s hour ahead of server time.": [
      "Achtung: Sie sind %s Stunde der Serverzeit vorraus.", 
      "Achtung: Sie sind %s Stunden der Serverzeit vorraus."
    ], 
    "Note: You are %s hour behind server time.": [
      "Achtung: Sie sind %s Stunde hinter der Serverzeit.", 
      "Achtung: Sie sind %s Stunden hinter der Serverzeit."
    ], 
    "November": "November", 
    "Now": "Jetzt", 
    "October": "Oktober", 
    "Please enter a description for the photo": "Bitte geben Sie eine Beschreibung f\u00fcr das Foto ein.", 
    "Please provide a description for the link or file.": "Bitte geben Sie eine Beschreibung f\u00fcr den Link oder die Datei an.", 
    "Please provide a more scholarly description.": "Bitte geben Sie eine wissenschaftlichere Beschreibung an.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Bitte stecken Sie etwas IQ in Brainpower, bevor Sie fortfahren. Klicken Sie auf OK, um das Fenster Brainpower-Management in einer neuen Registerkarte zu \u00f6ffnen. HINWEIS: Bitte stellen Sie sicher, dass Popups f\u00fcr diese Website aktiviert sind, da Sie m\u00f6glicherweise eine Warnung erhalten.", 
    "Pre": "Zur\u00fcck", 
    "Profile photo": "Profilbild", 
    "Reference links": "Querverweise", 
    "Remove": "Entfernen", 
    "Remove all": "Alle entfernen", 
    "Save": "Speichern", 
    "Save changes": "\u00c4nderungen speichern", 
    "Search Everipedia": "In Everipedia suchen", 
    "Searching...": "Sucht...", 
    "September": "September", 
    "Show": "Einblenden", 
    "Style": "Stil", 
    "Submit": "Senden", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Die Profilseite des Redakteurs zeigt die Seiten, die der Benutzer bearbeitet hat, Verweise, die er zu einer Seite hinzugef\u00fcgt hat, und Kommentare, die er gemacht hat.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Die Infobox ist f\u00fcr pr\u00e4gnante, schnelle Fakten konzipiert. Die vorgeschlagenen Elemente werden je nach ausgew\u00e4hltem Thema in der Dropdown-Liste angezeigt, es k\u00f6nnen jedoch alle Arten von Infoboxen hinzugef\u00fcgt werden.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Dies ist die Liste der verf\u00fcgbaren %s. Einfach im unten stehenden Feld markieren und mithilfe des \"Ausw\u00e4hlen\"-Pfeils ausw\u00e4hlen.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Dies ist die Liste der ausgew\u00e4hlten %s. Einfach im unten stehenden Feld markieren und mithilfe des \"Entfernen\"-Pfeils wieder entfernen.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Dieser Link ist bereits auf dieser Seite, Sie k\u00f6nnen die Link\u00fcbersicht noch bearbeiten, um die Informationen auf EP zu verbessern!", 
    "Title": "Titel", 
    "To add an image or video to the article text, click the 'Media' button.": "Um dem Artikeltext ein Bild oder Video hinzuzuf\u00fcgen, klicken Sie auf die Schaltfl\u00e4che \"Medien\".", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Um auf eine andere Everipedia-Seite zu verlinken, klicken Sie auf die Schaltfl\u00e4che 'Seite verlinken'. Sie k\u00f6nnen auch die Taste '@' oder die Taste dr\u00fccken, wenn Sie schreiben und ein Dropdown-Men\u00fc sollte erscheinen. Versuchen Sie, so viele Seiten wie n\u00f6tig zu verlinken, um jede Seite so reichhaltig und informativ wie m\u00f6glich zu gestalten.", 
    "Today": "Heute", 
    "Tomorrow": "Morgen", 
    "Type into this box to filter down the list of available %s.": "Durch Eingabe in diesem Feld l\u00e4sst sich die Liste der verf\u00fcgbaren %s eingrenzen.", 
    "When you are done, click here to save your changes.": "Wenn Sie fertig sind, klicken Sie hier, um Ihre \u00c4nderungen zu speichern.", 
    "When you are finished, click here to save your changes.": "Wenn Sie fertig sind, klicken Sie hier, um Ihre \u00c4nderungen zu speichern.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Schreiben Sie in einer objektiven Art und Weise in der dritten Person, verwenden Sie keine Marketing-Sprache (exklusive Angebote, nicht \u00fcberpr\u00fcfbare Anspr\u00fcche usw.). Dies ist eine Enzyklop\u00e4die, keine Social Media Seite.", 
    "Yesterday": "Gestern", 
    "You can also create a new wiki article by clicking here.": "Sie k\u00f6nnen einen neuen Wiki-Artikel auch erstellen, indem Sie hier klicken.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Sie haben heute viele Links ver\u00f6ffentlicht. Warten Sie ein wenig, bis die Community auf Ihre Inhalte reagiert. Neue Redakteure sind auf 250 Beitr\u00e4ge pro Tag beschr\u00e4nkt.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Sie haben eine Aktion ausgew\u00e4hlt, aber keine \u00c4nderungen an bearbeitbaren Feldern vorgenommen. Sie wollten wahrscheinlich auf \"Ausf\u00fchren\" und nicht auf \"Speichern\" klicken.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Sie haben eine Aktion ausgew\u00e4hlt, aber ihre vorgenommenen \u00c4nderungen nicht gespeichert. Klicken Sie OK, um dennoch zu speichern. Danach m\u00fcssen Sie die Aktion erneut ausf\u00fchren.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Sie haben \u00c4nderungen an bearbeitbaren Feldern vorgenommen und nicht gespeichert. Wollen Sie die Aktion trotzdem ausf\u00fchren und Ihre \u00c4nderungen verwerfen?", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "Fr", 
    "one letter Monday\u0004M": "Mo", 
    "one letter Saturday\u0004S": "Sa", 
    "one letter Sunday\u0004S": "So", 
    "one letter Thursday\u0004T": "Do", 
    "one letter Tuesday\u0004T": "Di", 
    "one letter Wednesday\u0004W": "Mi", 
    "paused": "pausiert", 
    "reset": "Zur\u00fccksetzen", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "gestartet", 
    "stopped": "gestoppt", 
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


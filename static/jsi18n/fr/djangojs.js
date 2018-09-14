

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n > 1);
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
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9", 
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9s"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Facultatif) Ajouter les adresses de votre portefeuille de crypto monnaie ", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Facultatif) Saisissez votre nom, votre adresse \u00e9lectronique, votre nationalit\u00e9, votre langue, etc.", 
    "6 a.m.": "6:00", 
    "6 p.m.": "18:00", 
    "Add File": "Ajouter un fichier", 
    "Add Link": "Ajouter un lien", 
    "Add Links, Files, Etc.": "Ajouter des Liens, des Fichiers, Etc.", 
    "Add New Infobox": "Ajouter un Nouvel El\u00e9ment Infobox", 
    "Add Row": "Ajouter une Ligne", 
    "Add an additional description for this category": "Ajouter une description suppl\u00e9mentaire pour cette cat\u00e9gorie", 
    "Add media to article text": "Ajouter un m\u00e9dia au texte de l'article", 
    "Added pictures will show up here.": "Les images ajout\u00e9es appara\u00eetront \u00e0 cet emplacement.", 
    "Adding infobox item, please wait...": "Ajout d'un \u00e9l\u00e9ment infobox, veuillez patienter......", 
    "Adding, please wait...": "Ajout en cours, veuillez patienter.....", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Apr\u00e8s avoir ajout\u00e9 un lien, un fichier ou une image sur la page, vous pouvez citer cet \u00e9l\u00e9ment en cliquant sur le bouton 'Citer'. Vous pouvez \u00e9galement appuyer sur les touches '^' ou '*' lors de la saisie pour faire appara\u00eetre un menu d\u00e9roulant.", 
    "April": "Avril", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Voulez -vous vraiment quitter la page ? Les modifications non sauvegard\u00e9es seront perdues.", 
    "Are you sure you want to remove this link?": "Voulez-vous vraiment supprimer ce lien?", 
    "Article proposal submission failed!": "L\u2019envoi de la proposition d'article n\u2019a pas \u00e9t\u00e9 effectu\u00e9 !", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Quand vous ajouterez  des liens et des fichiers, ils appara\u00eetront dans la section Liens de r\u00e9f\u00e9rence. Vous aurez \u00e9galement la possibilit\u00e9 de les modifier ou de les supprimer.", 
    "August": "Ao\u00fbt", 
    "Available %s": "%s disponible(s)", 
    "Back": "Retour", 
    "Cancel": "Annuler", 
    "Choose": "Choisir", 
    "Choose a Date": "Choisir une date", 
    "Choose a Time": "Choisir une heure", 
    "Choose a time": "Choisir une heure", 
    "Choose all": "Tout choisir", 
    "Chosen %s": "Choix des \u00ab\u00a0%s \u00bb", 
    "Cite": "Citer", 
    "Cite as verified editor": "Citer comme r\u00e9dacteur v\u00e9rifi\u00e9", 
    "Cite links, files, etc": "Citer les liens, les fichiers, etc.", 
    "Cite my own knowledge / experience as a verified editor": "Citer mes propres connaissances/ mon exp\u00e9rience comme r\u00e9dacteur v\u00e9rifi\u00e9.", 
    "Claim": "R\u00e9cup\u00e9rer", 
    "Click here to upload a picture for your editor profile.": "Cliquez ici pour t\u00e9l\u00e9charger une photo pour votre profil de r\u00e9dacteur.", 
    "Click to choose all %s at once.": "Cliquez pour choisir tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.", 
    "Click to remove all chosen %s at once.": "Cliquez pour enlever tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.", 
    "Completing transaction...": "Transaction en cours...", 
    "Create Page": "Cr\u00e9er une page", 
    "Create page": "Cr\u00e9er une page", 
    "December": "D\u00e9cembre", 
    "Delete this tag": "Supprimer cette balise", 
    "Drag and drop your photo here or click to upload.": "Faites glisser votre photo et placez-la ici ou cliquez pour la t\u00e9l\u00e9charger.", 
    "Edit": "Modifier", 
    "Editor profile": "Profil du R\u00e9dacteur", 
    "Enter the page title here": "Saisissez le titre de la page \u00e0 cet emplacement", 
    "Enter your profile info": "Saisissez les informations de votre profil", 
    "Error: proposal not found. Please try submitting again.": "Erreur : proposition introuvable. Veuillez essayer de l\u2019envoyer \u00e0 nouveau.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia fonctionne comme Wikipedia mais il permet d\u2019\u00e9diter les articles et  de contribuer beaucoup plus facilement. Chaque page est inclut une zone infobox qui permet  de saisir des faits concis, un article principal r\u00e9dig\u00e9 de mani\u00e8re neutre \u00e0 la 3\u00e8me personne, une galerie d\u2019\u00e9l\u00e9ments photo, vid\u00e9o, audio, etc. qui sont consacr\u00e9s au sujet abord\u00e9, une liste de r\u00e9f\u00e9rences qui indiquent les pages web et les fichiers qui sont cit\u00e9s dans l'article et dans l'infobox.", 
    "February": "F\u00e9vrier", 
    "File uploaded successfully": "Le fichier a bien \u00e9t\u00e9 t\u00e9l\u00e9charg\u00e9 ", 
    "File uploaded successfully.": "Le fichier a bien \u00e9t\u00e9 t\u00e9l\u00e9charg\u00e9 ", 
    "Filter": "Filtrer", 
    "Font Style": "Style de Police", 
    "Formats": "Formats", 
    "Here you can add the main photo for the article.": "Vous pouvez ajouter la photo principale de l'article ici.", 
    "Hide": "Masquer", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Si vous avez d\u00e9j\u00e0 cr\u00e9\u00e9 un article consacr\u00e9 \u00e0 votre profil sur Everipedia, vous pouvez ajouter le lienqui permet d\u2019y acc\u00e9der \u00e0 cet emplacement.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Si vous utilisez des crypto monnaies, vous pouvez ajouter les adresses de votre portefeuille \u00e0 cet emplacement. Les gens peuvent vous faire un don s'ils appr\u00e9cient votre travail ! Si vous ne poss\u00e9dez pas encore de portefeuille, vous pouvez en obtenir un ici : <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>a>, <img class='userview-crypto-logo-helper' style='margin-right : 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/>a class='helper-crypto-anchor' rel='nofollow' target='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>>Dogecoin</a>>.", 
    "Infobox": " Infobox ", 
    "Introduction": "Introduction", 
    "January": "Janvier", 
    "July": "Juillet", 
    "June": "Juin", 
    "Link": "Lien", 
    "Link to other Everipedia pages": "Lien vers d'autres pages Everipedia", 
    "Link your Everipedia page": "Cr\u00e9er le lien de votre page Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Les liens vers les pages de Wikipedia ne sont pas autoris\u00e9s, pour des raisons techniques. Veuillez r\u00e9essayer.", 
    "Loading more activity, please wait...": "Chargement d'activit\u00e9 suppl\u00e9mentaire, veuillez patienter.....", 
    "Loading...": "Chargement...", 
    "Main article body": "Corps du texte", 
    "Main photo": "Photo principale", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Nous vous conseillons de toujours citer vos sources lorsque vous ajoutez des informations sur la page en ajoutant des liens et des fichiers \u00e0 cet emplacement pour indiquer la provenance des informations.", 
    "March": "Mars", 
    "May": "Mai", 
    "Media": "M\u00e9dia", 
    "Media Gallery": "Galerie Multim\u00e9dia", 
    "Merging...": "Recherche en cours...", 
    "Midnight": "Minuit", 
    "Next": "Suivant", 
    "No URL provided, please try again": "Aucune URL n'est incluse, veuillez r\u00e9essayer.", 
    "Noon": "Midi", 
    "Not Ready": "Pas pr\u00eat", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Sachez que vous ne pourrez pas proposer des modifications sans Brainpower. Votre travail ne sera pas sauvegard\u00e9 !", 
    "Note: You are %s hour ahead of server time.": [
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heure.", 
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heures."
    ], 
    "Note: You are %s hour behind server time.": [
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heure.", 
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heures."
    ], 
    "November": "Novembre", 
    "Now": "Maintenant", 
    "October": "Octobre", 
    "Please enter a description for the photo": "Veuillez saisir une description pour la photo.", 
    "Please enter a headline": "Veuillez saisir un titre", 
    "Please provide a description for the link or file.": "Veuillez fournir une description du lien ou du fichier.", 
    "Please provide a more scholarly description.": "Veuillez fournir une description plus savante.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "S'il vous pla\u00eet, misez un peu de QI dans Brainpower avant de continuer. Cliquez sur OK pour ouvrir l'\u00e9cran de Gestion de Brainpower dans un nouvel onglet. NOTE : Veuillez vous assurer que les popups sont autoris\u00e9s pour ce site, car vous pourriez recevoir un avertissement.", 
    "Posting comment, please wait..": "Publication du commentaire en cours, veuillez patienter...", 
    "Posting reply, please wait..": "Publication de la r\u00e9ponse en cours, veuillez patienter...", 
    "Pre": "Pre", 
    "Profile photo": "Photo du profil", 
    "Reference links": "Liens de r\u00e9f\u00e9rence", 
    "Remove": "Enlever", 
    "Remove all": "Tout enlever", 
    "Save": "Sauvegarder", 
    "Save changes": "Sauvegarder les modifications", 
    "Search Everipedia": "Rechercher  Sur Everipedia", 
    "Searching...": "Recherche en cours...", 
    "September": "Septembre", 
    "Show": "Afficher", 
    "Style": "Style", 
    "Submission Successful!": "L\u2019envoi de la proposition a bien \u00e9t\u00e9 effectu\u00e9!", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "La page du profil du r\u00e9dacteur indique les pages que l'utilisateur a \u00e9dit\u00e9es, les r\u00e9f\u00e9rences qu'il a ajout\u00e9es sur des pages et les commentaires qu'il a publi\u00e9s.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "L'infobox permet de saisir des faits concis. Les suggestions apparaissent dans la liste d\u00e9roulante en fonction du sujet s\u00e9lectionn\u00e9, mais il est possible d\u2019ajouter tout type d'infobox.", 
    "This comment is already on this page. Please try again!": "Ce commentaire a d\u00e9j\u00e0 \u00e9t\u00e9 publi\u00e9 sur cette page. Veuillez r\u00e9essayer !", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ceci est une liste des \u00ab\u00a0%s\u00a0\u00bb disponibles. Vous pouvez en choisir en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab\u00a0Choisir\u00a0\u00bb entre les deux zones.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ceci est la liste des \u00ab\u00a0%s\u00a0\u00bb choisi(e)s. Vous pouvez en enlever en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab Enlever \u00bb entre les deux zones.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Ce lien se trouve d\u00e9j\u00e0 sur cette page, vous pouvez toujours \u00e9diter le r\u00e9sum\u00e9 du lien pour am\u00e9liorer l'information sur EP !", 
    "Title": "Titre", 
    "To add an image or video to the article text, click the 'Media' button.": "Pour ajouter une image ou une vid\u00e9o au texte de l'article, cliquez sur le bouton 'M\u00e9dia'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Pour cr\u00e9er un lien vers une autre page Everipedia, cliquez sur le bouton 'Lier la page'. Vous pouvez \u00e9galement appuyer sur la touche '@' ou'@' au cours de votre saisie pour faire appara\u00eetre un menu d\u00e9roulant. Nous vous recommandons de  cr\u00e9er autant de liens que possible pour compl\u00e9ter efficacement les informations contenues sur chaque page.", 
    "Today": "Aujourd'hui", 
    "Tomorrow": "Demain", 
    "Type into this box to filter down the list of available %s.": "\u00c9crivez dans cette zone pour filtrer la liste des \u00ab\u00a0%s\u00a0\u00bb disponibles.", 
    "When you are done, click here to save your changes.": "Lorsque vous avez termin\u00e9, vous pouvez cliquer ici pour sauvegarder vos modifications.", 
    "When you are finished, click here to save your changes.": "Lorsque vous avez termin\u00e9, cliquez ici pour sauvegarder vos modifications.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "R\u00e9digez votre texte \u00e0 la troisi\u00e8me personne de mani\u00e8re objective, votre document ne doit pas  contenir de jargon marketing (offres exclusives, affirmations inv\u00e9rifiables, etc). Il s'agit d'une encyclop\u00e9die et non pas de la page d\u2019un r\u00e9seau social.", 
    "Yesterday": "Hier", 
    "You can also create a new wiki article by clicking here.": "Vous pouvez \u00e9galement cr\u00e9er un nouvel article wiki en cliquant ici.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Vous avez post\u00e9 un grand nombre de liens aujourd'hui. Patientez pour que la communaut\u00e9  puisse r\u00e9pondre \u00e0 votre contenu. Les nouveaux r\u00e9dacteurs ne peuvent pas poster plus de 250 propositions par jour.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vous avez s\u00e9lectionn\u00e9 une action, et vous n'avez fait aucune modification sur des champs. Vous cherchez probablement le bouton Envoyer et non le bouton Sauvegarder.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vous avez s\u00e9lectionn\u00e9 une action, mais vous n'avez pas encore sauvegard\u00e9 certains champs modifi\u00e9s. Cliquez sur OK pour sauver. Vous devrez r\u00e9appliquer l'action.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vous avez des modifications non sauvegard\u00e9es sur certains champs \u00e9ditables. Si vous lancez une action, ces modifications vont \u00eatre perdues.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "joursActualis\u00e9s", 
    "hoursUpdated": "heuresActualis\u00e9es", 
    "js_sdk_force_status_on_load": "status_js_sdk_force_en_chargement", 
    "minutesUpdated": "minutesActualis\u00e9es", 
    "one letter Friday\u0004F": "V", 
    "one letter Monday\u0004M": "L", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "D", 
    "one letter Thursday\u0004T": "J", 
    "one letter Tuesday\u0004T": "M", 
    "one letter Wednesday\u0004W": "M", 
    "paused": "mis en pause", 
    "reset": "r\u00e9initialiser", 
    "secondTenthsUpdated": "Dixi\u00e8mesdesecondesActualis\u00e9s", 
    "secondsUpdated": "secondesActualis\u00e9es", 
    "started": "d\u00e9marr\u00e9", 
    "stopped": "arr\u00eat\u00e9", 
    "targetAchieved": "objectifAtteint"
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
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j N Y H:i", 
    "SHORT_DATE_FORMAT": "j N Y", 
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


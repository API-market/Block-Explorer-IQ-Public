

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
      "%(sel)s din %(cnt)s selectate", 
      "%(sel)s din %(cnt)s selectate", 
      "de %(sel)s din %(cnt)s selectate"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Op\u021bional) Ad\u0103uga\u021bi adresele pentru portofelul de criptare", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Op\u021bional) Introduce\u021bi-v\u0103 numele, adresa de email, na\u021bionalitatea, limba, etc.", 
    "6 a.m.": "6 a.m.", 
    "6 p.m.": "6 p.m.", 
    "Add File": "Adauga fisier", 
    "Add Link": "Adaug\u0103 Link", 
    "Add Links, Files, Etc.": "Ad\u0103uga\u021bi leg\u0103turi, fi\u0219iere etc.", 
    "Add New Infobox": "Ad\u0103uga\u021bi Infobox nou", 
    "Add Row": "Ad\u0103uga\u021bi r\u00e2nd", 
    "Add an additional description for this category": "Ad\u0103uga\u021bi o descriere suplimentar\u0103 pentru aceast\u0103 categorie", 
    "Add media to article text": "Ad\u0103uga\u021bi materiale media \u00een textul articolului", 
    "Added pictures will show up here.": "Imaginile ad\u0103ugate vor ap\u0103rea aici.", 
    "Adding infobox item, please wait...": "Ad\u0103ug\u00e2nd element infobox, a\u0219tepta\u021bi ...", 
    "Adding, please wait...": "Ad\u0103ug\u00e2nd, v\u0103 rug\u0103m s\u0103 a\u0219tepta\u021bi ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Dup\u0103 ce a\u021bi ad\u0103ugat deja o leg\u0103tur\u0103, un fi\u0219ier sau o imagine spre pagin\u0103, o pute\u021bi cita f\u0103c\u00e2nd clic pe butonul &quot;Cite&quot;. De asemenea, pute\u021bi ap\u0103sa tastele &quot;^&quot; sau &quot;*&quot; atunci c\u00e2nd tasta\u021bi \u0219i ar trebui s\u0103 apar\u0103 un drop-down.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Sigur dori\u021bi s\u0103 ie\u0219i\u021bi din pagin\u0103? Modific\u0103rile nesalvate vor fi pierdute.", 
    "Article proposal submission failed!": "Trimiterea propunerii de articol nu a reu\u0219it!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Pe m\u0103sur\u0103 ce ad\u0103uga\u021bi linkuri \u0219i fi\u0219iere, acestea se vor afi\u0219a \u00een sec\u021biunea Leg\u0103turi de referin\u021b\u0103. Pute\u021bi s\u0103 le edita\u021bi sau s\u0103 le elimina\u021bi.", 
    "Available %s": "%s disponibil", 
    "Back": "\u00cenapoi", 
    "Cancel": "Anulare", 
    "Choose": "Alege", 
    "Choose a Date": "Alege a dat\u0103", 
    "Choose a Time": "Alege o or\u0103", 
    "Choose a time": "Alege o or\u0103", 
    "Choose all": "Alege toate", 
    "Chosen %s": "%s alese", 
    "Cite": "a men\u0163iona", 
    "Cite as verified editor": "Cite\u0219te ca editor verificat", 
    "Cite links, files, etc": "Citeaz\u0103 linkuri, fi\u0219iere, etc", 
    "Cite my own knowledge / experience as a verified editor": "Cite\u0219te propria cunoa\u0219tere / experien\u021b\u0103 ca editor verificat", 
    "Claim": "Revenidic\u0103", 
    "Claim Rewards": "Revendica\u021bi recompense", 
    "Click here to upload a picture for your editor profile.": "Face\u021bi clic aici pentru a \u00eenc\u0103rca o imagine pentru profilul dvs. de editor.", 
    "Click to choose all %s at once.": "Click pentru a alege toate %s.", 
    "Click to remove all chosen %s at once.": "Click pentru a elimina toate %s alese.", 
    "Completing transaction...": "Finalizarea tranzac\u021biilor ...", 
    "Connect Languages": "Conecta\u021bi limbile", 
    "Create Page": "Creaz\u0103 pagin\u0103", 
    "Create page": "Creaz\u0103 pagin\u0103", 
    "Delete this tag": "\u0218terge\u021bi aceast\u0103 etichet\u0103", 
    "Drag and drop your photo here or click to upload.": "Trage\u021bi \u0219i plasa\u021bi fotografia aici sau face\u021bi clic pentru a \u00eenc\u0103rca fotografia.", 
    "Edit": "Editeaza", 
    "Editor profile": "Editor profil", 
    "Enter the page title here": "Introduce\u021bi titlul paginii aici", 
    "Enter your profile info": "Introduce\u021bi informa\u021biile despre profilul dvs.", 
    "Error: proposal not found. Please try submitting again.": "Eroare: propunerea nu a fost g\u0103sit\u0103. \u00cencerca\u021bi s\u0103 trimite\u021bi din nou.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia este la fel ca Wikipedia, dar mult mai simplu de editat \u0219i de contribuit. Fiecare pagin\u0103 este alc\u0103tuit\u0103 dintr-o zon\u0103 infobox pentru scurte fapte concise, un articol principal scris \u00eentr-o perioad\u0103 neutr\u0103 de 3 persoane, o galerie media cu imagini, clipuri video, audio etc despre subiect, o list\u0103 de referin\u021be la pagini web \u0219i fi\u0219iere care sunt utilizate ca cit\u0103ri \u00een articol \u0219i infobox.", 
    "File uploaded successfully.": "Fisier uploadat cu succes.", 
    "Filter": "Filtru", 
    "Font Style": "Stilul fontului", 
    "Help": "Ajutor", 
    "Here you can add the main photo for the article.": "Aici pute\u021bi ad\u0103uga fotografia principal\u0103 pentru articol.", 
    "Hide": "Ascunde", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Dac\u0103 a\u021bi creat deja un articol Everipedia despre dvs., pute\u021bi s\u0103 \u00eel conecta\u021bi aici.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Dac\u0103 ave\u021bi criptocuritate, ad\u0103uga\u021bi aici adresele portofelului. Oamenii v\u0103 pot dona dac\u0103 v\u0103 plac munca! Dac\u0103 nu ave\u021bi un portofel, pute\u021bi ob\u021bine unul aici: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Introducere", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Conecta\u021bi-v\u0103 la alte pagini Everipedia", 
    "Link your Everipedia page": "Conecta\u021bi-v\u0103 pagina Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Leg\u0103turile c\u0103tre paginile Wikipedia nu sunt permise, din motive tehnice. V\u0103 rug\u0103m s\u0103 \u00eencerca\u021bi din nou.", 
    "Loading more activity, please wait...": "\u00cenc\u0103rca\u021bi mai mult\u0103 activitate, v\u0103 rug\u0103m s\u0103 a\u0219tepta\u021bi ...", 
    "Loading...": "Se incarca..", 
    "Main article body": "Articolul principal al articolului", 
    "Main photo": "Fotografia principala", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Asigura\u021bi-v\u0103 c\u0103 cita\u021bi sursele atunci c\u00e2nd ad\u0103uga\u021bi informa\u021bii la pagin\u0103 prin ad\u0103ugarea de linkuri \u0219i fi\u0219iere aici, astfel \u00eenc\u00e2t s\u0103 pute\u021bi ar\u0103ta de unde provin informa\u021biile.", 
    "Media": "Media", 
    "Media Gallery": "Galerie Media:", 
    "Merge": "Imbin\u0103", 
    "Midnight": "Miezul nop\u021bii", 
    "Next": "Urm\u0103tor", 
    "No URL provided, please try again": "Nu a fost furnizat\u0103 nici o adres\u0103 URL, \u00eencerca\u021bi din nou", 
    "Noon": "Amiaz\u0103", 
    "Not Ready": "Nu este gata", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Re\u021bine\u021bi c\u0103 nu ve\u021bi putea propune modific\u0103ri f\u0103r\u0103 Brainpower. Munca ta se va pierde!", 
    "Note: You are %s hour ahead of server time.": [
      "Not\u0103: Sunte\u021bi cu %s ora \u00eenaintea orei serverului.", 
      "Not\u0103: Sunte\u021bi cu %s ore \u00eenaintea orei serverului.", 
      "Not\u0103: Sunte\u021bi cu %s ore \u00eenaintea orei serverului."
    ], 
    "Note: You are %s hour behind server time.": [
      "Not\u0103: Sunte\u021bi cu %s or\u0103 \u00een urma orei serverului.", 
      "Not\u0103: Sunte\u021bi cu %s ore \u00een urma orei serverului.", 
      "Not\u0103: Sunte\u021bi cu %s ore \u00een urma orei serverului."
    ], 
    "Now": "Acum", 
    "Please enter a description for the photo": "Introduce\u021bi o descriere a fotografiei", 
    "Please provide a description for the link or file.": "Furniza\u021bi o descriere a link-ului sau a fi\u0219ierului.", 
    "Please provide a more scholarly description.": "Furniza\u021bi o descriere mai \u0219tiin\u021bific\u0103.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "V\u0103 rog s\u0103 paria\u021bi un IQ \u00een Brainpower \u00eenainte de a continua. Face\u021bi clic pe OK pentru a deschide ecranul de administrare Brainpower \u00eentr-o fil\u0103 nou\u0103. NOT\u0102: Asigura\u021bi-v\u0103 c\u0103 ferestrele pop-up sunt activate pentru acest site, deoarece este posibil s\u0103 primi\u021bi un avertisment.", 
    "Pre": "Pre", 
    "Profile photo": "Fotografie de profil", 
    "Reference links": "Link-uri de referin\u021b\u0103", 
    "Remove": "Elimin\u0103", 
    "Remove all": "Elimin\u0103 toate", 
    "Save": "Salveaz\u0103", 
    "Save changes": "Salveaz\u0103 modific\u0103rile", 
    "Search Everipedia": "C\u0103utare Everipedia", 
    "Searching...": "In c\u0103utare...", 
    "Show": "Arat\u0103", 
    "Style": "Stil", 
    "Submit": "Trimite", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Pagina profilului editorului arat\u0103 paginile pe care le-a editat utilizatorul, referin\u021bele pe care le-au ad\u0103ugat la o pagin\u0103 \u0219i comentariile pe care le-au f\u0103cut.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox-ul este conceput pentru fapte rapide \u0219i concise. Elementele sugerate apar \u00een meniul derulant, \u00een func\u021bie de subiectul selectat, dar pot fi ad\u0103ugate orice tip de infobox.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Aceasta este o list\u0103 cu %s disponibile. Le pute\u021bi alege select\u00e2nd mai multe in chenarul de mai jos \u0219i ap\u0103s\u00e2nd pe s\u0103geata \"Alege\" dintre cele dou\u0103 chenare.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Aceasta este lista de %s alese. Pute\u021bi elimina din ele select\u00e2ndu-le in chenarul de mai jos \u0219i apasand pe s\u0103geata \"Elimin\u0103\" dintre cele dou\u0103 chenare.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Acest link se afl\u0103 deja pe aceast\u0103 pagin\u0103, dar pute\u021bi modifica rezumatul de link-uri pentru a \u00eembun\u0103t\u0103\u021bi informa\u021biile de pe EP!", 
    "Title": "Titlu", 
    "To add an image or video to the article text, click the 'Media' button.": "Pentru a ad\u0103uga o imagine sau un videoclip la textul articolului, da\u021bi clic pe butonul &quot;Media&quot;.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Pentru a v\u0103 conecta la o alt\u0103 pagin\u0103 Everipedia, face\u021bi clic pe butonul &quot;Link Page&quot;. De asemenea, pute\u021bi ap\u0103sa tasta &quot;@&quot; sau tasta atunci c\u00e2nd tasta\u021bi \u0219i ar trebui s\u0103 apar\u0103 un drop-down. \u00cencerca\u021bi s\u0103 v\u0103 conecta\u021bi la c\u00e2t mai multe pagini, pentru a face fiecare pagin\u0103 c\u00e2t mai bogat\u0103 \u0219i mai informativ\u0103 posibil.", 
    "Today": "Ast\u0103zi", 
    "Tomorrow": "M\u00e2ine", 
    "Type into this box to filter down the list of available %s.": "Scrie \u00een acest chenar pentru a filtra lista de %s disponibile.", 
    "When you are done, click here to save your changes.": "C\u00e2nd a\u021bi terminat, face\u021bi click aici pentru a salva modific\u0103rile.", 
    "When you are finished, click here to save your changes.": "C\u00e2nd a\u021bi terminat, face\u021bi clic aici pentru a salva modific\u0103rile.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Scrie\u021bi \u00eentr-o manier\u0103 obiectiv\u0103 \u00een a treia persoan\u0103, nu include\u021bi niciun fel de marketing (oferte exclusive, crean\u021be neconfirmabile etc.). Aceasta este o enciclopedie, nu o pagin\u0103 de social media.", 
    "Yesterday": "Ieri", 
    "You can also create a new wiki article by clicking here.": "De asemenea, pute\u021bi crea un nou articol wiki f\u0103c\u00e2nd clic aici.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "A\u021bi postat ast\u0103zi multe linkuri. A\u0219tepta\u021bi pu\u021bin comunitatea pentru a r\u0103spunde la con\u021binutul dvs. Editorii noi se limiteaz\u0103 la postarea a numai 250 de post\u0103ri pe zi.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "A\u021bi selectat o ac\u0163iune \u0219i nu a\u021b\u0163i f\u0103cut modific\u0103ri \u00een c\u00eempuri individuale. Probabil c\u0103uta\u021bi butonul Go, \u00een loc de Salveaz\u0103.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "A\u0163i selectat o ac\u0163iune, dar nu a\u0163i salvat \u00eenc\u0103 modific\u0103rile la c\u00e2mpuri individuale. Face\u0163i clic pe OK pentru a salva. Va trebui s\u0103 executa\u021bi ac\u021biunea din nou.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Ave\u0163i modific\u0103ri nesalvate \u00een c\u00eempuri individuale editabile. Dac\u0103 executa\u0163i o ac\u021biune, modific\u0103rile nesalvate vor fi pierdute.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "paused": "pauzat", 
    "reset": "Reset", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "Pornit", 
    "stopped": "oprit", 
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
    "DATETIME_FORMAT": "j F Y, H:i", 
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
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "d.m.Y, H:i", 
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




(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>=14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);
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
      "Zaznaczono %(sel)s z %(cnt)s", 
      "Zaznaczono %(sel)s z %(cnt)s", 
      "Zaznaczono %(sel)s z %(cnt)s", 
      "Zaznaczono %(sel)s z %(cnt)s"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(nieobowi\u0105zkowo) Dodaj adresy portfela w walucie krytycznej.", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(nieobowi\u0105zkowo) Wprowad\u017a swoje imi\u0119 i nazwisko, adres e-mail, narodowo\u015b\u0107, j\u0119zyk itd.", 
    "6 a.m.": "6 rano", 
    "6 p.m.": "6 po po\u0142udniu", 
    "Add File": "Dodaj plik", 
    "Add Link": "Dodaj link", 
    "Add Links, Files, Etc.": "Dodaj linki, pliki, Etc.", 
    "Add New Infobox": "Dodaj nowy Infobox", 
    "Add Row": "Dodaj wiersz", 
    "Add an additional description for this category": "Doda\u0107 dodatkowy opis dla tej kategorii", 
    "Add media to article text": "Dodawanie no\u015bnik\u00f3w do tekstu artyku\u0142u", 
    "Added pictures will show up here.": "Tutaj pojawi\u0105 si\u0119 dodane zdj\u0119cia.", 
    "Adding infobox item, please wait...": "Dodaj\u0105c infobox, poczekaj...", 
    "Adding, please wait...": "Dodaj\u0105c, poczekaj...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Po dodaniu linku, pliku lub zdj\u0119cia do strony, mo\u017cesz je zacytowa\u0107 klikaj\u0105c przycisk 'Cite'. Podczas wpisywania mo\u017cna r\u00f3wnie\u017c nacisn\u0105\u0107 klawisze '^' lub '*', po czym powinna pojawi\u0107 si\u0119 rozwijana lista.", 
    "April": "Kwiecie\u0144", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Na pewno chcesz opu\u015bci\u0107 stron\u0119? Niezapisane zmiany zostan\u0105 utracone.", 
    "Article proposal submission failed!": "Z\u0142o\u017cenie wniosku o dofinansowanie nie powiod\u0142o si\u0119!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Podczas dodawania link\u00f3w i plik\u00f3w, pojawi\u0105 si\u0119 one w sekcji Linki referencyjne. Mo\u017cna je r\u00f3wnie\u017c edytowa\u0107 lub usuwa\u0107.", 
    "August": "Sierpie\u0144", 
    "Available %s": "Dost\u0119pne %s", 
    "Back": "Wstecz", 
    "Cancel": "Anuluj", 
    "Choose": "Wybierz", 
    "Choose a Date": "Wybierz Dat\u0119", 
    "Choose a Time": "Wybierz Czas", 
    "Choose a time": "Wybierz czas", 
    "Choose all": "Wybierz wszystkie", 
    "Chosen %s": "Wybrane %s", 
    "Cite": "Cytat", 
    "Cite as verified editor": "Cite jako sprawdzony edytor", 
    "Cite links, files, etc": "Odno\u015bniki, pliki itp.", 
    "Cite my own knowledge / experience as a verified editor": "Prosz\u0119 poda\u0107 swoj\u0105 wiedz\u0119 / do\u015bwiadczenie jako sprawdzony edytor.", 
    "Claim": "Zg\u0142o\u015b", 
    "Click here to upload a picture for your editor profile.": "Kliknij tutaj, aby przes\u0142a\u0107 zdj\u0119cie do profilu edytora.", 
    "Click to choose all %s at once.": "Kliknij, aby wybra\u0107 jednocze\u015bnie wszystkie %s.", 
    "Click to remove all chosen %s at once.": "Kliknij, aby usun\u0105\u0107 jednocze\u015bnie wszystkie wybrane %s.", 
    "Completing transaction...": "Zako\u0144czenie transakcji....................................................................................................................................................................................................", 
    "Create Page": "Za\u0142\u00f3\u017c Stron\u0119", 
    "Create page": "Za\u0142\u00f3\u017c Stron\u0119", 
    "December": "Grudzie\u0144", 
    "Delete this tag": "Usu\u0144 ten znacznik", 
    "Drag and drop your photo here or click to upload.": "Przeci\u0105gnij i upu\u015b\u0107 zdj\u0119cie tutaj lub kliknij, aby je przes\u0142a\u0107.", 
    "Edit": "Edytuj", 
    "Editor profile": "Profil redaktora", 
    "Enter the page title here": "Tutaj wprowad\u017a tytu\u0142 strony", 
    "Enter your profile info": "Wprowad\u017a informacje o swoim profilu.", 
    "Error: proposal not found. Please try submitting again.": "B\u0142\u0105d: propozycja nie zosta\u0142a znaleziona. Spr\u00f3buj przes\u0142a\u0107 ponownie.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia jest taka sama jak Wikipedia, ale o wiele prostsza do edycji i wsp\u00f3\u0142tworzenia. Ka\u017cda strona sk\u0142ada si\u0119 z obszaru infobox dla kr\u00f3tkich zwi\u0119z\u0142ych fakt\u00f3w, g\u0142\u00f3wnego artyku\u0142u napisanego w neutralnym napi\u0119ciu 3 osoby, galerii zdj\u0119\u0107, wideo, audio itp. na ten temat, listy odniesie\u0144 do stron internetowych i plik\u00f3w, kt\u00f3re s\u0105 u\u017cywane jako cytaty w artykule i infoboxie.", 
    "February": "Luty", 
    "File uploaded successfully.": "Plik zosta\u0142 wczytany pomy\u015blnie", 
    "Filter": "Filtr", 
    "Font Style": "Styl czcionki", 
    "Here you can add the main photo for the article.": "Tutaj mo\u017cesz doda\u0107 g\u0142\u00f3wne zdj\u0119cie do artyku\u0142u.", 
    "Hide": "Ukryj", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Je\u015bli ju\u017c stworzy\u0142e\u015b o sobie artyku\u0142 Everipedia, mo\u017cesz po\u0142\u0105czy\u0107 si\u0119 z nim tutaj.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Je\u015bli masz jakie\u015b kryptokuruty, dodaj adresy portfeli tutaj. Ludzie mog\u0105 przekaza\u0107 Ci darowizn\u0119, je\u015bli lubi\u0105 Twoj\u0105 prac\u0119! Je\u015bli nie masz portfela, mo\u017cesz go dosta\u0107 tutaj: Klasa <img=\"userview-crypto-logo-helper\" src=\"https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg\"/><a class=\"helper-crypto-anchor\" rel=\"nofollow\" target=\"_blank\" href=\"https://www.coinbase.com/\">Bitcoin</a>, <img class=\"userview-crypto-logo-helper\" style: \"userview\" = \"margin-; https://epcdn-vz.azureedge.net/static/images/ethereum-icon.\"; \"margin-ights\" style = \"margin-\".png'/><a class=\"helper-crypto-anchor\" rel=\"nofollow\" target=\"_blank\" href=\"https://www.coinbase.com/\">Ethereum</a>, <img class=\"userview-crypto-logo-helper\" src=\"https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png\"/><a class=\"helper-crypto-anchor\" rel=\"nofolor\" h=\"helper-cryptto-anchor\" rel=\"nofol.", 
    "Infobox": "Infobox", 
    "Introduction": "Wprowadzenie", 
    "January": "Stycze\u0144", 
    "July": "Lipiec", 
    "June": "Czerwiec", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Link do innych stron Everipedia", 
    "Link your Everipedia page": "Po\u0142\u0105cz stron\u0119 Everipedia.", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Z przyczyn technicznych linki do stron Wikipedii s\u0105 niedozwolone. Spr\u00f3buj ponownie.", 
    "Loading more activity, please wait...": "Za\u0142aduj wi\u0119cej aktywno\u015bci, poczekaj...", 
    "Loading...": "Wczytywanie..", 
    "Main article body": "Korpus g\u0142\u00f3wnego artyku\u0142u", 
    "Main photo": "Zdj\u0119cie g\u0142\u00f3wne", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Upewnij si\u0119, \u017ce przy dodawaniu informacji do strony podaj swoje \u017ar\u00f3d\u0142a, dodaj\u0105c linki i pliki tutaj, aby\u015b m\u00f3g\u0142 pokaza\u0107 sk\u0105d pochodz\u0105 informacje.", 
    "March": "Marzec", 
    "May": "Maj", 
    "Media": "Media", 
    "Media Gallery": "Galeria medi\u00f3w", 
    "Midnight": "P\u00f3\u0142noc", 
    "Next": "Nast\u0119pny", 
    "No URL provided, please try again": "Nie podano adresu URL, spr\u00f3buj ponownie.", 
    "Noon": "Po\u0142udnie", 
    "Not Ready": "Nie gotowy", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Zauwa\u017c, \u017ce nie b\u0119dziesz m\u00f3g\u0142 proponowa\u0107 edycji bez opcji Brainpower. Twoja praca zostanie utracona!", 
    "Note: You are %s hour ahead of server time.": [
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godzin\u0119 do przodu w stosunku do czasu serwera.", 
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godziny do przodu w stosunku do czasu serwera.", 
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godzin do przodu w stosunku do czasu serwera.", 
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godzin do przodu w stosunku do czasu serwera."
    ], 
    "Note: You are %s hour behind server time.": [
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godzin\u0119 do ty\u0142u w stosunku do czasu serwera.", 
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godziny do ty\u0142u w stosunku do czasu serwera.", 
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godzin do ty\u0142u w stosunku do czasu serwera.", 
      "Uwaga: Czas lokalny jest przesuni\u0119ty o %s godzin do ty\u0142u w stosunku do czasu serwera."
    ], 
    "November": "Listopad", 
    "Now": "Teraz", 
    "October": "Pa\u017adziernik", 
    "Please enter a description for the photo": "Wprowad\u017a opis zdj\u0119cia.", 
    "Please provide a description for the link or file.": "Prosz\u0119 poda\u0107 opis linku lub pliku.", 
    "Please provide a more scholarly description.": "Prosz\u0119 przedstawi\u0107 bardziej naukowy opis.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Zanim przejdziesz do kolejnego etapu, przy\u0142\u00f3\u017c odrobin\u0119 IQ do Brainpower. Kliknij OK, aby otworzy\u0107 ekran zarz\u0105dzania zasilaniem m\u00f3zgu w nowej zak\u0142adce. UWAGA: Upewnij si\u0119, \u017ce dla tej strony s\u0105 w\u0142\u0105czone wyskakuj\u0105ce okienka, poniewa\u017c mo\u017ce pojawi\u0107 si\u0119 ostrze\u017cenie.", 
    "Pre": "Wst\u0119pne", 
    "Profile photo": "Zdj\u0119cie profilowe", 
    "Reference links": "Odno\u015bniki", 
    "Remove": "Usu\u0144", 
    "Remove all": "Usu\u0144 wszystkie", 
    "Save": "Zapisz", 
    "Save changes": "Zapisz zmiany", 
    "Search Everipedia": "Wyszukiwanie Everipedia", 
    "Searching...": "Wyszukuj\u0119...", 
    "September": "Wrzesie\u0144", 
    "Show": "Poka\u017c", 
    "Style": "Styl", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Na stronie profilu edytora wy\u015bwietlane s\u0105 strony edytowane przez u\u017cytkownika, referencje dodane do strony oraz komentarze.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox jest przeznaczony do zwi\u0119z\u0142ych, szybkich fakt\u00f3w. Sugerowane elementy pojawiaj\u0105 si\u0119 na rozwijanej li\u015bcie w zale\u017cno\u015bci od wybranego tematu, ale mo\u017cna doda\u0107 dowolny rodzaj infoboxa.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "To lista dost\u0119pnych %s. Aby wybra\u0107 pozycje, zaznacz je i kliknij strza\u0142k\u0119 \u201eWybierz\u201d pomi\u0119dzy listami.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "To lista wybranych %s. Aby usun\u0105\u0107, zaznacz pozycje wybrane do usuni\u0119cia i kliknij strza\u0142k\u0119 \u201eUsu\u0144\u201d pomi\u0119dzy listami.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Ten link jest ju\u017c na tej stronie, nadal mo\u017cna edytowa\u0107 podsumowanie linku w celu poprawy informacji na temat EP!", 
    "Title": "Tytu\u0142", 
    "To add an image or video to the article text, click the 'Media' button.": "Aby doda\u0107 obraz lub wideo do tekstu artyku\u0142u, kliknij przycisk \"Media\" (No\u015bniki).", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Aby po\u0142\u0105czy\u0107 si\u0119 z inn\u0105 stron\u0105 Everipedia, kliknij przycisk 'Po\u0142\u0105cz stron\u0119'. Podczas wpisywania mo\u017cna r\u00f3wnie\u017c nacisn\u0105\u0107 '@' lub przycisk i powinna pojawi\u0107 si\u0119 rozwijana. Staraj si\u0119, aby \u0142\u0105cze do jak najwi\u0119kszej liczby stron, aby ka\u017cda strona by\u0142a jak najbogatsza i jak najbardziej pouczaj\u0105ca.", 
    "Today": "Dzisiaj", 
    "Tomorrow": "Jutro", 
    "Type into this box to filter down the list of available %s.": "Wpisz co\u015b tutaj, aby wyfiltrowa\u0107 list\u0119 dost\u0119pnych %s.", 
    "When you are done, click here to save your changes.": "Po zako\u0144czeniu kliknij tutaj, aby zapisa\u0107 zmiany.", 
    "When you are finished, click here to save your changes.": "Po zako\u0144czeniu kliknij tutaj, aby zapisa\u0107 zmiany.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Napisa\u0107 w spos\u00f3b obiektywny w napi\u0119ty osoby trzecie, nie zawieraj\u0105 \u017cadnych wypowiedzi marketingowych (oferty wy\u0142\u0105czne, nieweryfikowalne roszczenia itp.). To jest encyklopedia, a nie strona medi\u00f3w spo\u0142eczno\u015bciowych.", 
    "Yesterday": "Wczoraj", 
    "You can also create a new wiki article by clicking here.": "Mo\u017cesz r\u00f3wnie\u017c utworzy\u0107 nowy artyku\u0142 wiki klikaj\u0105c tutaj.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Zamie\u015bci\u0142 pan dzi\u015b wiele link\u00f3w. Poczekaj troch\u0119, a\u017c spo\u0142eczno\u015b\u0107 odpowie na twoje tre\u015bci. Nowi redaktorzy mog\u0105 nadsy\u0142a\u0107 tylko 250 zg\u0142osze\u0144 dziennie.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Wybrano akcj\u0119, lecz nie dokonano \u017cadnych zmian w polach. Prawdopodobnie szukasz przycisku \u201eWykonaj\u201d, a nie \u201eZapisz\u201d.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Wybrano akcj\u0119, lecz cz\u0119\u015b\u0107 zmian w polach nie zosta\u0142a zachowana. Kliknij OK, aby zapisa\u0107. Aby wykona\u0107 akcj\u0119, nale\u017cy j\u0105 ponownie uruchomi\u0107.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Zmiany w niekt\u00f3rych polach nie zosta\u0142y zachowane. Po wykonaniu akcji, zmiany te zostan\u0105 utracone.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "dniUaktualniona", 
    "hoursUpdated": "Godziny pracyUaktualnione", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "protok\u00f3\u0142Uaktualniony", 
    "one letter Friday\u0004F": "P", 
    "one letter Monday\u0004M": "P", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "N", 
    "one letter Thursday\u0004T": "C", 
    "one letter Tuesday\u0004T": "W", 
    "one letter Wednesday\u0004W": "\u015a", 
    "paused": "Wstrzymana", 
    "reset": "Resetuj", 
    "secondTenthsUpdated": "2. dziesi\u0105ta aktualizacja", 
    "secondsUpdated": "sekundyUaktualniona", 
    "started": "rozpocz\u0119cie", 
    "stopped": "zatrzymane", 
    "targetAchieved": "cel osi\u0105gni\u0119ty"
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
    "DATETIME_FORMAT": "j E Y H:i", 
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
    "DATE_FORMAT": "j E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%y-%m-%d", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d-m-Y  H:i", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
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


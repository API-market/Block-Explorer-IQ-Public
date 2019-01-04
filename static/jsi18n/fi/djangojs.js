

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
      "%(sel)s valittuna %(cnt)s mahdollisesta", 
      "%(sel)s valittuna %(cnt)s mahdollisesta"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Valinnainen) Lis\u00e4\u00e4 kryptovaluuttalompakon osoitteet", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Valinnainen) Anna nimi, s\u00e4hk\u00f6posti, kansalaisuus, kieli jne.", 
    "6 a.m.": "06", 
    "6 p.m.": "18:00", 
    "Add File": "Lis\u00e4\u00e4 tiedosto", 
    "Add Link": "Lis\u00e4\u00e4 linkki", 
    "Add Links, Files, Etc.": "Lis\u00e4\u00e4 Linkkej\u00e4, Tiedostoja Yms. ", 
    "Add New Infobox": "Lis\u00e4\u00e4 Uusi Infobox", 
    "Add Row": "Lis\u00e4\u00e4 Rivi", 
    "Add an additional description for this category": "Lis\u00e4\u00e4 lis\u00e4kuvaus t\u00e4lle kategorialle", 
    "Add media to article text": "Lis\u00e4\u00e4 mediaa artikkelin tekstiin", 
    "Added pictures will show up here.": "Lis\u00e4tyt kuvat n\u00e4kyv\u00e4t t\u00e4ss\u00e4.", 
    "Adding infobox item, please wait...": "Lis\u00e4\u00e4 Infobox-kohdetta, odota hetki ...", 
    "Adding, please wait...": "Lis\u00e4\u00e4, odota ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Kun olet jo lis\u00e4nnyt linkin, tiedoston tai kuvan sivulle, voit mainita sen klikkaamalla Viite-painiketta. Voit my\u00f6s painaa '^' tai '*' n\u00e4pp\u00e4imi\u00e4 kirjoittaessasi ja pudotusvalikon tulisi tulla n\u00e4kyviin.", 
    "April": "huhtikuu", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Haluatko varmasti poistua sivulta? Tallentamattomat muutokset menetet\u00e4\u00e4n.", 
    "Article proposal submission failed!": "Artikkeliehdotuksen l\u00e4hetys ep\u00e4onnistui!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Kun lis\u00e4\u00e4t linkkej\u00e4 ja tiedostoja, ne n\u00e4kyv\u00e4t Viitelinkit-osiossa. Voit my\u00f6s muokata tai poistaa niit\u00e4.", 
    "August": "elokuu", 
    "Available %s": "Mahdolliset %s", 
    "Back": "Takaisin", 
    "Cancel": "Peruuta", 
    "Choose": "Valitse", 
    "Choose a Date": "Valitse p\u00e4iv\u00e4m\u00e4\u00e4r\u00e4", 
    "Choose a Time": "Valitse kellonaika", 
    "Choose a time": "Valitse kellonaika", 
    "Choose all": "Valitse kaikki", 
    "Chosen %s": "Valitut %s", 
    "Cite": "Sitaatti", 
    "Cite as verified editor": "Viittaa vahvistettuna editorina", 
    "Cite links, files, etc": "Tee viite linkkeihin, tiedostoihin yms.", 
    "Cite my own knowledge / experience as a verified editor": "Tee viite omaan tiet\u00e4mykseeni/kokemukseeni vahvistettuna editorina", 
    "Claim": "Lunasta", 
    "Click here to upload a picture for your editor profile.": "Napsauta t\u00e4t\u00e4, jos haluat l\u00e4hett\u00e4\u00e4 kuvan editoriprofiiliin.", 
    "Click to choose all %s at once.": "Klikkaa valitaksesi kaikki %s kerralla.", 
    "Click to remove all chosen %s at once.": "Klikkaa poistaaksesi kaikki valitut %s kerralla.", 
    "Completing transaction...": "Viimeistelee tapahtumaa...", 
    "Create Page": "Luo sivu", 
    "Create page": "Luo sivu", 
    "December": "joulukuu", 
    "Delete this tag": "Poista t\u00e4m\u00e4 tunniste", 
    "Drag and drop your photo here or click to upload.": "Ved\u00e4 ja pudota kuva t\u00e4h\u00e4n tai napsauta ladataksesi.", 
    "Edit": "Muokkaa", 
    "Editor profile": "Editorin profiili", 
    "Enter the page title here": "Sy\u00f6t\u00e4 sivun otsikko t\u00e4h\u00e4n", 
    "Enter your profile info": "Anna profiilitietosi", 
    "Error: proposal not found. Please try submitting again.": "Virhe: ehdotusta ei l\u00f6ytynyt. Yrit\u00e4 l\u00e4hett\u00e4\u00e4 uudelleen.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia on kuin Wikipedia, mutta paljon yksinkertaisempi muokata ja parantaa. Jokainen sivu koostuu infobox-alueesta lyhyill\u00e4 ja ytimekk\u00e4ill\u00e4 faktoilla, neutraalilla kolmannen persoonan muodossa kirjoitetusta p\u00e4\u00e4artikkelista, kuvien, videoiden, \u00e4\u00e4nitiedostojen yms. mediagalleriasta sek\u00e4 viitelistasta verkkosivuihin ja tiedostoihin, joita k\u00e4ytet\u00e4\u00e4n viittein\u00e4 artikkeliss\u00e4 ja infoboxissa. ", 
    "February": "helmikuu", 
    "File uploaded successfully.": "Tiedosto ladattiin onnistuneesti.", 
    "Filter": "Suodatin", 
    "Font Style": "Fontin tyyli", 
    "Here you can add the main photo for the article.": "T\u00e4ss\u00e4 voit lis\u00e4t\u00e4 p\u00e4\u00e4valokuvan artikkeliin.", 
    "Hide": "Piilota", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Jos olet jo luonut Everipedia-artikkelin itsest\u00e4si, voit linkitt\u00e4\u00e4 sen t\u00e4h\u00e4n.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Jos sinulla on kryptovaluuttoja, lis\u00e4\u00e4 lompakon osoitteet t\u00e4nne. Ihmiset voivat lahjoittaa sinulle, jos he pit\u00e4v\u00e4t ty\u00f6st\u00e4si! Jos sinulla ei ole lompakkoa, saat sen t\u00e4\u00e4lt\u00e4: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Johdanto", 
    "January": "tammikuu", 
    "July": "hein\u00e4kuu", 
    "June": "kes\u00e4kuu", 
    "Link": "Linkki", 
    "Link to other Everipedia pages": "Linkit muihin Everipedia-sivuihin", 
    "Link your Everipedia page": "Linkit\u00e4 Everipedia-sivusi", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Linkit Wikipedia-sivuille eiv\u00e4t ole sallittuja teknisist\u00e4 syist\u00e4. Yrit\u00e4 uudelleen.", 
    "Loading more activity, please wait...": "Ladataan lis\u00e4\u00e4 aktiviteetteja, ole hyv\u00e4 ja odota ...", 
    "Loading...": "Ladataan...", 
    "Main article body": "P\u00e4\u00e4artikkeli", 
    "Main photo": "P\u00e4\u00e4kuva", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Muista lis\u00e4t\u00e4 viite l\u00e4hteeseesi lis\u00e4tess\u00e4si tietoa sivulle lis\u00e4\u00e4m\u00e4ll\u00e4 linkkej\u00e4 ja tiedostoja t\u00e4h\u00e4n, jotta tiedon l\u00e4hteet ovat selv\u00e4t.", 
    "March": "maaliskuu", 
    "May": "toukokuu", 
    "Media": "Media", 
    "Media Gallery": "Mediagalleria", 
    "Midnight": "24", 
    "Next": "Seuraava", 
    "No URL provided, please try again": "Ei URL-osoitetta, yrit\u00e4 uudelleen", 
    "Noon": "12", 
    "Not Ready": "Ei Valmis", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Huomaa, ett\u00e4 et voi ehdottaa muokkauksia ilman \u00c4lykkyytt\u00e4. Ty\u00f6si menetet\u00e4\u00e4n!", 
    "Note: You are %s hour ahead of server time.": [
      "Huom: Olet %s tunnin palvelinaikaa edell\u00e4.", 
      "Huom: Olet %s tuntia palvelinaikaa edell\u00e4."
    ], 
    "Note: You are %s hour behind server time.": [
      "Huom: Olet %s tunnin palvelinaikaa j\u00e4ljess\u00e4.", 
      "Huom: Olet %s tuntia palvelinaikaa j\u00e4ljess\u00e4."
    ], 
    "November": "marraskuu", 
    "Now": "Nyt", 
    "October": "lokakuu", 
    "Please enter a description for the photo": "Anna kuvaus kuvalle", 
    "Please provide a description for the link or file.": "Anna kuvaus linkille tai tiedostolle.", 
    "Please provide a more scholarly description.": "Anna tieteellisempi kuvaus.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Ole hyv\u00e4 ja panosta osa IQ:st\u00e4 \u00c4lykkyyteen ennen jatkamista. Avaa Brainpower-hallintaikkuna uudessa v\u00e4lilehdess\u00e4 valitsemalla OK. HUOMAUTUS: Varmista, ett\u00e4 ponnahdusikkunat ovat sallittuja t\u00e4ll\u00e4 sivustolla, koska saatat saada varoituksen.", 
    "Pre": "Esikatselu", 
    "Profile photo": "Profiilikuva", 
    "Reference links": "Viitelinkit", 
    "Remove": "Poista", 
    "Remove all": "Poista kaikki", 
    "Save": "Tallenna", 
    "Save changes": "Tallenna muutokset", 
    "Search Everipedia": "Etsi Everipediasta", 
    "Searching...": "Haetaan\u2026", 
    "September": "syyskuu", 
    "Show": "N\u00e4yt\u00e4", 
    "Style": "Tyyli", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Editorin profiilisivulla n\u00e4kyv\u00e4t sivut, joita k\u00e4ytt\u00e4j\u00e4 on muokannut, sivuille lis\u00e4tyt viitteet ja heid\u00e4n kirjoittamansa kommentit.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox on suunniteltu ytimekk\u00e4isiin, nopeisiin faktoihin. Ehdotetut kohteet n\u00e4kyv\u00e4t avattavassa valikossa valitun aiheen mukaan, mutta kaikenlaisia \u200b\u200binfoboxeja voi lis\u00e4t\u00e4.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "T\u00e4m\u00e4 on lista saatavillaolevista %s. Valitse allaolevasta laatikosta haluamasi ja siirr\u00e4 ne valittuihin klikkamalla \"Valitse\"-nuolta laatikoiden v\u00e4lill\u00e4.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "T\u00e4m\u00e4 on lista valituista %s. Voit poistaa valintoja valitsemalla ne allaolevasta laatikosta ja siirt\u00e4m\u00e4ll\u00e4 ne takaisin valitsemattomiin klikkamalla \"Poista\"-nuolta laatikoiden v\u00e4lill\u00e4.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "T\u00e4m\u00e4 linkki on jo t\u00e4ll\u00e4 sivulla, voit silti muokata linkkien yhteenvetoa EP:n tietojen parantamiseksi!", 
    "Title": "Otsikko", 
    "To add an image or video to the article text, click the 'Media' button.": "Jos haluat lis\u00e4t\u00e4 kuvan tai videon artikkelin tekstiin, napsauta &quot;Media&quot; -painiketta.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Jos haluat lis\u00e4t\u00e4 linkin toiseen Everipedia-sivuun, napsauta 'Linkit\u00e4 Sivu' -painiketta. Voit my\u00f6s painaa '@' tai n\u00e4pp\u00e4int\u00e4 kirjoittaessasi ja pudotusvalikon tulisi tulla n\u00e4kyviin. Yrit\u00e4 linkitt\u00e4\u00e4 mahdollisimman monta sivua, jotta jokainen sivu olisi mahdollisimman rikas ja informatiivinen.", 
    "Today": "T\u00e4n\u00e4\u00e4n", 
    "Tomorrow": "Huomenna", 
    "Type into this box to filter down the list of available %s.": "Kirjoita t\u00e4h\u00e4n listaan suodattaaksesi %s-listaa.", 
    "When you are done, click here to save your changes.": "Kun olet valmis, tallenna muutokset napsauttamalla t\u00e4t\u00e4.", 
    "When you are finished, click here to save your changes.": "Kun olet valmis, tallenna muutokset napsauttamalla t\u00e4t\u00e4.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Kirjoita objektiivisesti kolmannen henkil\u00f6n muodossa, \u00e4l\u00e4 sis\u00e4llyt\u00e4 mainosteksti\u00e4 (eksklusiiviset tarjoukset, varmistamattomat v\u00e4itteet jne.). T\u00e4m\u00e4 on tietosanakirja, ei sosiaalisen median sivu.", 
    "Yesterday": "Eilen", 
    "You can also create a new wiki article by clicking here.": "Voit my\u00f6s luoda uuden wiki-artikkelin napsauttamalla t\u00e4t\u00e4.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Olet l\u00e4hett\u00e4nyt paljon linkkej\u00e4 t\u00e4n\u00e4\u00e4n. Odota v\u00e4h\u00e4n, jotta yhteis\u00f6 voi vastata sis\u00e4lt\u00f6\u00f6si. Uusilla editoreilla on 250 ehdotuksen raja p\u00e4iv\u00e4ss\u00e4.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Olet valinnut toiminnon etk\u00e4 ole tehnyt yht\u00e4\u00e4n muutosta yksitt\u00e4isiss\u00e4 kentiss\u00e4. Etsit todenn\u00e4k\u00f6isesti Suorita-nappia Tallenna-napin sijaan.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Olet valinnut toiminnon, mutta et ole viel\u00e4 tallentanut muutoksiasi yksitt\u00e4isiin kenttiin. Paina OK tallentaaksesi. Sinun pit\u00e4\u00e4 suorittaa toiminto uudelleen.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Sinulla on tallentamattomia muutoksia yksitt\u00e4isiss\u00e4 muokattavissa kentiss\u00e4. Jos suoritat toiminnon, tallentamattomat muutoksesi katoavat.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "Pe", 
    "one letter Monday\u0004M": "Ma", 
    "one letter Saturday\u0004S": "La", 
    "one letter Sunday\u0004S": "Su", 
    "one letter Thursday\u0004T": "To", 
    "one letter Tuesday\u0004T": "Ti", 
    "one letter Wednesday\u0004W": "Ke", 
    "paused": "pys\u00e4ytetty", 
    "reset": "palauta", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "aloitettu", 
    "stopped": "lopetettu", 
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
    "DATETIME_FORMAT": "j. E Y \\k\\e\\l\\l\\o G.i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H.%M.%S", 
      "%d.%m.%Y %H.%M.%S.%f", 
      "%d.%m.%Y %H.%M", 
      "%d.%m.%Y", 
      "%d.%m.%y %H.%M.%S", 
      "%d.%m.%y %H.%M.%S.%f", 
      "%d.%m.%y %H.%M", 
      "%d.%m.%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j.n.Y G.i", 
    "SHORT_DATE_FORMAT": "j.n.Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "G.i", 
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S", 
      "%H.%M.%S.%f", 
      "%H.%M", 
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


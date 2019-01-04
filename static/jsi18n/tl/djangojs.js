

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "(Optional) Add your cryptocurrency wallet addresses": "(Opsyonal) I-type ang iyong mga cryptocurrency wallet address", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Opsyonal) I-type ang iyong pangalan, email, nasyonalidad, wika, atbp.", 
    "Add File": "Magdagdag ng File", 
    "Add Link": "Magdagdag ng Link", 
    "Add Links, Files, Etc.": "Magdagdag ng Mga Link, Mga File, Atbp.", 
    "Add New Infobox": "Magdagdag ng Bagong Infobox", 
    "Add Row": "Magdagdag ng hilera", 
    "Add an additional description for this category": "Magdagdag ng iba pang paglalarawan para sa kategoryang ito", 
    "Add media to article text": "Magdagdag ng media sa teksto ng artikulo", 
    "Added pictures will show up here.": "Ang mga idinagdag na larawan ay lalabas dito.", 
    "Adding infobox item, please wait...": "Nagdadagdag ng item sa infobox, sandali ...", 
    "Adding, please wait...": "Nagdadagdag, sandali ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Pagkatapos mo magdagdag ng link, file, o larawan sa pahina, maaari mong sipiin ito sa pamamagitan ng pag-click sa pindutang 'Cite' . Maaari mo ring pindutin ang '^' o '*' kapag nag-type at dapat lumitaw ang isang dropdown.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Sigurado ka bang gusto mong umalis sa pahina? Mawawala ang mga hindi nai-save na binago.", 
    "Article proposal submission failed!": "Bigo ang pagsumite ng proposal para sa artikulo!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Habang nagdaragdag ka ng mga link at file, lalabas sila sa bahagi ng Mga Sangguniang Link. Maaari mo ring i-edit o alisin ang mga ito.", 
    "Back": "Bumalik", 
    "Cancel": "Kanselahin", 
    "Cite": "Sipiin", 
    "Cite as verified editor": "Sipiin bilang naberipikang editor", 
    "Cite links, files, etc": "Sipiin ang mga link, mga file, atbp", 
    "Cite my own knowledge / experience as a verified editor": "Sipiin ang aking sariling kaalaman / karanasan bilang isang naberipikang editor", 
    "Claim": "Kunin", 
    "Click here to upload a picture for your editor profile.": "Mag-click dito upang mag-upload ng larawan para sa iyong profile bilang editor.", 
    "Completing transaction...": "Kinukumpleto ang transaksyon ...", 
    "Create Page": "Gumawa ng Pahina", 
    "Create page": "Gumawa ng pahina", 
    "Delete this tag": "Tanggalin ang tag na ito", 
    "Drag and drop your photo here or click to upload.": "I-drag at i-drop ang iyong larawan dito o i-click upang mag-upload.", 
    "Edit": "I-edit", 
    "Editor profile": "Profile ng editor", 
    "Enter the page title here": "I-type ang pamagat ng pahina dito", 
    "Enter your profile info": "I-type ang iyong impormasyon", 
    "Error: proposal not found. Please try submitting again.": "Error: hindi nakita ang panukala. Subukang muli.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Ang Everipedia ay katulad ng Wikipedia ngunit mas simple na i-edit at mag-ambag dito. Ang bawat pahina ay binubuo ng isang infobox para sa maikling impormasyon, isang pangunahing artikulo na nakasulat sa neutral na ikatlong panauhan, isang media gallery ng mga larawan, mga video, audio atbp tungkol sa paksa, listahan ng mga sanggunian na webpage at file na ginagamit bilang mga pagsipi sa artikulo at infobox.", 
    "File uploaded successfully.": "Tagumpay na na-upload ang file.", 
    "Font Style": "Estilo ng Font", 
    "Here you can add the main photo for the article.": "Dito mo maaaring idagdag ang pangunahing larawan para sa artikulo.", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Kung nakagawa ka na ng isang artikulo sa Everipedia tungkol sa iyong sarili, maaari mo itong i-link dito.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Kung mayroon kang anumang cryptocurrency, ilagay ang iyong wallet address dito. Pwedeng magkaloob ang mga tao sa iyo kung gusto nila ang iyong gawa! Kung wala kang wallet, maaari kang makakuha dito: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Panimula", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Mag-link sa iba pang pahina sa Everipedia", 
    "Link your Everipedia page": "I-link ang iyong pahina sa Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Ang mga link papuntang Wikipedia ay hindi pinapayagan, dahil sa mga teknikal na kadahilanan. Pakisubukang muli.", 
    "Loading more activity, please wait...": "Naglo-load ng iba pang aktibidad, sandali ...", 
    "Loading...": "Naglo-load...", 
    "Main article body": "Pangunahing bahagi ng artikulo", 
    "Main photo": "Pangunahing larawan", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Tiyaking sipiin ang iyong mga basehan kapag nagdadagdag ng impormasyon sa pahina sa pamamagitan ng pagdagdag ng mga link at file dito upang maipakita mo kung saan nanggagaling ang impormasyon.", 
    "Media": "Media", 
    "Media Gallery": "Media Gallery", 
    "Next": "Susunod", 
    "No URL provided, please try again": "Walang ibinigay na URL, pakisubukang muli", 
    "Not Ready": "Hindi Pa Handa", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Tandaan na hindi mo magagawang magpanukala ng edit nang walang Brainpower. Mawawala ang ginawa mo!", 
    "Please enter a description for the photo": "Paki-type ang paglalarawan para sa imahe", 
    "Please provide a description for the link or file.": "Pakilagyan ng paglalarawan ang link o file.", 
    "Please provide a more scholarly description.": "Pakilagyan ng mas mala-iskolar na paglalarawan.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Mangyaring tumaya ng ilang IQ sa Brainpower bago magpatuloy. I-click ang OK upang buksan ang screen ng pamamahala ng Brainpower sa isang bagong tab. TANDAAN: Tiyaking gumagana ang mga popup para sa site na ito, dahil maaari kang makatanggap ng babala.", 
    "Pre": "Pre", 
    "Profile photo": "Larawan ng profile", 
    "Reference links": "Mga Sangguniang Link", 
    "Save": "I-save", 
    "Save changes": "I-save ang mga binago", 
    "Search Everipedia": "Hanapin sa Everipedia", 
    "Searching...": "Naghahanap ...", 
    "Style": "Estilo", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Ipinapakita ng pahina ng profile bilang editor ang mga pahina na binago nila, mga sanggunian na idinagdag nila sa isang pahina, at mga komentong ginawa nila.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Ang infobox ay dinisenyo para sa maigsi at mabilisang impormasyon. Ang mga iminumungkahing item ay lilitaw sa dropdown depende sa napiling paksa, pero maaaring magdagdag ng anumang uri ng infobox.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Ang link na ito ay nasa pahinang ito na, maaari mo pa ring i-edit ang buod ng link upang mapabuti ang impormasyon sa EP!", 
    "Title": "Pamagat", 
    "To add an image or video to the article text, click the 'Media' button.": "Upang magdagdag ng imahe o video sa teksto ng artikulo, i-click ang pindutang 'Media'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Para mag-link sa isa pang pahina sa Everipedia i-click ang pindutan na'Link Page.' Maaari mo ring pindutin ang '@' kapag nag-type at dapat lumitaw ang isang dropdown. Subukang mag-link ng maraming pahina kung kinakailangan upang payabungin at paramihin ang impormasyon sa bawat pahina. ", 
    "When you are done, click here to save your changes.": "Kapag tapos ka na, mag-click dito upang i-save ang iyong mga binago.", 
    "When you are finished, click here to save your changes.": "Kapag tapos ka na, mag-click dito upang i-save ang ginawa mo.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Magsulat sa obhetibong paraan at sa ikatlong panahunan, huwag magsama ng anumang marketing (eksklusibong mga alok, hindi mapagkakatiwalaang pahayag atbp). Ito ay isang ensiklopedya, hindi isang pahina ng social media.", 
    "You can also create a new wiki article by clicking here.": "Maaari ka ring gumawa ng bagong artikulo sa wiki sa pamamagitan ng pag-click dito.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Nag-post ka ng maraming link ngayon. Maghintay muna na ang komunidad ay tumugon sa iyong ginawa. Ang mga bagong editor ay limitado sa pag-post ng 250 pagsusumite sa isang araw.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "araw na na inupdate", 
    "hoursUpdated": "OrasInupdate", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "mga minuto na in-update", 
    "paused": "naka-pause", 
    "reset": "i-reset", 
    "secondTenthsUpdated": "segundoTenthInupdate", 
    "secondsUpdated": "segundoInupdate", 
    "started": "sinimulan", 
    "stopped": "hininto", 
    "targetAchieved": "naabotAngTarget"
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
    "DATETIME_FORMAT": "N j, Y, P", 
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
    "DATE_FORMAT": "N j, Y", 
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
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
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




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
      "%(sel)s / %(cnt)s se\u00e7ildi", 
      "%(sel)s / %(cnt)s se\u00e7ildi"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(\u0130ste\u011fe ba\u011fl\u0131) Kripto para birimi c\u00fczdan adreslerinizi ekleyin", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(\u0130ste\u011fe ba\u011fl\u0131) Ad\u0131n\u0131z\u0131, e-postan\u0131z\u0131, uyru\u011funuzu, dilinizi vb. Girin.", 
    "6 a.m.": "Sabah 6", 
    "6 p.m.": "6 \u00f6.s.", 
    "Add File": "Dosya Ekle", 
    "Add Link": "Ba\u011flant\u0131 Ekle", 
    "Add Links, Files, Etc.": "Ba\u011flant\u0131lar, Dosyalar, Etc ekle.", 
    "Add New Infobox": "Yeni Bilgi Kutusunu Ekle", 
    "Add Row": "Sat\u0131r Ekle", 
    "Add an additional description for this category": "Bu kategori i\u00e7in ek bir a\u00e7\u0131klama ekleyin", 
    "Add media to article text": "Makale metnine medya ekle", 
    "Added pictures will show up here.": "Eklenen resimler burada g\u00f6r\u00fcnecek.", 
    "Adding infobox item, please wait...": "Bilgi kutusu \u00f6\u011fesi ekleniyor, l\u00fctfen bekleyin ...", 
    "Adding, please wait...": "Ekleniyor, l\u00fctfen bekleyin ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Sayfaya link,dosya veya resim ekledikten sonra 'Al\u0131nt\u0131' butonuna t\u0131klayarak kaynak g\u00f6sterebilirsiniz. Ayr\u0131ca, yazarken '^' veya '*' tu\u015flar\u0131na bas\u0131nca a\u00e7\u0131lan men\u00fcy\u00fc kullanabilirsiniz.", 
    "April": "Nisan", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Sayfadan \u00e7\u0131kmak istedi\u011finizden emin misiniz? Kaydedilmemi\u015f de\u011fi\u015fiklikler kaybolacak.", 
    "Article proposal submission failed!": "Makale \u00f6nerisi g\u00f6nderilemedi!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Link ve dosyalar eklenirken Referans Ba\u011flant\u0131lar b\u00f6l\u00fcm\u00fcnde g\u00f6r\u00fcneceklerdir. Bunlar\u0131 da d\u00fczenleyebilir veya kald\u0131rabilirsiniz.", 
    "August": "A\u011fustos", 
    "Available %s": "Mevcut %s", 
    "Back": "Geri", 
    "Cancel": "\u0130ptal", 
    "Choose": "Se\u00e7in", 
    "Choose a Date": "Bir Tarih Se\u00e7in", 
    "Choose a Time": "Bir Saat Se\u00e7in", 
    "Choose a time": "Bir saat se\u00e7in", 
    "Choose all": "T\u00fcm\u00fcn\u00fc se\u00e7in", 
    "Chosen %s": "Se\u00e7ilen %s", 
    "Cite": "Al\u0131nt\u0131", 
    "Cite as verified editor": "Onaylanm\u0131\u015f edit\u00f6r olarak al\u0131nt\u0131lay\u0131n", 
    "Cite links, files, etc": "Link, dosya, vb. at\u0131f yap", 
    "Cite my own knowledge / experience as a verified editor": "Kendi bilgimi / deneyimimi onayl\u0131 bir edit\u00f6r olarak al\u0131nt\u0131la", 
    "Claim": "Talep et", 
    "Click here to upload a picture for your editor profile.": "Edit\u00f6r profilinize resim y\u00fcklemek i\u00e7in buraya t\u0131klay\u0131n.", 
    "Click to choose all %s at once.": "Bir kerede t\u00fcm %s se\u00e7ilmesi i\u00e7in t\u0131klay\u0131n.", 
    "Click to remove all chosen %s at once.": "Bir kerede t\u00fcm se\u00e7ilen %s kald\u0131r\u0131lmas\u0131 i\u00e7in t\u0131klay\u0131n.", 
    "Completing transaction...": "\u0130\u015flem tamamlan\u0131yor ...", 
    "Create Page": "Sayfa olu\u015ftur", 
    "Create page": "Sayfa olu\u015ftur", 
    "December": "Aral\u0131k", 
    "Delete this tag": "Bu etiketi sil", 
    "Drag and drop your photo here or click to upload.": "Foto\u011fraf\u0131n\u0131z\u0131 buraya s\u00fcr\u00fckleyip b\u0131rak\u0131n veya y\u00fcklemek i\u00e7in t\u0131klay\u0131n.", 
    "Edit": "D\u00fczenle", 
    "Editor profile": "Edit\u00f6r profili", 
    "Enter the page title here": "Sayfa ba\u015fl\u0131\u011f\u0131n\u0131 buraya girin", 
    "Enter your profile info": "Profil bilgilerinizi girin", 
    "Error: proposal not found. Please try submitting again.": "Hata: \u00f6neri bulunamad\u0131. L\u00fctfen tekrar g\u00f6ndermeyi deneyin.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia Vikipedi gibi, ancak d\u00fczenleme ve katk\u0131da bulunma \u00e7ok daha basit. Her sayfada, k\u0131sa \u00f6zet i\u00e7in bir bilgi kutusu alan\u0131, \u00fc\u00e7\u00fcnc\u00fc \u015fah\u0131s a\u011fz\u0131ndan ana makale, konuyla ilgili resim, video ve ses galerisi, web sayfalar\u0131na yap\u0131lan referans ve dosyalar\u0131n at\u0131f listesi bulunur.", 
    "February": "\u015eubat", 
    "File uploaded successfully.": "Dosya ba\u015far\u0131yla y\u00fcklendi", 
    "Filter": "S\u00fczge\u00e7", 
    "Font Style": "Font Stili", 
    "Here you can add the main photo for the article.": "Makaleye ana foto\u011fraf\u0131 buradan ekleyebilirsiniz.", 
    "Hide": "Gizle", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Kendiniz hakk\u0131nda bir Everipedia makalesi olu\u015fturduysan\u0131z, buradan ba\u011flant\u0131 kurabilirsiniz.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Herhangi bir kripto paran\u0131z varsa c\u00fczdan adreslerini buraya ekleyin. \u00c7al\u0131\u015fman\u0131z\u0131 be\u011fenenler size ba\u011f\u0131\u015fta bulunabilir! E\u011fer c\u00fczdan\u0131n\u0131z yoksa, buradan edinebilirsiniz: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Eteryum</a> <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>dogecoin</a>", 
    "Infobox": "Bilgi Kutusu", 
    "Introduction": "Tan\u0131t\u0131m", 
    "January": "Ocak", 
    "July": "Temmuz", 
    "June": "Haziran", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Di\u011fer Everipedia sayfalar\u0131na ba\u011flant\u0131", 
    "Link your Everipedia page": "Everipedia sayfan\u0131z\u0131 ba\u011flay\u0131n", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Teknik nedenlerle Wikipedia linklerine izin verilmemektedir. L\u00fctfen sonra tekrar deneyin.", 
    "Loading more activity, please wait...": "Daha fazla etkinlik y\u00fckleniyor, l\u00fctfen bekleyin ...", 
    "Loading...": "Y\u00fckleniyor..", 
    "Main article body": "Makale g\u00f6vdesi", 
    "Main photo": "Ana foto\u011fraf", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Bilgi kayna\u011f\u0131n\u0131 g\u00f6sterebilmek i\u00e7in, sayfaya bilgi giri\u015fi yaparkenlinkleri ve dosyalar\u0131 ekleyin; kaynaklar\u0131n\u0131z\u0131 aktard\u0131\u011f\u0131n\u0131zdan emin olun.", 
    "March": "Mart", 
    "May": "May\u0131s", 
    "Media": "Medya", 
    "Media Gallery": "Medya Galerisi", 
    "Midnight": "Geceyar\u0131s\u0131", 
    "Next": "Sonraki", 
    "No URL provided, please try again": "URL girilmedi, l\u00fctfen tekrar deneyin", 
    "Noon": "\u00d6\u011fle", 
    "Not Ready": "Haz\u0131r de\u011fil", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Brainpower olmadan d\u00fczenlemeleri \u00f6neremeyece\u011finizi unutmay\u0131n. \u00c7al\u0131\u015fmalar\u0131n\u0131z kaybedilecek!", 
    "Note: You are %s hour ahead of server time.": [
      "Not: Sunucu saatinin %s saat ilerisindesiniz.", 
      "Not: Sunucu saatinin %s saat ilerisindesiniz."
    ], 
    "Note: You are %s hour behind server time.": [
      "Not: Sunucu saatinin %s saat gerisindesiniz.", 
      "Not: Sunucu saatinin %s saat gerisindesiniz."
    ], 
    "November": "Kas\u0131m", 
    "Now": "\u015eimdi", 
    "October": "Ekim", 
    "Please enter a description for the photo": "L\u00fctfen foto\u011fraf i\u00e7in bir a\u00e7\u0131klama girin", 
    "Please provide a description for the link or file.": "L\u00fctfen ba\u011flant\u0131 veya dosya i\u00e7in bir a\u00e7\u0131klama ekleyin.", 
    "Please provide a more scholarly description.": "L\u00fctfen daha bilimsel bir a\u00e7\u0131klama sa\u011flay\u0131n.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Devam etmeden \u00f6nce l\u00fctfen bir miktar IQ'yu Brainpowera yat\u0131r\u0131n. Brainpower y\u00f6netim ekran\u0131n\u0131 yeni bir sekmede a\u00e7mak i\u00e7in Tamam'a t\u0131klay\u0131n. NOT: Uyar\u0131 alabilece\u011finizden dolay\u0131 l\u00fctfen bu site i\u00e7in pop-up;lar\u0131n etkinle\u015ftirildi\u011finden emin olun.", 
    "Pre": "Pre", 
    "Profile photo": "Profil foto\u011fraf\u0131", 
    "Reference links": "Referans linkleri", 
    "Remove": "Kald\u0131r", 
    "Remove all": "T\u00fcm\u00fcn\u00fc kald\u0131r", 
    "Save": "Kaydet", 
    "Save changes": "De\u011fi\u015fiklikleri Kaydet", 
    "Search Everipedia": "Everipedia ara", 
    "Searching...": "Aran\u0131yor...", 
    "September": "Eyl\u00fcl", 
    "Show": "G\u00f6ster", 
    "Style": "Stil", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Edit\u00f6r profil sayfas\u0131, kullan\u0131c\u0131n\u0131n d\u00fczenledi\u011fi sayfalar\u0131, sayfalara ekledi\u011fi referanslar\u0131 ve yapt\u0131klar\u0131 yorumlar\u0131 g\u00f6sterir.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Bilgi kutusu yal\u0131n ve \u00e7abuk bilgi eri\u015fimi i\u00e7in tasarlanm\u0131\u015ft\u0131r. \u00d6nerilen \u00f6\u011feler, se\u00e7ilen konuya g\u00f6re a\u00e7\u0131lan listede g\u00f6r\u00fcn\u00fcr, ancak her t\u00fcrde bilgi kutusu eklenebilir.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Bu mevcut %s listesidir. A\u015fa\u011f\u0131daki kutudan baz\u0131lar\u0131n\u0131 i\u015faretleyerek ve ondan sonra iki kutu aras\u0131ndaki \"Se\u00e7in\" okuna t\u0131klayarak se\u00e7ebilirsiniz.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Bu se\u00e7ilen %s listesidir. A\u015fa\u011f\u0131daki kutudan baz\u0131lar\u0131n\u0131 i\u015faretleyerek ve ondan sonra iki kutu aras\u0131ndaki \"Kald\u0131r\" okuna t\u0131klayarak kald\u0131rabilirsiniz.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Bu link zaten sayfada mevcut, EP hakk\u0131ndaki bilgileri geli\u015ftirmek i\u00e7in link \u00f6zetini ekleyebilirsiniz!", 
    "Title": "Ba\u015fl\u0131k", 
    "To add an image or video to the article text, click the 'Media' button.": "Makale metnine bir g\u00f6r\u00fcnt\u00fc veya video eklemek i\u00e7in 'Medya' butonuna t\u0131klay\u0131n.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Ba\u015fka bir Everipedia sayfas\u0131na ba\u011flanmak i\u00e7in 'Sayfaya Ba\u011fla' butonuna bas\u0131n. Ayr\u0131ca yazarken '@' tu\u015funa bas\u0131nca a\u00e7\u0131lan men\u00fcy\u00fc kullanabilirsiniz. Her sayfay\u0131 zengin ve bilgilendirici hale getirmek i\u00e7in  m\u00fcmk\u00fcn oldu\u011funca fazla say\u0131da sayfaya ba\u011flanmaya \u00e7al\u0131\u015f\u0131n.", 
    "Today": "Bug\u00fcn", 
    "Tomorrow": "Yar\u0131n", 
    "Type into this box to filter down the list of available %s.": "Mevcut %s listesini s\u00fczmek i\u00e7in bu kutu i\u00e7ine yaz\u0131n.", 
    "When you are done, click here to save your changes.": "\u0130\u015finiz bitti\u011finde, de\u011fi\u015fikliklerinizi kaydetmek i\u00e7in buraya t\u0131klay\u0131n.", 
    "When you are finished, click here to save your changes.": "\u0130\u015finiz bitti\u011finde, de\u011fi\u015fiklikleri kaydetmek i\u00e7in buraya t\u0131klay\u0131n.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "\u00dc\u00e7\u00fcnc\u00fc \u015fah\u0131s a\u011fz\u0131yla nesnel bir bi\u00e7imde yaz\u0131n, hi\u00e7bir pazarlama ifadesi eklemeye (\u00f6zel teklifler, do\u011frulanamaz iddialar vb.). Bu bir ansiklopedi, sosyal medya sayfas\u0131 de\u011fil.", 
    "Yesterday": "D\u00fcn", 
    "You can also create a new wiki article by clicking here.": "Buraya t\u0131klayarak yeni bir wiki makalesi olu\u015fturabilirsiniz.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Bug\u00fcn \u00e7ok fazla link g\u00f6nderdiniz. Toplulu\u011fun i\u00e7eri\u011finize yan\u0131t vermesi i\u00e7in biraz bekleyin. Yeni edit\u00f6rler g\u00fcnde sadece 250 g\u00f6nderi yay\u0131nlamakla s\u0131n\u0131rl\u0131d\u0131r.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Bir eylem se\u00e7tiniz, fakat bireysel alanlar \u00fczerinde hi\u00e7bir de\u011fi\u015fiklik yapmad\u0131n\u0131z. Muhtemelen Kaydet d\u00fc\u011fmesi yerine Git d\u00fc\u011fmesini ar\u0131yorsunuz.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Bir eylem se\u00e7tiniz, fakat hen\u00fcz bireysel alanlara de\u011fi\u015fikliklerinizi kaydetmediniz. Kaydetmek i\u00e7in l\u00fctfen TAMAM d\u00fc\u011fmesine t\u0131klay\u0131n. Eylemi yeniden \u00e7al\u0131\u015ft\u0131rman\u0131z gerekecek.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Bireysel d\u00fczenlenebilir alanlarda kaydedilmemi\u015f de\u011fi\u015fiklikleriniz var. E\u011fer bir eylem \u00e7al\u0131\u015ft\u0131r\u0131rsan\u0131z, kaydedilmemi\u015f de\u011fi\u015fiklikleriniz kaybolacakt\u0131r.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "G\u00fcnler g\u00fcncellendir", 
    "hoursUpdated": "Saatler G\u00fcncellendi", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "Dakikalar G\u00fcncellendi", 
    "one letter Friday\u0004F": "C", 
    "one letter Monday\u0004M": "P", 
    "one letter Saturday\u0004S": "C", 
    "one letter Sunday\u0004S": "P", 
    "one letter Thursday\u0004T": "P", 
    "one letter Tuesday\u0004T": "S", 
    "one letter Wednesday\u0004W": "\u00c7", 
    "paused": "durduruldu", 
    "reset": "S\u0131f\u0131rla", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "saniyeler G\u00fcncellendi", 
    "started": "ba\u015flad\u0131", 
    "stopped": "durduruldu", 
    "targetAchieved": "hedefe ula\u015f\u0131ld\u0131"
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
    "DATETIME_FORMAT": "d F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "d F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%y-%m-%d", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "d F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d M Y H:i", 
    "SHORT_DATE_FORMAT": "d M Y", 
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


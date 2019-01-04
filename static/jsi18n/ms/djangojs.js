

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "(Optional) Add your cryptocurrency wallet addresses": "(Pilihan) Tambah alamat dompet matawang kripto anda", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Pilihan) Masukkan nama, e-mel, kewarganegaraan, bahasa, dsb.", 
    "Add File": "Tambah Fail", 
    "Add Link": "Tambah Link", 
    "Add Links, Files, Etc.": "Tambah Pautan, Fail, Dll.", 
    "Add New Infobox": "Tambah Infobox Baru", 
    "Add Row": "Tambah Baris", 
    "Add an additional description for this category": "Tambah penerangan tambahan untuk kategori ini", 
    "Add media to article text": "Tambah media ke teks artikel", 
    "Added pictures will show up here.": "Gambar-gambar yang di tambah akan muncul di sini.", 
    "Adding infobox item, please wait...": "Menambah item infobox, sila tunggu ...", 
    "Adding, please wait...": "Ditambah, sila tunggu ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Selepas anda telah menambah pautan, fail, atau gambar ke halaman, anda boleh memetiknya dengan mengklik butang &#39;Cite&#39;. Anda juga boleh menekan kekunci &#39;^&#39; atau &#39;*&#39; semasa menaip dan dropdown sepatutnya muncul.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Adakah anda pasti mahu keluar dari halaman? Perubahan yang tidak disimpan akan hilang.", 
    "Article proposal submission failed!": "Penyerahan cadangan artikel gagal!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Semasa anda menambah pautan dan fail, ia akan muncul di bahagian Pautan Rujukan. Anda boleh mengedit atau memadamkannya juga.", 
    "Back": "Kembali", 
    "Cancel": "Batal", 
    "Cite": "Cite", 
    "Cite as verified editor": "Namakan sebagai penyunting yang disahkan", 
    "Cite links, files, etc": "Petik pautan, fail, dan lain-lain", 
    "Cite my own knowledge / experience as a verified editor": "Petik pengetahuan / pengalaman saya sendiri sebagai penyunting yang sah", 
    "Claim": "Tuntut", 
    "Click here to upload a picture for your editor profile.": "Klik di sini untuk memuat naik gambar untuk profil penyunting anda.", 
    "Completing transaction...": "Melengkapkan transaksi ...", 
    "Create Page": "Cipta Halaman", 
    "Create page": "Cipta halaman", 
    "Delete this tag": "Padamkan tag ini", 
    "Drag and drop your photo here or click to upload.": "Seret dan lepas foto anda di sini atau klik untuk muatnaik.", 
    "Edit": "Sunting", 
    "Editor profile": "Profil Penyunting", 
    "Enter the page title here": "Masukkan tajuk halaman di sini", 
    "Enter your profile info": "Masukkan maklumat profil anda", 
    "Error: proposal not found. Please try submitting again.": "Ralat: cadangan tidak dijumpai. Sila cuba hantar lagi.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia adalah seperti Wikipedia tetapi lebih mudah untuk diedit dan menyumbang. Setiap halaman terdiri daripada kawasan infobox untuk fakta ringkas ringkas, artikel utama yang ditulis dalam 3 orang penyumbang neutral, galeri media gambar, video, audio dan lain-lain mengenai topik itu, senarai rujukan kepada halaman web dan fail yang digunakan sebagai petikan dalam artikel dan infobox.", 
    "File uploaded successfully.": "Fail dimuat naik dengan jayanya.", 
    "Font Style": "Gaya Fon", 
    "Here you can add the main photo for the article.": "Di sini anda boleh menambah foto utama untuk artikel itu.", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Sekiranya anda sudah mencipta artikel Everipedia mengenai diri anda, anda boleh memautnya di sini.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Sekiranya anda mempunyai sebarang matawang kripto, tambah alamat dompet di sini. Orang boleh menderma kepada anda jika mereka sukakan kerja anda! Jika anda tidak mempunyai dompet, anda boleh mendapatkannya di sini: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Infobox", 
    "Introduction": "Pengenalan", 
    "Link": "Pautan", 
    "Link to other Everipedia pages": "Pautan ke halaman Everipedia yang lain", 
    "Link your Everipedia page": "Pautkan halaman Everipedia anda", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Pautan ke laman Wikipedia tidak dibenarkan, atas alasan teknikal. Sila cuba lagi.", 
    "Loading more activity, please wait...": "Memuat lagi aktiviti, sila tunggu ...", 
    "Loading...": "Memuatkan..", 
    "Main article body": "Badan artikel utama", 
    "Main photo": "Foto utama", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Pastikan anda memetik sumber anda apabila menambah maklumat ke halaman dengan menambah pautan dan fail di sini supaya anda boleh menunjukkan dari mana maklumat datang.", 
    "Media": "Media", 
    "Media Gallery": "Galeri Media", 
    "Next": "Seterusnya", 
    "No URL provided, please try again": "Tiada URL yang disediakan, sila cuba lagi", 
    "Not Ready": "Tidak Sedia", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Ambil perhatian yang anda tidak akan dapat mencadangkan pengeditan tanpa Brainpower. Kerja anda akan hilang!", 
    "Please enter a description for the photo": "Sila masukkan keterangan untuk foto", 
    "Please provide a description for the link or file.": "Sila berikan keterangan untuk pautan atau fail.", 
    "Please provide a more scholarly description.": "Sila berikan gambaran yang lebih berilmiah.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Sila ambil kira beberapa IQ ke Brainpower sebelum meneruskan. Klik OK untuk membuka skrin pengurusan Brainpower dalam tab baru. NOTA: Sila pastikan popup diaktifkan untuk laman web ini, kerana anda mungkin menerima amaran.", 
    "Pre": "Skrip Pra- Pemasangan", 
    "Profile photo": "Gambar profil", 
    "Reference links": "Pautan rujukan", 
    "Save": "Simpan", 
    "Save changes": "Simpan Perubahan", 
    "Search Everipedia": "Cari Everipedia", 
    "Searching...": "Mencari...", 
    "Style": "Gaya", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Halaman profil penyunting menunjukkan halaman pengguna telah diubah, rujukan telah mereka tambahkan pada halaman, dan ulasan juga telah dibuatnya.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox direka untuk fakta yang ringkas,  cepat. Item yang disyorkan muncul dalam senarai jatuh bergantung kepada topik yang dipilih, tetapi sebarang jenis infobox boleh ditambah.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Pautan ini sudah sedia ada di halaman ini, anda masih boleh mengedit ringkasan pautan untuk meningkatkan maklumat di EP!", 
    "Title": "Tajuk", 
    "To add an image or video to the article text, click the 'Media' button.": "Untuk menambah imej atau video pada teks artikel, klik butang &#39;Media&#39;.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Untuk memaut ke halaman Everipedia lain, klik butang &#39;Pautan Halaman&#39;. Anda juga boleh menekan &#39;@&#39; atau kunci semasa menaip dan dropdown seharusnya muncul. Cubalah untuk memautkan halaman seberapa banyak yang diperlukan untuk menjadikan setiap halaman sekaya kaya dan semaklumat mungkin.", 
    "When you are done, click here to save your changes.": "Apabila anda selesai, klik di sini untuk menyimpan perubahan anda.", 
    "When you are finished, click here to save your changes.": "Apabila anda selesai, klik di sini untuk menyimpan perubahan anda.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Menulis secara objektif dalam orang yang tegang, jangan masukkan sebarang isi pemasaran  (tawaran eksklusif, tuntutan tidak dapat diselesaikan dll). Ini adalah ensiklopedia, bukan halaman media sosial.", 
    "You can also create a new wiki article by clicking here.": "Anda juga boleh membuat rencana wiki baru dengan mengklik di sini.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Anda telah menghantar banyak pautan hari ini. Tunggu sebentar bagi komuniti untuk bertindak balas terhadap kandungan anda. Penyunting baru diterhadkan untuk menghantar hanya 250 permohonan setiap hari.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "paused": "Te_pek", 
    "reset": "Tetapkan semula", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "Mula VM", 
    "stopped": "terhenti", 
    "targetAchieved": "sasaran tercapai"
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


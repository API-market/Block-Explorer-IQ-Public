

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
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
      "%(sel)s dari %(cnt)s terpilih"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Opsional) Tambahkan alamat dompet cryptocurrency Anda", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Opsional) Masukkan nama, email, kewarganegaraan, bahasa, dll.", 
    "6 a.m.": "6 pagi", 
    "6 p.m.": "18.00", 
    "Add File": "Tambahkan File", 
    "Add Link": "Tambahkan Tautan", 
    "Add Links, Files, Etc.": "Tambahkan Tautan, File, Dll", 
    "Add New Infobox": "Tambahkan Infobox Baru", 
    "Add Row": "Tambah Baris", 
    "Add an additional description for this category": "Tambahkan deskripsi tambahan untuk kategori ini", 
    "Add media to article text": "Tambahkan media ke artikel teks", 
    "Added pictures will show up here.": "Gambar yang ditambahkan akan muncul di sini.", 
    "Adding infobox item, please wait...": "Menambahkan item infobox, harap tunggu...", 
    "Adding, please wait...": "Menambahkan, harap tunggu ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Setelah Anda menambahkan tautan, file, atau gambar ke halaman, Anda dapat mengutipnya dengan mengklik tombol 'Kutip'. Anda juga dapat menekan tombol '^' atau '*' saat mengetik dan sebuah dropdown akan muncul.", 
    "April": "April", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Anda yakin ingin keluar dari halaman? Perubahan yang tidak disimpan akan hilang.", 
    "Article proposal submission failed!": "Pengajuan proposal artikel gagal!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "Saat Anda menambahkan tautan dan file, mereka akan muncul di bagian Tautan Referensi. Anda dapat mengedit atau menghapusnya juga.", 
    "August": "Agustus", 
    "Available %s": "%s yang tersedia", 
    "Back": "Kembali", 
    "Cancel": "Batal", 
    "Choose": "Pilih", 
    "Choose a Date": "Pilih Tanggal", 
    "Choose a Time": "Pilih Waktu", 
    "Choose a time": "Pilih waktu", 
    "Choose all": "Pilih semua", 
    "Chosen %s": "%s terpilih", 
    "Cite": "Mengutip", 
    "Cite as verified editor": "Kutip sebagai editor terverifikasi", 
    "Cite links, files, etc": "Kutip tautan, file, dll", 
    "Cite my own knowledge / experience as a verified editor": "Kutip pengetahuan / pengalaman saya sendiri sebagai editor terverifikasi", 
    "Claim": "Klaim", 
    "Claim Rewards": "Klaim Hadiah", 
    "Click here to upload a picture for your editor profile.": "Klik di sini untuk mengunggah gambar untuk profil editor Anda.", 
    "Click to choose all %s at once.": "Pilih untuk memilih seluruh %s sekaligus.", 
    "Click to remove all chosen %s at once.": "Klik untuk menghapus semua pilihan %s sekaligus.", 
    "Completing transaction...": "Menyelesaikan transaksi...", 
    "Connect Languages": "Hubungkan Bahasa", 
    "Create Page": "Buat Halaman", 
    "Create page": "Buat Halaman", 
    "December": "Desember", 
    "Delete this tag": "Hapus tag ini", 
    "Drag and drop your photo here or click to upload.": "Seret dan letakkan foto Anda di sini atau klik untuk mengunggah.", 
    "Edit": "Edit", 
    "Editor profile": "Profil editor", 
    "Enter the page title here": "Masukkan judul halaman di sini", 
    "Enter your profile info": "Masukkan info profil Anda", 
    "Error: proposal not found. Please try submitting again.": "Kesalahan: proposal tidak ditemukan. Harap coba kirimkan lagi.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia sama seperti Wikipedia tetapi lebih mudah untuk mengedit dan berkontribusi. Setiap halaman terdiri dari area infobox untuk fakta ringkas singkat, artikel utama yang ditulis dalam perspektif orang ke-3, galeri media gambar, video, audio dll tentang topik, daftar referensi ke halaman web dan file yang digunakan sebagai kutipan dalam artikel dan infobox.", 
    "February": "Februari", 
    "File uploaded successfully.": "File berhasil diunggah.", 
    "Filter": "Filter", 
    "Font Style": "Jenis Font", 
    "Help": "Bantuan", 
    "Here you can add the main photo for the article.": "Di sini Anda dapat menambahkan foto utama untuk artikel.", 
    "Hide": "Ciutkan", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Jika Anda sudah membuat artikel Everipedia tentang diri Anda, Anda dapat menautkannya di sini.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Jika Anda memiliki mata uang kripto, tambahkan alamat dompet di sini. Orang-orang dapat menyumbang kepada Anda jika mereka menyukai pekerjaan Anda! Jika Anda tidak memiliki dompet, Anda bisa mendapatkannya di sini: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ", 
    "Infobox": "Infobox", 
    "Introduction": "Pengantar", 
    "January": "Januari", 
    "July": "Juli", 
    "June": "Juni", 
    "Link": "Tautan", 
    "Link to other Everipedia pages": "Tautkan ke halaman Everipedia lainnya", 
    "Link your Everipedia page": "Tautkan halaman Everipedia Anda", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Tautan ke halaman Wikipedia tidak diperbolehkan, karena alasan teknis. Silakan coba lagi.", 
    "Loading more activity, please wait...": "Memuat lebih banyak aktivitas, harap tunggu...", 
    "Loading...": "Memuat...", 
    "Main article body": "Badan artikel utama", 
    "Main photo": "Foto utama", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Pastikan untuk mengutip sumber Anda saat menambahkan informasi ke halaman dengan menambahkan tautan dan file di sini sehingga Anda dapat menunjukkan dari mana informasi itu berasal.", 
    "March": "Maret", 
    "May": "Mei", 
    "Media": "Media", 
    "Media Gallery": "Galeri media", 
    "Merge": "Gabung", 
    "Midnight": "Tengah malam", 
    "Next": "Berikutnya", 
    "No URL provided, please try again": "Tidak ada URL yang disediakan, silakan coba lagi", 
    "Noon": "Siang", 
    "Not Ready": "Belum siap", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Perhatikan bahwa Anda tidak akan dapat mengajukan penyuntingan tanpa Kekuatan Otak. Pekerjaan Anda akan hilang!", 
    "Note: You are %s hour ahead of server time.": [
      "Catatan: Waktu Anda lebih cepat %s jam dibandingkan waktu server."
    ], 
    "Note: You are %s hour behind server time.": [
      "Catatan: Waktu Anda lebih lambat %s jam dibandingkan waktu server."
    ], 
    "November": "November", 
    "Now": "Sekarang", 
    "October": "Oktober", 
    "Please enter a description for the photo": "Silakan masukkan deskripsi untuk foto", 
    "Please provide a description for the link or file.": "Berikan deskripsi untuk tautan atau file.", 
    "Please provide a more scholarly description.": "Harap berikan deskripsi yang lebih ilmiah.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Tolong pasangkan beberapa IQ ke dalam Kekuatan Otak sebelum melanjutkan. Klik OK untuk membuka layar manajemen Kekuatan Otak di tab baru. CATATAN: Pastikan popup diaktifkan untuk situs ini, karena Anda mungkin menerima peringatan.", 
    "Pre": "Pra", 
    "Profile photo": "Foto profil", 
    "Reference links": "Tautan referensi", 
    "Remove": "Hapus", 
    "Remove all": "Hapus semua", 
    "Save": "Simpan", 
    "Save changes": "Simpan perubahan", 
    "Search Everipedia": "Cari Everipedia", 
    "Searching...": "Mencari...", 
    "September": "September", 
    "Show": "Bentangkan", 
    "Style": "Jenis", 
    "Submit": "Kirim", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "Halaman profil editor menunjukkan halaman yang telah diedit oleh pengguna, referensi yang mereka tambahkan ke halaman, dan komentar yang mereka buat.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "Infobox dirancang untuk fakta ringkas dan cepat. Item yang disarankan muncul di dropdown tergantung pada topik yang dipilih, tetapi jenis infobox dapat ditambahkan.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Berikut adalah daftar %s yang tersedia. Anda dapat memilih satu atau lebih dengan memilihnya pada kotak di bawah, lalu mengeklik tanda panah \"Pilih\" di antara kedua kotak.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Berikut adalah daftar %s yang terpilih. Anda dapat menghapus satu atau lebih dengan memilihnya pada kotak di bawah, lalu mengeklik tanda panah \"Hapus\" di antara kedua kotak.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Tautan ini sudah ada di halaman ini, Anda masih bisa mengedit rangkuman tautan untuk meningkatkan informasi tentang EP!", 
    "Title": "Judul", 
    "To add an image or video to the article text, click the 'Media' button.": "Untuk menambahkan gambar atau video ke teks artikel, klik tombol 'Media'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Untuk menautkan ke laman Everipedia lainnya, klik tombol 'Tautan Halaman'. Anda juga dapat menekan tombol '@' atau kunci saat mengetik dan dropdown akan muncul. Cobalah untuk menautkan ke sebanyak mungkin halaman untuk membuat setiap halaman menjadi sekaya dan seinformatif mungkin.", 
    "Today": "Hari ini", 
    "Tomorrow": "Besok", 
    "Type into this box to filter down the list of available %s.": "Ketik pada kotak ini untuk menyaring daftar %s yang tersedia.", 
    "When you are done, click here to save your changes.": "Setelah selesai, klik di sini untuk menyimpan perubahan Anda.", 
    "When you are finished, click here to save your changes.": "Setelah selesai, klik di sini untuk menyimpan perubahan Anda.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Tulis dengan cara obyektif dalam bentuk orang ketiga, jangan sertakan pembicaraan pemasaran (penawaran eksklusif, klaim yang tidak dapat diverifikasi, dll.). Ini adalah ensiklopedia, bukan halaman media sosial.", 
    "Yesterday": "Kemarin", 
    "You can also create a new wiki article by clicking here.": "Anda juga dapat membuat artikel wiki baru dengan mengklik di sini.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Anda telah memposting banyak tautan hari ini. Tunggu sebentar agar komunitas dapat menanggapi konten Anda. Editor baru dibatasi untuk memposting hanya 250 pengiriman setiap hari.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Anda telah memilih sebuah aksi, tetapi belum mengubah bidang apapun. Kemungkinan Anda mencari tombol Buka dan bukan tombol Simpan.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Anda telah memilih sebuah aksi, tetapi belum menyimpan perubahan ke bidang yang ada. Klik OK untuk menyimpan perubahan ini. Anda akan perlu mengulangi aksi tersebut kembali.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Beberapa perubahan bidang yang Anda lakukan belum tersimpan. Perubahan yang telah dilakukan akan hilang.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "hariDiperbarui", 
    "hoursUpdated": "jamDiperbarui", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "menitDiperbarui", 
    "one letter Friday\u0004F": "J", 
    "one letter Monday\u0004M": "S", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "M", 
    "one letter Thursday\u0004T": "K", 
    "one letter Tuesday\u0004T": "S", 
    "one letter Wednesday\u0004W": "R", 
    "paused": "di jeda", 
    "reset": "diatur ulang", 
    "secondTenthsUpdated": "detikKesepuluhDiperbarui", 
    "secondsUpdated": "detikDiperbarui", 
    "started": "dimulai", 
    "stopped": "dihentikan", 
    "targetAchieved": "targetTercapai"
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
    "DATETIME_FORMAT": "j N Y, G.i", 
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H.%M.%S", 
      "%d-%m-%Y %H.%M.%S.%f", 
      "%d-%m-%Y %H.%M", 
      "%d-%m-%Y", 
      "%d-%m-%y %H.%M.%S", 
      "%d-%m-%y %H.%M.%S.%f", 
      "%d-%m-%y %H.%M", 
      "%d-%m-%y", 
      "%m/%d/%y %H.%M.%S", 
      "%m/%d/%y %H.%M.%S.%f", 
      "%m/%d/%y %H.%M", 
      "%m/%d/%y", 
      "%m/%d/%Y %H.%M.%S", 
      "%m/%d/%Y %H.%M.%S.%f", 
      "%m/%d/%Y %H.%M", 
      "%m/%d/%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j N Y", 
    "DATE_INPUT_FORMATS": [
      "%d-%m-%y", 
      "%d/%m/%y", 
      "%d-%m-%Y", 
      "%d/%m/%Y", 
      "%d %b %Y", 
      "%d %B %Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d-m-Y G.i", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "G.i", 
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S", 
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




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
      "%(sel)s de %(cnt)s seleccionado", 
      "%(sel)s de  %(cnt)s seleccionados"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Opcional) Agregz las direcciones de tu billetera en criptocurrency", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Opcional) Escribe tu nombre, correo electr\u00f3nico, nacionalidad, idioma, etc.", 
    "6 a.m.": "6 a.m.", 
    "6 p.m.": "6 p.m.", 
    "Add File": "A\u00f1adir archivo", 
    "Add Link": "A\u00f1adir enlace", 
    "Add Links, Files, Etc.": "Agregar Enlaces, Archivos, etc.", 
    "Add New Infobox": "A\u00f1adir nuevo cuadro de informaci\u00f3n", 
    "Add Row": "A\u00f1adir fila", 
    "Add an additional description for this category": "A\u00f1adir una descripci\u00f3n adicional para esta categor\u00eda", 
    "Add media to article text": "Agregar medios al texto del art\u00edculo", 
    "Added pictures will show up here.": "Las fotos a\u00f1adidas aparecer\u00e1n aqu\u00ed.", 
    "Adding infobox item, please wait...": "A\u00f1adiendo informaci\u00f3n, por favor espera....", 
    "Adding, please wait...": "A\u00f1adiendo, por favor espera...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Despu\u00e9s de haber a\u00f1adido un enlace, archivo o imagen a la p\u00e1gina, puedes citarla haciendo clic en el bot\u00f3n 'Citar'. Tambi\u00e9n puedes presionar las teclas ^ o `*' al escribir y aparecer\u00e1 un desplegable.", 
    "April": "Abril", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u00bfEst\u00e1s seguro de que quieres salir de la p\u00e1gina? Los cambios no guardados se perder\u00e1n.", 
    "Article proposal submission failed!": "\u00a1Fall\u00f3 la presentaci\u00f3n de la propuesta de art\u00edculo!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "A medida que a\u00f1ades enlaces y archivos, estos aparecer\u00e1n en la secci\u00f3n Enlaces de referencia. Tambi\u00e9n puedes editarlos o eliminarlos.", 
    "August": "Agosto", 
    "Available %s": "%s Disponibles", 
    "Back": "Volver", 
    "Cancel": "Cancelar", 
    "Choose": "Elegir", 
    "Choose a Date": "Elija una fecha", 
    "Choose a Time": "Elija una hora", 
    "Choose a time": "Elija una hora", 
    "Choose all": "Selecciona todos", 
    "Chosen %s": "%s elegidos", 
    "Cite": "Citar", 
    "Cite as verified editor": "Citar como editor verificado", 
    "Cite links, files, etc": "Citar enlaces, archivos, etc.", 
    "Cite my own knowledge / experience as a verified editor": "Citar mi propio conocimiento / experiencia como editor verificado", 
    "Claim": "Reclamar", 
    "Claim Rewards": "Reclamar Recompensas", 
    "Click here to upload a picture for your editor profile.": "Haz clic aqu\u00ed para subir una imagen para tu perfil de editor.", 
    "Click to choose all %s at once.": "Haga clic para seleccionar todos los %s de una vez", 
    "Click to remove all chosen %s at once.": "Haz clic para eliminar todos los %s elegidos", 
    "Completing transaction...": "Completando la transacci\u00f3n....", 
    "Connect Languages": "Conectar idiomas", 
    "Create Page": "Crear p\u00e1gina", 
    "Create page": "Crear p\u00e1gina", 
    "December": "Diciembre", 
    "Delete this tag": "Borrar esta etiqueta", 
    "Drag and drop your photo here or click to upload.": "Arrastra y suelta tu foto aqu\u00ed o haz clic para cargarla.", 
    "Edit": "Editar", 
    "Editor profile": "Perfil del editor", 
    "Enter the page title here": "Ingresa aqu\u00ed el t\u00edtulo de la p\u00e1gina", 
    "Enter your profile info": "Ingresa la informaci\u00f3n de tu perfil", 
    "Error: proposal not found. Please try submitting again.": "Error: propuesta no encontrada. Por favor, intenta enviar de nuevo.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia es como Wikipedia pero mucho m\u00e1s f\u00e1cil de editar y contribuir. Cada p\u00e1gina se compone de un \u00e1rea infobox para hechos breves y concisos, un art\u00edculo principal escrito en un tiempo neutral en 3\u00aa persona, una galer\u00eda de fotos, videos, audio, etc. sobre el tema, una lista de referencias a p\u00e1ginas web y archivos que se utilizan como citas en el art\u00edculo y el infobox.", 
    "February": "Febrero", 
    "File uploaded successfully.": "Archivo Subido con \u00e9xito", 
    "Filter": "Filtro", 
    "Font Style": "Estilo de Fuente", 
    "Help": "Ayuda", 
    "Here you can add the main photo for the article.": "Aqu\u00ed puedes a\u00f1adir la foto principal del art\u00edculo.", 
    "Hide": "Esconder", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Si ya has creado un art\u00edculo de Everipedia sobre ti mismo, puedes enlazarlo  aqu\u00ed.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Si tienes alguna criptomoneda, agrega las direcciones de la billetera aqu\u00ed. \u00a1La gente puede donarte usted si les gusta tu trabajo! Si no tienes una billetera, puedes obtener una aqu\u00ed: class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>>", 
    "Infobox": "Caja de informaci\u00f3n", 
    "Introduction": "Introducci\u00f3n", 
    "January": "Enero", 
    "July": "Julio", 
    "June": "Junio", 
    "Link": "Enlace", 
    "Link to other Everipedia pages": "Enlace a otras p\u00e1ginas de Everipedia", 
    "Link your Everipedia page": "Enlaza su p\u00e1gina Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "No se permiten enlaces a p\u00e1ginas de Wikipedia, por razones t\u00e9cnicas. Por favor, int\u00e9ntalo de nuevo.", 
    "Loading more activity, please wait...": "Cargando m\u00e1s actividad, por favor espera...", 
    "Loading...": "Cargando..", 
    "Main article body": "Cuerpo del art\u00edculo principal", 
    "Main photo": "Foto principal", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Aseg\u00farate de citar tus fuentes cuando agregues informaci\u00f3n a la p\u00e1gina, agregando enlaces y archivos aqu\u00ed para que puedas mostrar de d\u00f3nde proviene la informaci\u00f3n.", 
    "March": "Marzo", 
    "May": "Mayo", 
    "Media": "Media", 
    "Media Gallery": "Galer\u00eda de medios", 
    "Merge": "Fusionar p\u00e1gina", 
    "Midnight": "Medianoche", 
    "Next": "Siguiente", 
    "No URL provided, please try again": "No se ha proporcionado ninguna URL, por favor int\u00e9ntalo de nuevo", 
    "Noon": "Mediod\u00eda", 
    "Not Ready": "No Est\u00e1 Listo", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Ten en cuenta que no podr\u00e1s proponer ediciones sin Brainpower. \u00a1Tu trabajo se perder\u00e1!", 
    "Note: You are %s hour ahead of server time.": [
      "Nota: Usted esta a %s horas por delante de la hora del servidor.", 
      "Nota: Usted va %s horas por delante de la hora del servidor."
    ], 
    "Note: You are %s hour behind server time.": [
      "Nota: Usted esta a %s hora de retraso de tiempo de servidor.", 
      "Nota: Usted va %s horas por detr\u00e1s de la hora del servidor."
    ], 
    "November": "Noviembre", 
    "Now": "Ahora", 
    "October": "Octubre", 
    "Please enter a description for the photo": "Por favor, ingresa una descripci\u00f3n para la foto", 
    "Please provide a description for the link or file.": "Por favor, proporciona una descripci\u00f3n para el enlace o archivo.", 
    "Please provide a more scholarly description.": "Por favor, proporciona una descripci\u00f3n m\u00e1s acad\u00e9mica.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Por favor, pon un poco de IQ en Brainpower antes de continuar. Haz clic en Aceptar para abrir la pantalla de administraci\u00f3n de Brainpower en una nueva pesta\u00f1a. NOTA: Aseg\u00farate de que las ventanas emergentes est\u00e9n habilitadas para este sitio, ya que puedes recibir una advertencia.", 
    "Pre": "Pre", 
    "Profile photo": "Foto de perfil", 
    "Reference links": "Enlaces de referencia", 
    "Remove": "Eliminar", 
    "Remove all": "Eliminar todos", 
    "Save": "Guardar", 
    "Save changes": "Guardar cambios", 
    "Search Everipedia": "Buscar Everipedia", 
    "Searching...": "Buscando...", 
    "September": "Septiembre", 
    "Show": "Mostrar", 
    "Style": "Estilo", 
    "Submit": "Enviar", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "La p\u00e1gina del perfil del editor muestra las p\u00e1ginas que el usuario ha editado, las referencias que ha a\u00f1adido a una p\u00e1gina y los comentarios que ha hecho.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "El infobox est\u00e1 dise\u00f1ado para datos concisos y r\u00e1pidos. Los elementos sugeridos aparecen en el men\u00fa desplegable dependiendo del tema seleccionado, pero se puede a\u00f1adir cualquier tipo de cuadro de informaci\u00f3n.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Esta es la lista de %s disponibles. Puede elegir algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo clic en la flecha \"Elegir\" que hay entre las dos cajas.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Esta es la lista de los %s elegidos. Puede elmininar algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo click en la flecha \"Eliminar\" que hay entre las dos cajas.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\u00a1Este enlace ya est\u00e1 en esta p\u00e1gina, igual puedes editar el resumen del enlace para mejorar la informaci\u00f3n sobre la EP!", 
    "Title": "T\u00edtulo", 
    "To add an image or video to the article text, click the 'Media' button.": "Para a\u00f1adir una imagen o un v\u00eddeo al texto del art\u00edculo, haz clic en el bot\u00f3n 'Media'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Para enlazar a otra p\u00e1gina de Everipedia haz clic en el bot\u00f3n 'Link Page' (\u2018Enlazar pagina\u2019). Tambi\u00e9n puedes pulsar la tecla @ o @ al escribir y aparecer\u00e1 un desplegable. Trata de enlazar a tantas p\u00e1ginas como sea necesario para que cada p\u00e1gina sea lo m\u00e1s rica e informativa posible.", 
    "Today": "Hoy", 
    "Tomorrow": "Ma\u00f1ana", 
    "Type into this box to filter down the list of available %s.": "Escriba en este cuadro para filtrar la lista de %s disponibles", 
    "When you are done, click here to save your changes.": "Cuando hayas terminado, haz clic aqu\u00ed para guardar los cambios.", 
    "When you are finished, click here to save your changes.": "Cuando haya terminado, hazclic aqu\u00ed para guardar los cambios.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Escribir de manera objetiva, en tercera persona, sin incluir ning\u00fan discurso de marketing (ofertas exclusivas, reivindicaciones no verificables, etc.). Esta es una enciclopedia, no una p\u00e1gina de medios sociales.", 
    "Yesterday": "Ayer", 
    "You can also create a new wiki article by clicking here.": "Tambi\u00e9n puedes crear un nuevo art\u00edculo en la wiki haciendo clic aqu\u00ed.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Has estado publicando un mont\u00f3n de enlaces hoy. Espera un poco a que la comunidad responda a tu contenido. Los nuevos editores se limitan a publicar s\u00f3lo 250 env\u00edos al d\u00eda.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Ha seleccionado una acci\u00f3n y no hs hecho ning\u00fan cambio en campos individuales. Probablemente est\u00e9 buscando el bot\u00f3n Ejecutar en lugar del bot\u00f3n Guardar.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Ha seleccionado una acci\u00f3n, pero no ha guardado los cambios en los campos individuales todav\u00eda. Pulse OK para guardar. Tendr\u00e1 que volver a ejecutar la acci\u00f3n.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Tiene cambios sin guardar en campos editables individuales. Si ejecuta una acci\u00f3n, los cambios no guardados se perder\u00e1n.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "d\u00edasActualizado", 
    "hoursUpdated": "horasActualizado", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutosActualizado", 
    "one letter Friday\u0004F": "V", 
    "one letter Monday\u0004M": "L", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "D", 
    "one letter Thursday\u0004T": "J", 
    "one letter Tuesday\u0004T": "M", 
    "one letter Wednesday\u0004W": "M", 
    "paused": "pausado", 
    "reset": "Reiniciar", 
    "secondTenthsUpdated": "segundoD\u00e9cimoActualizado", 
    "secondsUpdated": "segundosActualizado", 
    "started": "iniciado", 
    "stopped": "detenido", 
    "targetAchieved": "objetivoLogrado"
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \\a \\l\\a\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j \\d\\e F", 
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
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
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


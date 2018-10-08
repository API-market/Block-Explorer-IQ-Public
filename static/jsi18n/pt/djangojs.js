

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
      "%(sel)s de %(cnt)s selecionado", 
      "%(sel)s de %(cnt)s selecionados"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(Opcional) Adicione seus endere\u00e7os de carteira criptomoeda", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(Opcional) Digite seu nome, email, nacionalidade, idioma, etc.", 
    "6 a.m.": "6 a.m.", 
    "6 p.m.": "6 p.m.", 
    "Add File": "Adicionar Arquivo", 
    "Add Link": "Adicionar link", 
    "Add Links, Files, Etc.": "Adicione Links, Arquivos, Etc.", 
    "Add New Infobox": "Adicionar nova infobox", 
    "Add Row": "Adicionar Linha", 
    "Add an additional description for this category": "Adicione uma descri\u00e7\u00e3o adicional para esta categoria", 
    "Add media to article text": "Adicionar m\u00eddia ao texto do artigo", 
    "Added pictures will show up here.": "Imagens adicionadas aparecer\u00e3o aqui.", 
    "Adding infobox item, please wait...": "Adicionando item de infobox, por favor aguarde...", 
    "Adding, please wait...": "Adicionando, por favor aguarde...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "Depois de adicionar um link, arquivo ou imagem \u00e0 p\u00e1gina, voc\u00ea pode citar clicando no bot\u00e3o 'Citar'. Voc\u00ea tamb\u00e9m pode pressionar as teclas '^' ou '*' ao digitar e um menu suspenso deve aparecer.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "Tem certeza de que deseja sair da p\u00e1gina? As altera\u00e7\u00f5es n\u00e3o salvas ser\u00e3o perdidas.", 
    "Article proposal submission failed!": "A submiss\u00e3o da proposta de artigo falhou!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\u00c0 medida que voc\u00ea adiciona links e arquivos, eles aparecer\u00e3o na se\u00e7\u00e3o Links de refer\u00eancia. Voc\u00ea pode edit\u00e1-los ou remov\u00ea-los tamb\u00e9m.", 
    "Available %s": "Dispon\u00edvel %s", 
    "Back": "Voltar", 
    "Cancel": "Cancelar", 
    "Choose": "Escolher", 
    "Choose a Date": "Escolha a Data", 
    "Choose a Time": "Escolha a Hora", 
    "Choose a time": "Escolha a hora", 
    "Choose all": "Escolher todos", 
    "Chosen %s": "Escolhido %s", 
    "Cite": "Citar", 
    "Cite as verified editor": "Citar como editor confirmado", 
    "Cite links, files, etc": "Cite links, arquivos, etc", 
    "Cite my own knowledge / experience as a verified editor": "Citar meu pr\u00f3prio conhecimento/experi\u00eancia como um editor verificado", 
    "Claim": "Reivindicar", 
    "Click here to upload a picture for your editor profile.": "Clique aqui para enviar uma foto para o seu perfil de editor.", 
    "Click to choose all %s at once.": "Clique para escolher todos os %s de uma vez.", 
    "Click to remove all chosen %s at once.": "Clique para remover todos os %s escolhidos de uma vez.", 
    "Completing transaction...": "Concluindo a transa\u00e7\u00e3o ...", 
    "Create Page": "Criar P\u00e1gina", 
    "Create page": "Criar P\u00e1gina", 
    "Delete this tag": "Excluir esta tag", 
    "Drag and drop your photo here or click to upload.": "Arraste e solte sua foto aqui ou clique para fazer o upload.", 
    "Edit": "Editar", 
    "Editor profile": "Perfil do editor", 
    "Enter the page title here": "Digite o t\u00edtulo da p\u00e1gina aqui", 
    "Enter your profile info": "Insira suas informa\u00e7\u00f5es de perfil", 
    "Error: proposal not found. Please try submitting again.": "Erro: proposta n\u00e3o encontrada. Por favor, tente enviar novamente.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia \u00e9 como a Wikipedia, mas muito mais simples de editar e contribuir. Cada p\u00e1gina \u00e9 composta por uma \u00e1rea de infobox para fatos curtos e concisos, um artigo principal escrito de forma neutra em 3\u00aa pessoa, uma galeria de m\u00eddia de imagens, v\u00eddeos, \u00e1udio, etc. sobre o t\u00f3pico, uma lista de refer\u00eancias a p\u00e1ginas da Web e arquivos usados \u200b\u200bcomo cita\u00e7\u00f5es no artigo e infobox.", 
    "File uploaded successfully.": "Arquivo carregado com sucesso", 
    "Filter": "Filtrar", 
    "Font Style": "Estilo da Fonte", 
    "Here you can add the main photo for the article.": "Aqui voc\u00ea pode adicionar a foto principal do artigo.", 
    "Hide": "Ocultar", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Se voc\u00ea j\u00e1 criou um artigo da Everipedia sobre voc\u00ea mesmo, pode vincul\u00e1-lo aqui.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "Se voc\u00ea tiver alguma criptomoeda, adicione os endere\u00e7os da carteira aqui. As pessoas podem doar para voc\u00ea se gostarem do seu trabalho! Se voc\u00ea n\u00e3o tiver uma carteira, voc\u00ea pode obter uma aqui: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a>", 
    "Infobox": "Caixa de informa\u00e7\u00e3o", 
    "Introduction": "Introdu\u00e7\u00e3o", 
    "Link": "Link", 
    "Link to other Everipedia pages": "Link para outras p\u00e1ginas da Everipedia", 
    "Link your Everipedia page": "Vincule sua p\u00e1gina da Everipedia", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "Links para p\u00e1ginas da Wikipedia n\u00e3o s\u00e3o permitidos, por raz\u00f5es t\u00e9cnicas. Por favor, tente novamente.", 
    "Loading more activity, please wait...": "Carregando mais atividade, por favor aguarde...", 
    "Loading...": "Carregando..", 
    "Main article body": "Corpo do artigo principal", 
    "Main photo": "Foto Principal", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "Certifique-se de citar suas fontes ao adicionar informa\u00e7\u00f5es \u00e0 p\u00e1gina adicionando links e arquivos aqui para poder mostrar de onde as informa\u00e7\u00f5es vieram.", 
    "Media": "M\u00eddia", 
    "Media Gallery": "Galeria de m\u00eddia", 
    "Midnight": "Meia-noite", 
    "Next": "Pr\u00f3ximo", 
    "No URL provided, please try again": "Nenhum URL fornecido, por favor, tente novamente", 
    "Noon": "Meio-dia", 
    "Not Ready": "N\u00e3o est\u00e1 pronto", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Observe que voc\u00ea n\u00e3o poder\u00e1 propor edi\u00e7\u00f5es sem Brainpower. Seu trabalho ser\u00e1 perdido!", 
    "Note: You are %s hour ahead of server time.": [
      "Nota: O seu fuso hor\u00e1rio est\u00e1 %s hora adiantado em rela\u00e7\u00e3o ao servidor.", 
      "Nota: O seu fuso hor\u00e1rio est\u00e1 %s horas adiantado em rela\u00e7\u00e3o ao servidor."
    ], 
    "Note: You are %s hour behind server time.": [
      "Nota: O use fuso hor\u00e1rio est\u00e1 %s hora atrasado em rela\u00e7\u00e3o ao servidor.", 
      "Nota: O use fuso hor\u00e1rio est\u00e1 %s horas atrasado em rela\u00e7\u00e3o ao servidor."
    ], 
    "Now": "Agora", 
    "Please enter a description for the photo": "Por favor, indique uma descri\u00e7\u00e3o para a foto", 
    "Please provide a description for the link or file.": "Por favor, forne\u00e7a uma descri\u00e7\u00e3o para o link ou arquivo.", 
    "Please provide a more scholarly description.": "Por favor, forne\u00e7a uma descri\u00e7\u00e3o mais acad\u00eamica.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "Por favor, aposte um pouco de QI em Brainpower antes de continuar. Clique em OK para abrir a tela de gerenciamento de Brainpower em uma nova guia. OBSERVA\u00c7\u00c3O: verifique se os pop-ups est\u00e3o ativados para este site, pois voc\u00ea pode receber um aviso.", 
    "Pre": "Pre", 
    "Profile photo": "Foto do Perfil", 
    "Reference links": "Links de refer\u00eancia", 
    "Remove": "Remover", 
    "Remove all": "Remover todos", 
    "Save": "Salvar", 
    "Save changes": "Salvar altera\u00e7\u00f5es", 
    "Search Everipedia": "Pesquisar Everipedia", 
    "Searching...": "Buscando...", 
    "Show": "Mostrar", 
    "Style": "Estilo", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "A p\u00e1gina de perfil do editor mostra as p\u00e1ginas que o usu\u00e1rio editou, as refer\u00eancias adicionadas a uma p\u00e1gina e os coment\u00e1rios que fizeram.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "A Caixa de informa\u00e7\u00e3o \u00e9 projetada para fatos r\u00e1pidos e concisos. Itens sugeridos aparecem no menu suspenso, dependendo do t\u00f3pico selecionado, mas qualquer tipo de Caixa de informa\u00e7\u00e3o pode ser adicionada.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Esta \u00e9 a lista de %s dispon\u00edveis. Poder\u00e1 escolher alguns, selecionando-os na caixa abaixo e clicando na seta \"Escolher\" entre as duas caixas.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Esta \u00e9 a lista de %s escolhidos. Poder\u00e1 remover alguns, selecionando-os na caixa abaixo e clicando na seta \"Remover\" entre as duas caixas.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "Este link j\u00e1 est\u00e1 nesta p\u00e1gina, voc\u00ea ainda pode editar o resumo do link para melhorar as informa\u00e7\u00f5es no EP!", 
    "Title": "T\u00edtulo", 
    "To add an image or video to the article text, click the 'Media' button.": "Para adicionar uma imagem ou v\u00eddeo ao texto do artigo, clique no bot\u00e3o 'M\u00eddia'.", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "Para criar um link para outra p\u00e1gina da Everipedia, clique no bot\u00e3o 'Vincular P\u00e1gina'. Voc\u00ea tamb\u00e9m pode pressionar a tecla '@' ao digitar e um menu suspenso deve aparecer. Tente vincular quantas p\u00e1ginas forem necess\u00e1rias para tornar cada p\u00e1gina t\u00e3o rica e informativa quanto poss\u00edvel.", 
    "Today": "Hoje", 
    "Tomorrow": "Amanh\u00e3", 
    "Type into this box to filter down the list of available %s.": "Digite nesta caixa para filtrar a lista de %s dispon\u00edveis.", 
    "When you are done, click here to save your changes.": "Quando terminar, clique aqui para salvar suas altera\u00e7\u00f5es.", 
    "When you are finished, click here to save your changes.": "Quando terminar, clique aqui para salvar suas altera\u00e7\u00f5es.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "Escreva de maneira objetiva em terceira pessoa, n\u00e3o inclua nenhum discurso de marketing (ofertas exclusivas, reivindica\u00e7\u00f5es n\u00e3o verific\u00e1veis, etc.). Esta \u00e9 uma enciclop\u00e9dia, n\u00e3o uma p\u00e1gina de m\u00eddia social.", 
    "Yesterday": "Ontem", 
    "You can also create a new wiki article by clicking here.": "Voc\u00ea tamb\u00e9m pode criar um novo artigo wiki clicando aqui.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "Voc\u00ea tem postado muitos links hoje. Espere um pouco para a comunidade responder ao seu conte\u00fado. Novos editores est\u00e3o limitados a postar apenas 250 envios por dia.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Selecionou uma a\u00e7\u00e3o mas ainda n\u00e3o guardou as mudan\u00e7as dos campos individuais. Provavelmente querer\u00e1 o bot\u00e3o Ir ao inv\u00e9s do bot\u00e3o Guardar.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Selecionou uma a\u00e7\u00e3o mas ainda n\u00e3o guardou as mudan\u00e7as dos campos individuais. Carregue em OK para gravar. Precisar\u00e1 de correr de novo a a\u00e7\u00e3o.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Tem mudan\u00e7as por guardar nos campos individuais. Se usar uma a\u00e7\u00e3o, as suas mudan\u00e7as por guardar ser\u00e3o perdidas.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "paused": "pausado", 
    "reset": "Redefinir", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "iniciado", 
    "stopped": "parado", 
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y"
    ], 
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
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


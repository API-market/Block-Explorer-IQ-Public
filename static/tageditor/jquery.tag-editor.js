/*
	jQuery tagEditor v1.0.20
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-tagEditor
	License: http://www.opensource.org/licenses/mit-license.php
*/
function checkIfNewInfoboxReady() {
    var newInfotypeVal = $("#newinfobox #id_newinfotype").val();
    var newInfocontentVal = $("#newinfobox #id_newinfocontent").val();
    if ((newInfotypeVal != "") && (newInfocontentVal != "")){
        $("#input-infobox-addinfoboxbtn").show();
    }
    else{
        $("#input-infobox-addinfoboxbtn").hide();
    }
}

function ajaxEditInfobox(boxID, boxContent, pageID) {
    var postData = {boxid: boxID, boxcontent: boxContent, pageID: pageID};
    $.ajax({
        type: "POST",
        url: "/AJAX-REQUEST/AJAX_Edit_Infobox/",
        data: postData,
        // beforeSend: function( xhr ) {
        //     ajaxResultBox.html("<img class='addlink-loading-gif' src='https://epcdn-vz.azureedge.net/static/images/loading.gif'><span style='margin-left: 10px; position: relative; top: 2px; color: goldenrod;'>" + gettext("Adding infobox item, please wait...") + "</span>");
        // },
        success: function (data) {
            // ajax_halo_iq(1);
            // alert("Ajax successful");
        },
        error: function (data) {
            // alert("Ajax failed");
        }
    });
    return false;
}


function ajaxNewRemoveInfobox(boxID, pageID) {
    var postData = {boxid: boxID, pageID: pageID};
    $.ajax({
        type: "POST",
        url: "/AJAX-REQUEST/AJAX_Remove_Infobox/",
        data: postData,
        // beforeSend: function( xhr ) {
        //     ajaxResultBox.html("<img class='addlink-loading-gif' src='https://epcdn-vz.azureedge.net/static/images/loading.gif'><span style='margin-left: 10px; position: relative; top: 2px; color: goldenrod;'>" + gettext("Removing infobox item, please wait...") + "</span>");
        // },
        success: function (data) {
            // ajax_halo_iq(-1);
            // alert("Ajax successful");
        },
        error: function (data) {
            // alert("Ajax failed");
        }
    });
    return false;
}

function ajaxAddPluralInfoboxToExisting(refbox_id, thecontent, tempIdentifier) {
    var postData = {pageID: FACEBOOK_FBID, boxcontent: thecontent, refboxid:refbox_id};
    $.ajax({
        type: "POST",
        url: "/AJAX-REQUEST/AJAX_Add_Plural_Infobox_To_Existing/",
        data: postData,
        // beforeSend: function( xhr ) {
        //     ajaxResultBox.html("<img class='addlink-loading-gif' src='https://epcdn-vz.azureedge.net/static/images/loading.gif'><span style='margin-left: 10px; position: relative; top: 2px; color: goldenrod;'>" + gettext("Removing infobox item, please wait...") + "</span>");
        // },
        success: function (data) {
            var waitingPlural = $('li[data-ajax-temp-id="' + tempIdentifier + '"]');
            $(waitingPlural).attr("data-plural-id", data);
            $(waitingPlural).removeAttr('data-ajax-temp-id');
            $(waitingPlural).find('.tag-editor-spacer').addClass('existing-infocontent');
            return data;
        },
        error: function (data) {
            // alert("Ajax failed");
        }
    });
    return false;
}

function ajaxEditInfotype(boxID, infotype) {
    var postData = {pageID: FACEBOOK_FBID, boxid: boxID, newinfotype: infotype };
    $.ajax({
        type: "POST",
        url: "/AJAX-REQUEST/AJAX_Edit_Infobox_Infotype/",
        data: postData,
        // beforeSend: function( xhr ) {
        //     ajaxResultBox.html("<img class='addlink-loading-gif' src='https://epcdn-vz.azureedge.net/static/images/loading.gif'><span style='margin-left: 10px; position: relative; top: 2px; color: goldenrod;'>" + gettext("Removing infobox item, please wait...") + "</span>");
        // },
        success: function (data) {
            // ajax_halo_iq(1);
            // alert("Ajax successful");
        },
        error: function (data) {
            // alert("Ajax failed");
        }
    });
    return false;
}

(function($){
    // auto grow input (stackoverflow.com/questions/931207)
    $.fn.tagEditorInput=function(){var t=" ",e=$(this),n=parseInt(e.css("fontSize")),i=$("<span/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily"),fontWeight:e.css("fontWeight"),letterSpacing:e.css("letterSpacing"),whiteSpace:"nowrap"}),s=function(){if(t!==(t=e.val())){i.html(t);var s=i.width()+n;20>s&&(s=20),s!=e.width()&&e.width(s)}};return i.insertAfter(e),e.bind("keyup keydown focus",s)};

    // plugin with val as parameter for public methods
    $.fn.tagEditor = function(options, val, blur){

        // helper
        function escape(tag) {
            var re = new RegExp("<span id=\"autocomplete\"><span id=\"autocomplete-delimiter\"><\/span><span id=\"autocomplete-searchtext\"><span class=\"dummy\">","gi");
            tag = tag.replace(re, "");
            re = new RegExp("<\/span><\/span><\/span>","gi");
            tag = tag.replace(re, "");
            return tag;
            //return tag.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
        }
        function htmlEscapeSpecial(tag) {
            var re = new RegExp("\"","gi");
            tag = tag.replace(re, "\\");
            re = new RegExp("\'","gi");
            tag = tag.replace(re, "\\'");
            return tag;
        }
        function htmlInputClean(tag) {
            var re = new RegExp("\"","gi");
            tag = tag.replace(re, "&#34;");
            re = new RegExp("\'","gi");
            tag = tag.replace(re, "&#39;");
            return tag;
        }

        // build options dictionary with default values
        var blur_result, o = $.extend({}, $.fn.tagEditor.defaults, options), selector = this;

        // store regex and default delimiter in options for later use
        o.dregex = new RegExp('['+o.delimiter.replace('-', '\-')+']', 'g');

        // public methods
        if (typeof options == 'string') {
            // depending on selector, response may contain tag lists of multiple editor instances
            var response = [];
            selector.each(function(){
                // the editor is the next sibling to the hidden, original field
                var el = $(this), o = el.data('options'), ed = el.next('.tag-editor');
                if (options == 'getTags')
                    response.push({field: el[0], editor: ed, tags: ed.data('tags')});
                else if (options == 'addTag') {
                    if (o.maxTags && ed.data('tags').length >= o.maxTags) return false;
                    // insert new tag
                    $('<li><div class="tag-editor-spacer"><span class=\"icon icon-circle-with-plus\"></span></div><div class="tag-editor-tag"></div><div class="tag-editor-delete"><i></i></div></li>').appendTo(ed).find('.tag-editor-tag')
                        .html('<input type="text" maxlength="'+o.maxLength+'">').addClass('active').find('input').val(val).blur();
                    if (!blur) ed.click();
                    else $('.placeholder', ed).remove();
                } else if (options == 'removeTag') {
                    // trigger delete on matching tag, then click editor to create a new tag
                    $('.tag-editor-tag', ed).filter(function(){return $(this).html()==val;}).closest('li').find('.tag-editor-delete').click();
                    if (!blur) ed.click();
                } else if (options == 'destroy') {
                    el.removeClass('tag-editor-hidden-src').removeData('options').off('focus.tag-editor').next('.tag-editor').remove();
                }
            });
            return options == 'getTags' ? response : this;
        }

        // delete selected tags on backspace, delete, ctrl+x
        if (window.getSelection) $(document).off('keydown.tag-editor').on('keydown.tag-editor', function(e){
            if (e.which == 8 || e.which == 46 || e.ctrlKey && e.which == 88) {
                try {
                    var sel = getSelection(), el = document.activeElement.tagName == 'BODY' ? $(sel.getRangeAt(0).startContainer.parentNode).closest('.tag-editor') : 0;
                } catch(e){ el = 0; }
                if (sel.rangeCount > 0 && el && el.length) {
                    var tags = [], splits = sel.toString().split(el.prev().data('options').dregex);
                    for (i=0; i<splits.length; i++){ var tag = $.trim(splits[i]); if (tag) tags.push(tag); }
                    $('.tag-editor-tag', el).each(function(){
                        if (~$.inArray($(this).html(), tags)) $(this).closest('li').find('.tag-editor-delete').click();
                    });
                    return false;
                }
            }
        });

        return selector.each(function(){
            var el = $(this), tag_list = [], tinyEditor, inputElem, boxType; // cache current tags

            // create editor (ed) instance
            var ed = $('<ul '+(o.clickDelete ? 'oncontextmenu="return false;" ' : '')+'class="tag-editor"></ul>').insertAfter(el);
            el.addClass('tag-editor-hidden-src') // hide original field
                .data('options', o) // set data on hidden field
                .on('focus.tag-editor', function(){
                    ed.click();
                }); // simulate tabindex

            // // add dummy item for min-height on empty editor
            // ed.append('<li class="dummy-spacer"><span class=\"icon icon-circle-with-plus\"></span></li>');

            // markup for new tag
            var new_tag = '<li data-plural-id="NEWPLURAL" ><div class="tag-editor-spacer new-infocontent"><span class=\"icon icon-circle-with-minus\"></span></div><div class="tag-editor-tag"></div><div class="tag-editor-delete"><i></i></div></li>';

            // helper: update global data
            function set_placeholder(){
                if (o.placeholder && !tag_list.length && !$('.deleted, .placeholder, input', ed).length)
                    ed.append('<li class="placeholder"><div>'+o.placeholder+'</div></li>');
            }

            // helper: update global data
            function update_globals(init){
                var old_tags = tag_list.toString();
                tag_list = $('.tag-editor-tag:not(.deleted)', ed).map(function(i, e) {
                    var val = $.trim($(this).hasClass('active') ? $(this).find('input').val() : $(e).html());
                    if (val) return val;
                }).get();
                ed.data('tags', tag_list);
                el.val(tag_list.join(o.delimiter[0]));
                // change callback except for plugin init
                if (!init) if (old_tags != tag_list.toString()) o.onChange(el, ed, tag_list);
                set_placeholder();
            }

            ed.on('click tap', function(e, closest_tag){
                var d, dist = 99999, loc;
                // do not create tag when user selects tags by text selection
                if (window.getSelection && getSelection() != '') return;

                if (o.maxTags && ed.data('tags').length >= o.maxTags) { ed.find('input').blur(); return false; }

                blur_result = true;
                $('input:focus', ed).blur();
                if (!blur_result) return false;
                blur_result = true;

                // always remove placeholder on click
                $('.placeholder', ed).remove();
                if (closest_tag && closest_tag.length)
                    loc = 'before';
                else {
                    // calculate tag closest to click position
                    $('.tag-editor-tag', ed).each(function(){
                        var tag = $(this), to = tag.offset(), tag_x = to.left, tag_y = to.top;
                        if (e.pageY >= tag_y && e.pageY <= tag_y+tag.height()) {
                            if (e.pageX < tag_x) loc = 'before', d = tag_x - e.pageX;
                            else loc = 'after', d = e.pageX - tag_x - tag.width();
                            if (d < dist) dist = d, closest_tag = tag;
                        }
                    });
                }
                if (loc == 'before'){
                    loc = 'after';
                }


                if (loc == 'before') {
                    $(new_tag).insertBefore(closest_tag.closest('li')).find('.tag-editor-tag').click();
                } else if (loc == 'after')
                    $(new_tag).insertAfter(closest_tag.closest('li')).find('.tag-editor-tag').click();
                else // empty editor
                    $(new_tag).appendTo(ed).find('.tag-editor-tag').click();
                return false;
            });

            ed.on('click tap', '.tag-editor-delete', function(e){
                var pluralID = "undefined";
                // delete icon is hidden when input is visible; place cursor near invisible delete icon on click
                if ($(this).prev().hasClass('active')) { $(this).closest('li').find('input').caret(-1); return false; }

                var li = $(this).closest('li'), tag = li.find('.tag-editor-tag');
                if (o.beforeTagDelete(el, ed, tag_list, tag.html()) === false) return false;
                var tagID = $(this).closest('li[data-infobox-id]').attr('data-infobox-id');
                var pageID = $(this).closest('li[data-infobox-id]').attr('data-page-id');
                try{
                    pluralID = $(this).closest('li[data-plural-id]').attr('data-plural-id');
                }
                catch(err){}
                if(typeof pluralID !== "undefined"){
                    ajaxNewRemoveInfobox(pluralID, pageID);
                } else{
                    ajaxNewRemoveInfobox(tagID, pageID);
                }

                var infolineItem = $(this).closest('.infobox-infocontent.infoline');
                var num = infolineItem.find(".tag-editor-tag").length;
                if (num <= 1 ){
                    var isNewTag = false;
                    try{
                        var newTag = $(this).closest('.infobox-input-container').attr("data-newbox");
                        if (newTag == "true"){
                            return false;
                        }
                    }
                    catch (err){

                    }

                    var quickItem = ed.closest('.infobox-input-container');
                    quickItem.remove();
                }
                tag.addClass('deleted').animate({width: 0}, o.animateDelete, function(){ li.remove(); set_placeholder(); });
                update_globals();
                return false;
            });

            ed.on('click tap', '.tag-editor-spacer.new-infocontent', function(e){
                // delete icon is hidden when input is visible; place cursor near invisible delete icon on click
                if ($(this).prev().hasClass('active')) { $(this).closest('li').find('input').caret(-1); return false; }

                var li = $(this).closest('li'), tag = li.find('.tag-editor-tag');
                if (o.beforeTagDelete(el, ed, tag_list, tag.html()) === false) return false;
                tag.addClass('deleted').animate({width: 0}, o.animateDelete, function(){ li.remove(); set_placeholder(); });
                update_globals();
                return false;
            });

            // delete on right mouse click or ctrl+click
            if (o.clickDelete)
                ed.on('mousedown tap', '.tag-editor-tag', function(e){
                    if (e.ctrlKey || e.which > 1) {
                        var li = $(this).closest('li'), tag = li.find('.tag-editor-tag');
                        if (o.beforeTagDelete(el, ed, tag_list, tag.html()) === false) return false;
                        tag.addClass('deleted').animate({width: 0}, o.animateDelete, function(){ li.remove(); set_placeholder(); });
                        update_globals();
                        return false;
                    }
                });

            ed.on('click tap', '.tag-editor-tag', function(e){
                var infoInputID;
                // delete on right click or ctrl+click -> exit
                if (o.clickDelete && (e.ctrlKey || e.which > 1)) return false;

                if (!$(this).hasClass('active')) {
                    var tag = $(this).html();
                    // guess cursor position in text input
                    var left_percent = Math.abs(($(this).offset().left - e.pageX)/$(this).width());
                    var caret_pos = parseInt(tag.length*left_percent);
                    var buttonTag = "<button type='button' class='infotype-submit'>" + django.gettext("Save") + "</button>";
                    var input = $(this).html('<input class="tag-input" type="text" maxlength="'+o.maxLength+'" value="'+htmlInputClean(escape(tag))+'">' + buttonTag).addClass('active').find('input');
                    // var input = $(this).html('<input class="tag-input" type="text" maxlength="'+o.maxLength+'" value="'+htmlEscapeSpecial(escape(tag))+'">' + buttonTag).addClass('active').find('input');
                    input.data('old_tag', tag).tagEditorInput().focus().caret(caret_pos);
                    if (o.autocomplete) {
                        var aco = $.extend({}, o.autocomplete);
                        input.autocomplete(aco);
                    }
                    var infoboxID = $(this).closest("li.infobox-input-container").data("infobox-id");
                    boxType = $(this).closest("span.infoline").data("type");
                    inputElem = $(this).find("input.tag-input");
                    infoInputID = "infobox_" + boxType + "_" + infoboxID;
                    inputElem.attr('id', infoInputID );
                    if (boxType == 'infocontent'){
                        var quickTag = $(inputElem).closest("li").find("div:not(.new-infocontent).tag-editor-spacer");
                        // alert(quickTag.html());
                        // alert($(inputElem).closest("li").html());
                        tinyEditor = tinymce__edit_attach_infobox_iframe(infoInputID);
                        tinyEditor.dom.loadCSS('/static/css/tinymce_custom_infobox.css?' + new Date().getTime());
                        inputElem = tinyEditor;
                        quickTag.html("");

                    }
                }

                return false;
            });

            // helper: split into multiple tags, e.g. after paste
            function split_cleanup(input){
                var li = input.closest('li'), sub_tags = input.val().replace(/ +/, ' ').split(o.dregex),
                    old_tag = input.data('old_tag'), old_tags = tag_list.slice(0), exceeded = false, cb_val; // copy tag_list
                for (var i=0; i<sub_tags.length; i++) {
                    tag = $.trim(sub_tags[i]).slice(0, o.maxLength);
                    if (o.forceLowercase) tag = tag.toLowerCase();
                    cb_val = o.beforeTagSave(el, ed, old_tags, old_tag, tag);
                    tag = cb_val || tag;
                    if (cb_val === false || !tag) continue;
                    // remove duplicates
                    if (o.removeDuplicates && ~$.inArray(tag, old_tags))
                        $('.tag-editor-tag', ed).each(function(){ if ($(this).html() == tag) $(this).closest('li').remove(); });
                    old_tags.push(tag);
                    li.before('<li><div class="tag-editor-spacer"><span class=\"icon icon-circle-with-plus\"></span></div><div class="tag-editor-tag">'+escape(tag)+'</div><div class="tag-editor-delete"><i></i></div></li>');
                    if (o.maxTags && old_tags.length >= o.maxTags) { exceeded = true; break; }
                }
                input.attr('maxlength', o.maxLength).removeData('old_tag').val('');
                if (exceeded) input.blur(); else input.focus();
                update_globals();
            }

            ed.on('click tap', 'button.infotype-submit', function(e){
                var parentInfoboxID = $(this).closest("li.infobox-input-container").attr("data-infobox-id");
                e.stopPropagation();
                try {
                    $('#blurbedit_location .mce-toolbar-grp.mce-container.mce-panel.mce-stack-layout-item.mce-first').show();
                    tinyEditor.remove();

                }
                catch(err){}

                var theInput = ed.find('input');

                var input = theInput, old_tag = input.data('old_tag'), tag = $.trim(input.val().replace(/ +/, ' ').replace(o.dregex, o.delimiter[0]));
                if (!tag) {
                    if (parentInfoboxID == "NEWBOX") {
                        checkIfNewInfoboxReady();
                    }
                    if (old_tag && o.beforeTagDelete(el, ed, tag_list, old_tag) === false) {
                        input.val(old_tag).focus();
                        blur_result = false;
                        update_globals();
                        return;
                    }
                    try { input.closest('li').remove(); } catch(e){}
                    if (old_tag) update_globals();
                }
                // else if (tag.indexOf(o.delimiter[0])>=0) {
                //     split_cleanup(input); return;
                // }
                else if (tag != old_tag) {
                    var pluralID = "undefined";
                    var pluralInputTag = "";
                    var newPluralID = "";
                    var isNewBox = false;
                    if (o.forceLowercase) tag = tag.toLowerCase();
                    cb_val = o.beforeTagSave(el, ed, tag_list, old_tag, tag);
                    tag = cb_val || tag;


                    boxType = $(this).closest("span.infoline").attr("data-type");
                    var tagID = $(theInput).closest('li[data-infobox-id]').data('infobox-id');
                    var pageID = $(theInput).closest('li[data-infobox-id]').data('page-id');
                    if (parentInfoboxID == "NEWBOX") {
                        // checkIfNewInfoboxReady();
                    }
                    else {
                        if (boxType == 'infocontent') {
                            try {
                                pluralInputTag = $(theInput).closest('li[data-plural-id]');
                                pluralID = pluralInputTag.data('plural-id');
                            }
                            catch (err) {
                            }
                            if (pluralID == "NEWPLURAL") {
                                var tempIdentifier = new Date().getTime();
                                pluralInputTag.attr("data-ajax-temp-id", tempIdentifier);
                                ajaxAddPluralInfoboxToExisting(tagID, tag, tempIdentifier);
                            }
                            else if (typeof pluralID !== "undefined") {
                                ajaxEditInfobox(pluralID, tag, pageID);
                            }
                            else {
                                ajaxEditInfobox(tagID, tag, pageID);
                            }
                        }
                        else if (boxType == 'infotype') {
                            ajaxEditInfotype(tagID, tag, pageID)
                        }
                    }
                    if (cb_val === false) {
                        if (old_tag) {
                            input.val(old_tag).focus();
                            blur_result = false;
                            update_globals();
                            return;
                        }
                        try { input.closest('li').remove(); } catch(e){}
                        if (old_tag) update_globals();

                    }
                    // remove duplicates
                    else if (o.removeDuplicates)
                        $('.tag-editor-tag:not(.active)', ed).each(function(){ if ($(this).html() == tag) $(this).closest('li').remove(); });
                }

                var quickTag = input.closest("li").find(".tag-editor-spacer");
                quickTag.html("<span class=\"icon icon-circle-with-plus\"></span>");
                quickTag.removeClass("new-infocontent");
                input.parent().html(escape(tag)).removeClass('active');
                if (tag != old_tag) update_globals();
                set_placeholder();

                if (parentInfoboxID == "NEWBOX") {
                    checkIfNewInfoboxReady();
                }

            });

            var pasted_content;
            ed.on('paste', 'input', function(e){
                $(this).removeAttr('maxlength');
                pasted_content = $(this);
                setTimeout(function(){ split_cleanup(pasted_content); }, 30);
            });

            // keypress delimiter
            var inp;
            ed.on('keypress', 'input', function(e){
                if (o.delimiter.indexOf(String.fromCharCode(e.which))>=0) {
                    inp = $(this);
                    setTimeout(function(){ split_cleanup(inp); }, 20);
                }
            });

            ed.on('keydown', 'input', function(e){
                var $t = $(this);
                // left/up key + backspace key on empty field
                if ((e.which == 37 || !o.autocomplete && e.which == 38) && !$t.caret() || e.which == 8 && !$t.val()) {
                    var prev_tag = $t.closest('li').prev('li').find('.tag-editor-tag');
                    if (prev_tag.length) prev_tag.click().find('input').caret(-1);
                    else if ($t.val() && !(o.maxTags && ed.data('tags').length >= o.maxTags)) $(new_tag).insertBefore($t.closest('li')).find('.tag-editor-tag').click();
                    return false;
                }
                // right/down key
                else if ((e.which == 39 || !o.autocomplete && e.which == 40) && ($t.caret() == $t.val().length)) {
                    var next_tag = $t.closest('li').next('li').find('.tag-editor-tag');
                    if (next_tag.length) next_tag.click().find('input').caret(0);
                    else if ($t.val()) ed.click();
                    return false;
                }
                // tab key
                else if (e.which == 9) {
                    // shift+tab
                    if (e.shiftKey) {
                        var prev_tag = $t.closest('li').prev('li').find('.tag-editor-tag');
                        if (prev_tag.length) prev_tag.click().find('input').caret(0);
                        else if ($t.val() && !(o.maxTags && ed.data('tags').length >= o.maxTags)) $(new_tag).insertBefore($t.closest('li')).find('.tag-editor-tag').click();
                        // allow tabbing to previous element
                        else {
                            el.attr('disabled', 'disabled');
                            setTimeout(function(){ el.removeAttr('disabled'); }, 30);
                            return;
                        }
                        return false;
                    // tab
                    } else {
                        var next_tag = $t.closest('li').next('li').find('.tag-editor-tag');
                        if (next_tag.length) next_tag.click().find('input').caret(0);
                        else if ($t.val()) ed.click();
                        else return; // allow tabbing to next element
                        return false;
                    }
                }
                // del key
                else if (e.which == 46 && (!$.trim($t.val()) || ($t.caret() == $t.val().length))) {
                    var next_tag = $t.closest('li').next('li').find('.tag-editor-tag');
                    if (next_tag.length) next_tag.click().find('input').caret(0);
                    else if ($t.val()) ed.click();
                    return false;
                }
                // enter key
                else if (e.which == 13) {
                    // trigger blur if maxTags limit is reached
                    if (o.maxTags && ed.data('tags').length >= o.maxTags){
                        ed.trigger('click', [$t.closest('li').next('li').find('.tag-editor-tag')]);
                        ed.find('input').blur();
                    }

                    return false;
                }
                // pos1
                else if (e.which == 36 && !$t.caret()) ed.find('.tag-editor-tag').first().click();
                // end
                else if (e.which == 35 && $t.caret() == $t.val().length) ed.find('.tag-editor-tag').last().click();
                // esc
                else if (e.which == 27) {
                    $t.val($t.data('old_tag') ? $t.data('old_tag') : '').blur();
                    return false;
                }
            });

            // create initial tags
            var tags = o.initialTags.length ? o.initialTags : el.val().split(o.dregex);
            for (var i=0; i<tags.length; i++) {
                var thePluralID = "";
                if (o.maxTags && i >= o.maxTags) break;
                var tag = $.trim(tags[i].replace(/ +/, ' '));
                if (tag) {
                    if (o.forceLowercase) tag = tag.toLowerCase();
                    tag_list.push(tag);
                    try{
                        var quickSplit = tag.split("$_#[");
                        thePluralID = quickSplit[1].replace("]", "");
                        tag = quickSplit[0];
                    }
                    catch(err){

                    }
                    if(o.delimiter[0] == "~"){
                        ed.append('<li><div class="tag-editor-spacer" style="display:none"><span title="' + gettext('Add an additional description for this category') + '" data-toggle="tooltip" class=\"icon icon-circle-with-plus\"></span></div><div class="tag-editor-tag">'+escape(tag)+'</div><div class="tag-editor-delete" title="' + gettext('Delete this tag') + '" data-toggle="tooltip"><i></i></div></li>');
                    }
                    else if (thePluralID != ""){
                        ed.append('<li data-plural-id="' + thePluralID + '"><div class="tag-editor-spacer existing-infocontent"><span title="' + gettext('Add an additional description for this category') + '" data-toggle="tooltip" class=\"icon icon-circle-with-plus\"></span></div><div class="tag-editor-tag">'+escape(tag)+'</div><div class="tag-editor-delete" title="' + gettext('Delete this tag') + '" data-toggle="tooltip"><i></i></div></li>');
                    }
                    else{
                        ed.append('<li><div class="tag-editor-spacer existing-infocontent"><span title="' + gettext('Add an additional description for this category') + '" data-toggle="tooltip" class=\"icon icon-circle-with-plus\"></span></div><div class="tag-editor-tag">'+escape(tag)+'</div><div class="tag-editor-delete" title="' + gettext('Delete this tag') + '" data-toggle="tooltip" ><i></i></div></li>');
                    }
                }
            }
            update_globals(true); // true -> no onChange callback

            // init sortable
            if (o.sortable && $.fn.sortable) ed.sortable({
                distance: 5, cancel: '.tag-editor-spacer, input', helper: 'clone',
                update: function(){ update_globals(); }
            });

            // if (boxType == 'infocontent') {
                // add dummy item for min-height on empty editor
                // ed.append('<li class="dummy-spacer"><span class=\"icon icon-circle-with-plus\"></span></li>');
            // }

        });
    };

    $.fn.tagEditor.defaults = {
        initialTags: [],
        maxTags: 0,
        maxLength: 50,
        delimiter: ',;',
        placeholder: '',
        forceLowercase: true,
        removeDuplicates: true,
        clickDelete: false,
        animateDelete: 175,
        sortable: true, // jQuery UI sortable
        autocomplete: null, // options dict for jQuery UI autocomplete

        // callbacks
        onChange: function(){},
        beforeTagSave: function(){},
        beforeTagDelete: function(){}
    };
}(jQuery));

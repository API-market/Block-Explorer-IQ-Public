

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
    "(Optional) Add your cryptocurrency wallet addresses": "\u63c0 \u6dfb\u52a0\u4f60\u5605 cryptocurrency \u8377\u5305\u5730\u5740", 
    "(Optional) Enter your name, email, nationality, language, etc.": "\u63c0 \u8f38\u5165\u60a8\u7684\u59d3\u540d\u3001\u96fb\u5b50\u90f5\u4ef6\u3001\u570b\u7c4d\u3001\u8a9e\u8a00\u7b49\u3002", 
    "Add File": "\u6dfb\u52a0\u6587\u4ef6", 
    "Add Link": "\u6dfb\u52a0\u9023\u7d50", 
    "Add Links, Files, Etc.": "\u6dfb\u52a0\u9023\u7d50\u3001\u6587\u4ef6\u7b49\u3002", 
    "Add New Infobox": "\u6dfb\u52a0\u65b0 Infobox", 
    "Add Row": "\u6dfb\u52a0\u884c", 
    "Add an additional description for this category": "\u6dfb\u52a0\u6b64\u985e\u5225\u7684\u5176\u4ed6\u8aaa\u660e", 
    "Add media to article text": "\u5c07\u5a92\u9ad4\u6dfb\u52a0\u5230\u6587\u6587\u672c\u4e2d", 
    "Added pictures will show up here.": "\u6dfb\u52a0\u7684\u5716\u6703\u986f\u793a\u55ba\u5462\u5ea6\u3002", 
    "Adding infobox item, please wait...": "\u6dfb\u52a0 infobox \u9805\u76ee, \u8acb\u7a0d\u5019..\u3002", 
    "Adding, please wait...": "\u6dfb\u52a0, \u8acb\u7a0d\u5019..\u3002", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "\u5728\u4f60\u5df2\u7d93\u5c07\u9023\u7d50\u3001\u6587\u4ef6\u6216\u5716\u7247\u6dfb\u52a0\u5230\u9801\u9762\u4e4b\u5f8c, \u60a8\u53ef\u4ee5\u901a\u904e\u5355\u51fb \"\u5f15\u7528\" \u6309\u9215\u4f86\u5f15\u7528\u5b83\u3002 \u4f60\u4ef2\u53ef\u4ee5\u55ba\u9375\u5165\u6642\u6309 \"^\" \u6216 \"*\" \u9375, \u4e26\u986f\u793a\u4e0b\u62c9\u5217\u8868\u3002", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u4fc2\u54aa\u771f\u4fc2\u8981\u9000\u51fa\u8a72\u9801? \u672a\u4fdd\u5b58\u5605\u66f4\u6539\u6703\u4e1f\u5931\u3002", 
    "Are you sure you want to remove this link?": "\u771f\u4fc2\u8981\u522a\u9664\u6b64\u9023\u7d50\u55ce?", 
    "Article proposal submission failed!": "\u6587\u7ae0\u5efa\u8b70\u63d0\u4ea4\u8870!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\u5728\u6dfb\u52a0\u9023\u7d50\u548c\u6587\u4ef6\u6642, \u5b83\u5011\u6703\u986f\u793a\u4fc2 \"\u53c3\u8003\u9023\u7d50\" \u90e8\u5206\u4e2d\u3002 \u90fd\u53ef\u4ee5\u7de8\u8f2f\u6216\u522a\u9664\u5b83\u5011\u3002", 
    "Back": "\u8fd4\u56de", 
    "Cancel": "\u53d6\u6d88", 
    "Cite": "\u5f15\u7528", 
    "Cite as verified editor": "\u5f15\u7528\u70ba\u5df2\u9a57\u8b49\u7684\u7de8\u8f2f\u5668", 
    "Cite links, files, etc": "\u5f15\u7528\u9023\u7d50\u3001\u6587\u4ef6\u7b49", 
    "Cite my own knowledge / experience as a verified editor": "\u5f15\u7528\u6211\u81ea\u5df1\u5605\u77e5\u8b58/\u7d93\u9a57\u4f5c\u70ba\u9a57\u8b49\u7de8\u8f2f\u5668", 
    "Claim": "\u7d22\u8ce0", 
    "Click here to upload a picture for your editor profile.": "\u5355\u51fb\u6b64\u8655\u4e0a\u8f09\u7de8\u8f2f\u5668\u914d\u7f6e\u6587\u4ef6\u7684\u5716\u7247\u3002", 
    "Completing transaction...": "\u6b63\u5728\u5b8c\u6210\u4ea4\u6613\u8a18\u9304..\u3002", 
    "Create Page": "\u5275\u5efa\u9801\u9762", 
    "Create page": "\u5275\u5efa\u9801\u9762", 
    "Delete this tag": "\u522a\u9664\u6b64\u6a19\u8a18", 
    "Drag and drop your photo here or click to upload.": "\u8acb\u5728\u6b64\u8655\u62d6\u653e\u76f8\u6216\u5355\u51fb \"\u4e0a\u8f09\"\u3002", 
    "Edit": "\u7de8\u8f2f", 
    "Editor profile": "\u7de8\u8f2f\u5668\u914d\u7f6e\u6587\u4ef6", 
    "Enter the page title here": "\u5728\u6b64\u8655\u8f38\u5165\u9801\u9762\u6a19\u984c", 
    "Enter your profile info": "\u8f38\u5165\u60a8\u7684\u500b\u4eba\u8cc7\u6599\u4fe1\u606f", 
    "Error: proposal not found. Please try submitting again.": "\u932f\u8aa4: \u6435\u5514\u5230\u5efa\u8b70\u3002 \u8acb\u5617\u8a66\u518d\u6b21\u63d0\u4ea4\u3002", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "everipedia \u5c31\u597d\u4f3c\u7dad\u57fa\u767e\u79d1, \u4f46\u7de8\u8f2f\u540c\u8ca2\u737b\u66f4\u7c21\u55ae\u3002 \u6bcf\u9801\u90fd\u7531\u4e00\u500b infobox \u5340\u57df\u7d44\u6210, \u7c21\u77ed\u7684\u4e8b\u5be6, \u4e00\u500b\u4e3b\u8981\u7684\u6587\u7ae0, \u5728\u4e2d\u6027\u7684\u7b2c\u4e09\u4eba\u7a31\u65f6\u6001, \u4e00\u500b\u5a92\u9ad4\u756b\u5eca\u5605\u5716, \u8996\u983b, \u97f3\u983b\u7b49\u6709\u95dc\u4e3b\u984c, \u4e00\u4efd\u5c0d\u7db2\u9801\u548c\u6587\u4ef6\u7684\u5f15\u7528\u5217\u8868, \u4f5c\u70ba\u5f15\u6587\u5728\u6587\u7ae0\u4e2d\u540c\u7cfb fobox\u3002", 
    "File uploaded successfully": "\u6587\u4ef6\u5df2\u6210\u529f\u4e0a\u8f09", 
    "File uploaded successfully.": "\u6587\u4ef6\u4e0a\u8f09\u6210\u529f\u3002", 
    "Font Style": "\u5b57\u9ad4\u6b3e\u5f0f", 
    "Formats": "\u683c\u5f0f", 
    "Here you can add the main photo for the article.": "\u4fc2\u5462\u5ea6, \u4f60\u53ef\u4ee5\u6dfb\u52a0\u7684\u4e3b\u8981\u76f8\u5605\u6587\u7ae0\u3002", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "\u5982\u679c\u4f60\u6709\u5275\u5efa\u4e00\u500b\u95dc\u65bc\u4f60\u81ea\u5df1\u5605 everipedia \u6587\u7ae0, \u4f60\u53ef\u4ee5\u55ba\u5462\u5ea6\u93c8\u63a5\u5230\u4f62\u3002", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\u5982\u679c\u4f60\u6709\u4efb\u4f55 cryptocurrencies, \u8acb\u5728\u6b64\u8655\u6dfb\u52a0\u8377\u5305\u5730\u5740\u3002 \u5982\u679c\u4f62\u4e2d\u610f\u4f60\u65e2\u5de5\u4f5c, \u4eba\u5011\u53ef\u80fd\u6703\u6350\u7540\u4f60! \u5982\u679c\u4f60\u5187\u9280\u5305, \u4f60\u53ef\u4ee5\u55ba\u5462\u5ea6\u5f97\u5230\u4e00\u500b: <img class= ' userview-crypto-logo-helper ' src= ' https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg '/> <a class= ' helper-crypto-anchor ' rel= ' nofollow ' target= ' _blank ' href= ' https://www.coinbase.com/' > \u6bd4\u7279\u5e63 </a>, <img class= ' userview-crypto-logo-helper ' style= ' margin-right: 0px; ' src= ' https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png '/> <a class= ' helper-crypto-anchor ' rel= ' nofollow ' target= ' _blank ' href= ' https://www.coinbase.com/' > \u865b\u9748\u8b70\u6703 </a>, <img class= ' userview-crypto-logo-helper ' src= ' https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png '/> <a class= ' helper-crypto-anchor ' rel= ' nofollow ' target= ' _blank ' href= ' https://my.dogechain.info/#/overview ' > Dogecoin </a>", 
    "Infobox": "Infobox", 
    "Introduction": "\u4ecb\u7d39", 
    "Link": "\u9023\u7d50", 
    "Link to other Everipedia pages": "\u93c8\u63a5\u5230\u5176\u4ed6 everipedia \u9801", 
    "Link your Everipedia page": "\u9023\u7d50\u4f60\u5605 everipedia \u9801", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "\u7531\u65bc\u6280\u8853\u4e0a\u7684\u539f\u56e0, \u4e0d\u5141\u8a31\u93c8\u63a5\u5230\u7dad\u57fa\u767e\u79d1\u9801\u9762\u3002 \u8acb\u91cd\u8a66\u3002", 
    "Loading more activity, please wait...": "\u52a0\u8f7d\u66f4\u591a\u6d3b\u52d5, \u8acb\u7a0d\u5019..\u3002", 
    "Loading...": "\u52a0\u8f7d\u3002\u3002\u3002", 
    "Main article body": "\u4e3b\u8981\u6587\u6b63\u6587", 
    "Main photo": "\u4e3b\u8981\u76f8", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\u5728\u5411\u9801\u9762\u6dfb\u52a0\u4fe1\u606f\u6642, \u8acb\u52d9\u5fc5\u5f15\u7528\u4f60\u5605\u4f86\u6e90, \u70ba\u6b64\u8acb\u5728\u6b64\u8655\u6dfb\u52a0\u9023\u7d50\u548c\u6587\u4ef6, \u4ee5\u4fbf\u986f\u793a\u4fe1\u606f\u4f86\u81ea\u4f55\u8655\u3002", 
    "Media": "\u5a92\u9ad4", 
    "Media Gallery": "\u5a92\u9ad4\u5eab", 
    "Merging...": "\u5408\u4f75\u3002\u3002\u3002", 
    "Next": "\u4e0b\u4e00\u6b65", 
    "No URL provided, please try again": "\u5187\u63d0\u4f9b url, \u8acb\u91cd\u8a66", 
    "Not Ready": "\u672a\u6e96\u5099\u597d", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "\u8acb\u6ce8\u610f, \u5982\u679c\u5187\u8166\u529b, \u4f60\u5c31\u7121\u6cd5\u63d0\u51fa\u7de8\u8f2f\u3002 \u4f60\u65e2\u5de5\u4f5c\u5c07\u6703\u4e1f\u5931!", 
    "Please enter a description for the photo": "\u8acb\u8f38\u5165\u76f8\u5605\u63cf\u8ff0", 
    "Please enter a headline": "\u8acb\u8f38\u5165\u6a19\u984c", 
    "Please provide a description for the link or file.": "\u8acb\u63d0\u4f9b\u9023\u7d50\u6216\u6587\u4ef6\u7684\u8aaa\u660e\u3002", 
    "Please provide a more scholarly description.": "\u8acb\u63d0\u4f9b\u66f4\u591a\u5605\u5b78\u8853\u63cf\u8ff0\u3002", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "\u5728\u7e7c\u7e8c\u4e4b\u524d, \u8acb\u628a\u667a\u5546\u6295\u5165\u8166\u529b\u3002 \u5355\u51fb \"\u78ba\u5b9a\", \u5728\u65b0\u9078\u9805\u5361\u4e2d\u6253\u958b \"\u667a\u80fd\u7ba1\u7406\" \u5c4f\u5e55. \u8a3b: \u8acb\u78ba\u4fdd\u6b64\u7db2\u7ad9\u555f\u7528\u4e86\u5f48\u51fa\u7a97\u53e3, \u56e0\u70ba\u4f60\u53ef\u80fd\u6703\u6536\u5230\u8b66\u544a\u3002", 
    "Posting comment, please wait..": "\u5f35\u8cbc\u8a55\u8ad6, \u8acb\u7a0d\u5019\u3002", 
    "Posting reply, please wait..": "\u904e\u5e33\u56de\u8986, \u8acb\u7a0d\u5019\u3002", 
    "Pre": "\u524d", 
    "Profile photo": "\u500b\u4eba\u8cc7\u6599\u7167\u7247", 
    "Reference links": "\u53c3\u8003\u9023\u7d50", 
    "Save": "\u6551", 
    "Save changes": "\u4fdd\u5b58\u66f4\u6539", 
    "Search Everipedia": "\u641c\u7d22 everipedia", 
    "Searching...": "\u641c\u5c0b...", 
    "Style": "\u98a8\u683c", 
    "Submission Successful!": "\u63d0\u4ea4\u6210\u529f!", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "\"\u7de8\u8f2f\u5668\u914d\u7f6e\u6587\u4ef6\" \u9801\u986f\u793a\u7528\u6236\u5df2\u7de8\u8f2f\u7684\u9801\u9762\u3001\u5df2\u6dfb\u52a0\u5230\u9801\u9762\u7684\u5f15\u7528\u4ee5\u53ca\u5b83\u5011\u6240\u505a\u7684\u8a3b\u91cb\u3002", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "infobox \u4fc2\u70ba\u7c21\u660e\u3001\u5feb\u901f\u5605\u4e8b\u5be6\u800c\u8a2d\u8a08\u7684\u3002 \u6839\u64da\u6240\u9078\u4e3b\u984c, \u5efa\u8b70\u7684\u9805\u76ee\u986f\u793a\u5728\u4e0b\u62c9\u5217\u8868\u4e2d, \u4f46\u53ef\u4ee5\u6dfb\u52a0\u4efb\u4f55\u985e\u578b\u7684 infobox\u3002", 
    "This comment is already on this page. Please try again!": "\u6b64\u8a3b\u91cb\u5df2\u55ba\u8a72\u9801\u4e0a\u3002 \u8acb\u91cd\u8a66!", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\u9019\u500b\u9023\u7d50\u5df2\u7d93\u5728\u9019\u500b\u9801\u9762\u4e0a, \u4f60\u4ecd\u7136\u53ef\u4ee5\u7de8\u8f2f\u9023\u7d50\u6458\u8981, \u4ee5\u6539\u5584 ep \u5605\u4fe1\u606f!", 
    "Title": "\u6a19\u984c", 
    "To add an image or video to the article text, click the 'Media' button.": "\u8981\u5411\u6587\u6587\u672c\u4e2d\u6dfb\u52a0\u5716\u50cf\u6216\u8996\u983b, \u8acb\u5355\u51fb \"\u5a92\u9ad4\" \u6309\u9215\u3002", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\u82e5\u8981\u93c8\u63a5\u5230\u5176\u4ed6 everipedia \u9801, \u8acb\u5355\u51fb \"\u9023\u7d50\u9801\" \u6309\u9215\u3002 \u4f60\u4ef2\u53ef\u4ee5\u55ba\u9375\u5165\u6642\u6309 \"@\" \u6216\u9375, \u4e26\u986f\u793a\u4e0b\u62c9\u5217\u8868\u3002 \u5617\u8a66\u93c8\u63a5\u5230\u5118\u53ef\u80fd\u591a\u7684\u9801\u9762, \u4ee5\u4f7f\u6bcf\u500b\u9801\u9762\u5118\u53ef\u80fd\u8c50\u5bcc\u548c\u4fe1\u606f\u3002", 
    "When you are done, click here to save your changes.": "\u5b8c\u6210\u5f8c, \u5355\u51fb\u6b64\u8655\u4fdd\u5b58\u66f4\u6539\u3002", 
    "When you are finished, click here to save your changes.": "\u5b8c\u6210\u5f8c, \u5355\u51fb\u6b64\u8655\u4fdd\u5b58\u66f4\u6539\u3002", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "\u4ee5\u5ba2\u89c0\u7684\u65b9\u5f0f\u5beb\u7b2c\u4e09\u4eba\u7a31\u65f6\u6001, \u4e0d\u5305\u62ec\u4efb\u4f55\u71df\u92b7\u767c\u8a00 (\u7368\u5bb6\u5831\u50f9, \u4e0d\u53ef\u6838\u5be6\u7684\u7d22\u8ce0\u7b49)\u3002 \u4fc2\u4e00\u672c\u767e\u79d1\u5168\u66f8, \u4e0d\u662f\u793e\u4ea4\u5a92\u9ad4\u9801\u9762\u3002", 
    "You can also create a new wiki article by clicking here.": "\u4f60\u90fd\u53ef\u4ee5\u900f\u904e\u5355\u51fb\u6b64\u8655\u5275\u5efa\u65b0\u7684 wiki \u6587\u3002", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "\u4f60\u4eca\u65e5\u5f35\u8cbc\u5497\u597d\u591a\u9023\u7d50\u3002 \u7b49\u5f85\u4e00\u4e9b\u793e\u5340\u5c0d\u4f60\u5605\u5167\u5bb9\u505a\u51fa\u97ff\u61c9\u3002 \u65b0\u7de8\u8f2f\u50c5\u9650\u65bc\u6bcf\u65e5\u5f35\u8cbc250\u4efd\u610f\u898b\u66f8\u3002", 
    "auth.logout": "\u6388\u6b0a\u8a3b\u92b7", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "paused": "\u66ab\u505c", 
    "reset": "\u91cd\u7f6e", 
    "secondTenthsUpdated": "second10 thsupdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "\u521d\u6642", 
    "stopped": "\u505c\u6b62", 
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




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
      "%(cnt)s \u4e2d %(sel)s \u500b\u88ab\u9078"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "\uff08\u53ef\u9078\uff09\u6dfb\u52a0\u52a0\u5bc6\u8ca8\u5e63\u9322\u5305\u5730\u5740", 
    "(Optional) Enter your name, email, nationality, language, etc.": "\uff08\u53ef\u9078\u64c7\uff09\u8f38\u5165\u60a8\u7684\u59d3\u540d\u3001\u96fb\u5b50\u90f5\u4ef6\u3001\u570b\u7c4d\u3001\u8a9e\u8a00\u7b49\u3002", 
    "6 a.m.": "\u4e0a\u5348 6 \u9ede", 
    "6 p.m.": "\u4e0b\u5348 6 \u9ede", 
    "Add File": "\u65b0\u589e\u6a94\u6848", 
    "Add Link": "\u6dfb\u52a0\u93c8\u63a5", 
    "Add Links, Files, Etc.": "\u6dfb\u52a0\u9023\u7d50\u3001\u6a94\u6848\u7b49\u3002", 
    "Add New Infobox": "\u6dfb\u52a0\u65b0\u4fe1\u606f\u6846\u9805\u76ee", 
    "Add Row": "\u6dfb\u52a0\u884c", 
    "Add an additional description for this category": "\u70ba\u6b64\u985e\u5225\u6dfb\u52a0\u5176\u4ed6\u8aaa\u660e", 
    "Add media to article text": "\u5c07\u5a92\u9ad4\u6dfb\u52a0\u5230\u6587\u7ae0\u6587\u672c\u4e2d", 
    "Added pictures will show up here.": "\u6dfb\u52a0\u7684\u5716\u7247\u5c07\u986f\u793a\u5728\u9019\u88e1\u3002", 
    "Adding infobox item, please wait...": "\u6dfb\u52a0\u4fe1\u606f\u6846\u9805\u76ee\uff0c\u8acb\u7a0d\u5019......\u3002", 
    "Adding, please wait...": "\u6dfb\u52a0, \u8acb\u7a0d\u5019..\u3002", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "\u5728\u60a8\u5df2\u7d93\u5c07\u9023\u7d50\u3001\u6a94\u6216\u5716\u7247\u6dfb\u52a0\u5230\u9801\u9762\u5f8c, \u60a8\u53ef\u4ee5\u901a\u9ede\u64ca \"\u5f15\u7528\" \u6309\u9215\u4f86\u5f15\u7528\u5b83\u3002\u60a8\u9084\u53ef\u4ee5\u5728\u9375\u5165\u6642\u6309 \"^\" \u6216 \"*\" \u9375, \u4fbf\u5c07\u986f\u793a\u4e00\u500b\u4e0b\u62c9\u6e05\u55ae\u3002", 
    "April": "\u56db\u6708", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u60a8\u78ba\u5b9a\u8981\u9000\u51fa\u8a72\u9801\u9762\u55ce\uff1f \u672a\u4fdd\u5b58\u7684\u66f4\u6539\u5c07\u6703\u4e1f\u5931\u3002", 
    "Are you sure you want to remove this link?": "\u60a8\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u93c8\u63a5\u55ce\uff1f", 
    "Article proposal submission failed!": "\u6587\u7ae0\u5efa\u8b70\u63d0\u4ea4\u5931\u6557!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\u5728\u6dfb\u52a0\u9023\u7d50\u548c\u6a94\u6848\u6642, \u5b83\u5011\u5c07\u986f\u793a\u5728 \"\u53c3\u8003\u9023\u7d50\" \u90e8\u5206\u4e2d\u3002\u60a8\u4e5f\u53ef\u4ee5\u7de8\u8f2f\u6216\u522a\u9664\u5b83\u5011\u3002", 
    "August": "\u516b\u6708", 
    "Available %s": "\u53ef\u7528 %s", 
    "Back": "\u8fd4\u56de", 
    "Cancel": "\u53d6\u6d88", 
    "Choose": "\u9078\u53d6", 
    "Choose a Date": "\u9078\u64c7\u4e00\u500b\u65e5\u671f", 
    "Choose a Time": "\u9078\u64c7\u4e00\u500b\u6642\u9593", 
    "Choose a time": "\u9078\u64c7\u4e00\u500b\u6642\u9593", 
    "Choose all": "\u5168\u9078", 
    "Chosen %s": "%s \u88ab\u9078", 
    "Cite": "\u5f15\u7528", 
    "Cite as verified editor": "\u5f15\u7528\u70ba\u7d93\u904e\u9a57\u8b49\u7684\u7de8\u8f2f", 
    "Cite links, files, etc": "\u5f15\u7528\u9023\u7d50\u3001\u6a94\u6848\u7b49", 
    "Cite my own knowledge / experience as a verified editor": "\u5f15\u7528\u6211\u81ea\u5df1\u7684\u77e5\u8b58/\u4f5c\u70ba\u7d93\u904e\u9a57\u8b49\u7684\u7de8\u8f2f\u7d93\u9a57", 
    "Claim": "\u8981\u6c42", 
    "Click here to upload a picture for your editor profile.": "\u9ede\u64ca\u6b64\u8655\u4e0a\u50b3\u7de8\u8f2f\u5668\u914d\u7f6e\u6587\u4ef6\u7684\u5716\u7247\u3002", 
    "Click to choose all %s at once.": "\u9ede\u64ca\u4ee5\u4e00\u6b21\u9078\u53d6\u6240\u6709\u7684 %s", 
    "Click to remove all chosen %s at once.": "\u9ede\u64ca\u4ee5\u4e00\u6b21\u79fb\u9664\u6240\u6709\u9078\u53d6\u7684 %s", 
    "Completing transaction...": "\u5b8c\u6210\u4ea4\u6613..\u3002", 
    "Create Page": "\u5275\u5efa\u9801\u9762", 
    "Create page": "\u5275\u5efa\u9801\u9762", 
    "December": "\u5341\u4e8c\u6708", 
    "Delete this tag": "\u522a\u9664\u6b64\u6a19\u8a18", 
    "Drag and drop your photo here or click to upload.": "\u8acb\u5728\u6b64\u8655\u62d6\u653e\u7167\u7247\u6216\u6309\u4e00\u4e0b \"\u4e0a\u8f09\"\u3002", 
    "Edit": "\u7de8\u8f2f", 
    "Editor profile": "\u7de8\u8f2f\u7c21\u4ecb", 
    "Enter the page title here": "\u5728\u6b64\u8655\u8f38\u5165\u9801\u9762\u6a19\u984c", 
    "Enter your profile info": "\u8f38\u5165\u60a8\u7684\u500b\u4eba\u8cc7\u6599\u8cc7\u8a0a", 
    "Error: proposal not found. Please try submitting again.": "\u932f\u8aa4: \u627e\u4e0d\u5230\u5efa\u8b70\u3002\u8acb\u5617\u8a66\u518d\u6b21\u63d0\u4ea4\u3002", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia \u5c31\u50cf\u7dad\u57fa\u767e\u79d1\u4e00\u6a23, \u4f46\u7de8\u8f2f\u548c\u8ca2\u737b\u66f4\u7c21\u55ae\u3002\u6bcf\u500b\u9801\u9762\u90fd\u5305\u542b\u4e00\u500b\u4fe1\u606f\u6846\u5340\u57df\uff0c\u7528\u65bc\u7c21\u660e\u627c\u8981\u7684\u4e8b\u5be6\uff0c\u7528\u4e2d\u7acb\u7684\u7b2c\u4e09\u4eba\u7a31\u6642\u614b\u5beb\u7684\u4e00\u7bc7\u4e3b\u8981\u6587\u7ae0\uff0c\u95dc\u65bc\u4e3b\u984c\u7684\u5716\u7247\u3001\u8996\u983b\u3001\u97f3\u983b\u7b49\u5a92\u9ad4\u5716\u5eab\u3001\u6587\u7ae0\u548c\u4fe1\u606f\u6846\u4e2d\u5f15\u7528\u7684\u7db2\u9801\u548c\u6587\u4ef6\u5217\u8868\u3002", 
    "February": "\u4e8c\u6708", 
    "File uploaded successfully": "\u6587\u4ef6\u4e0a\u50b3\u6210\u529f", 
    "File uploaded successfully.": "\u6587\u4ef6\u4e0a\u50b3\u6210\u529f", 
    "Filter": "\u904e\u6ffe\u5668", 
    "Font Style": "\u5b57\u9ad4\u6a23\u5f0f", 
    "Formats": "\u683c\u5f0f", 
    "Here you can add the main photo for the article.": "\u5728\u9019\u88e1\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u6587\u7ae0\u7684\u4e3b\u8981\u7167\u7247", 
    "Hide": "\u96b1\u85cf", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "\u5982\u679c\u4f60\u5df2\u7d93\u5275\u5efa\u4e86\u4e00\u7bc7\u95dc\u65bc\u4f60\u81ea\u5df1\u7684 Everipedia \u6587\u7ae0, \u4f60\u53ef\u4ee5\u5728\u9019\u88e1\u93c8\u63a5\u5230\u5b83\u3002", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\u5982\u679c\u60a8\u6709\u4efb\u4f55\u52a0\u5bc6\u8ca8\u5e63\uff0c\u8acb\u5728\u6b64\u8655\u6dfb\u52a0\u9322\u5305\u5730\u5740\u3002\u5982\u679c\u60a8\u559c\u6b61\u81ea\u5df1\u7684\u5de5\u4f5c\uff0c\u4eba\u5011\u53ef\u80fd\u6703\u6350\u8d08\u7d66\u60a8\uff01\u5982\u679c\u60a8\u6c92\u6709\u9322\u5305, \u60a8\u53ef\u4ee5\u5728\u9019\u88e1\u5f97\u5230\u4e00\u500b: <img class='userview-crypto-logo-helper' src='HTTPs://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='HTTPs://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='HTTPs://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='HTTPs://www.coinbase.com/'>Ethereum </a>, <img class='userview-crypto-logo-helper' src='HTTPs://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='HTTPs://my.dogechain.info/#/overview'>Dogecoin </a>", 
    "Infobox": "\u4fe1\u606f\u6846", 
    "Introduction": "\u7c21\u4ecb", 
    "January": "\u4e00\u6708", 
    "July": "\u4e03\u6708", 
    "June": "\u516d\u6708", 
    "Link": "\u93c8\u63a5", 
    "Link to other Everipedia pages": "\u9023\u7d50\u5230\u5176\u4ed6 Everipedia \u9801\u9762", 
    "Link your Everipedia page": "\u9023\u7d50\u60a8\u7684 Everipedia \u9801\u9762", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "\u7531\u65bc\u6280\u8853\u539f\u56e0\uff0c\u4e0d\u5141\u8a31\u93c8\u63a5\u5230\u7dad\u57fa\u767e\u79d1\u9801\u9762\u3002 \u8acb\u518d\u8a66\u4e00\u6b21\u3002", 
    "Loading more activity, please wait...": "\u8f09\u5165\u66f4\u591a\u6d3b\u52d5, \u8acb\u7a0d\u5019..\u3002", 
    "Loading...": "\u8f09\u5165\u4e2d...", 
    "Main article body": "\u4e3b\u8981\u6587\u7ae0\u6b63\u6587", 
    "Main photo": "\u4e3b\u8981\u7167\u7247", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\u901a\u904e\u5728\u6b64\u8655\u6dfb\u52a0\u93c8\u63a5\u548c\u6587\u4ef6\uff0c\u78ba\u4fdd\u5728\u5411\u9801\u9762\u6dfb\u52a0\u4fe1\u606f\u6642\u5f15\u7528\u60a8\u7684\u4f86\u6e90\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u986f\u793a\u4fe1\u606f\u7684\u4f86\u6e90\u3002", 
    "March": "\u4e09\u6708", 
    "May": "\u4e94\u6708", 
    "Media": "\u5a92\u9ad4", 
    "Media Gallery": "\u5a92\u9ad4\u5eab", 
    "Merging...": "\u5408\u4f75", 
    "Midnight": "\u5348\u591c", 
    "Next": "\u4e0b\u4e00\u500b", 
    "No URL provided, please try again": "\u6c92\u6709\u63d0\u4f9b\u7db2\u5740\uff0c\u8acb\u91cd\u8a66", 
    "Noon": "\u4e2d\u5348", 
    "Not Ready": "\u9084\u6c92\u6e96\u5099\u597d", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "\u8acb\u6ce8\u610f, \u5982\u679c\u6c92\u6709\u8166\u529b, \u60a8\u5c07\u7121\u6cd5\u63d0\u51fa\u7de8\u8f2f\u3002\u60a8\u7684\u5de5\u4f5c\u5c07\u6703\u4e1f\u5931!", 
    "Note: You are %s hour ahead of server time.": [
      "\u5099\u8a3b\uff1a\u60a8\u7684\u96fb\u8166\u6642\u9593\u6bd4\u4f3a\u670d\u5668\u5feb %s \u5c0f\u6642\u3002"
    ], 
    "Note: You are %s hour behind server time.": [
      "\u5099\u8a3b\uff1a\u60a8\u7684\u96fb\u8166\u6642\u9593\u6bd4\u4f3a\u670d\u5668\u6162 %s \u5c0f\u6642\u3002"
    ], 
    "November": "\u5341\u4e00\u6708", 
    "Now": "\u73fe\u5728", 
    "October": "\u5341\u6708", 
    "Please enter a description for the photo": "\u8acb\u8f38\u5165\u7167\u7247\u7684\u63cf\u8ff0", 
    "Please enter a headline": "\u8acb\u8f38\u5165\u6a19\u984c", 
    "Please provide a description for the link or file.": "\u8acb\u63d0\u4f9b\u93c8\u63a5\u6216\u6587\u4ef6\u7684\u8aaa\u660e\u3002", 
    "Please provide a more scholarly description.": "\u8acb\u63d0\u4f9b\u66f4\u5177\u5b78\u8853\u6027\u7684\u63cf\u8ff0\u3002", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "\u5728\u7e7c\u7e8c\u4e4b\u524d, \u8acb\u5c07\u4e00\u4e9bIQ\u6295\u5165\u8166\u529b\u3002\u9ede\u64ca \"\u78ba\u5b9a\", \u5728\u65b0\u9078\u9805\u5361\u4e2d\u6253\u958b \"\u8166\u529b\u7ba1\u7406\" \u87a2\u5e55. \u6ce8\u610f: \u8acb\u78ba\u4fdd\u6b64\u7db2\u7ad9\u555f\u7528\u4e86\u5feb\u986f\u8996\u7a97, \u56e0\u70ba\u60a8\u53ef\u80fd\u6703\u6536\u5230\u8b66\u544a\u3002", 
    "Posting comment, please wait..": "\u5f35\u8cbc\u8a55\u8ad6, \u8acb\u7a0d\u5019\u3002", 
    "Posting reply, please wait..": "\u767c\u5e03\u56de\u590d, \u8acb\u7a0d\u5019\u3002", 
    "Pre": "\u9810", 
    "Profile photo": "\u982d\u50cf\u7167\u7247", 
    "Reference links": "\u53c3\u8003\u9023\u7d50", 
    "Remove": "\u79fb\u9664", 
    "Remove all": "\u5168\u90e8\u79fb\u9664", 
    "Save": "\u4fdd\u5b58", 
    "Save changes": "\u5132\u5b58\u8b8a\u66f4", 
    "Search Everipedia": "\u641c\u7d22Everipedia", 
    "Searching...": "\u6b63\u5728\u641c\u7d22...", 
    "September": "\u4e5d\u6708", 
    "Show": "\u986f\u793a", 
    "Style": "\u6a23\u5f0f", 
    "Submission Successful!": "\u63d0\u4ea4\u6210\u529f!", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "\"\u7de8\u8f2f\u8005\u500b\u4eba\u8cc7\u6599\" \u9801\u9762\u986f\u793a\u7528\u6236\u5df2\u7de8\u8f2f\u7684\u9801\u9762\u3001\u5df2\u6dfb\u52a0\u5230\u9801\u9762\u7684\u5f15\u7528\u4ee5\u53ca\u5b83\u5011\u6240\u505a\u7684\u8a55\u8ad6\u3002", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "\u4fe1\u606f\u6846\u662f\u70ba\u7c21\u6f54\u3001\u5feb\u901f\u7684\u4e8b\u5be6\u800c\u8a2d\u8a08\u7684\u3002\u6839\u64da\u6240\u9078\u4e3b\u984c, \u5efa\u8b70\u7684\u5c08\u6848\u5c07\u986f\u793a\u5728\u4e0b\u62c9\u6e05\u55ae\u4e2d, \u4f46\u53ef\u4ee5\u6dfb\u52a0\u4efb\u4f55\u985e\u578b\u7684\u4fe1\u606f\u6846\u3002", 
    "This comment is already on this page. Please try again!": "\u6b64\u6ce8\u91cb\u5df2\u5728\u8a72\u9801\u9762\u4e0a\u3002\u8acb\u518d\u8a66\u4e00\u6b21!", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u53ef\u7528\u7684 %s \u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u4e0b\u65b9\u7684\u65b9\u6846\u5167\u9078\u64c7\u5f8c\uff0c\u9ede\u64ca\u5169\u500b\u65b9\u6846\u4e2d\u7684\"\u9078\u53d6\"\u7bad\u982d\u4ee5\u9078\u53d6\u3002", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u9078\u53d6\u7684 %s \u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u4e0b\u65b9\u7684\u65b9\u6846\u5167\u9078\u64c7\u5f8c\uff0c\u9ede\u64ca\u5169\u500b\u65b9\u6846\u4e2d\u7684\"\u79fb\u9664\"\u7bad\u982d\u4ee5\u79fb\u9664\u3002", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\u6b64\u93c8\u63a5\u5df2\u5728\u6b64\u9801\u9762\u4e0a\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u7de8\u8f2f\u93c8\u63a5\u6458\u8981\u4ee5\u6539\u9032EP\u4e0a\u7684\u4fe1\u606f\uff01", 
    "Title": "\u6a19\u984c", 
    "To add an image or video to the article text, click the 'Media' button.": "\u8981\u5411\u6587\u7ae0\u6587\u672c\u4e2d\u6dfb\u52a0\u5716\u50cf\u6216\u5f71\u7247, \u8acb\u6309\u4e00\u4e0b \"\u5a92\u9ad4\" \u6309\u9215\u3002", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\u82e5\u8981\u9023\u7d50\u5230\u5176\u4ed6 Everipedia \u9801\u9762, \u8acb\u9ede\u64ca \"\u9023\u7d50\u9801\u9762\" \u6309\u9215\u3002\u60a8\u9084\u53ef\u4ee5\u5728\u9375\u5165\u6642\u6309 \"@\" \u9375, \u4fbf\u5c07\u986f\u793a\u4e00\u500b\u4e0b\u62c9\u6e05\u55ae\u3002\u5617\u8a66\u9023\u7d50\u5230\u76e1\u53ef\u80fd\u591a\u7684\u9801\u9762, \u4ee5\u4f7f\u6bcf\u500b\u9801\u9762\u76e1\u53ef\u80fd\u8c50\u5bcc\u548c\u4fe1\u606f\u8c50\u76db\u3002", 
    "Today": "\u4eca\u5929", 
    "Tomorrow": "\u660e\u5929", 
    "Type into this box to filter down the list of available %s.": "\u8f38\u5165\u5230\u9019\u500b\u65b9\u6846\u4ee5\u904e\u6ffe\u53ef\u7528\u7684 %s \u5217\u8868\u3002", 
    "When you are done, click here to save your changes.": "\u5b8c\u6210\u5f8c, \u9ede\u64ca\u6b64\u8655\u4fdd\u5b58\u66f4\u6539\u3002", 
    "When you are finished, click here to save your changes.": "\u5b8c\u6210\u5f8c, \u9ede\u64ca\u6b64\u8655\u4fdd\u5b58\u66f4\u6539\u3002", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "\u4ee5\u5ba2\u89c0\u7684\u7b2c\u4e09\u4eba\u7a31\u65b9\u5f0f\u5beb\u4f5c, \u4e0d\u5305\u62ec\u4efb\u4f55\u884c\u92b7\u767c\u8a00 (\u7368\u5bb6\u5831\u50f9, \u7121\u6cd5\u6838\u5be6\u7684\u7d22\u8ce0\u7b49)\u3002\u9019\u662f\u4e00\u672c\u767e\u79d1\u5168\u66f8, \u4e0d\u662f\u793e\u4ea4\u5a92\u9ad4\u9801\u9762\u3002", 
    "Yesterday": "\u6628\u5929", 
    "You can also create a new wiki article by clicking here.": "\u60a8\u4e5f\u53ef\u4ee5\u901a\u904e\u9ede\u64ca\u6b64\u8655\u5275\u5efa\u65b0\u7684 wiki \u6587\u7ae0\u3002", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "\u4f60\u4eca\u5929\u5f35\u8cbc\u4e86\u5f88\u591a\u9023\u7d50\u3002\u7b49\u5f85\u793e\u5340\u5c0d\u60a8\u7684\u5167\u5bb9\u505a\u51fa\u56de\u61c9\u3002\u65b0\u7de8\u8f2f\u6bcf\u5929\u53ea\u80fd\u63d0\u4ea4250\u4efd\u7a3f\u4ef6\u3002", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u4f60\u5df2\u9078\u4e86\u4e00\u500b\u52d5\u4f5c, \u4f46\u6c92\u6709\u4efb\u4f55\u6539\u8b8a\u3002\u4f60\u53ef\u80fd\u52d5\u5230 '\u53bb' \u6309\u9215, \u800c\u4e0d\u662f '\u5132\u5b58' \u6309\u9215\u3002", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u4f60\u5df2\u9078\u4e86\u4e00\u500b\u52d5\u4f5c, \u4f46\u6709\u4e00\u500b\u53ef\u7de8\u8f2f\u6b04\u4f4d\u7684\u8b8a\u66f4\u5c1a\u672a\u5132\u5b58\u3002\u8acb\u9ede\u9078 OK \u9032\u884c\u5132\u5b58\u3002\u4f60\u9700\u8981\u91cd\u65b0\u57f7\u884c\u8a72\u52d5\u4f5c\u3002", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u4f60\u5c1a\u672a\u5132\u5b58\u4e00\u500b\u53ef\u7de8\u8f2f\u6b04\u4f4d\u7684\u8b8a\u66f4\u3002\u5982\u679c\u4f60\u57f7\u884c\u52d5\u4f5c, \u672a\u5132\u5b58\u7684\u8b8a\u66f4\u5c07\u6703\u907a\u5931\u3002", 
    "auth.logout": "\u81ea\u52d5\u767b\u51fa", 
    "daysUpdated": "\u65e5\u66f4\u65b0", 
    "hoursUpdated": "\u5c0f\u6642\u66f4\u65b0", 
    "js_sdk_force_status_on_load": "js sdk\u52a0\u8f09\u6642\u7684\u5f37\u5236\u72c0\u614b", 
    "minutesUpdated": "\u5206\u9418\u66f4\u65b0", 
    "one letter Friday\u0004F": "\u4e94", 
    "one letter Monday\u0004M": "\u4e00", 
    "one letter Saturday\u0004S": "\u516d", 
    "one letter Sunday\u0004S": "\u65e5", 
    "one letter Thursday\u0004T": "\u56db", 
    "one letter Tuesday\u0004T": "\u4e8c", 
    "one letter Wednesday\u0004W": "\u4e09", 
    "paused": "\u66ab\u505c", 
    "reset": "\u91cd\u7f6e", 
    "secondTenthsUpdated": "0.2\u79d2\u66f4\u65b0", 
    "secondsUpdated": "\u79d2\u66f4\u65b0", 
    "started": "\u5df2\u555f\u52d5", 
    "stopped": "\u505c\u6b62", 
    "targetAchieved": "\u76ee\u6a19\u5df2\u5be6\u73fe"
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
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y/%m/%d %H:%M", 
      "%Y-%m-%d %H:%M", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M", 
      "%Y/%m/%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M:%S", 
      "%Y/%m/%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%n:%S.%f", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "DATE_INPUT_FORMATS": [
      "%Y/%m/%d", 
      "%Y-%m-%d", 
      "%Y\u5e74%n\u6708%j\u65e5"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "m\u6708j\u65e5", 
    "NUMBER_GROUPING": "4", 
    "SHORT_DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i", 
    "SHORT_DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "THOUSAND_SEPARATOR": "", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M", 
      "%H:%M:%S", 
      "%H:%M:%S.%f"
    ], 
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
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


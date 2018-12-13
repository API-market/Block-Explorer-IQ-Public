

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
      "\u9009\u4e2d\u4e86 %(cnt)s \u4e2a\u4e2d\u7684 %(sel)s \u4e2a"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "\uff08\u9009\u62e9\uff09\u6dfb\u52a0\u60a8\u7684 \u52a0\u5bc6\u8d27\u5e01\u94b1\u5305\u5730\u5740", 
    "(Optional) Enter your name, email, nationality, language, etc.": "\u9009\u8f93\u5165\u60a8\u7684\u59d3\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u56fd\u7c4d\u3001\u8bed\u8a00\u7b49\u3002", 
    "6 a.m.": "\u4e0a\u53486\u70b9", 
    "6 p.m.": "\u4e0b\u53486\u70b9", 
    "Add File": "\u6dfb\u52a0\u6587\u4ef6", 
    "Add Link": "\u6dfb\u52a0\u94fe\u63a5", 
    "Add Links, Files, Etc.": "\u6dfb\u52a0\u94fe\u63a5\u3001\u6587\u4ef6\u7b49\u3002", 
    "Add New Infobox": "\u6dfb\u52a0\u65b0\u4fe1\u606f\u6846\u9879", 
    "Add Row": "\u6dfb\u52a0\u884c", 
    "Add an additional description for this category": "\u6dfb\u52a0\u8be5\u7c7b\u76ee\u7684\u5176\u4ed6\u63cf\u8ff0", 
    "Add media to article text": "\u5c06\u5a92\u4f53\u6dfb\u52a0\u5230\u6587\u7ae0\u6587\u672c\u4e2d", 
    "Added pictures will show up here.": "\u6dfb\u52a0\u7684\u56fe\u7247\u5c06\u663e\u793a\u5728\u8fd9\u91cc\u3002", 
    "Adding infobox item, please wait...": "\u6dfb\u52a0\u4fe1\u606f\u6846\u9879, \u8bf7\u7a0d\u5019..\u3002", 
    "Adding, please wait...": "\u6dfb\u52a0\u4e2d, \u8bf7\u7a0d\u5019..\u3002", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "\u5728\u60a8\u5df2\u7ecf\u5c06\u94fe\u63a5\u3001\u6587\u4ef6\u6216\u56fe\u7247\u6dfb\u52a0\u5230\u9875\u9762\u4e4b\u540e, \u60a8\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb \"\u5f15\u7528\" \u6309\u94ae\u6765\u5f15\u7528\u5b83\u3002\u60a8\u8fd8\u53ef\u4ee5\u5728\u952e\u5165\u65f6\u6309 \"^\" \u6216 \"*\" \u952e, \u4f1a\u51fa\u73b0\u4e00\u4e2a\u4e0b\u62c9\u6846\u3002", 
    "April": "\u56db\u6708", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u662f\u5426\u786e\u5b9a\u8981\u9000\u51fa\u8be5\u9875\uff1f\u672a\u4fdd\u5b58\u7684\u66f4\u6539\u5c06\u4e22\u5931\u3002", 
    "Article proposal submission failed!": "\u6587\u7ae0\u63d0\u6848\u63d0\u4ea4\u5931\u8d25!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\u5728\u6dfb\u52a0\u94fe\u63a5\u548c\u6587\u4ef6\u65f6, \u5b83\u4eec\u5c06\u663e\u793a\u5728 \"\u53c2\u8003\u94fe\u63a5\" \u533a\u57df\u3002\u4f60\u4e5f\u53ef\u4ee5\u7f16\u8f91\u6216\u5220\u9664\u5b83\u4eec\u3002", 
    "August": "\u516b\u6708", 
    "Available %s": "\u53ef\u7528 %s", 
    "Back": "\u8fd4\u56de", 
    "Cancel": "\u53d6\u6d88", 
    "Choose": "\u9009\u62e9", 
    "Choose a Date": "\u9009\u62e9\u4e00\u4e2a\u65e5\u671f", 
    "Choose a Time": "\u9009\u62e9\u4e00\u4e2a\u65f6\u95f4", 
    "Choose a time": "\u9009\u62e9\u4e00\u4e2a\u65f6\u95f4", 
    "Choose all": "\u5168\u9009", 
    "Chosen %s": "\u9009\u4e2d\u7684 %s", 
    "Cite": "\u5f15\u7528", 
    "Cite as verified editor": "\u5f15\u7528\u4e3a\u9a8c\u8bc1\u4f5c\u8005", 
    "Cite links, files, etc": "\u5f15\u7528\u94fe\u63a5\u3001\u6587\u4ef6\u7b49", 
    "Cite my own knowledge / experience as a verified editor": "\u4f5c\u4e3a\u4e00\u540d\u8ba4\u8bc1\u4f5c\u8005\u5f15\u7528\u6211\u81ea\u5df1\u7684\u77e5\u8bc6/\u7ecf\u9a8c", 
    "Claim": "\u9886\u53d6", 
    "Claim Rewards": "\u9886\u53d6\u5956\u52b1", 
    "Click here to upload a picture for your editor profile.": "\u5355\u51fb\u6b64\u5904\u4e3a\u4f60\u7684\u4f5c\u8005\u7b80\u4ecb\u4e0a\u4f20\u4e00\u5e45\u56fe\u7247\u3002", 
    "Click to choose all %s at once.": "\u70b9\u51fb\u9009\u62e9\u5168\u90e8%s\u3002", 
    "Click to remove all chosen %s at once.": "\u5220\u9664\u6240\u6709\u9009\u62e9\u7684%s\u3002", 
    "Completing transaction...": "\u6b63\u5728\u5b8c\u6210\u4e8b\u52a1..\u3002", 
    "Create Page": "\u521b\u5efa\u9875\u9762", 
    "Create page": "\u521b\u5efa\u9875\u9762", 
    "December": "\u5341\u4e8c\u6708", 
    "Delete this tag": "\u5220\u9664\u8be5\u6807\u7b7e", 
    "Drag and drop your photo here or click to upload.": "\u8bf7\u5728\u6b64\u5904\u62d6\u653e\u7167\u7247\u6216\u5355\u51fb \"\u4e0a\u4f20\"\u3002", 
    "Edit": "\u7f16\u8f91", 
    "Editor profile": "\u4f5c\u8005\u7b80\u4ecb", 
    "Enter the page title here": "\u5728\u6b64\u5904\u8f93\u5165\u9875\u9762\u6807\u9898\u3002", 
    "Enter your profile info": "\u8f93\u5165\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u4fe1\u606f", 
    "Error: proposal not found. Please try submitting again.": "\u9519\u8bef: \u627e\u4e0d\u5230\u63d0\u6848\u3002\u8bf7\u5c1d\u8bd5\u518d\u6b21\u63d0\u4ea4\u3002", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia \u5c31\u50cf\u7ef4\u57fa\u767e\u79d1\u90a3\u6837, \u4f46\u7f16\u8f91\u548c\u8d21\u732e\u5185\u5bb9\u5219\u66f4\u52a0\u5bb9\u6613\u3002\u6bcf\u4e2a\u9875\u9762\u90fd\u7531\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a\u4e00\u4e2a\u63cf\u8ff0\u7b80\u77ed\u4e8b\u5b9e\u7684\u4fe1\u606f\u6846\u533a\u57df, \u4e00\u7bc7\u4ee5\u4e2d\u6027\u7b2c\u4e09\u4eba\u79f0\u5199\u7684\u4e3b\u8981\u6587\u7ae0,  \u4e00\u4e2a\u7531\u56fe\u7247\u3001\u89c6\u9891\u3001\u97f3\u9891\u7b49\u7b49\u8ddf\u4e3b\u9898\u76f8 \u5173\u5a92\u4f53\u7ec4\u6210\u7684\u5a92\u4f53\u5e93, \u4e00\u7ec4\u4f5c\u4e3a\u5bf9\u4fe1\u606f\u6846\u548c\u6587\u7ae0\u7684\u5f15\u7528\u7684\u7f51\u9875\u548c\u6587\u4ef6\u53c2\u8003\u5217\u8868,\u3002", 
    "February": "\u4e8c\u6708", 
    "File uploaded successfully.": "\u6587\u4ef6\u4e0a\u4f20\u6210\u529f", 
    "Filter": "\u8fc7\u6ee4", 
    "Font Style": "\u5b57\u4f53\u6837\u5f0f", 
    "Help": "\u5e2e\u52a9", 
    "Here you can add the main photo for the article.": "\u5728\u8fd9\u91cc, \u4f60\u53ef\u4ee5\u4e3a\u6587\u7ae0\u6dfb\u52a0\u4e3b\u56fe\u3002", 
    "Hide": "\u9690\u85cf", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "\u5982\u679c\u60a8\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u7bc7\u5173\u4e8e\u60a8\u81ea\u5df1\u7684 Everipedia \u6587\u7ae0, \u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u94fe\u63a5\u5230\u5b83\u3002", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\u5982\u679c\u60a8\u6709\u4efb\u4f55\u79cd\u7c7b\u7684\u52a0\u5bc6\u8d27\u5e01, \u8bf7\u5728\u6b64\u5904\u6dfb\u52a0\u94b1\u5305\u5730\u5740\u3002\u5982\u679c\u4eba\u4eec\u559c\u6b22\u60a8\u7684\u5de5\u4f5c, \u4ed6\u4eec\u53ef\u80fd\u4f1a\u7ed9\u60a8\u6350\u8d60!\u5982\u679c\u60a8\u6ca1\u6709\u94b1\u5305, \u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u5f97\u5230\u4e00\u4e2a: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\u6bd4\u7279\u5e01 </a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\u4ee5\u592a\u574a </a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin </a>", 
    "Infobox": "\u4fe1\u606f\u6846", 
    "Introduction": "\u4ecb\u7ecd", 
    "January": "\u4e00\u6708", 
    "July": "\u4e03\u6708", 
    "June": "\u516d\u6708", 
    "Link": "\u94fe\u63a5", 
    "Link to other Everipedia pages": "\u94fe\u63a5\u5230\u5176\u4ed6 Everipedia \u9875\u9762", 
    "Link your Everipedia page": "\u94fe\u63a5\u60a8\u7684 Everipedia \u9875\u9762", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "\u7531\u4e8e\u6280\u672f\u4e0a\u7684\u539f\u56e0, \u65e0\u6cd5\u94fe\u63a5\u5230\u7ef4\u57fa\u767e\u79d1\u9875\u9762\u3002\u8bf7\u91cd\u8bd5\u3002", 
    "Load Draft": "\u52a0\u8f7d\u8349\u7a3f", 
    "Loading more activity, please wait...": "\u52a0\u8f7d\u66f4\u591a\u6d3b\u52a8, \u8bf7\u7a0d\u5019..\u3002", 
    "Loading...": "\u8f7d\u5165\u4e2d...", 
    "Main article body": "\u4e3b\u8981\u6587\u7ae0\u7684\u6b63\u6587", 
    "Main photo": "\u4e3b\u7167\u7247", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\u5728\u5411\u9875\u9762\u6dfb\u52a0\u4fe1\u606f\u65f6, \u8bf7\u52a1\u5fc5\u5f15\u7528\u60a8\u7684\u4fe1\u606f\u6765\u6e90, \u4e3a\u6b64\u8bf7\u5728\u6b64\u5904\u6dfb\u52a0\u94fe\u63a5\u548c\u6587\u4ef6, \u8fd9\u6837\u4f60\u5c31\u80fd\u5c55\u793a\u4fe1\u606f\u6765\u81ea\u4f55\u5904\u3002", 
    "March": "\u4e09\u6708", 
    "May": "\u4e94\u6708", 
    "Media": "\u5a92\u4f53", 
    "Media Gallery": "\u5a92\u4f53\u5e93", 
    "Merge": "\u5408\u5e76", 
    "Midnight": "\u5348\u591c", 
    "Next": "\u4e0b\u4e00\u9875", 
    "No URL provided, please try again": "\u6ca1\u6709\u63d0\u4f9b URL, \u8bf7\u91cd\u8bd5", 
    "Noon": "\u6b63\u5348", 
    "Not Ready": "\u672a\u5c31\u7eea", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "\u8bf7\u6ce8\u610f, \u5982\u679c\u6ca1\u6709Brainpower, \u60a8\u5c06\u65e0\u6cd5\u63d0\u4ea4\u7f16\u8f91\u3002\u60a8\u7684\u5de5\u4f5c\u5c06\u4f1a\u4e22\u5931!", 
    "Note: You are %s hour ahead of server time.": [
      "\u6ce8\u610f\uff1a\u4f60\u6bd4\u670d\u52a1\u5668\u65f6\u95f4\u8d85\u524d %s \u4e2a\u5c0f\u65f6\u3002"
    ], 
    "Note: You are %s hour behind server time.": [
      "\u6ce8\u610f\uff1a\u4f60\u6bd4\u670d\u52a1\u5668\u65f6\u95f4\u6ede\u540e %s \u4e2a\u5c0f\u65f6\u3002"
    ], 
    "November": "\u5341\u4e00\u6708", 
    "Now": "\u73b0\u5728", 
    "October": "\u5341\u6708", 
    "Please enter a description for the photo": "\u8bf7\u8f93\u5165\u7167\u7247\u7684\u63cf\u8ff0", 
    "Please provide a description for the link or file.": "\u8bf7\u63d0\u4f9b\u94fe\u63a5\u6216\u6587\u4ef6\u7684\u63cf\u8ff0\u3002", 
    "Please provide a more scholarly description.": "\u8bf7\u63d0\u4f9b\u66f4\u5b66\u672f\u6027\u7684\u63cf\u8ff0\u3002", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "\u5728\u7ee7\u7eed\u4e4b\u524d, \u8bf7\u62b5\u62bc\u4e00\u4e9bIQ\u83b7\u53d6Brainpower\u3002\u5355\u51fb \"\u786e\u5b9a\", \u5728\u65b0\u9009\u9879\u5361\u4e2d\u6253\u5f00 \"Brainpower\u7ba1\u7406\" \u5c4f\u5e55. \u6ce8\u610f: \u8bf7\u786e\u4fdd\u6b64\u7f51\u7ad9\u542f\u7528\u4e86\u5f39\u51fa\u7a97\u53e3, \u56e0\u4e3a\u60a8\u53ef\u80fd\u4f1a\u6536\u5230\u8b66\u544a\u3002", 
    "Pre": "\u9884", 
    "Profile photo": "\u5934\u50cf\u7167\u7247", 
    "Reference links": "\u53c2\u8003\u94fe\u63a5", 
    "Remove": "\u5220\u9664", 
    "Remove all": "\u5220\u9664\u5168\u90e8", 
    "Save": "\u4fdd\u5b58", 
    "Save Draft": "\u4fdd\u5b58\u8349\u7a3f", 
    "Save changes": "\u4fdd\u5b58\u66f4\u6539", 
    "Search Everipedia": "\u641c\u7d22Everipedia", 
    "Searching...": "\u6b63\u5728\u641c\u7d22...", 
    "September": "\u4e5d\u6708", 
    "Show": "\u663e\u793a", 
    "Style": "\u6837\u5f0f", 
    "Submit": "\u63d0\u4ea4", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "\"\u4f5c\u8005\u4e2a\u4eba\u4fe1\u606f\u9875\u9762\" \u663e\u793a\u8be5\u7528\u6237\u5df2\u7f16\u8f91\u7684\u9875\u9762\u3001\u5df2\u6dfb\u52a0\u5230\u9875\u9762\u4e2d\u7684\u5f15\u7528\u4ee5\u53ca\u5b83\u4eec\u6240\u505a\u7684\u8bc4\u8bba\u3002", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "\u4fe1\u606f\u6846\u662f\u4e3a\u4e86\u63cf\u8ff0\u7b80\u660e\u3001\u5feb\u901f\u7684\u4e8b\u5b9e\u800c\u8bbe\u8ba1\u7684\u3002\u6839\u636e\u6240\u9009\u4e3b\u9898, \u5efa\u8bae\u9879\u663e\u793a\u5728\u4e0b\u62c9\u5217\u8868\u4e2d, \u4f46\u4efb\u4f55\u7c7b\u578b\u7684\u4fe1\u606f\u6846\u90fd\u53ef\u4ee5\u6dfb\u52a0\u3002", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u8fd9\u662f\u53ef\u7528\u7684%s\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u6846\u4e0b\u9762\u8fdb\u884c\u9009\u62e9\uff0c\u7136\u540e\u70b9\u51fb\u4e24\u9009\u6846\u4e4b\u95f4\u7684\u201c\u9009\u62e9\u201d\u7bad\u5934\u3002", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u8fd9\u662f\u9009\u4e2d\u7684 %s \u7684\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u6846\u4e0b\u9762\u8fdb\u884c\u9009\u62e9\uff0c\u7136\u540e\u70b9\u51fb\u4e24\u9009\u6846\u4e4b\u95f4\u7684\u201c\u5220\u9664\u201d\u7bad\u5934\u8fdb\u884c\u5220\u9664\u3002", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\u8fd9\u4e2a\u94fe\u63a5\u5df2\u7ecf\u5728\u8fd9\u4e2a\u9875\u9762\u4e0a, \u4f60\u4ecd\u7136\u53ef\u4ee5\u7f16\u8f91\u94fe\u63a5\u6458\u8981\u6765\u4e30\u5bccEP\u4e0a\u4fe1\u606f!", 
    "Title": "\u6807\u9898", 
    "To add an image or video to the article text, click the 'Media' button.": "\u8981\u5411\u6587\u7ae0\u6587\u672c\u4e2d\u6dfb\u52a0\u56fe\u50cf\u6216\u89c6\u9891, \u8bf7\u5355\u51fb \"\u5a92\u4f53\" \u6309\u94ae\u3002", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\u82e5\u8981\u94fe\u63a5\u5230\u5176\u4ed6 Everipedia \u9875, \u8bf7\u5355\u51fb \"\u94fe\u63a5\u9875\" \u6309\u94ae\u3002\u60a8\u8fd8\u53ef\u4ee5\u5728\u952e\u5165\u65f6\u6309 \"@\" \u952e, \u4f1a\u51fa\u73b0\u4e00\u4e2a\u4e0b\u62c9\u6846\u3002\u5c1d\u8bd5\u94fe\u63a5\u5230\u5c3d\u53ef\u80fd\u591a\u7684\u9875\u9762, \u4ee5\u4f7f\u6bcf\u4e2a\u9875\u9762\u5185\u5bb9\u548c\u4fe1\u606f\u5c3d\u53ef\u80fd\u7684\u4e30\u5bcc\u3002", 
    "Today": "\u4eca\u5929", 
    "Tomorrow": "\u660e\u5929", 
    "Type into this box to filter down the list of available %s.": "\u5728\u6b64\u6846\u4e2d\u952e\u5165\u4ee5\u8fc7\u6ee4\u53ef\u7528\u7684%s\u5217\u8868", 
    "When you are done, click here to save your changes.": "\u5b8c\u6210\u540e, \u5355\u51fb\u6b64\u5904\u4fdd\u5b58\u66f4\u6539\u3002", 
    "When you are finished, click here to save your changes.": "\u5b8c\u6210\u540e, \u5355\u51fb\u6b64\u5904\u4fdd\u5b58\u66f4\u6539\u3002", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "\u4ee5\u7b2c\u4e09\u4eba\u79f0\u5ba2\u89c2\u7684\u65b9\u5f0f\u5199, \u4e0d\u8981\u52a0\u5165\u4efb\u4f55\u8425\u9500\u5185\u5bb9 (\u72ec\u5bb6\u62a5\u4ef7, \u65e0\u6cd5\u8bc1\u5b9e\u7684\u6d88\u606f\u7b49)\u3002\u8fd9\u662f\u4e00\u90e8\u767e\u79d1\u5168\u4e66, \u800c\u4e0d\u662f\u793e\u4ea4\u5a92\u4f53\u9875\u9762\u3002", 
    "Yesterday": "\u6628\u5929", 
    "You can also create a new wiki article by clicking here.": "\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u6b64\u5904\u521b\u5efa\u65b0\u7684 wiki \u6587\u7ae0\u3002", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "\u60a8\u4eca\u5929\u53d1\u5e03\u4e86\u5f88\u591a\u94fe\u63a5\u3002\u7a0d\u5fae\u7b49\u5f85\u4e00\u4e0b\u793e\u533a\u5bf9\u60a8\u7684\u5185\u5bb9\u505a\u51fa\u54cd\u5e94\u3002\u65b0\u4f5c\u8005\u6bcf\u5929\u4ec5\u9650\u6bcf\u5929\u53d1\u5e03250\u7bc7\u6587\u7ae0\u3002", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u4f60\u5df2\u9009\u5219\u6267\u884c\u4e00\u4e2a\u52a8\u4f5c, \u4f46\u53ef\u7f16\u8f91\u680f\u4f4d\u6c92\u6709\u4efb\u4f55\u6539\u53d8. \u4f60\u5e94\u8be5\u5c1d\u8bd5 '\u53bb' \u6309\u94ae, \u800c\u4e0d\u662f '\u4fdd\u5b58' \u6309\u94ae.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u4f60\u5df2\u9009\u5219\u6267\u884c\u4e00\u4e2a\u52a8\u4f5c, \u4f46\u6709\u4e00\u4e2a\u53ef\u7f16\u8f91\u680f\u4f4d\u7684\u53d8\u66f4\u5c1a\u672a\u4fdd\u5b58. \u8bf7\u70b9\u9009\u786e\u5b9a\u8fdb\u884c\u4fdd\u5b58. \u518d\u91cd\u65b0\u6267\u884c\u8be5\u52a8\u4f5c.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u4f60\u5c1a\u672a\u4fdd\u5b58\u4e00\u4e2a\u53ef\u7f16\u8f91\u680f\u4f4d\u7684\u53d8\u66f4. \u5982\u679c\u4f60\u8fdb\u884c\u522b\u7684\u52a8\u4f5c, \u672a\u4fdd\u5b58\u7684\u53d8\u66f4\u5c06\u4f1a\u4e22\u5931.", 
    "auth.logout": "\u6388\u6743\u6ce8\u9500", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "F", 
    "one letter Monday\u0004M": "M", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "S", 
    "one letter Thursday\u0004T": "T", 
    "one letter Tuesday\u0004T": "T", 
    "one letter Wednesday\u0004W": "W", 
    "paused": "\u6682\u505c", 
    "reset": "\u91cd\u7f6e", 
    "secondTenthsUpdated": "second10 thsupdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "\u5df2\u5f00\u59cb", 
    "stopped": "\u5df2\u505c\u6b62", 
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


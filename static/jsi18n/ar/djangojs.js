

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;
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
      "\u0644\u0627 \u0634\u064a \u0645\u062d\u062f\u062f", 
      "%(sel)s \u0645\u0646 %(cnt)s \u0645\u062d\u062f\u062f", 
      "%(sel)s \u0645\u0646 %(cnt)s \u0645\u062d\u062f\u062f", 
      "%(sel)s \u0645\u0646 %(cnt)s \u0645\u062d\u062f\u062f\u0629", 
      "%(sel)s \u0645\u0646 %(cnt)s \u0645\u062d\u062f\u062f", 
      "%(sel)s \u0645\u0646 %(cnt)s \u0645\u062d\u062f\u062f"
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(\u0627\u062e\u062a\u064a\u0627\u0631\u064a) \u0642\u0645 \u0628\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0627\u0648\u064a\u0646 \u0645\u062d\u0641\u0638\u0629 \u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(\u0627\u062e\u062a\u064a\u0627\u0631\u064a) \u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643 \u060c \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u060c \u0627\u0644\u062c\u0646\u0633\u064a\u0629 \u060c \u0627\u0644\u0644\u063a\u0629 \u060c \u0625\u0644\u062e.", 
    "6 a.m.": "6 \u0635.", 
    "6 p.m.": "6 \u0645\u0633\u0627\u0621\u064b", 
    "Add File": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0641", 
    "Add Link": "\u0623\u0636\u0641 \u0631\u0627\u0628\u0637\u0627", 
    "Add Links, Files, Etc.": "\u0625\u0636\u0627\u0641\u0629 \u0631\u0648\u0627\u0628\u0637 \u0623\u0648 \u0645\u0644\u0641\u0627\u062a \u060c \u0625\u0644\u062e.", 
    "Add New Infobox": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0628\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062c\u062f\u064a\u062f", 
    "Add Row": "\u0625\u0636\u0627\u0641\u0629 \u0633\u0637\u0631", 
    "Add an additional description for this category": "\u0623\u0636\u0641 \u0648\u0635\u0641\u0627\u064b \u0625\u0636\u0627\u0641\u064a\u0627\u064b \u0644\u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629", 
    "Add media to article text": "\u0623\u0636\u0641 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0625\u0644\u0649 \u0646\u0635 \u0627\u0644\u0645\u0642\u0627\u0644", 
    "Added pictures will show up here.": "\u0633\u0648\u0641 \u062a\u0638\u0647\u0631 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0647\u0646\u0627.", 
    "Adding infobox item, please wait...": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0628\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 ...", 
    "Adding, please wait...": "\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 ...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "\u0628\u0639\u062f \u0625\u0636\u0627\u0641\u0629 \u0631\u0627\u0628\u0637 \u0623\u0648 \u0645\u0644\u0641 \u0623\u0648 \u0635\u0648\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u060c \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0627\u0633\u062a\u0634\u0647\u0627\u062f \u0644\u0647\u0627 \u0628\u0627\u0644\u0646\u0642\u0631 \u0641\u0648\u0642 \u0627\u0644\u0632\u0631 \"\u0627\u0633\u062a\u0634\u0647\u0627\u062f\". \u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u064b\u0627 \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0645\u0641\u062a\u0627\u062d\u064a \"^\" \u0623\u0648 \"*\" \u0639\u0646\u062f \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0648\u0633\u062a\u0638\u0647\u0631 \u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u0633\u062f\u0644\u0629.", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\u0647\u0644 \u0623\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u0623\u0646\u0643 \u062a\u0631\u064a\u062f \u0627\u0644\u062e\u0631\u0648\u062c \u0645\u0646 \u0627\u0644\u0635\u0641\u062d\u0629\u061f \u0633\u064a\u062a\u0645 \u0641\u0642\u062f \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u063a\u064a\u0631 \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629.", 
    "Article proposal submission failed!": "\u0641\u0634\u0644 \u062a\u0642\u062f\u064a\u0645 \u0627\u0642\u062a\u0631\u0627\u062d \u0627\u0644\u0645\u0642\u0627\u0644!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\u0639\u0646\u062f \u0625\u0636\u0627\u0641\u0629 \u0631\u0648\u0627\u0628\u0637 \u0648\u0645\u0644\u0641\u0627\u062a\u060c \u0633\u062a\u0638\u0647\u0631 \u0641\u064a \u0642\u0633\u0645 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0629. \u064a\u0645\u0643\u0646\u0643 \u062a\u062d\u0631\u064a\u0631\u0647\u0627 \u0623\u0648 \u0625\u0632\u0627\u0644\u062a\u0647\u0627 \u0643\u0630\u0644\u0643.", 
    "Available %s": "%s \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629", 
    "Back": "\u0631\u062c\u0648\u0639", 
    "Cancel": "\u0625\u0644\u063a\u0627\u0621", 
    "Choose": "\u0627\u062e\u062a\u064a\u0627\u0631", 
    "Choose a Date": "\u0625\u062e\u062a\u0631 \u062a\u0627\u0631\u064a\u062e ", 
    "Choose a Time": "\u0625\u062e\u062a\u0631 \u0648\u0642\u062a", 
    "Choose a time": "\u0627\u062e\u062a\u0631 \u0648\u0642\u062a\u0627\u064b", 
    "Choose all": "\u0627\u062e\u062a\u0631 \u0627\u0644\u0643\u0644", 
    "Chosen %s": "%s \u0627\u0644\u0645\u064f\u062e\u062a\u0627\u0631\u0629", 
    "Cite": "\u0627\u0633\u062a\u0634\u0647\u0627\u062f", 
    "Cite as verified editor": "\u0627\u0644\u0627\u0633\u062a\u0634\u0647\u0627\u062f \u0643\u0645\u062d\u0631\u0631 \u0645\u0648\u062b\u0648\u0642", 
    "Cite links, files, etc": "\u0627\u0633\u062a\u0634\u0647\u062f \u0628\u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062a\u060c \u0625\u0644\u062e", 
    "Cite my own knowledge / experience as a verified editor": "\u0627\u0633\u062a\u0634\u0647\u062f \u0628\u0645\u0639\u0631\u0641\u062a\u064a \u0648\u062e\u0628\u0631\u062a\u064a \u0627\u0644\u062e\u0627\u0635\u0629 \u0643\u0645\u062d\u0631\u0631 \u0645\u0648\u062b\u0648\u0642", 
    "Claim": "\u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629", 
    "Click here to upload a picture for your editor profile.": "\u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u0631\u0631 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643.", 
    "Click to choose all %s at once.": "\u0627\u0636\u063a\u0637 \u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u062c\u0645\u064a\u0639 %s \u062c\u0645\u0644\u0629 \u0648\u0627\u062d\u062f\u0629.", 
    "Click to remove all chosen %s at once.": "\u0627\u0636\u063a\u0637 \u0644\u0625\u0632\u0627\u0644\u0629 \u062c\u0645\u064a\u0639 %s \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u062c\u0645\u0644\u0629 \u0648\u0627\u062d\u062f\u0629.", 
    "Completing transaction...": "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 ...", 
    "Create Page": "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u062d\u0629", 
    "Create page": "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u062d\u0629", 
    "Delete this tag": "\u0627\u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0634\u0639\u0627\u0631", 
    "Drag and drop your photo here or click to upload.": "\u0627\u0633\u062d\u0628 \u0648\u0627\u0633\u0642\u0637 \u0635\u0648\u0631\u062a\u0643 \u0647\u0646\u0627 \u0623\u0648 \u0627\u0646\u0642\u0631 \u0644\u0644\u062a\u062d\u0645\u064a\u0644.", 
    "Edit": "\u062a\u0639\u062f\u064a\u0644", 
    "Editor profile": "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a \u0644\u0644\u0645\u062d\u0631\u0631", 
    "Enter the page title here": "\u0623\u062f\u062e\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u062d\u0629 \u0647\u0646\u0627", 
    "Enter your profile info": "\u0623\u062f\u062e\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062e\u0635\u064a", 
    "Error: proposal not found. Please try submitting again.": "\u062e\u0637\u0623: \u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u062a\u0631\u0627\u062d. \u064a\u0631\u062c\u0649 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "\u0625\u064a\u0641\u0631\u064a\u0628\u064a\u062f\u064a\u0627 \u064a\u0634\u0628\u0647 \u0648\u064a\u0643\u064a\u0628\u064a\u062f\u064a\u0627 \u0648\u0644\u0643\u0646\u0647 \u0623\u0628\u0633\u0637 \u0645\u0646 \u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u062a\u062d\u0631\u064a\u0631 \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629. \u062a\u062a\u0643\u0648\u0646 \u0643\u0644 \u0635\u0641\u062d\u0629 \u0645\u0646 \u0645\u0646\u0637\u0642\u0629 \u0645\u0631\u0628\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0644\u062d\u0642\u0627\u0626\u0642 \u0645\u0648\u062c\u0632\u0629 \u0642\u0635\u064a\u0631\u0629 \u0648\u0645\u0642\u0627\u0644\u0629 \u0631\u0626\u064a\u0633\u064a\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0641\u064a \u0635\u064a\u063a\u0629 \u0627\u0644\u063a\u0627\u0626\u0628 \u0648\u0645\u0639\u0631\u0636 \u0648\u0633\u0627\u0626\u0637 \u0644\u0644\u0635\u0648\u0631 \u0648\u0623\u0634\u0631\u0637\u0629 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0648\u0627\u0644\u0635\u0648\u062a \u0648\u063a\u064a\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0645\u0648\u0636\u0648\u0639 \u0648\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0627\u062c\u0639 \u0625\u0644\u0649 \u0635\u0641\u062d\u0627\u062a \u0648\u064a\u0628 \u0648\u0645\u0644\u0641\u0627\u062a \u062a\u0633\u062a\u062e\u062f\u0645 \u0643\u0627\u0633\u062a\u0634\u0647\u0627\u062f\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0648 \u0648\u0645\u0631\u0628\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a.", 
    "File uploaded successfully.": "\u062a\u0645 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062c\u0627\u062d.", 
    "Filter": "\u0627\u0646\u062a\u0642\u0627\u0621", 
    "Font Style": "\u0646\u0648\u0639 \u0627\u0644\u062e\u0637", 
    "Here you can add the main photo for the article.": "\u0647\u0646\u0627 \u064a\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0627\u0644.", 
    "Hide": "\u0627\u062e\u0641", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "\u0625\u0630\u0627 \u0643\u0646\u062a \u0642\u062f \u0642\u0645\u062a \u0628\u0627\u0644\u0641\u0639\u0644 \u0628\u0625\u0646\u0634\u0627\u0621 \u0645\u0642\u0627\u0644 \u0625\u064a\u0641\u0631\u064a\u0628\u064a\u062f\u064a\u0627 \u0639\u0646 \u0646\u0641\u0633\u0643 \u060c \u0641\u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0647 \u0647\u0646\u0627.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\u0625\u0630\u0627 \u0643\u0627\u0646 \u0644\u062f\u064a\u0643 \u0623\u064a \u0639\u0645\u0644\u0627\u062a \u0631\u0642\u0645\u064a\u0629\u060c \u0623\u0636\u0641 \u0639\u0646\u0627\u0648\u064a\u0646 \u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0647\u0646\u0627. \u064a\u0645\u0643\u0646 \u0644\u0644\u0646\u0627\u0633 \u0627\u0644\u062a\u0628\u0631\u0639 \u0644\u0643 \u0625\u0630\u0627 \u0623\u0639\u062c\u0628\u0647\u0645 \u0639\u0645\u0644\u0643! \u0625\u0630\u0627 \u0644\u0645 \u064a\u0643\u0646 \u0644\u062f\u064a\u0643 \u0645\u062d\u0641\u0638\u0629 \u060c \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0648\u0627\u062d\u062f\u0629 \u0647\u0646\u0627: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\u0628\u064a\u062a\u0643\u0648\u064a\u0646</a> \u060c <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\u0625\u064a\u062b\u064a\u0631\u0645</a> \u060c <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>\u062f\u0648\u062c\u0643\u0648\u064a\u0646</a> ", 
    "Infobox": "\u0645\u0631\u0628\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062a", 
    "Introduction": "\u0645\u0642\u062f\u0645\u0629", 
    "Link": "\u0631\u0627\u0628\u0637", 
    "Link to other Everipedia pages": "\u0648\u0635\u0644\u0629 \u0644\u0635\u0641\u062d\u0627\u062a \u0625\u064a\u0641\u0631\u064a\u0628\u064a\u062f\u064a\u0627 \u0623\u062e\u0631\u0649", 
    "Link your Everipedia page": "\u0627\u0631\u0628\u0637 \u0635\u0641\u062d\u0629 \u0625\u064a\u0641\u0631\u064a\u0628\u064a\u062f\u064a\u0627 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "\u0644\u0627 \u064a\u064f\u0633\u0645\u062d \u0628\u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a \u0628\u0635\u0641\u062d\u0627\u062a \u0648\u064a\u0643\u064a\u0628\u064a\u062f\u064a\u0627 \u0644\u0623\u0633\u0628\u0627\u0628 \u0641\u0646\u064a\u0629. \u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.", 
    "Loading more activity, please wait...": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0646\u0634\u0627\u0637 \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631 ...", 
    "Loading...": "\u062c\u0627\u0631 \u0627\u0644\u062a\u062d\u0645\u064a\u0644...", 
    "Main article body": "\u062c\u0633\u0645 \u0627\u0644\u0645\u0642\u0627\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a", 
    "Main photo": "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0627\u0633\u062a\u0634\u0647\u0627\u062f \u0628\u0645\u0635\u0627\u062f\u0631\u0643 \u0639\u0646\u062f \u0625\u0636\u0627\u0641\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0625\u0636\u0627\u0641\u0629 \u0631\u0648\u0627\u0628\u0637 \u0648\u0645\u0644\u0641\u0627\u062a \u0647\u0646\u0627 \u062d\u062a\u0649 \u064a\u0645\u0643\u0646\u0643 \u0625\u0638\u0647\u0627\u0631 \u0645\u0635\u062f\u0631 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a.", 
    "Media": "\u0627\u0644\u0648\u0633\u0627\u0626\u0637", 
    "Media Gallery": "\u0645\u0639\u0631\u0636 \u0627\u0644\u0648\u0633\u0627\u0626\u0637", 
    "Midnight": "\u0645\u0646\u062a\u0635\u0641 \u0627\u0644\u0644\u064a\u0644", 
    "Next": "\u0627\u0644\u062a\u0627\u0644\u064a", 
    "No URL provided, please try again": "\u0644\u0645 \u064a\u062a\u0645 \u062a\u0642\u062f\u064a\u0645 \u0639\u0646\u0648\u0627\u0646 URL \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649", 
    "Noon": "\u0627\u0644\u0638\u0647\u0631", 
    "Not Ready": "\u063a\u064a\u0631 \u062c\u0627\u0647\u0632", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "\u0644\u0627\u062d\u0638 \u0623\u0646\u0643 \u0644\u0646 \u062a\u0643\u0648\u0646 \u0642\u0627\u062f\u0631\u064b\u0627 \u0639\u0644\u0649 \u0627\u0642\u062a\u0631\u0627\u062d \u062a\u0639\u062f\u064a\u0644\u0627\u062a \u0628\u062f\u0648\u0646 Brainpower. \u0633\u0648\u0641 \u062a\u0641\u0642\u062f \u0639\u0645\u0644\u0643!", 
    "Note: You are %s hour ahead of server time.": [
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0642\u062f\u0645 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0642\u062f\u0645 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0642\u062f\u0645 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0642\u062f\u0645 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0642\u062f\u0645 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0642\u062f\u0645 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645."
    ], 
    "Note: You are %s hour behind server time.": [
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0623\u062e\u0631 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0623\u062e\u0631 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0623\u062e\u0631 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0623\u062e\u0631 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0623\u062e\u0631 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645.", 
      "\u0645\u0644\u0627\u062d\u0638\u0629: \u0623\u0646\u062a \u0645\u062a\u0623\u062e\u0631 \u0628\u0640 %s \u0633\u0627\u0639\u0629 \u0645\u0646 \u0648\u0642\u062a \u0627\u0644\u062e\u0627\u062f\u0645."
    ], 
    "Now": "\u0627\u0644\u0622\u0646", 
    "Please enter a description for the photo": "\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0648\u0635\u0641 \u0644\u0644\u0635\u0648\u0631\u0629", 
    "Please provide a description for the link or file.": "\u064a\u0631\u062c\u0649 \u062a\u0648\u0641\u064a\u0631 \u0648\u0635\u0641 \u0644\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0623\u0648 \u0627\u0644\u0645\u0644\u0641.", 
    "Please provide a more scholarly description.": "\u064a\u0631\u062c\u0649 \u062a\u0648\u0641\u064a\u0631 \u0648\u0635\u0641 \u0623\u0643\u062b\u0631 \u0639\u0644\u0645\u064a\u0629.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "\u064a\u0631\u062c\u0649 \u0627\u0644\u0631\u0647\u0627\u0646 \u0628\u0628\u0639\u0636 \u0627\u0644IQ \u0641\u064a Brainpower \u0642\u0628\u0644 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629. \u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0645\u0648\u0627\u0641\u0642 \u0644\u0641\u062a\u062d \u0634\u0627\u0634\u0629 \u0625\u062f\u0627\u0631\u0629 Brainpower\u0641\u064a \u0639\u0644\u0627\u0645\u0629 \u062a\u0628\u0648\u064a\u0628 \u062c\u062f\u064a\u062f\u0629. \u0645\u0644\u0627\u062d\u0638\u0629: \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0646\u0648\u0627\u0641\u0630 \u0627\u0644\u0645\u0646\u0628\u062b\u0642\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u060c \u0644\u0623\u0646\u0643 \u0642\u062f \u062a\u062a\u0644\u0642\u0649 \u062a\u062d\u0630\u064a\u0631\u064b\u0627.", 
    "Pre": "\u0642\u0628\u0644", 
    "Profile photo": "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a", 
    "Reference links": "\u0631\u0648\u0627\u0628\u0637 \u0645\u0631\u062c\u0639\u064a\u0629", 
    "Remove": "\u0627\u062d\u0630\u0641", 
    "Remove all": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0643\u0644", 
    "Save": "\u062d\u0641\u0638", 
    "Save changes": "\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a", 
    "Search Everipedia": "\u0628\u062d\u062b \u0641\u064a \u0627\u064a\u0641\u064a\u0628\u064a\u062f\u064a\u0627", 
    "Searching...": "\u062c\u0627\u0631 \u0627\u0644\u0628\u062d\u062b...", 
    "Show": "\u0623\u0638\u0647\u0631", 
    "Style": "\u0627\u0644\u0646\u0645\u0637", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "\u062a\u0639\u0631\u0636 \u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a \u0644\u0644\u0645\u062d\u0631\u0631 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u062a\u064a \u0642\u0627\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u062a\u062d\u0631\u064a\u0631\u0647\u0627 \u0648\u0627\u0644\u0645\u0631\u0627\u062c\u0639 \u0627\u0644\u062a\u064a \u0623\u0636\u0627\u0641\u0648\u0647\u0627 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0648\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u064a \u0642\u0627\u0645\u0648\u0627 \u0628\u0625\u062c\u0631\u0627\u0626\u0647\u0627.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "\u0635\u0645\u0645 \u0645\u0631\u0628\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0644\u0644\u062d\u0642\u0627\u0626\u0642 \u0627\u0644\u0645\u0648\u062c\u0632\u0629 \u0648\u0627\u0644\u0633\u0631\u064a\u0639\u0629. \u062a\u0638\u0647\u0631 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629 \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0645\u062d\u062f\u062f \u0648\u0644\u0643\u0646 \u064a\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0623\u064a \u0646\u0648\u0639 \u0645\u0646 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0647\u0630\u0647 \u0642\u0627\u0626\u0645\u0629 %s \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629. \u064a\u0645\u0643\u0646\u0643 \u0627\u062e\u062a\u064a\u0627\u0631 \u0628\u0639\u0636\u0647\u0627 \u0628\u0627\u0646\u062a\u0642\u0627\u0626\u0647\u0627 \u0641\u064a \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0623\u062f\u0646\u0627\u0647 \u062b\u0645 \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0633\u0647\u0645 \u0627\u0644\u0640\"\u0627\u062e\u062a\u064a\u0627\u0631\" \u0628\u064a\u0646 \u0627\u0644\u0635\u0646\u062f\u0648\u0642\u064a\u0646.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0647\u0630\u0647 \u0642\u0627\u0626\u0645\u0629 %s \u0627\u0644\u0645\u062d\u062f\u062f\u0629. \u064a\u0645\u0643\u0646\u0643 \u0625\u0632\u0627\u0644\u0629 \u0628\u0639\u0636\u0647\u0627 \u0628\u0627\u062e\u062a\u064a\u0627\u0631\u0647\u0627 \u0641\u064a \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0623\u062f\u0646\u0627\u0647 \u062b\u0645 \u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0633\u0647\u0645 \u0627\u0644\u0640\"\u0625\u0632\u0627\u0644\u0629\" \u0628\u064a\u0646 \u0627\u0644\u0635\u0646\u062f\u0648\u0642\u064a\u0646.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\u0647\u0630\u0627 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0645\u0648\u062c\u0648\u062f \u0628\u0627\u0644\u0641\u0639\u0644 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629\u060c \u0644\u0627 \u064a\u0632\u0627\u0644 \u0628\u0625\u0645\u0643\u0627\u0646\u0643 \u062a\u0639\u062f\u064a\u0644 \u0645\u0644\u062e\u0635 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0644\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0644\u0649 \u0625\u064a\u0641\u0631\u064a\u0628\u064a\u062f\u064a\u0627!", 
    "Title": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646", 
    "To add an image or video to the article text, click the 'Media' button.": "\u0644\u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0623\u0648 \u0645\u0642\u0637\u0639 \u0641\u064a\u062f\u064a\u0648 \u0625\u0644\u0649 \u0646\u0635 \u0627\u0644\u0645\u0642\u0627\u0644\u060c \u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0627\u0644\u0632\u0631 \"\u0648\u0633\u0627\u0626\u0637\"", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\u0644\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0635\u0641\u062d\u0629 \u0625\u064a\u0641\u0631\u0628\u064a\u062f\u064a\u0627 \u0623\u062e\u0631\u0649 \u060c \u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0627\u0644\u0632\u0631\"\u0627\u0631\u0628\u0637 \u0635\u0641\u062d\u0629\". \u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u064b\u0627 \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \"@\" \u0623\u0648 \u0627\u0644\u0645\u0641\u062a\u0627\u062d \u0639\u0646\u062f \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0648\u0633\u062a\u0638\u0647\u0631 \u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u0633\u062f\u0644\u0629. \u062d\u0627\u0648\u0644 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0623\u0643\u0628\u0631 \u0639\u062f\u062f \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0644\u062c\u0639\u0644 \u0643\u0644 \u0635\u0641\u062d\u0629 \u063a\u0646\u064a\u0629 \u0628\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0642\u062f\u0631 \u0627\u0644\u0625\u0645\u0643\u0627\u0646.", 
    "Today": "\u0627\u0644\u064a\u0648\u0645", 
    "Tomorrow": "\u063a\u062f\u0627\u064b", 
    "Type into this box to filter down the list of available %s.": "\u0627\u0643\u062a\u0628 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0644\u062a\u0635\u0641\u064a\u0629 \u0642\u0627\u0626\u0645\u0629 %s \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629.", 
    "When you are done, click here to save your changes.": "\u0639\u0646\u062f \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621 \u060c \u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0644\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a.", 
    "When you are finished, click here to save your changes.": "\u0639\u0646\u062f \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621 \u060c \u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0644\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "\u0627\u0643\u062a\u0628 \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u0648\u0636\u0648\u0639\u064a\u0629 \u0641\u064a \u0635\u064a\u063a\u0629 \u063a\u064a\u0631 \u0627\u0644\u0645\u062a\u0643\u0644\u0645\u060c \u0644\u0627 \u062a\u0636\u0641 \u0623\u064a \u0643\u0644\u0627\u0645 \u062a\u0633\u0648\u064a\u0642\u064a (\u0639\u0631\u0648\u0636 \u062d\u0635\u0631\u064a\u0629 \u060c \u0627\u062f\u0639\u0627\u0621\u0627\u062a \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646\u0647\u0627 \u060c \u0625\u0644\u062e). \u0647\u0630\u0647 \u0645\u0648\u0633\u0648\u0639\u0629 \u060c \u0648\u0644\u064a\u0633\u062a \u0635\u0641\u062d\u0629 \u0645\u0646 \u0635\u0641\u062d\u0627\u062a \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a.", 
    "Yesterday": "\u0623\u0645\u0633", 
    "You can also create a new wiki article by clicking here.": "\u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u064b\u0627 \u0625\u0646\u0634\u0627\u0621 \u0645\u0642\u0627\u0644\u0629 \u0648\u064a\u0643\u064a \u062c\u062f\u064a\u062f\u0629 \u0628\u0627\u0644\u0646\u0642\u0631 \u0647\u0646\u0627.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "\u0644\u0642\u062f \u0642\u0645\u062a \u0628\u0646\u0634\u0631 \u0627\u0644\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u064a\u0648\u0645. \u0627\u0646\u062a\u0638\u0631 \u0642\u0644\u064a\u0644\u0627\u064b \u062d\u062a\u0649 \u064a\u0633\u062a\u062c\u064a\u0628 \u0627\u0644\u0645\u062c\u062a\u0645\u0639 \u0644\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643. \u064a\u064f\u0633\u0645\u062d \u0644\u0644\u0645\u062d\u0631\u0631\u064a\u0646 \u0627\u0644\u062c\u062f\u062f \u0628\u0646\u0634\u0631 250 \u0639\u0645\u0644\u064a\u0629 \u0641\u0642\u0637 \u0641\u064a \u0627\u0644\u064a\u0648\u0645.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0627\u062e\u062a\u0631\u062a \u0625\u062c\u0631\u0627\u0621\u064b \u062f\u0648\u0646 \u062a\u063a\u064a\u064a\u0631 \u0623\u064a \u062d\u0642\u0644. \u0644\u0639\u0644\u0643 \u062a\u0631\u064a\u062f \u0632\u0631 \u0627\u0644\u062a\u0646\u0641\u064a\u0630 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0632\u0631 \u0627\u0644\u062d\u0641\u0638.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0627\u062e\u062a\u0631\u062a \u0625\u062c\u0631\u0627\u0621\u064b \u0644\u0643\u0646 \u062f\u0648\u0646 \u0623\u0646 \u062a\u062d\u0641\u0638 \u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u0642\u0645\u062a \u0628\u0647\u0627. \u0631\u062c\u0627\u0621 \u0627\u0636\u063a\u0637 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0644\u062a\u062d\u0641\u0638 \u062a\u0639\u062f\u064a\u0644\u0627\u062a\u0643. \u0633\u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0625\u0639\u0627\u062f\u0629 \u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0625\u062c\u0631\u0627\u0621.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0644\u062f\u064a\u0643 \u062a\u0639\u062f\u064a\u0644\u0627\u062a \u063a\u064a\u0631 \u0645\u062d\u0641\u0648\u0638\u0629 \u0639\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0639\u062f\u064a\u0644. \u0625\u0646 \u0646\u0641\u0630\u062a \u0623\u064a \u0625\u062c\u0631\u0627\u0621 \u0641\u0633\u0648\u0641 \u062a\u062e\u0633\u0631 \u062a\u0639\u062f\u064a\u0644\u0627\u062a\u0643.", 
    "auth.logout": "auth.logout", 
    "daysUpdated": "\u0623\u064a\u0627\u0645 \u0645\u062d\u062f\u062b\u0629", 
    "hoursUpdated": "\u0633\u0627\u0639\u0627\u062a \u0645\u062d\u062f\u062b\u0629", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "\u062f\u0642\u0627\u0626\u0642 \u0645\u062d\u062f\u062b\u0629", 
    "paused": "\u0645\u062a\u0648\u0642\u0641 \u0645\u0624\u0642\u062a\u0627", 
    "reset": "\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646", 
    "secondTenthsUpdated": "\u062b\u0648\u0627\u0646\u064a \u0639\u0634\u0631\u064a\u0629 \u0645\u062d\u062f\u062b\u0629", 
    "secondsUpdated": "\u062b\u0648\u0627\u0646\u064a \u0645\u062d\u062f\u062b\u0629", 
    "started": "\u0628\u062f\u0623", 
    "stopped": "\u062a\u0648\u0642\u0641", 
    "targetAchieved": "\u0647\u062f\u0641 \u0645\u062d\u0642\u0642"
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
    "DATE_FORMAT": "j F\u060c Y", 
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
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "d\u200f/m\u200f/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "g:i A", 
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


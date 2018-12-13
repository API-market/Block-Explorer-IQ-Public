

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
      "%(sel)s\uac1c\uac00 %(cnt)s\uac1c \uc911\uc5d0 \uc120\ud0dd\ub428."
    ], 
    "(Optional) Add your cryptocurrency wallet addresses": "(\uc120\ud0dd \uc0ac\ud56d) \uc554\ud638\ud654\ud3d0 \uc9c0\uac11 \uc8fc\uc18c\ub97c \ucd94\uac00\ud558\uc2ed\uc2dc\uc624", 
    "(Optional) Enter your name, email, nationality, language, etc.": "(\uc120\ud0dd \uc0ac\ud56d) \uc774\ub984, \uc774\uba54\uc77c, \uad6d\uc801, \uc5b8\uc5b4 \ub4f1\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624.", 
    "6 a.m.": "\uc624\uc804 6\uc2dc", 
    "6 p.m.": "\uc624\ud6c4 6\uc2dc", 
    "Add File": "\ud30c\uc77c \ucd94\uac00\ud558\uae30", 
    "Add Link": "\ub9c1\ud06c \ucd94\uac00\ud558\uae30", 
    "Add Links, Files, Etc.": "\ub9c1\ud06c, \ud30c\uc77c \ub4f1 \ucd94\uac00\ud558\uae30", 
    "Add New Infobox": "\uc0c8\ub85c\uc6b4 \uc815\ubcf4\uc0c1\uc790 \ucd94\uac00\ud558\uae30", 
    "Add Row": "\ud589 \ucd94\uac00\ud558\uae30", 
    "Add an additional description for this category": "\ud574\ub2f9 \uce74\ud14c\uace0\ub9ac\uc5d0 \ub300\ud55c \ubd80\uac00 \uc124\uba85 \ucd94\uac00\ud558\uae30", 
    "Add media to article text": "\uae00 \ud14d\uc2a4\ud2b8\uc5d0 \ubbf8\ub514\uc5b4 \ucd94\uac00\ud558\uae30", 
    "Added pictures will show up here.": "\ucd94\uac00\ub41c \uc0ac\uc9c4\uc774 \uc5ec\uae30\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4.", 
    "Adding infobox item, please wait...": "\uc815\ubcf4\ud568 \ud56d\ubaa9\uc744 \ucd94\uac00\ud558\ub294 \uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \uae30\ub2e4\ub824\uc8fc\uc138\uc694 ...", 
    "Adding, please wait...": "\ucd94\uac00 \uc911\uc785\ub2c8\ub2e4, \uae30\ub2e4\ub824\uc8fc\uc2ed\uc2dc\uc624...", 
    "After you have already added a link, file, or picture to the page, you can cite it by clicking the 'Cite' button. You can also press the '^' or '*' keys when typing and a dropdown should appear.": "\uc774\ubbf8 \ud398\uc774\uc9c0\uc5d0 \ub9c1\ud06c, \ud30c\uc77c \ub610\ub294 \uadf8\ub9bc\uc744 \ucd94\uac00\ud55c \ud6c4\ub77c\uba74 '\uc778\uc6a9' \ubc84\ud2bc\uc744\ud074\ub9ad\ud558\uc5ec \uc774\ub97c \uc608\ub85c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc785\ub825 \ud560 \ub54c '^' \ub610\ub294 '*'\ud0a4\ub97c \ub20c\ub7ec\ub4dc\ub86d\ub2e4\uc6b4\uc774 \ub098\ud0c0\ub098\uc57c \ud569\ub2c8\ub2e4.", 
    "April": "4\uc6d4", 
    "Are you sure you want to exit the page? Unsaved changes will be lost.": "\ud398\uc774\uc9c0\ub97c \uc885\ub8cc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc800\uc7a5\ud558\uc9c0 \uc54a\uc740 \ubcc0\uacbd \uc0ac\ud56d\uc740 \uc190\uc2e4\ub429\ub2c8\ub2e4.", 
    "Article proposal submission failed!": "\uae00 \uc81c\uc548\uc11c \uc81c\ucd9c \uc2e4\ud328!", 
    "As you add links and files, they will show up in the Reference Links section. You can edit or remove them as well.": "\ub9c1\ud06c\uc640 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uba74 \ucc38\uc870 \ub9c1\ud06c \uc139\uc158\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub610\ud55c\ud3b8\uc9d1\ud558\uac70\ub098 \uc0ad\uc81c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "August": "8\uc6d4", 
    "Available %s": "\uc774\uc6a9 \uac00\ub2a5\ud55c %s", 
    "Back": "\ub4a4\ub85c", 
    "Cancel": "\ucde8\uc18c", 
    "Choose": "\uc120\ud0dd", 
    "Choose a Date": "\uc2dc\uac04 \uc120\ud0dd", 
    "Choose a Time": "\uc2dc\uac04 \uc120\ud0dd", 
    "Choose a time": "\uc2dc\uac04 \uc120\ud0dd", 
    "Choose all": "\ubaa8\ub450 \uc120\ud0dd", 
    "Chosen %s": "\uc120\ud0dd\ub41c %s", 
    "Cite": "\uc778\uc6a9", 
    "Cite as verified editor": "\uc778\uc99d\ub41c \uc5d0\ub514\ud130\ub97c \uc608\ub85c \ub4e4\uae30", 
    "Cite links, files, etc": "\ub9c1\ud06c, \ud30c\uc77c \ub4f1\uc744 \uc608\ub85c \ub4e4\uae30", 
    "Cite my own knowledge / experience as a verified editor": "\uc778\uc99d\ub41c \uc5d0\ub514\ud130\ub85c\uc11c \ub0b4 \uc9c0\uc2dd / \uacbd\ud5d8\uc744 \uc5b8\uae09\ud574\uc8fc\uc2ed\uc2dc\uc624.", 
    "Claim": "\uc2b9\uc778 \uc694\uccad", 
    "Claim Rewards": "\ubcf4\uc0c1\uae08 \ubcf4\uc0c1", 
    "Click here to upload a picture for your editor profile.": "\uc5d0\ub514\ud130 \ud504\ub85c\ud544\uc5d0 \ub300\ud55c \uadf8\ub9bc\uc744 \uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624.", 
    "Click to choose all %s at once.": "\ud55c\ubc88\uc5d0 \ubaa8\ub4e0 %s \ub97c \uc120\ud0dd\ud558\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694.", 
    "Click to remove all chosen %s at once.": "\ud55c\ubc88\uc5d0 \uc120\ud0dd\ub41c \ubaa8\ub4e0 %s \ub97c \uc81c\uac70\ud558\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694.", 
    "Completing transaction...": "\uac70\ub798 \uc644\ub8cc \uc911 ...", 
    "Create Page": "\ud398\uc774\uc9c0 \uc0dd\uc131\ud558\uae30", 
    "Create page": "\ud398\uc774\uc9c0 \uc0dd\uc131\ud558\uae30", 
    "December": "12\uc6d4", 
    "Delete this tag": "\ud574\ub2f9 \ud0dc\uadf8 \uc0ad\uc81c\ud558\uae30", 
    "Drag and drop your photo here or click to upload.": "\uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \uc0ac\uc9c4\uc744 \uc5ec\uae30\ub85c \ub04c\uc5b4 \ub193\uac70\ub098 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624.", 
    "Edit": "\ud3b8\uc9d1\ud558\uae30", 
    "Editor profile": "\uc5d0\ub514\ud130 \ud504\ub85c\ud544", 
    "Enter the page title here": "\uc5ec\uae30\uc5d0 \ud398\uc774\uc9c0 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624.", 
    "Enter your profile info": "\ud504\ub85c\ud544 \uc815\ubcf4 \uc785\ub825\ud558\uae30", 
    "Error: proposal not found. Please try submitting again.": "\uc624\ub958: \uc81c\uc548\uc11c\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc81c\ucd9c\ud574\uc8fc\uc2ed\uc2dc\uc624.", 
    "Everipedia is just like Wikipedia but much simpler to edit and contribute. Each page is composed of an infobox area for short concise facts, a main article written in a neutral 3rd person tense, a media gallery of pictures, videos, audio etc about the topic, a list of references to webpages and files that are used as citations in the article and infobox.": "Everipedia\ub294 Wikipedia\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \ud3b8\uc9d1 \ubc0f \uae30\uace0\ud558\ub294\ub370 \ud6e8\uc52c \ub354 \uac04\ub2e8\ud569\ub2c8\ub2e4.\uac01 \ud398\uc774\uc9c0\ub294 \uac04\ub2e8\uba85\ub8cc\ud55c \uc0ac\uc2e4, \uc911\ub9bd\uc801\uc778 3 \uc778\uce6d \uc2dc\uc81c\ub85c \uc4f0\uc5ec\uc9c4 \uc8fc\uc694 \uae00, \ud574\ub2f9 \uc8fc\uc81c\uc5d0 \uad00\ud55c \uc0ac\uc9c4, \ube44\ub514\uc624, \uc624\ub514\uc624 \ub4f1\uc758 \ubbf8\ub514\uc5b4 \uac24\ub7ec\ub9ac, \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ub300\ud55c \ucc38\uace0 \ubaa9\ub85d \ubc0f\uae00 \ubc0f \uc815\ubcf4 \uc0c1\uc790\uc758 \uc608\uc2dc\ub85c \uc0ac\uc6a9\ub418\ub294 \ud30c\uc77c\uc5d0 \ub300\ud55c \uc815\ubcf4\uc0c1\uc790 \uc601\uc5ed\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.", 
    "February": "2\uc6d4", 
    "File uploaded successfully.": "\ud30c\uc77c\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc5c5\ub85c\ub4dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Filter": "\ud544\ud130", 
    "Font Style": "\ud3f0\ud2b8 \uc2a4\ud0c0\uc77c", 
    "Help": "\ub3c4\uc6c0\ub9d0", 
    "Here you can add the main photo for the article.": "\uc5ec\uae30\uc11c \uae00\uc758 \uc8fc\uc694 \uc0ac\uc9c4\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "Hide": "\uac10\ucd94\uae30", 
    "If you already created an Everipedia article about yourself, you can link to it here.": "Everipedia \uae00\uc744 \uc774\ubbf8 \uc791\uc131\ud588\ub2e4\uba74 \uc5ec\uae30\uc11c \ub9c1\ud06c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "If you have any cryptocurrencies, add the wallet addresses here. People may donate to you if they like your work! If you do not have a wallet, you can get one here: <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Bitcoin</a>, <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>Ethereum</a>, <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/><a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>Dogecoin</a> ": "\uc554\ud638\ud654\ud3d0\uac00 \uc788\uc73c\uba74 \uc5ec\uae30\uc5d0 \uc9c0\uac11 \uc8fc\uc18c\ub97c \ucd94\uac00\ud558\uc2ed\uc2dc\uc624. \uc0ac\uc6a9\uc790\ub4e4\uc774 \uadc0\ud558\uc758 \ud65c\ub3d9\uc744\uc88b\uc544\ud55c\ub2e4\uba74 \uadc0\ud558\uc5d0\uac8c \uae30\ubd80 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! \uc9c0\uac11\uc774 \uc5c6\ub294 \uacbd\uc6b0,\uc5ec\uae30\uc11c \uc9c0\uac11\uc744 \uc18c\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/bitcoin-icon.svg'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\ube44\ud2b8\ucf54\uc778</a> , <img class='userview-crypto-logo-helper' style='margin-right: 0px;' src='https://epcdn-vz.azureedge.net/static/images/ethereum-icon.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://www.coinbase.com/'>\uc774\ub354\ub9ac\uc6c0</a> , <img class='userview-crypto-logo-helper' src='https://epcdn-vz.azureedge.net/static/images/dogecoin-logo.png'/> <a class='helper-crypto-anchor' rel='nofollow' target='_blank' href='https://my.dogechain.info/#/overview'>\ub3c4\uc9c0\ucf54\uc778(Dogecoin)</a>", 
    "Infobox": "\uc815\ubcf4 \uc0c1\uc790", 
    "Introduction": "\uc18c\uac1c", 
    "January": "1\uc6d4", 
    "July": "7\uc6d4", 
    "June": "6\uc6d4", 
    "Link": "\ub9c1\ud06c", 
    "Link to other Everipedia pages": "\ub2e4\ub978 Everipedia \ud398\uc774\uc9c0\ub85c \uc5f0\uacb0\ud558\uae30", 
    "Link your Everipedia page": "Everipedia \ud398\uc774\uc9c0\uc5d0 \uc5f0\uacb0\ud558\uae30", 
    "Links to Wikipedia pages are not allowed, for technical reasons. Please try again.": "\uae30\uc220\uc801\uc778 \uc774\uc720\ub85c \uc778\ud574, Wikipedia \ud398\uc774\uc9c0\uc758 \ub9c1\ud06c\uac00 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc\uc2dc\ub3c4\ud574\uc8fc\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4.", 
    "Load Draft": "\uc784\uc2dc \ubcf4\uad00\ud568\ub85c\ub4dc", 
    "Loading more activity, please wait...": "\ub354 \ub9ce\uc740 \ud65c\ub3d9\uc744 \ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4, \uc7a0\uc2dc \uae30\ub2e4\ub824\uc8fc\uc2ed\uc2dc\uc624...", 
    "Loading...": "\ub85c\ub529 \uc911...", 
    "Main article body": "\uc8fc\uc694 \uae00 \ubcf8\ubb38", 
    "Main photo": "\uc8fc\uc694 \uc0ac\uc9c4", 
    "Make sure to cite your sources when adding information to the page by adding links and files here so you can show where the information is coming from.": "\ub9c1\ud06c\uc640 \ud30c\uc77c\uc744 \uc5ec\uae30\uc5d0 \ucd94\uac00\ud558\uc5ec \ubcf8 \ud398\uc774\uc9c0\uc5d0 \uc815\ubcf4\ub97c \ub354\ud560 \ub54c, \ucd9c\ucc98\ub97c \uc778\uc6a9\ud574\uc57c\uc815\ubcf4\uac00 \uc5b4\ub514\uc5d0\uc11c \uc654\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "March": "3\uc6d4", 
    "May": "5\uc6d4", 
    "Media": "\ubbf8\ub514\uc5b4", 
    "Media Gallery": "\ubbf8\ub514\uc5b4 \uac24\ub7ec\ub9ac", 
    "Midnight": "\uc790\uc815", 
    "Next": "\ub2e4\uc74c", 
    "No URL provided, please try again": "\uc81c\uacf5\ub41c URL\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4.", 
    "Noon": "\uc815\uc624", 
    "Not Ready": "\uc900\ube44\ub418\uc9c0 \uc54a\uc74c", 
    "Note that you will not be able to propose edits without Brainpower. Your work will be lost!": "Brainpower\uc5c6\uc774 \ud3b8\uc9d1\uc744 \uc2dc\ub3c4\ud560 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc744 \uc720\uc758\ud558\uc2ed\uc2dc\uc624. \uadc0\ud558\uc758 \uc791\uc5c5\uc744 \uc783\uac8c \ub429\ub2c8\ub2e4!", 
    "Note: You are %s hour ahead of server time.": [
      "Note: \uc11c\ubc84 \uc2dc\uac04\ubcf4\ub2e4 %s \uc2dc\uac04 \ube60\ub985\ub2c8\ub2e4."
    ], 
    "Note: You are %s hour behind server time.": [
      "Note: \uc11c\ubc84 \uc2dc\uac04\ubcf4\ub2e4 %s \uc2dc\uac04 \ub2a6\uc740 \uc2dc\uac04\uc785\ub2c8\ub2e4."
    ], 
    "November": "11\uc6d4", 
    "Now": "\ud604\uc7ac", 
    "October": "10\uc6d4", 
    "Please enter a description for the photo": "\uc0ac\uc9c4\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624.", 
    "Please provide a description for the link or file.": "\ub9c1\ud06c \ub610\ub294 \ud30c\uc77c\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624.", 
    "Please provide a more scholarly description.": "\uc804\ubb38\uc801\uc778 \uc124\uba85\uc744 \ub354 \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624.", 
    "Please stake some IQ into Brainpower before continuing. Click OK to open the Brainpower management screen in a new tab. NOTE: Please make sure popups are enabled for this site, as you may receive a warning.": "\uacc4\uc18d \uc9c4\ud589\ud558\uae30\uc5d0 \uc55e\uc11c \uc77c\ubd80 IQ\ub97c Brainpowe\uc5d0 \uc5f0\uacb0\ud569\ub2c8\ub2e4. \ud655\uc778\uc744 \ud074\ub9ad\ud558\uba74 \uc0c8 \ud0ed\uc5d0 Brainpower \uad00\ub9ac \ud654\uba74\uc774 \uc5f4\ub9bd\ub2c8\ub2e4. \ucc38\uace0 : \uacbd\uace0 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uc744 \uc218 \uc788\uc73c\ubbc0\ub85c\ud574\ub2f9 \uc0ac\uc774\ud2b8\uc5d0 \ub300\ud574 \ud31d\uc5c5\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc8fc\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4.", 
    "Pre": "\uc774\uc804", 
    "Profile photo": "\ud504\ub85c\ud544 \uc0ac\uc9c4", 
    "Reference links": "\ucc38\uc870 \ub9c1\ud06c", 
    "Remove": "\uc0ad\uc81c", 
    "Remove all": "\ubaa8\ub450 \uc81c\uac70", 
    "Save": "\uc800\uc7a5\ud558\uae30", 
    "Save Draft": "\uc784\uc2dc\ub85c \uc800\uc7a5", 
    "Save changes": "\ubcc0\uacbd\uc0ac\ud56d \uc800\uc7a5\ud558\uae30", 
    "Search Everipedia": " Everipedia\uac80\uc0c9\ud558\uae30", 
    "Searching...": "\uac80\uc0c9 \uc911...", 
    "September": "9\uc6d4", 
    "Show": "\ubcf4\uae30", 
    "Style": "\uc2a4\ud0c0\uc77c", 
    "Submit": "\uc81c\ucd9c", 
    "The editor profile page shows the pages the user has edited, references they\u2019ve added to a page, and comments they\u2019ve made.": "\uc5d0\ub514\ud130 \ud504\ub85c\ud544 \ud398\uc774\uc9c0\uc5d0\ub294 \uc0ac\uc6a9\uc790\uac00 \ud3b8\uc9d1\ud55c \ud398\uc774\uc9c0, \ud398\uc774\uc9c0\uc5d0 \ucd94\uac00\ud55c \ucc38\uace0 \ubc0f\uc791\uc131\ub41c \ucf54\uba58\ud2b8\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.", 
    "The infobox is designed for concise, quick facts. Suggested items appear in the dropdown depending on the selected topic, but any type of infobox can be added.": "\uc815\ubcf4 \uc0c1\uc790\ub294 \uac04\uacb0\ud558\uace0 \ube60\ub978 \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \ucd94\ucc9c \ud56d\ubaa9\uc740 \uc120\ud0dd\ud55c \uc8fc\uc81c\uc5d0 \ub530\ub77c \ub4dc\ub86d\ub2e4\uc6b4\uc5d0 \ud45c\uc2dc\ub418\uc9c0\ub9cc \ubaa8\ub4e0 \uc720\ud615\uc758 \uc815\ubcf4 \uc0c1\uc790\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\uc0ac\uc6a9 \uac00\ub2a5\ud55c %s \uc758 \ub9ac\uc2a4\ud2b8 \uc785\ub2c8\ub2e4.  \uc544\ub798\uc758 \uc0c1\uc790\uc5d0\uc11c \uc120\ud0dd\ud558\uace0 \ub450 \uc0c1\uc790 \uc0ac\uc774\uc758 \"\uc120\ud0dd\" \ud654\uc0b4\ud45c\ub97c \ud074\ub9ad\ud558\uc5ec \uba87 \uac00\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\uc120\ud0dd\ub41c %s \ub9ac\uc2a4\ud2b8 \uc785\ub2c8\ub2e4.  \uc544\ub798\uc758 \uc0c1\uc790\uc5d0\uc11c \uc120\ud0dd\ud558\uace0 \ub450 \uc0c1\uc790 \uc0ac\uc774\uc758 \"\uc81c\uac70\" \ud654\uc0b4\ud45c\ub97c \ud074\ub9ad\ud558\uc5ec \uc77c\ubd80\ub97c \uc81c\uac70 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "This link is already on this page, you can still edit the link summary to improve the information on EP!": "\ud574\ub2f9 \ub9c1\ud06c\ub294 \uc774\ubbf8 \ubcf8 \ud398\uc774\uc9c0\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \ub9c1\ud06c \uac1c\uc694\ub97c \ud3b8\uc9d1\ud558\uc5ec EP\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4!", 
    "Title": "\ud45c\uc81c", 
    "To add an image or video to the article text, click the 'Media' button.": "\uae00 \ud14d\uc2a4\ud2b8\uc5d0 \uc774\ubbf8\uc9c0 \ub610\ub294 \ube44\ub514\uc624\ub97c \ucd94\uac00\ud558\ub824\uba74 '\ubbf8\ub514\uc5b4' \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624", 
    "To link to another Everipedia page click the 'Link Page' button. You can also press the '@' or key when typing and a dropdown should appear. Try to link to as many pages as necessary to make each page as rich and informative as possible.": "\ub2e4\ub978 Everipedia \ud398\uc774\uc9c0\ub85c \uc5f0\uacb0\ud558\ub824\uba74 '\ub9c1\ud06c \ud398\uc774\uc9c0\u2019 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624. \ub610\ud55c\uc785\ub825\ud560 \ub54c '@' \ub610\ub294 \ud0a4\ub97c \ub204\ub974\uba74 \ub4dc\ub86d \ub2e4\uc6b4\uc774 \ub098\ud0c0\ub098\uc57c \ud569\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub9c8\ub2e4\ud48d\ubd80\ud558\uace0 \uc720\uc775\ud55c \uc815\ubcf4\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 \ud544\uc694\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ud398\uc774\uc9c0\uc5d0 \uc5f0\uacb0\ud558\uc2ed\uc2dc\uc624.", 
    "Today": "\uc624\ub298", 
    "Tomorrow": "\ub0b4\uc77c", 
    "Type into this box to filter down the list of available %s.": "\uc0ac\uc6a9 \uac00\ub2a5\ud55c %s \ub9ac\uc2a4\ud2b8\ub97c \ud544\ud130\ub9c1\ud558\ub824\uba74 \uc774 \uc0c1\uc790\uc5d0 \uc785\ub825\ud558\uc138\uc694.", 
    "When you are done, click here to save your changes.": "\ubaa8\ub450 \ub9c8\ucce4\uc73c\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc5ec \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc800\uc7a5\ud558\uc2ed\uc2dc\uc624.", 
    "When you are finished, click here to save your changes.": "\uc791\uc5c5\uc774 \ub05d\ub098\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc5ec \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4.", 
    "Write in an objective manner in third person tense, do not include any marketing speak (exclusive offers, unverifiable claims etc). This is an encyclopedia, not a social media page.": "3 \uc778\uce6d \uc2dc\uc81c\ub85c \uac1d\uad00\uc801\uc778 \ud0dc\ub3c4\ub97c \uac16\uace0 \uc791\uc131\ud558\uace0 \ub9c8\ucf00\ud305 \uc774\uc57c\uae30 (\ub3c5\uc810 \ud589\uc0ac,\uc785\uc99d\ud560 \uc218 \uc5c6\ub294 \uc8fc\uc7a5 \ub4f1)\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc774\ub294 \uc18c\uc15c \ubbf8\ub514\uc5b4 \ud398\uc774\uc9c0\uac00 \uc544\ub2cc\ubc31\uacfc \uc0ac\uc804\uc785\ub2c8\ub2e4.", 
    "Yesterday": "\uc5b4\uc81c", 
    "You can also create a new wiki article by clicking here.": "\ub610\ud55c \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc704\ud0a4 \uae00\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
    "You have been posting a lot of links today. Wait a bit for the community to respond to your content. New editors are limited to posting only 250 submissions a day.": "\uc624\ub298 \ub9c1\ud06c\ub97c \ub9ce\uc774 \uc62c\ub838\uc2b5\ub2c8\ub2e4. \ucee4\ubba4\ub2c8\ud2f0\uac00 \uadc0\ud558\uc758 \ucf58\ud150\uce20\uc5d0\uc751\ub2f5 \ud560 \ub54c\uae4c\uc9c0 \uc7a0\uc2dc \uae30\ub2e4\ub824\uc8fc\uc2ed\uc2dc\uc624. \uc0c8 \uc5d0\ub514\ud130\uc5d0\uac8c\ub294 \uc77c\uc77c \uc81c\ucd9c\uc744 250\uac1c\ub9cc\uac8c\uc2dc\ud558\ub294 \uac83\uc73c\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\uac1c\ubcc4 \ud544\ub4dc\uc5d0 \uc544\ubb34\ub7f0 \ubcc0\uacbd\uc774 \uc5c6\ub294 \uc0c1\ud0dc\ub85c \uc561\uc158\uc744 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4. \uc800\uc7a5 \ubc84\ud2bc\uc774 \uc544\ub2c8\ub77c \uc9c4\ud589 \ubc84\ud2bc\uc744 \ucc3e\uc544\ubcf4\uc138\uc694.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\uac1c\ubcc4 \ud544\ub4dc\uc758 \uac12\ub4e4\uc744 \uc800\uc7a5\ud558\uc9c0 \uc54a\uace0 \uc561\uc158\uc744 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4. OK\ub97c \ub204\ub974\uba74 \uc800\uc7a5\ub418\uba70, \uc561\uc158\uc744 \ud55c \ubc88 \ub354 \uc2e4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\uac1c\ubcc4 \ud3b8\uc9d1 \uac00\ub2a5\ud55c \ud544\ub4dc\uc5d0 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc740 \uac12\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc744 \uc218\ud589\ud558\uba74 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc740 \uac12\ub4e4\uc744 \uc783\uc5b4\ubc84\ub9ac\uac8c \ub429\ub2c8\ub2e4.", 
    "auth.logout": "\uc778\uc99d.\ub85c\uadf8\uc544\uc6c3", 
    "daysUpdated": "daysUpdated", 
    "hoursUpdated": "hoursUpdated", 
    "js_sdk_force_status_on_load": "js_sdk_force_status_on_load", 
    "minutesUpdated": "minutesUpdated", 
    "one letter Friday\u0004F": "\uae08", 
    "one letter Monday\u0004M": "\uc6d4", 
    "one letter Saturday\u0004S": "\ud1a0", 
    "one letter Sunday\u0004S": "\uc77c", 
    "one letter Thursday\u0004T": "\ubaa9", 
    "one letter Tuesday\u0004T": "\ud654", 
    "one letter Wednesday\u0004W": "\uc218", 
    "paused": "\uc77c\uc2dc\uc815\uc9c0\ub428", 
    "reset": "\uc7ac\uc124\uc815", 
    "secondTenthsUpdated": "secondTenthsUpdated", 
    "secondsUpdated": "secondsUpdated", 
    "started": "\uc2dc\uc791\ub428", 
    "stopped": "\uc885\ub8cc\ub428", 
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
    "DATETIME_FORMAT": "Y\ub144 n\uc6d4 j\uc77c g:i A", 
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
      "%m/%d/%y", 
      "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84 %S\ucd08", 
      "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84"
    ], 
    "DATE_FORMAT": "Y\ub144 n\uc6d4 j\uc77c", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%Y\ub144 %m\uc6d4 %d\uc77c"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "n\uc6d4 j\uc77c", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y-n-j H:i", 
    "SHORT_DATE_FORMAT": "Y-n-j.", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "A g:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M", 
      "%H\uc2dc %M\ubd84 %S\ucd08", 
      "%H\uc2dc %M\ubd84"
    ], 
    "YEAR_MONTH_FORMAT": "Y\ub144 n\uc6d4"
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


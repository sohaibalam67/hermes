"use strict";
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.url.includes("open.spotify.com")) {
    chrome.tabs.sendMessage(tab.id, { text: "remove_ad" }, message => {
      console.log(message);
    });
  }
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.text === "remove_ad") {
    document.querySelector(".Root__ads-container").innerHTML = "";
    sendResponse("ad removed");
  }
  window.onclick = e => {
    e.preventDefault();
    e.target.parentNode.removeChild(e.target);
  };
});

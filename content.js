setInterval(() => {
  const skipButton =
    document.getElementsByClassName("ytp-ad-skip-button-modern") ||
    document.getElementsByClassName("ytp-ad-skip-button");
  if (skipButton != undefined && skipButton.length > 0) {
    skipButton[0].click();
    chrome.storage.local.get(["adSkipped"], function (result) {
      chrome.storage.local.set({ adSkipped: ++result.adSkipped });
    });
  }
}, 1000);

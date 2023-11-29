setInterval(() => {
  const skipButton =
    document.getElementsByClassName("ytp-ad-skip-button-modern") ||
    document.getElementsByClassName("ytp-ad-skip-button");
  if (skipButton != undefined && skipButton.length > 0) {
    skipButton[0].click();
  }
}, 1000);

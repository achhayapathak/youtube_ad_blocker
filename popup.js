document.addEventListener("DOMContentLoaded", () => {
  let element = document.getElementById("adText");
  chrome.storage.local.get(["adSkipped"], function (result) {
    element.innerHTML = result.adSkipped;
  });
});

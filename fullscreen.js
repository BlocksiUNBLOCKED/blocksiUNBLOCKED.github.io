const fullscreenBtn = document.getElementById("fullscreenBtn");
const appIframe = document.getElementById("appIframe");

fullscreenBtn.addEventListener("click", () => {
  if (appIframe.requestFullscreen) {
    appIframe.requestFullscreen();
  } else if (appIframe.webkitRequestFullscreen) {
    appIframe.webkitRequestFullscreen();
  } else if (appIframe.msRequestFullscreen) {
    appIframe.msRequestFullscreen();
  }
});

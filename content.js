const observer = new MutationObserver(() => {
 const video = document.querySelector("video");
 if (video) {
  video.volume = 0.5;
  observer.disconnect();
 }
});
observer.observe(document.body, { childList: true, subtree: true });
// Set volume (slider)
document.getElementById("volumeSlider").addEventListener("input", (e) => {
 const volumeValue = e.target.value / 100;

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length === 0) return;

  chrome.scripting.executeScript({
   target: { tabId: tabs[0].id },
   func: (vol) => {
    const video = document.querySelector("video");
    if (video) video.volume = vol;
   },
   args: [volumeValue]
  });
 });
});

// Mute video
const muteVideo = () => {
 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length === 0) return;

  chrome.scripting.executeScript({
   target: { tabId: tabs[0].id },
   func: () => {
    const video = document.querySelector("video");
    if (video) video.muted = true;
   }
  });
 });
};

// Unmute video
const unmuteVideo = () => {
 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length === 0) return;

  chrome.scripting.executeScript({
   target: { tabId: tabs[0].id },
   func: () => {
    const video = document.querySelector("video");
    if (video) video.muted = false;
   }
  });
 });
};

// Connect buttons
document.getElementById("muteBtn").addEventListener("click", muteVideo);
document.getElementById("unmuteBtn").addEventListener("click", unmuteVideo);

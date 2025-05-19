chrome.commands.onCommand.addListener((command) => {
 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
   target: { tabId: tabs[0].id },
   func: (cmd) => {
    const video = document.querySelector("video");
    if (!video) return;
    if (cmd === "volume-up") video.volume = Math.min(1, video.volume + 0.1);
    if (cmd === "volume-down") video.volume = Math.max(0, video.volume - 0.1);
    if (cmd === "toggle-mute") video.muted = !video.muted;
   },
   args: [command]
  });
 });
});
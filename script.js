// get elements
const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const video = document.querySelector("video");
// variables
// functions
setTimeout(() => {
  document.querySelector(".loader").classList.add("hidden");
  document.querySelector(".background-video").classList.remove("hidden");
}, 500);
function handlePlay() {
  video.play();
  play.classList.add("hidden");
  pause.classList.remove("hidden");
}
function handlePause() {
  video.pause();
  play.classList.remove("hidden");
  pause.classList.add("hidden");
}
// eventListeners
play.addEventListener("click", handlePlay);
pause.addEventListener("click", handlePause);

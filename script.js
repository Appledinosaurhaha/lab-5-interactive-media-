const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");

playBtn.addEventListener("click", () => {
  audio.play();
  box.classList.add("active");
});

box.addEventListener("click", () => {
  box.classList.toggle("active");
});
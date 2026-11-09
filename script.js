const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");

// Using a direct, reliable open-source urban rain stream
const audio = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b2/A_City_in_Rain.ogg");
audio.loop = true;

playBtn.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause Soundscape";
    box.classList.add("active");
  } else {
    audio.pause();
    playBtn.textContent = "Play Soundscape";
    box.classList.remove("active");
  }
});

box.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause Soundscape";
    box.classList.add("active");
  } else {
    audio.pause();
    playBtn.textContent = "Play Soundscape";
    box.classList.remove("active");
  }
});

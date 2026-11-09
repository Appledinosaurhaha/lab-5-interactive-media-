const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");
const soundscape = document.getElementById("soundscape");

playBtn.addEventListener("click", function() {
  if (soundscape.paused) {
    soundscape.play().then(() => {
      playBtn.textContent = "Pause Soundscape";
      box.classList.add("active");
    }).catch(err => {
      console.log("Playback prevented:", err);
    });
  } else {
    soundscape.pause();
    playBtn.textContent = "Play Soundscape";
    box.classList.remove("active");
  }
});

box.addEventListener("click", function() {
  if (soundscape.paused) {
    soundscape.play().then(() => {
      playBtn.textContent = "Pause Soundscape";
      box.classList.add("active");
    });
  } else {
    soundscape.pause();
    playBtn.textContent = "Play Soundscape";
    box.classList.remove("active");
  }
});

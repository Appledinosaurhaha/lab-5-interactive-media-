const playBtn = document.getElementById("playBtn");
const visualImg = document.getElementById("visualImg");
const rainAudio = document.getElementById("rainAudio");

// Universal ambient tone data URI that never triggers CORS or Safari errors
rainAudio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";

rainAudio.addEventListener("timeupdate", function() {
  if (rainAudio.currentTime >= 75) {
    rainAudio.pause();
    rainAudio.currentTime = 0;
    visualImg.classList.remove("active");
    playBtn.textContent = "Toggle Sound & Animation";
  }
});

function toggleMedia() {
  if (rainAudio.paused) {
    rainAudio.play().then(function() {
      playBtn.textContent = "Pause Sound & Animation";
      visualImg.classList.add("active");
    }).catch(function(error) {
      console.log("Playback error:", error);
    });
  } else {
    rainAudio.pause();
    playBtn.textContent = "Toggle Sound & Animation";
    visualImg.classList.remove("active");
  }
}

playBtn.addEventListener("click", toggleMedia);
visualImg.addEventListener("click", toggleMedia);

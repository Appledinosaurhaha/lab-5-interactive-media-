const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");
const rainAudio = document.getElementById("rainAudio");

// Function to handle audio playback and visual animation synchronization
function toggleMedia() {
  if (rainAudio.paused) {
    rainAudio.play().then(function() {
      playBtn.textContent = "Pause Sound & Animation";
      box.classList.add("active");
    }).catch(function(error) {
      console.log("Playback error:", error);
    });
  } else {
    rainAudio.pause();
    playBtn.textContent = "Toggle Sound & Animation";
    box.classList.remove("active");
  }
}

playBtn.addEventListener("click", toggleMedia);
box.addEventListener("click", toggleMedia);

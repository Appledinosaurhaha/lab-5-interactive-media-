const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");
const rainAudio = document.getElementById("rainAudio");

playBtn.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().catch(function(error) {
      console.log("Playback error:", error);
    });
    box.classList.add("active");
  } else {
    rainAudio.pause();
    box.classList.remove("active");
  }
});

box.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().catch(function(error) {
      console.log("Playback error:", error);
    });
    box.classList.add("active");
  } else {
    rainAudio.pause();
    box.classList.remove("active");
  }
});

const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");

// Reliable public rain sound stream
const rainAudio = new Audio("https://actions.google.com/sounds/v1/weather/rain_heavy.ogg");
rainAudio.loop = true;

playBtn.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().then(function() {
      playBtn.textContent = "Pause Jakarta Rain";
      box.classList.add("active");
    }).catch(function(err) {
      console.log("Audio playback error:", err);
    });
  } else {
    rainAudio.pause();
    playBtn.textContent = "Play Jakarta Rain";
    box.classList.remove("active");
  }
});

box.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().then(function() {
      playBtn.textContent = "Pause Jakarta Rain";
      box.classList.add("active");
    }).catch(function(err) {
      console.log("Audio playback error:", err);
    });
  } else {
    rainAudio.pause();
    playBtn.textContent = "Play Jakarta Rain";
    box.classList.remove("active");
  }
});

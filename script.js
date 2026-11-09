const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");

// Real urban rain ambient sound stream - absolutely zero beep code
const rainAudio = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b2/A_City_in_Rain.ogg");
rainAudio.loop = true;

playBtn.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().catch(err => console.log(err));
    playBtn.textContent = "Pause Jakarta Rain";
    box.classList.add("active");
  } else {
    rainAudio.pause();
    playBtn.textContent = "Play Jakarta Rain";
    box.classList.remove("active");
  }
});

box.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().catch(err => console.log(err));
    playBtn.textContent = "Pause Jakarta Rain";
    box.classList.add("active");
  } else {
    rainAudio.pause();
    playBtn.textContent = "Play Jakarta Rain";
    box.classList.remove("active");
  }
});

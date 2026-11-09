const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");
const rainAudio = document.getElementById("rainAudio");

playBtn.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().catch(err => console.log(err));
    box.classList.add("active");
  } else {
    rainAudio.pause();
    box.classList.remove("active");
  }
});

box.addEventListener:// ... rest of box listener
box.addEventListener("click", function() {
  if (rainAudio.paused) {
    rainAudio.play().catch(err => console.log(err));
    box.classList.add("active");
  } else {
    rainAudio.pause();
    box.classList.remove("active");
  }
});

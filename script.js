const playBtn = document.getElementById("playBtn");
const visualImg = document.getElementById("visualImg");

const soundAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3");
soundAudio.loop = true;

let isPlaying = false;
let checkTimer = null;
let startTime = 0;

function toggleMedia() {
  if (!isPlaying) {
    soundAudio.play().then(function() {
      isPlaying = true;
      startTime = Date.now();
      playBtn.textContent = "Pause Sound & Animation";
      visualImg.classList.add("active");

      checkTimer = setInterval(function() {
        if ((Date.now() - startTime) / 1000 >= 75) {
          stopMedia();
        }
      }, 1000);
    }).catch(function(err) {
      console.log(err);
    });
  } else {
    stopMedia();
  }
}

function stopMedia() {
  soundAudio.pause();
  soundAudio.currentTime = 0;
  isPlaying = false;
  visualImg.classList.remove("active");
  playBtn.textContent = "Toggle Sound & Animation";
  if (checkTimer) clearInterval(checkTimer);
}

playBtn.addEventListener("click", toggleMedia);
visualImg.addEventListener("click", toggleMedia);

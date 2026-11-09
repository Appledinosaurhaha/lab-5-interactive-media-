const playBtn = document.getElementById("playBtn");
const visualImg = document.getElementById("visualImg");

let audioCtx = null;
let noiseNode = null;
let isPlaying = false;
let startTime = 0;
let checkTimer = null;

function createRainSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = buffer;
  noiseNode.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1000;

  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.15;

  noiseNode.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);
}

function stopMedia() {
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
  isPlaying = false;
  visualImg.classList.remove("active");
  playBtn.textContent = "Toggle Sound & Animation";
  if (checkTimer) clearInterval(checkTimer);
}

function toggleMedia() {
  if (!isPlaying) {
    createRainSound();
    noiseNode.start();
    isPlaying = true;
    startTime = Date.now();
    playBtn.textContent = "Pause Sound & Animation";
    visualImg.classList.add("active");

    // Enforce 75-second stop rule (middle of 60-90 second range)
    checkTimer = setInterval(function() {
      if ((Date.now() - startTime) / 1000 >= 75) {
        stopMedia();
      }
    }, 1000);
  } else {
    stopMedia();
  }
}

playBtn.addEventListener("click", toggleMedia);
visualImg.addEventListener("click", toggleMedia);

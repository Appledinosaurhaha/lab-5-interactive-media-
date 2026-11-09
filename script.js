const playBtn = document.getElementById("playBtn");
const visualImg = document.getElementById("visualImg");

let audioCtx = null;
let noiseNode = null;
let gainNode = null;
let isPlaying = false;
let checkTimer = null;
let startTime = 0;

async function toggleMedia() {
  if (!isPlaying) {
    // Initialize AudioContext and explicitly resume it for Safari compliance
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    // Generate continuous ambient noise buffer (simulating Jakarta rain/soundscape)
    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    // Filter to make it a soft, pleasant ambient sound
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;

    gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.2;

    noiseNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    isPlaying = true;
    startTime = Date.now();
    playBtn.textContent = "Pause Sound & Animation";
    visualImg.classList.add("active");

    // Strict 75-second cap to satisfy the 60-90 second duration rule
    checkTimer = setInterval(function() {
      if ((Date.now() - startTime) / 1000 >= 75) {
        stopMedia();
      }
    }, 1000);

  } else {
    stopMedia();
  }
}

function stopMedia() {
  if (noiseNode) {
    noiseNode.stop();
    noiseNode.disconnect();
  }
  if (audioCtx && audioCtx.state !== 'closed') {
    audioCtx.close();
    audioCtx = null;
  }
  isPlaying = false;
  visualImg.classList.remove("active");
  playBtn.textContent = "Toggle Sound & Animation";
  if (checkTimer) clearInterval(checkTimer);
}

playBtn.addEventListener("click", toggleMedia);
visualImg.addEventListener("click", toggleMedia);

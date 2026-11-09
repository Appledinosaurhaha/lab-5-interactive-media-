const playBtn = document.getElementById("playBtn");
const box = document.getElementById("box");

// Create a simple browser-generated beep sound so it never fails to load
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playBeep() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.value = 440; // Pitch of the sound
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.3); // Plays for 0.3 seconds
}

playBtn.addEventListener("click", () => {
  playBeep();
  box.classList.add("active");
});

box.addEventListener("click", () => {
  playBeep();
  box.classList.toggle("active");
});

// the following lines were adapted from Garrits code https://codepen.io/pixelkind/pen/BavRRjz retrieved 25-09-25
let synth;

window.addEventListener("load", () => {
  synth = new Tone.MonoSynth().toDestination();
});

window.addEventListener("keydown", () => {
  synth.triggerAttackRelease("A3", "4n");
  //synth.triggerAttackRelease("B3", "4n");
});

window.addEventListener("click", () => {
  Tone.start();
});

/*const sineButton = document.getElementById("sine");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

const attackInput = document.getElementById("attack");
const decayInput = document.getElementById("decay");
const sustainInput = document.getElementById("sustain");
const releaseInput = document.getElementById("release");*/

//const buttonA = document.getElementById("buttonA");
//const buttonB = document.getElementById("buttonB");

/*sineButton.addEventListener("click", () => {
  synth.oscillator.type = "sine";
  selectedElement.innerText = "Selected: Sine";
});

attackInput.addEventListener("change", () => {
  synth.envelope.attack = attackInput.value;
});

decayInput.addEventListener("change", () => {
  synth.envelope.decay = decayInput.value;
});

sustainInput.addEventListener("change", () => {
  synth.envelope.sustain = sustainInput.value;
});

releaseInput.addEventListener("change", () => {
  synth.envelope.release = releaseInput.value;
});*/

/*buttonA.addEventListener("click", () => {
  synth.triggerAttackRelease("A3", "4n");
});

buttonB.addEventListener("click", () => {
  synth.triggerAttackRelease("B3", "4n");
});*/

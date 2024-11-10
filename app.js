// constants
const synth = window.SpeechSynthesis;
const text = document.getElementById("textInput");
const speed = document.getElementById("rate");
const pitch = document.getElementById("pitch");

function OnClick() {
    console.log(text.value);
    console.log(pitch.value);
    console.log(speed.value);
}
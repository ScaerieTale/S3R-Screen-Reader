// import web speech synthesis API as synth
const synth = window.speechSynthesis;

// get DOM elements
const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("textarea");
const voiceSelect = document.querySelector("select");
const pitch = document.getElementById("pitch");
const pitchValue = document.getElementById("pitch-value");
const rate = document.getElementById("rate");
const rateValue = document.getElementById("rate-value");

// set up voice selection
let voices = [];

function setVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    // Mark the default voice
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    // set voice details in list
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

setVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = setVoiceList;
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  // set pitch and speed
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
}
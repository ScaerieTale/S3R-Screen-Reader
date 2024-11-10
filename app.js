// Initialize voice API
const synth = window.speechSynthesis;

// DOM values as vars
const inputForm = document.querySelector("form");
const text = document.getElementById("textInput");
const speechRate = document.getElementById("rate");
const rateValue = document.getElementById("rate-value");
const pitch = document.getElementById("pitch");
const pitchValue = document.getElementById("pitch-value");
const voiceSelect = document.getElementById("voices");

// voice select setup
let voices = [];
function populateVoiceList() {
    voices = synth.getVoices();
  
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
  
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }




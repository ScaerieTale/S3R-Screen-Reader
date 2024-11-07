function Speak() {
    const input = new SpeechSynthesisUtterance(document.getElementById("textInput").value);
    speechSynthesis.speak(input);
}
/* TODO:
    Add voice options
    Add voice speed
    Add voice pitch */
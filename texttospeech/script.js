document.querySelector("button").addEventListener("click",() => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector("textarea").value;
    let language = document.querySelector("select").value;               
    speech.lang = language;
    window.speechSynthesis.speak(speech);
});

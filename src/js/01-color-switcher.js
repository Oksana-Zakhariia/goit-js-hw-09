const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
        // startBtn.disabled = false;
        // stopBtn.disabled = true; 
        startBtn.setAttribute('disabled', 'true');
        stopBtn.removeAttribute('disabled');
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    // stopBtn.disabled = false;
    // startBtn.disabled = true
    stopBtn.setAttribute('disabled', 'true');
    startBtn.removeAttribute('disabled');

});
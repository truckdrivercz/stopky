const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTimestamp = 0;
let elapseTime = 0;
let timeInterval;

stopButtonEl.disabled = true;
resetButtonEl.disabled = true;

const startTimer = () => {
    startTimestamp = Date.now() - elapseTime;

    timeInterval = setInterval(() => {
        elapseTime = Date.now() - startTimestamp;
        timerEl.textContent = formatTime(elapseTime);
    }, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
    resetButtonEl.disabled = false;
}

const formatTime = (elapseTime) => {
    const milliseconds = Math.floor((elapseTime % 1000) / 10);
    const seconds = Math.floor((elapseTime / 1000) % 60);
    const minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapseTime / (1000 * 60 * 60));

    return (
        (hours > 9 ? hours : "0" + hours) + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}

const stopTimer = () => {
    clearInterval(timeInterval);

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

const resetTimer = () => {
    clearInterval(timeInterval);

    elapseTime = 0;
    timerEl.textContent = "00:00:00:00";

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
    resetButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
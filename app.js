let stopwatchTime = 0, stopwatchInterval, timerTime = 300, timerInterval;
let isStopwatchRunning = false, isTimerRunning = false;

function switchMode(mode) {
    document.getElementById('stopwatch').classList.toggle('hidden', mode !== 'stopwatch');
    document.getElementById('timer').classList.toggle('hidden', mode !== 'timer');
    document.getElementById('stopwatchBtn').classList.toggle('active', mode === 'stopwatch');
    document.getElementById('timerBtn').classList.toggle('active', mode === 'timer');
}

function startStopwatch() {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime += 0.01;
            document.getElementById('stopwatchDisplay').innerText = stopwatchTime.toFixed(2);
        }, 10);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
}

function resetStopwatch() {
    pauseStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').innerText = "0.00";
}

function adjustTimer(seconds) {
    timerTime += seconds;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    document.getElementById('timerDisplay').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isTimerRunning && timerTime > 0) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

function resetTimer() {
    pauseTimer();
    timerTime = 300;
    updateTimerDisplay();
}
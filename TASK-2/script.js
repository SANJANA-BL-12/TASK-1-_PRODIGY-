// script.js
let startTime, updatedTime, difference, tInterval;
let running = false;
let laps = [];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', addLap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000 / 60);
        running = true;
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    laps = [];
    updateLaps();
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function addLap() {
    if (running) {
        laps.push(display.textContent);
        updateLaps();
    }
}

function updateLaps() {
    lapsList.innerHTML = '';
    laps.forEach((lap, index) => {
        const li = document.createElement('li');
        li.textContent = `Lap ${index + 1}: ${lap}`;
        lapsList.appendChild(li);
    });
}

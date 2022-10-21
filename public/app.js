var msec = 0;
var sec = 0;
var min = 0;
var interval;

var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var milliSeconds = document.getElementById('msec');

function timer() {
    msec++;
    milliSeconds.innerHTML = msec;
    if (msec > 100) {
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    } else if (sec > 60) {
        min++;
        sec = 0;
        minutes.innerHTML = min;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById('start').disabled = true;
}

function pause() {
    clearInterval(interval)
    document.getElementById('start').disabled = false;

}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    milliSeconds.innerHTML = msec;
    pause();
}
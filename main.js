let time = document.getElementById('time');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let n = 0;

function startTime() {
    intervalID = setInterval(output, 10);
}

function output() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    let ms = ("00" + Math.floor(n % 100)).slice(-2);
    let s = ("00" + Math.floor((n / 100) % (60))).slice(-2);
    let m = ("00" + Math.floor((n / (60 * 100)) % (60))).slice(-2);
    let h = ("00" + Math.floor(n / (60 * 60 * 100))).slice(-2);
    n++;
    time.innerHTML = h + ':' + m + ':' + s + '.' + ms ;
}

function stopTime() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
    clearInterval(intervalID);
}

function resetTime() {
    start.disabled = false;
    n = 0;
    time.innerHTML = "00:00:00.00";
}

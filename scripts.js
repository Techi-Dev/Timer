var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var counter = document.getElementById('timer-counter');

let timer = 0;
let interval;

function startCountDown(){
timer++;
second = timer;
newDates = new Date((second*10000)/1000);
minutes = newDates.getMinutes();
seconds = newDates.getSeconds();
milliseconds = newDates.getMilliseconds();
display = minutes.toString().padStart("2",0)+":"+seconds.toString().padStart("2",0)+":"+(milliseconds/10).toString().padStart("2",0);
counter.innerText = display;

}

function playTimer(){
    clearInterval(interval)
    interval = setInterval(() => {
        startCountDown()
    }, 10);
}
function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    counter.innerText="00:00:00";
    timer = 0;
}

//add eventListener

start.addEventListener("click", playTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);


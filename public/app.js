var disphour = document.getElementById('hour');
var dispmin = document.getElementById('min');
var dispsec = document.getElementById('sec');
var dispmil = document.getElementById('mil');
var hour = 0;
var min = 0;
var sec = 0;
var mil = 0;




function init() {
    disphour.innerHTML = hour;
    dispmin.innerHTML = min;
    dispsec.innerHTML = sec;
    dispmil.innerHTML = mil;
}
init();








var interval;
function timer() {
    mil = mil + 1
    if (mil == 10) {
        mil = 0;
        sec = sec + 1
      if (sec == 60) {
        sec = 0;
        min = min + 1;
      }
      if (min == 60) {
        min = 0;
        hour = hour + 1;
      }
    }
    init();
}




function startTimer() {
interval = setInterval(timer, 100)
}




function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    hour = 0;
     min = 0;
     sec = 0;
     mil = 0;
     init()
}


// setTimeout()






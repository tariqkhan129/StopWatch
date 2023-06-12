let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
 
let hour = 0;
let minute = 0;
let second = 0;
 
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        second++;

        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrValue = hour;
        let minValue = minute;
        let secValue = second;
      
        if (hour < 10) {
            hrValue = "0" + hrValue;
        }
 
        if (minute < 10) {
            minValue = "0" + minValue;
        }
 
        if (second < 10) {
            secValue = "0" + secValue;
        }
 
        document.getElementById('hr').innerHTML = hrValue;
        document.getElementById('min').innerHTML = minValue;
        document.getElementById('sec').innerHTML = secValue;
        // setTimeout(stopWatch, 1000);
        setTimeout(function(){
            stopWatch();
        } ,1000);
    }
}
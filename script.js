
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
  
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
  
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
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
  
function stopWatch() {
    if (timer) {
        count++;
  
        if (count == 100) {
            second++;
            count = 0;
        }
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
  
        let hr_time= hour;
        let min_time= minute;
        let sec_time = second;
        let counter= count;
  
        if (hour < 10) {
            hr_time="0" + hr_time;
        }
  
        if (minute < 10) {
            min_time= "0" + min_time;
        }
  
        if (second < 10) {
            sec_time  = "0" + sec_time ;
        }
  
        if (count < 10) {
            counter= "0" + counter;
        }
  
        document.getElementById('hr').innerHTML = hr_time;
        document.getElementById('min').innerHTML =min_time;
        document.getElementById('sec').innerHTML =  sec_time ;
        document.getElementById('count').innerHTML = counter;
        setTimeout(stopWatch, 10);
    }
}
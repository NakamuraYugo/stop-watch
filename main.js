const timeCount = document.querySelector(".timeCount");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");


var startTime;

var elapsedTime = 0;

var timerId;


var timeToadd = 0;

function updateTimeText() {
  
  var m = Math.floor(elapsedTime / 60000);

  var s = Math.floor((elapsedTime % 60000) / 1000);

  var ms = elapsedTime % 1000;

  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  ms = ("00" + ms).slice(-3);

  timeCount.textContent = m + ":" + s + ":" + ms;
}


function countUp() {
  
  timerId = setTimeout(function () {
    
    elapsedTime = Date.now() - startTime + timeToadd;
    updateTimeText();
    
    countUp();
  }, 10);
}

function startTimer() {
  startTime = Date.now();
  countUp();
  
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
}

function stopTimer() {
  
  clearInterval(timerId);
  
  timeToadd += Date.now() - startTime;
  
  stopBtn.setAttribute("disabled", true);
  
  startBtn.removeAttribute("disabled");
}

function resetTimer() {
  
  clearInterval(timerId);

  elapsedTime = 0;
  
  timeToadd = 0;
  
  updateTimeText();
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
  resetBtn.setAttribute("disabled", true);
}
JavaScript

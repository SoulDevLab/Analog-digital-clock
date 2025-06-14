const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const hourDots = document.getElementById("hourDots");
const minuteDots = document.getElementById("minuteDots");
const timeDisplay = document.getElementById("timeDisplay");
const dateDisplay = document.getElementById("dateDisplay");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


for (let i = 1; i <= 12; i++) {
  let rotation = i * 30;
  hourDots.innerHTML += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>';
}

for (let i = 1; i <= 60; i++) {
  let rotation = i * 6;
  let majorClass = i % 5 === 0 ? ' major' : '';
  minuteDots.innerHTML += '<div class="dot' + majorClass + '" style="transform: rotate(' + rotation + 'deg)"></div>';
}

function updateClock() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  const ampm = hh >= 12 ? "PM" : "AM";

  hh = hh % 12 || 12; // 12-hour format

  hour.style.transform = 'rotate(' + (hh * 30 + mm / 2) + 'deg)';
  min.style.transform = 'rotate(' + (mm * 6) + 'deg)';
  sec.style.transform = 'rotate(' + (ss * 6) + 'deg)';

var hourD = hourDots.querySelectorAll(".dot");
for (var i = 0; i < hourD.length; i++) {
  if (i === hh - 1) {
    hourD[i].classList.add("active");
  } else {
    hourD[i].classList.remove("active");
  }
}

var minDot = minuteDots.querySelectorAll(".dot");
for (var i = 0; i < minDot.length; i++) {
  if (i === mm - 1) {
    minDot[i].classList.add("active");
    minDot[i].classList.remove("active");
  }
}


  timeDisplay.innerHTML = 
    (hh < 10 ? '0' + hh : hh) + ':' +
    (mm < 10 ? '0' + mm : mm) + ':' +
    (ss < 10 ? '0' + ss : ss) +
    ' <b>' + ampm + '</b>';
}
function updateDate() {
  if (!dateDisplay) return;
  const date = new Date();
  dateDisplay.innerHTML = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

setInterval(updateClock, 1000);
updateClock();

setInterval(updateDate, 60000);
updateDate();

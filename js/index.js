// linkup with blogs page
document.getElementById("goToBlogsPage").addEventListener("click", function () {
  window.location.href = "blogs.html";
});
// linkup blogs to main page
function backToHomePageButton() {
  window.location.href = "index.html";
}

// time with seconds function
function getTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// check all button disable or not
function checkButtonsDisabled() {
  const buttons = document.querySelectorAll(".completed-btn");
  let allDisabled = true;

  for (let i = 0; i < buttons.length; i++) {
    if (!buttons[i].disabled) {
      allDisabled = false;
      break;
    }
  }
  if (allDisabled) {
    alert("Congrats!!! You have completed all the current task");
  }
}

// btn click code

// get inner text value which return a number
function getInnerTextValue(id) {
  const value = document.getElementById(id).innerText;
  const newValue = parseInt(value);
  return newValue;
}
// get id and set the value
function setInnerTextValue(id, value) {
  document.getElementById(id).innerText = "0" + value;
}
// set nab bar value
function setNavbarTextValue(id, value) {
  document.getElementById(id).innerText = value;
}

const cards = document.querySelectorAll(".card");

const btn = document.querySelectorAll(".completed-btn");
const heading = document.getElementsByClassName(
  "text-2xl font-medium font-color font-color"
);

for (let j = 0; j < btn.length; j++) {
  const newbutton = btn[j];

  newbutton.addEventListener("click", function () {
    let nabBarNumber = getInnerTextValue("nabBar-Number");
    let assaingedTaskValue = getInnerTextValue("assaignned-task-number");
    let msg = document.getElementById("print-msg");

    alert("Board Updated Sucessfully");
    const setValue = assaingedTaskValue - 1;
    setInnerTextValue("assaignned-task-number", setValue);
    const setNavbarValue = nabBarNumber + 1;
    setNavbarTextValue("nabBar-Number", setNavbarValue);

    newbutton.disabled = true;

    const card = newbutton.closest(".card");
    const cardHeading = card.querySelector("h1").innerText;
    const currentTime = getTime();

    const div = document.createElement("div");
    div.classList.add("background-color");
    div.innerHTML = `
    <div class="p-4 mb-2">
    <h2>
    You have Complete The Task
    ${cardHeading}
    at   ${currentTime}
    </h2>
    </div>`;
    msg.appendChild(div);

    checkButtonsDisabled();
  });
}
// clear notification messages
document.getElementById("clear-btn").addEventListener("click", function () {
  const notification = document.getElementById("print-msg");
  notification.innerText = " ";
});

// date related functions

// Create arrays for day names and month names
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const nabDate = document.getElementById("showDate");
const dayName = document.getElementById("dayName");
const date = new Date(2025, 2, 1);
const dayOfWeek = days[date.getDay()];
const month = months[date.getMonth()];
const dayOfMonth = date.getDate();
const year = date.getFullYear();
nabDate.innerText = `${month} ${dayOfMonth} ${year}`;
dayName.innerText = `${dayOfWeek} , `;


// random colour when ever button clicked 

const button = document.getElementById("randomColour");
function changeBackground() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // using inline variable
  document.body.style.background =
    "rgb(" + red + ", " + green + ", " + blue + ")";

}
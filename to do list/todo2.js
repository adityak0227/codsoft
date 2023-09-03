const currtask = document.getElementById("task1");
const addbutton = document.getElementById("add");
const tasklist = document.getElementById("goalslist");

addbutton.addEventListener('click', addtask);

function addtask(){
    if(currtask.value===""){
        // alert("Write some tasks");
    }
    else{
        let newtask = document.createElement('li');
        newtask.innerHTML = currtask.value;
        tasklist.appendChild(newtask);
        let span = document.createElement('span');
        span.innerHTML = "x";
        newtask.appendChild(span);
    }
    currtask.value = "";
}
tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", tasklist.innerHTML);
}
function displaydata(){
    tasklist.innerHTML = localStorage.getItem("data");
}
displaydata();

//--------------------DATE AND TIME FEATURES--------------

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynumber", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
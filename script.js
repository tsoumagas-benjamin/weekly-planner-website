// Use DOM manipulation to get the save and clear planner buttons on the main page
const savePlan = document.getElementById("save-plan");
const weeklyReset = document.getElementById('weekly-reset');

// Use DOM manipulation to get the save and clear buttons for each day on the main page
const sundayButton = document.getElementById("sunday-button");
const sundayClear = document.getElementById("clear-sunday");
const mondayButton = document.getElementById("monday-button");
const mondayClear = document.getElementById("clear-monday");
const tuesdayButton = document.getElementById("tuesday-button");
const tuesdayClear = document.getElementById("clear-tuesday");
const wednesdayButton = document.getElementById("wednesday-button");
const wednesdayClear = document.getElementById("clear-wednesday");
const thursdayButton = document.getElementById("thursday-button");
const thursdayClear = document.getElementById("clear-thursday");
const fridayButton = document.getElementById("friday-button");
const fridayClear = document.getElementById("clear-friday");
const saturdayButton = document.getElementById("saturday-button");
const saturdayClear = document.getElementById("clear-saturday");

// Use DOM manipulation to access the planner blocks for each day on the main page
const sundayPlanner = document.getElementById("sunday-planner");
const mondayPlanner = document.getElementById("monday-planner");
const tuesdayPlanner = document.getElementById("tuesday-planner");
const wednesdayPlanner = document.getElementById("wednesday-planner");
const thursdayPlanner = document.getElementById("thursday-planner");
const fridayPlanner = document.getElementById("friday-planner");
const saturdayPlanner = document.getElementById("saturday-planner");

// Get the current weekday and hour to highlight it
function timestamp() {
    let date = new Date();
    let day = date.getDay();    //0-6 Sunday-Saturday
    let hour = date.getHours(); //0-23 12am-11pm
    // Get the div ID for the current day and hour
    let blockID = "";
    switch (day) {
        case 0:
            blockID = "sunday-";
            break;
        case 1: 
            blockID = "monday-";
            break;
        case 2: 
            blockID = "tuesday-";
            break;
        case 3: 
            blockID = "wednesday-";
            break;
        case 4: 
            blockID = "thursday-";
            break;
        case 5: 
            blockID = "friday-";
            break;
        case 6: 
            blockID = "saturday-";
            break;
    }
    blockID += hour;
    let div = document.getElementById(blockID);
    // Remove highlighting on any previous highlighted div if it exists
    if(localStorage.getItem("currentDiv")) {
        let currentDiv = localStorage.getItem("currentDiv")
        document.getElementById(currentDiv).style.backgroundColor = '#E16FFD';
    }
    // Select div for the current day and hour and highlight it
    localStorage.setItem("currentDiv", div);
    document.getElementById(div).style.backgroundColor = '#FFDA47';
}

// Function to query the day and hour every 15 minutes
function hourCheck() {
    setInterval(timestamp, 1000 * 60 * 15);
}

// Prompt user for event details when clicking the planner
sundayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "sunday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

mondayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "monday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

tuesdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "tuesday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

wednesdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "wednesday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

thursdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "thursday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

fridayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "friday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

saturdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "saturday-planner"){
        let event = prompt("What event would you like to add here?");
        div.target.innerHTML = event;
    }
});

// Function to remove all events from planner
function resetWeek() {
    const hourBlocks = document.getElementsByClassName('hour-block');
    for (const hourBlock of hourBlocks) {
        hourBlock.innerHTML = "";
    }
}

weeklyReset.addEventListener('click', (button) =>{
    resetWeek();
});

hourCheck();
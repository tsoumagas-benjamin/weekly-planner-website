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
    // Remove highlighting on any previous highlighted div if it exists
    if(localStorage.getItem("currentDiv") != null) {
        let currentDiv = localStorage.getItem("currentDiv");
        document.getElementById(currentDiv).style.backgroundColor = '#E16FFD';
    }
    // Select div for the current day and hour and highlight it
    localStorage.setItem("currentDiv", blockID);
    document.getElementById(blockID).style.backgroundColor = '#FFDA47';
}

// Function to query the day and hour every minute
function hourCheck() {
    setInterval(timestamp, 1000 * 60);
}

// Prompt user for event details when clicking the planner
sundayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "sunday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
    }
});

mondayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "monday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
    }
});

tuesdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "tuesday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
    }
});

wednesdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "wednesday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
    }
});

thursdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "thursday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
    }
});

fridayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "friday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
    }
});

saturdayPlanner.addEventListener('click', (div) => {
    if(div.target.id != "saturday-planner"){
        if(div.target.innerHTML === null || div.target.innerHTML === "" || div.target.innerHTML === "Free Time") {
            let event = prompt("What event would you like to add here?");
            div.target.innerHTML = event;
        } else {
            let deletion = prompt(`Are you sure you want to delete ${div.target.innerHTML}?`, "Yes");
            if (deletion === "Yes" || deletion === "yes" || deletion === "y"){
                div.target.innerHTML = null;
            }
        }
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

// Function to remove all events from Sunday
function clearSunday() {
    const sundayBlocks = sundayPlanner.querySelectorAll('[id^="sunday"],[id$="[0-9]"]');
    for (const sundayBlock of sundayBlocks) {
        sundayBlock.innerHTML = "";
    }
    localStorage.removeItem('sundayPlan');
}

const sundayClearButton = document.getElementById("clear-sunday");

sundayClear.addEventListener('click', (button) =>{
    clearSunday();
});

// Function to remove all events from Monday
function clearMonday() {
    const mondayBlocks = mondayPlanner.querySelectorAll('[id^="monday"],[id$="[0-9]"]');
    for (const mondayBlock of mondayBlocks) {
        mondayBlock.innerText = "";
    }
}

mondayClear.addEventListener('click', (button) =>{
    clearMonday();
});

// Function to remove all events from Tuesday
function clearTuesday() {
    const tuesdayBlocks = tuesdayPlanner.querySelectorAll('[id^="tuesday"],[id$="[0-9]"]');
    for (const tuesdayBlock of tuesdayBlocks) {
        tuesdayBlock.innerHTML = "";
    }
}

tuesdayClear.addEventListener('click', (button) =>{
    clearTuesday();
});

// Function to remove all events from Wednesday
function clearWednesday() {
    const wednesdayBlocks = wednesdayPlanner.querySelectorAll('[id^="wednesday"],[id$="[0-9]"]');
    for (const wednesdayBlock of wednesdayBlocks) {
        wednesdayBlock.innerHTML = "";
    }
}

wednesdayClear.addEventListener('click', (button) =>{
    clearWednesday();
});

// Function to remove all events from Thursday
function clearThursday() {
    const thursdayBlocks = thursdayPlanner.querySelectorAll('[id^="thursday"],[id$="[0-9]"]');
    for (const thursdayBlock of thursdayBlocks) {
        thursdayBlock.innerHTML = "";
    }
}

thursdayClear.addEventListener('click', (button) =>{
    clearThursday();
});

// Function to remove all events from Friday
function clearFriday() {
    const fridayBlocks = fridayPlanner.querySelectorAll('[id^="friday"],[id$="[0-9]"]');
    for (const fridayBlock of fridayBlocks) {
        fridayBlock.innerHTML = "";
    }
}

fridayClear.addEventListener('click', (button) =>{
    clearFriday();
});

// Function to remove all events from Saturday
function clearSaturday() {
    const saturdayBlocks = saturdayPlanner.querySelectorAll('[id^="saturday"],[id$="[0-9]"]');
    for (const saturdayBlock of saturdayBlocks) {
        saturdayBlock.innerHTML = "";
    }
}

saturdayClear.addEventListener('click', (button) =>{
    clearSaturday();
});

// Functions to allow users to visit detailed day views on button press
function seeSunday() {
    window.location.href = "sunday.html";
}

function seeMonday() {
    window.location.href = "monday.html";
}

function seeTuesday() {
    window.location.href = "tuesday.html";
}

function seeWednesday() {
    window.location.href = "wednesday.html";
}

function seeThursday() {
    window.location.href = "thursday.html";
}

function seeFriday() {
    window.location.href = "friday.html";
}

function seeSaturday() {
    window.location.href = "saturday.html";
}

document.addEventListener("DOMContentLoaded", hourCheck);

// Function to allow return to weekly calendar from individual days
function seeWeeklyPlanner() {
    window.location.href = "index.html";
}

// Function to save plan to localStorage
function saveSundayPlan() {
    let sundayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`sunday-${i}`);
        sundayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('sundayPlan', JSON.stringify(sundayPlan));
}

// Function to load plan from localStorage
function loadSundayPlan() {
    const savedSundayPlan = localStorage.getItem('sundayPlan');
    if (savedSundayPlan) {
        const sundayPlan = JSON.parse(savedSundayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`sunday-${i}`);
            block.innerHTML = sundayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Function to save plan to localStorage
function saveMondayPlan() {
    let mondayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`monday-${i}`);
        mondayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('mondayPlan', JSON.stringify(mondayPlan));
}

// Function to load plan from localStorage
function loadMondayPlan() {
    const savedMondayPlan = localStorage.getItem('mondayPlan');
    if (savedMondayPlan) {
        const mondayPlan = JSON.parse(savedMondayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`monday-${i}`);
            block.innerHTML = mondayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Function to save plan to localStorage
function saveTuesdayPlan() {
    let tuesdayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`tuesday-${i}`);
        tuesdayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('tuesdayPlan', JSON.stringify(tuesdayPlan));
}

// Function to load plan from localStorage
function loadTuesdayPlan() {
    const savedTuesdayPlan = localStorage.getItem('tuesdayPlan');
    if (savedTuesdayPlan) {
        const tuesdayPlan = JSON.parse(savedTuesdayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`tuesday-${i}`);
            block.innerHTML = tuesdayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Function to save plan to localStorage
function saveWednesdayPlan() {
    let wednesdayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`wednesday-${i}`);
        wednesdayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('wednesdayPlan', JSON.stringify(wednesdayPlan));
}

// Function to load plan from localStorage
function loadWednesdayPlan() {
    const savedWednesdayPlan = localStorage.getItem('wednesdayPlan');
    if (savedWednesdayPlan) {
        const wednesdayPlan = JSON.parse(savedWednesdayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`wednesday-${i}`);
            block.innerHTML = wednesdayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Function to save plan to localStorage
function saveThursdayPlan() {
    let thursdayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`thursday-${i}`);
        thursdayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('thursdayPlan', JSON.stringify(thursdayPlan));
}

// Function to load plan from localStorage
function loadThursdayPlan() {
    const savedThursdayPlan = localStorage.getItem('thursdayPlan');
    if (savedThursdayPlan) {
        const thursdayPlan = JSON.parse(savedThursdayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`thursday-${i}`);
            block.innerHTML = thursdayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Function to save plan to localStorage
function saveFridayPlan() {
    let fridayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`friday-${i}`);
        fridayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('fridayPlan', JSON.stringify(fridayPlan));
}

// Function to load plan from localStorage
function loadFridayPlan() {
    const savedFridayPlan = localStorage.getItem('fridayPlan');
    if (savedFridayPlan) {
        const fridayPlan = JSON.parse(savedFridayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`friday-${i}`);
            block.innerHTML = fridayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Function to save plan to localStorage
function saveSaturdayPlan() {
    let saturdayPlan = {};

    for (let i = 0; i < 24; i++) {
        const block = document.getElementById(`saturday-${i}`);
        saturdayPlan[`hour-${i}`] = block.innerHTML || '';
    }
    localStorage.setItem('saturdayPlan', JSON.stringify(saturdayPlan));
}

// Function to load plan from localStorage
function loadSaturdayPlan() {
    const savedSaturdayPlan = localStorage.getItem('saturdayPlan');
    if (savedSaturdayPlan) {
        const saturdayPlan = JSON.parse(savedSaturdayPlan);

        for (let i = 0; i < 24; i++) {
            const block = document.getElementById(`saturday-${i}`);
            block.innerHTML = saturdayPlan[`hour-${i}`] || 'Free Time';
        }
    }
}

// Event listener for Save Plan button
const savePlanButton = document.getElementById("save-plan");

savePlanButton.addEventListener('click', () => {
    saveSundayPlan();
});

// Loads plan from localStorage when page loads
document.addEventListener('DOMContentLoaded', loadSundayPlan);
  
// Function to display the sign-up form
function displaySignup() {
    document.getElementById("signup").style.display = 'none';
    document.getElementById("signupForm").style.display = 'block';
}
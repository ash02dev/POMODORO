// variables

let workTitle = document.getElementById('work');
//This line declares a variable called workTitle and assigns 
//it the reference to an HTML element with the id attribute 
//"work". It is used to store a reference to an element in 
//the HTML code, which seems to represent the "work" part of 
//the timer.
let breakTitle = document.getElementById('break');
//This line declares a variable called breakTitle and assigns 
//it the reference to an HTML element with the id attribute 
//"break". It is used to store a reference to an element in 
//the HTML code, which seems to represent the "break" part 
//of the timer.


let workTime = 20;
//This line declares a variable called workTime and assigns 
//it the value 20. This variable is used to store the work 
//time in minutes, and it is initialized with a default 
//value of 20.
let breakTime = 5;
//This line declares a variable called breakTime and assigns 
//it the value 5. This variable is used to store the break 
//time in minutes, and it is initialized with a default 
//value of 5.
let seconds = "00";
//This line declares a variable called seconds and assigns 
//it the value "00". This variable is used to store the 
//seconds part of the timer display and is initialized to "00".

// display
window.onload = () => {
//This is an event handler that runs when the window 
//(web page) finishes loading. It sets the initial display 
//of the timer by updating the minutes and seconds on the page. 
//Additionally, it adds the class "active" to the workTitle 
//element, making it visually active. The purpose of this is 
//not entirely clear without the corresponding HTML code, 
//but it seems to indicate which part of the timer 
//(work or break) is currently active.
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');
} 

// script
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    // change the time
    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    breakCount = 0;
//This function is triggered when the "Start" button is 
//clicked. It starts the timer, hides the "Start" button, 
//and shows the "Reset" button. It sets the seconds variable 
//to 59 and initializes variables for work and break minutes.

    // countdown
    let timerFunction = () => {
    //This line declares a function called timerFunction using
    //an arrow function syntax. It is meant to run every 
    //second and handle the countdown logic for the timer 
    //display. The function starts by updating the minutes and
    //seconds display on the page based on the values of 
    //workMinutes and seconds.

        // change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        //This line sets the content of the HTML element with the 
        //id attribute "minutes" to the value of the variable 
        //workMinutes. This is how the minutes part of the timer 
        //display is updated on the web page.
        document.getElementById('seconds').innerHTML = seconds;
        //This line sets the content of the HTML element with the 
        //id attribute "seconds" to the value of the variable 
        //seconds. This is how the seconds part of the timer 
        //display is updated on the web page.

        // start
        seconds = seconds - 1;
        //This line sets the content of the HTML element with the 
        //id attribute "seconds" to the value of the variable s
        //econds. This is how the seconds part of the 
        //timer display is updated on the web page.
        if(seconds === 0) {
        //This condition checks if the seconds variable has 
        //reached 0. If it does, it means a minute has passed in 
        //the countdown, and additional logic is executed to 
        //update the minutes and switch between work and break time.
            workMinutes = workMinutes -1;
            //This line decrements the value of the workMinutes 
            //variable by 1 when the seconds reach 0, representing 
            //one minute of work time passing.
            if(workMinutes === -1){
            //This condition checks if the workMinutes variable has 
            //reached -1. If it does, it means that the work time 
            //has finished, and additional logic is executed to 
            //switch to the break time or continue working based on 
            //the value of breakCount.
                if(breakCount % 2 === 0){
                //This condition checks if the breakCount variable is 
                //even. If it is, it means that it's time for a break. 
                //The break time is updated by setting the workMinutes 
                //variable to the value of breakTime, and the breakCount 
                //variable is incremented to prepare for the next break.
                   
                    // start break
                    workMinutes = breakTime;
                    breakCount++;
                    // change the panel
                    workTitle.classList.remove('active');
                    //This line removes the "active" class from the HTML 
                    //element with the class attribute matching workTitle. 
                    //This class change is part of the user interface update, 
                    //presumably indicating that the break time is now active.
                    breakTitle.classList.add('active');
                    //This line adds the "active" class to the HTML element 
                    //with the class attribute matching breakTitle. This class
                    //change is part of the user interface update, presumably 
                    //indicating that the break time is now active.
                } else {
                    // continue work
                    workMinutes = workTime;
                    //If the breakCount is odd, it means that the break time 
                    //has finished, and it's time to continue working. This 
                    //line sets the workMinutes variable back to the original 
                    //workTime value.
                    breakCount++;
                    // change the panel
                    breakTitle.classList.remove('active');
                    //This line removes the "active" class from the HTML 
                    //element with the class attribute matching breakTitle. 
                    //This class change is part of the user interface update, 
                    //presumably indicating that the work time is now active 
                    //again.
                    workTitle.classList.add('active');
                    //This line adds the "active" class to the HTML element 
                    //with the class attribute matching workTitle. This class 
                    //change is part of the user interface update, presumably 
                    //indicating that the work time is now active again.
                }
            }
            seconds = 59;
            //After the timer logic is handled, the seconds variable 
            //is reset to 59, representing the start of a new minute.
        }
    //This is a function that runs every second to update the 
    //timer display and handle the countdown logic. 
    //It decreases the seconds value and updates the minutes 
    //value accordingly. It also switches between work and 
    //break time based on the breakCount variable, which is 
    //not shown in the provided code snippet.
    }

// MODAL FUNCTIONS
    const modal = document.getElementById('custom-timer');
    //const modal = document.getElementById('custom-timer');: This line declares a constant variable called modal and assigns it the value of the HTML element with the id attribute "custom-timer". It is used to reference the settings modal in the HTML code.
    const settingsButton = document.getElementById('settings');
    //settingsButton.addEventListener('click', openModal);: This line adds a click event listener to the "Settings" button. When the button is clicked, it calls the openModal() function to display the settings modal.

    settingsButton.addEventListener('click', openModal);
    
    function openModal() {
        modal.style.display = 'block';
    }
    //function openModal() { ... }: This function sets the display property of the modal element to "block", making the modal visible when called.
    
    function closeModal() {
        modal.style.display = 'none';
    }
    //function closeModal() { ... }: This function sets the display property of the modal element to "none", hiding the modal when called.

    function startTimer(time) {
    console.log('Starting timer with', time, 'minutes');
    //function startTimer(time) { ... }: This function is meant to start the timer with a specified time (in minutes). It logs the selected time to the console and closes the modal. However, it is not currently used in the code.
    closeModal();
    }
    
    function saveSettings() {
        const workTime = parseInt(document.getElementById('workTime').value, 10);
        const shortBreakTime = parseInt(document.getElementById('shortBreakTime').value, 10);
        const longBreakTime = parseInt(document.getElementById('longBreakTime').value, 10);
    //function saveSettings() { ... }: This function is meant to save the user's inputted settings for work time, short break time, and long break time. It logs the settings to the console and closes the modal.

        console.log('Work Time:', workTime, 'minutes');
        console.log('Short Break Time:', shortBreakTime, 'minutes');
        console.log('Long Break Time:', longBreakTime, 'minutes');
    
        closeModal();
    }

// start countdown
setInterval(timerFunction, 1000); // 1000 = 1s
//This line sets an interval that calls the timerFunction 
//every 1000 milliseconds (1 second). This makes the countdown
//function run continuously to update the timer display.
}
//setInterval(timerFunction, 1000);: This line sets an interval 
//that calls the timerFunction every 1000 milliseconds 
//(1 second). This makes the countdown function run 
//continuously to update the timer display.

var number_of_star = 250;

var random_number = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createStars = function(){
  var star_rotation = 'move_right;';
  for(var i=0; i<number_of_star; i++){
    rot= (star_rotation=='move_right;'?'move_left;':'move_right;');
    var star_top = random_number(0,document.documentElement.clientHeight);
    var star_left = random_number(0,document.documentElement.clientWidth);
    var star_radius = random_number(0,4);
    var  star_duration= random_number(6,16);

    document.body.innerHTML += "<div class='star' style='top: "+star_top+"px; left: "+star_left+"px; width: "+star_radius+"px; height: "+star_radius+"px; "+
    "animation-name:"+star_rotation+"; animation-duration: "+star_duration+"s;'></div>";
  }
};

createStars();
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
var num1 = 0, num2 = 0;
getRandomNumber();
function getRandomNumber(){
    num1 = Math.ceil(Math.random()*100);
    number1.innerHTML = num1;
    num2 = Math.ceil(Math.random()*100);
    number2.innerHTML = num2;
}

// Iteration 3: Creating variables required to make the game functional
var score = 0;
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var number3 = document.getElementById("number3");
var num3 = 0;
var value;

// Iteration 5: Creating a randomise function to make the game functional
randomise();
function randomise(){
    value = Math.ceil(Math.random() * 5)

    switch (value){
        case 0:
            randomise();

        case 1:
            num3 = num1 + num2;
            break;

        case 2:
            num3 = num1 - num2;
            break;

        case 3:
            num3 = num1 * num2;
            break;

        case 4:
            num3 = (num1/num2).toPrecision(4);
            break;

        case 5:
            num3 = num1%num2;
            break;
    }
    number3.innerHTML = num3;
}

// Iteration 6: Making the Operators (button) functional
plus.addEventListener ("click", () => {
    if (num3 == num1 + num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
        randomise();
    } 
    else {
        window.location.href = "./gameover.html?score=" + score;
    }
});
minus.addEventListener ("click", () => {
    if (num3 == num1 - num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
        randomise();
    } 
    else {
        window.location.href = "./gameover.html?score=" + score;
    }
});
multiply.addEventListener ("click", () => {
    if (num3 == num1 * num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
        randomise();
    } 
    else {
        window.location.href = "./gameover.html?score=" + score;
    }
});
divide.addEventListener ("click", () => {
    if (num3 == num1 / num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
        randomise();
    } 
    else {
        window.location.href = "./gameover.html?score=" + score;
    }
});
modulus.addEventListener ("click", () => {
    if (num3 == num1 % num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
        randomise();
    } 
    else {
        window.location.href = "./gameover.html?score=" + score;
    }
});
// Iteration 7: Making Timer functional
var timer = document.getElementById("timer");
var time = 20;
var timing;

function timerStarting(){
    time = 20;
    timer.innerHTML = time;
    timing = setInterval(function(){
        time--;
        if (time == 0) window.location.href = "./gameover.html";
        timer.innerHTML = time;

    }, 1000);
}
function resetTiming(timertrack){
    clearInterval(timertrack);
    timerStarting();
}
timerStarting(); 
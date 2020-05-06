//Roll Up The Rim Simulator ARYAN BHARDWAJ

//Event Listeners
document.getElementById('simulation').addEventListener('click', Prize);
document.getElementById('simulateFiveTimes').addEventListener('click', fiveTimes);
document.getElementById('grandPrizeWon').addEventListener('click', grandPrizeW);
document.getElementById('500donut').addEventListener('click', until500Donuts);

//Global Variables
let result = document.getElementById('results');
let userInput = document.getElementById('input');
let PlayAgain = 0;
let donut = 0;
let coffee = 0;
let grandPrize = 0;
let total = 0;
let counterPlayAgain = document.getElementById('playAgain');
let counterCoffee = document.getElementById('coffee');
let counterDonut = document.getElementById('donut');
let counterGrandPrize = document.getElementById('grandPrize');
let counterTotal = document.getElementById('total');


//Simulates results
function Prize() {
    let x = Math.random();
    if (userInput.value == 'British Columbia' || userInput.value == 'BC') {
        document.getElementById("para1").innerHTML = ' '
        if (x < 0.7) {
            result.innerHTML = 'Please Play Again.';
            PlayAgain++;
            counterPlayAgain.innerHTML = PlayAgain;
            total++;
            counterTotal.innerHTML = total;
        }else if (x < 0.8) {
            result.innerHTML = 'Free Coffee';
            coffee++;
            counterCoffee.innerHTML = coffee;
            total++;
            counterTotal.innerHTML = total;
        }else if (x < 0.9) {
            result.innerHTML = 'Free Donut';
            donut++;
            counterDonut.innerHTML = donut;
            total++;
            counterTotal.innerHTML = total;
        }else {
            result.innerHTML = 'Grand Prize';
            grandPrize++;
            counterGrandPrize.innerHTML = grandPrize;
            total++;
            counterTotal.innerHTML = total;
        }
    } else if (userInput.value == 'Alberta' || userInput.value == 'AB'){
        document.getElementById("para1").innerHTML = ' '
        if (x < 0.15) {
            result.innerHTML = 'Please Play Again.';
            PlayAgain++;
            counterPlayAgain.innerHTML = PlayAgain;
            total++;
            counterTotal.innerHTML = total;
        }else if (x < 0.55) {
            result.innerHTML = 'Free Coffee';
            coffee++;
            counterCoffee.innerHTML = coffee;
            total++;
            counterTotal.innerHTML = total;
        }else if (x < 0.95) {
            result.innerHTML = 'Free Donut';
            donut++;
            counterDonut.innerHTML = donut;
            total++;
            counterTotal.innerHTML = total;
        }else {
            result.innerHTML = 'Grand Prize';
            grandPrize++;
            counterGrandPrize.innerHTML = grandPrize;
            total++;
            counterTotal.innerHTML = total;
        }
    } else if (userInput.value == 'Saskatchewan' || userInput.value == 'SK') {
        document.getElementById("para1").innerHTML = ' '
        if (x < 0.7) {
            result.innerHTML = 'Please Play Again.';
            PlayAgain++;
            counterPlayAgain.innerHTML = PlayAgain;
            total++;
            counterTotal.innerHTML = total;
        }else if (x < 0.71) {
            result.innerHTML = 'Free Coffee';
            coffee++;
            counterCoffee.innerHTML = coffee;
            total++;
            counterTotal.innerHTML = total;
        }else if (x < 0.72) {
            result.innerHTML = 'Free Donut';
            donut++;
            counterDonut.innerHTML = donut;
            total++;
            counterTotal.innerHTML = total;
        }else {
            result.innerHTML = 'Grand Prize';
            grandPrize++;
            counterGrandPrize.innerHTML = grandPrize;
            total++;
            counterTotal.innerHTML = total;
        }
    } else {
        document.getElementById("para1").innerHTML = 'Not a valid answer'
    }




}
//Simulate results 5 times
function fiveTimes() {
    for (let num = 1; num<=5; num++){
        Prize();
    }
}


//Simulate until the Grand Prize is won
function grandPrizeW() {
    while (grandPrize < 1) {
        Prize();
    }
}



//Simulate until 500 Donuts are won
function until500Donuts() {
    while (donut <500) {
        Prize();
    }
}
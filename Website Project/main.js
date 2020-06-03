
//Event Listeners
document.getElementById("home").addEventListener("click", homePage);
document.getElementById("about").addEventListener("click", aboutPage);
document.getElementById("quiz").addEventListener("click", quizPage);
document.getElementById("mark").addEventListener("click", markQuiz);


//Global Variables
let userInput1 = document.getElementById("Q1")
let userInput2 = document.getElementById("Q2")
let userInput3 = document.getElementById("Q3")
let x = 0





//Home page
function homePage() {
    document.getElementById("head1").innerHTML = "Water!"
    document.getElementById("watergif").innerHTML = '<img src="Images/waterimg1.gif" alt="animated" height="550" width="750">';
    document.getElementById("para").innerHTML = " "
    document.getElementById("para1").innerHTML = "Water is a chemical compound known as H2O and is neccessary for our survival! Click the about page to learn more about it. After learning more, click on the quiz to test your skills!"
    document.getElementById("para2").innerHTML = " "
    document.getElementById("para3").innerHTML = " "
    document.getElementById("para4").innerHTML = " "
    document.getElementById("para5").innerHTML = " "
    document.getElementById("para6").style.display = 'none';
    document.getElementById("para7").innerHTML = " "
    document.getElementById("para8").innerHTML = " "
    document.getElementById("para9").innerHTML = " "
    document.getElementById("para10").innerHTML = " "
    document.getElementById("para11").style.display = 'none';
    document.getElementById("para12").innerHTML = " "
    document.getElementById("para13").innerHTML = " "
    document.getElementById("para14").innerHTML = " "
    document.getElementById("para15").innerHTML = " "
    document.getElementById("para16").style.display = 'none';
    document.getElementById("para17").style.display = 'none';
    document.getElementById("para18").style.display = 'none';
}
//About page
function aboutPage() {
    document.getElementById("head1").innerHTML = "About Water!"
    document.getElementById("para").innerHTML = " "
    document.getElementById("watergif").innerHTML = '<img src="Images/waterimg2.gif" alt="animated" height="550" width="750">'
    document.getElementById("para1").innerHTML = "Water is neccesary for almost all of our bodily functions, because nutrients, and oxygen are transported throughout the body dissolved in water. In addition, water allows the body to absorb vital compounds that help to sustain life. Drinking water is very important because the body loses a lot of water in three major ways, sweating, breathing, and digestion. As a result, scientists suggest that one should drink 8 cups of water everyday. Now that you have learnt more about water do the quiz!"
    document.getElementById("para2").innerHTML = " "
    document.getElementById("para3").innerHTML = " "
    document.getElementById("para4").innerHTML = " "
    document.getElementById("para5").innerHTML = " "
    document.getElementById("para6").style.display = 'none';
    document.getElementById("para7").innerHTML = " "
    document.getElementById("para8").innerHTML = " "
    document.getElementById("para9").innerHTML = " "
    document.getElementById("para10").innerHTML = " "
    document.getElementById("para11").style.display = 'none';
    document.getElementById("para12").innerHTML = " "
    document.getElementById("para13").innerHTML = " "
    document.getElementById("para14").innerHTML = " "
    document.getElementById("para15").innerHTML = " "
    document.getElementById("para16").style.display = 'none';
    document.getElementById("para17").style.display = 'none';
    document.getElementById("para18").style.display = 'none';
}

//Quiz page
function quizPage() {
    document.getElementById("head1").innerHTML = "Quiz!"
    document.getElementById("para").innerHTML = " "
    document.getElementById("watergif").innerHTML = '<img src="Images/waterimg3.gif" alt="animated" height="550" width="750">'
    document.getElementById("para1").innerHTML = "Answer the Questions by typing in the correct Number."
    document.getElementById("para2").innerHTML = "What is the chemical formula for water?"
    document.getElementById("para3").innerHTML = "1. H2O2"
    document.getElementById("para4").innerHTML = "2. HO2"
    document.getElementById("para5").innerHTML = "3. H2O"
    document.getElementById("para6").style.display = 'block';
    document.getElementById("para7").innerHTML = "How Many Cups of Water should you drink in a day?"
    document.getElementById("para8").innerHTML = "1. 8"
    document.getElementById("para9").innerHTML = "2. 9"
    document.getElementById("para10").innerHTML = "3. 10"
    document.getElementById("para11").style.display = 'block';
    document.getElementById("para12").innerHTML = "What are the three main ways your body loses water?"
    document.getElementById("para13").innerHTML = "1. sweating, walking, and digestion "
    document.getElementById("para14").innerHTML = "2. sweating, breathing, and digestion "
    document.getElementById("para15").innerHTML = "3. sweating, reading, and digestion"
    document.getElementById("para16").style.display = 'block';
    document.getElementById("para17").style.display = 'block';
    document.getElementById("para18").style.display = 'block';
}
//Marking the quiz
function markQuiz() {
    if (userInput1.value == 3) {
        x++;
        document.getElementById("para2").style.color = 'green';
    } else {
        document.getElementById("para2").style.color = 'red';
    }
    if (userInput2.value == 1) {
        x++;
        document.getElementById("para7").style.color = 'green';
    } else {
        document.getElementById("para7").style.color = 'red';
    }
    if (userInput3.value == 2) {
        x++;
        document.getElementById("para12").style.color = 'green';
    } else {
        document.getElementById("para12").style.color = 'red';
    }
    if (x > 3) {
        document.getElementById("para18").innerHTML = "Reload the page if you wish to complete this test again."
    }
    document.getElementById("total").innerHTML = x;

}






























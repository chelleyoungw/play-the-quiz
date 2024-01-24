var timerHeader = document.getElementById("time")
var questionContent = document.getElementById("main");
var timeLeft = 5;

function startTimer() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerHeader.textContent = "Time: " + timeLeft;

        if(timeLeft === 0) {
        clearInterval(timerInterval);
        alert("GAME OVER");
        
    }
    },1000);

}

function startQuiz() {
    var startButton = document.createElement("button");
    startButton.textContent = "START";
    document.body.appendChild(startButton);
    
    questionContent.textContent = "Click the start button to begin your quiz.";

    startButton.addEventListener('click', function() {
        startTimer();
        questionContent.innerHTML = " ";
        document.body.removeChild(startButton);
        Q1();
    });
}

function Q1() {
    questionContent.textContent = "Who is your daddy and what does he do?";
}

startQuiz();
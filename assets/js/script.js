var questionContent = document.getElementById("main");

function startQuiz() {
    var startButton = document.createElement("button");
    startButton.textContent = "START";
    document.body.appendChild(startButton);
    questionContent.textContent = "Click the start button to begin your quiz.";
    
}

startQuiz();
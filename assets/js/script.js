var timerHeader = document.getElementById("time")
var questionContent = document.getElementById("main");
var timeLeft = 30;

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
    
    var b1 = document.createElement("button");
    var b2 = document.createElement("button");
    var b3 = document.createElement("button");
    var b4 = document.createElement("button");

    b1.textContent = "Pizza delivery driver";
    b2.textContent = "Helicopter pilot";
    b3.textContent = "Ballroom dancer";
    b4.textContent = "Governor";

    document.body.appendChild(b1);
    document.body.appendChild(b2);
    document.body.appendChild(b3);
    document.body.appendChild(b4);

    b1 === true;
    b2 === false;
    b3 === false;
    b4 === false;

    b2.addEventListener('click', function() {
        if(false); {
            timeLeft = timeLeft - 5;
        }
    })
    b3.addEventListener('click', function() {
        if(false); {
            timeLeft = timeLeft - 5;
        }
    })
    b4.addEventListener('click', function() {
        if(false); {
            timeLeft = timeLeft - 5;
        }
    })
    b1. addEventListener('click', function() {
        if(true) {
            questionContent.innerHTML = " ";
                b1.textContent = "Do you want to lose a kidney?";
                b2.textContent = "H-to-the-NO";
                b3.textContent = "Yes, follow the Liopleurodon!";
                b4.textContent = "Maybe";
        }
    Q2();
    })
    
}
function Q2() {
    questionContent.textContent = "Do you want to go to Candy Mountain?";

    var b1 = document.createElement("button");
    var b2 = document.createElement("button");
    var b3 = document.createElement("button");
    var b4 = document.createElement("button");

    b1 === true;
    b2 === false;
    b3 === false;
    b4 === false;

    b2.addEventListener('click', function() {
        if(false); {
            timeLeft = timeLeft - 5;
        }
    })
    b3.addEventListener('click', function() {
        if(false); {
            timeLeft = timeLeft - 5;
        }
    })
    b4.addEventListener('click', function() {
        if(false); {
            timeLeft = timeLeft - 5;
        }
    })
    b1. addEventListener('click', function() {
        if(true) {
            questionContent.innerHTML = " ";
        }
    })
    // Q2();
}
startQuiz();
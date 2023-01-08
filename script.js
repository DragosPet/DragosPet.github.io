var hintClickCount = 0;

function showHint() {
    var hintContent = document.getElementById("quizHintVal");
    hintClickCount += 1;
    if(hintClickCount % 2 == 0) {
        hintContent.style.visibility = "hidden";
    }
    else {
        hintContent.style.visibility = "visible";
    }
}

function solveAnswer() { 
    var inputContent = document.getElementById("riddle-answer").value;
    var correctAnswer = document.getElementById("quizCorrect");
    var falseAnswer = document.getElementById("quizWrong");
    var riddleContent = document.getElementById("riddleContent");

    riddleContent.style.border = "5px solid whitesmoke";

    var neededCode = "QU5EWTI2TE9DTw==";
    var expectedAnswer = "YmF6aWw=";
    var decodedAnswer = window.atob(expectedAnswer).toLowerCase();

    if(inputContent != "") {
        if(String(inputContent).toLowerCase() === decodedAnswer) {
            correctAnswer.style.visibility = "visible";
            falseAnswer.style.visibility = "hidden";
            correctAnswer.innerText = "✅ Felicitări, ai rezolvat enigma. Codul necesar este: " + window.atob(neededCode);
            riddleContent.style.border = "5px solid green";
        }
        else {
            correctAnswer.style.visibility = "hidden";
            falseAnswer.style.visibility = "visible";
            falseAnswer.innerText = "❌ " + inputContent + " este greșit !"
            riddleContent.style.border = "5px solid red";

        };
    }
    else { 
        correctAnswer.style.visibility = "hidden";
        falseAnswer.style.visibility = "visible";
        falseAnswer.innerText = "❌ Am nevoie de mai multe litere !"
        riddleContent.style.border = "5px solid whitesmoke";
    };
}
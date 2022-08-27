const quizForm = document.querySelector("#quiz-form");
const btnSubmitAnswers = document.querySelector("#btn-submit-answers");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right-angled", "one right angle"];

function calculateScore(){
    console.log("clicked");
    let score = 0;
    let index = 0;
    const formData = new FormData(quizForm);
    for (let value of formData.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your final score is: " + score; 
}
btnSubmitAnswers.addEventListener("click", calculateScore);


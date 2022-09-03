const quizForm = document.querySelector("#quiz-form");
const btnSubmitAnswers = document.querySelector("#btn-submit-answers");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right-angled", "one right angle", "Nineteen", "4", "Centroid", "3", "Pythagoras", "Longest side of a triangle", "3"];

function calculateScore(){
    console.log("clicked");
    let score = 0;
    let index = 0;
    const formData = new FormData(quizForm);
    console.log(formData.values);
    for (let value of formData.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your final score is: " + score; 
}
btnSubmitAnswers.addEventListener("click", calculateScore);


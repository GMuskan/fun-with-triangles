const inputA = document.querySelector('#input-a');
const inputB = document.querySelector('#input-b');
const btnCheckHypotenuse = document.querySelector('#btn-check-hypotenuse');
const output = document.querySelector('#output');
const btnresetHypotenuse = document.querySelector('#btn-reset-hypo');

function calculateHypotenuse(){
    if(inputA.value && inputB.value){
        const sumOfSquares = calculateSumOfSquares(Number(inputA.value), Number(inputB.value));
        const hypotenuse =Math.sqrt(sumOfSquares);
        output. innerText = "The length of the hypotenuse is " + hypotenuse + "cm";
    }else{
        output.innerText = "Please provide length of both the sides!"
    }
}

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function resetInputValues(){
    inputA.value = "";
    inputB.value = "";
    output.value = "";
}

btnCheckHypotenuse.addEventListener("click", calculateHypotenuse);
btnresetHypotenuse.addEventListener("click", resetInputValues);
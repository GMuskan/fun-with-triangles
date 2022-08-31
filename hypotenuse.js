const inputA = document.querySelector('#input-a');
const inputB = document.querySelector('#input-b');
const btnCheckHypotenuse = document.querySelector('#btn-check-hypotenuse');
const outputHypotenuse = document.querySelector('#output-hypotenuse');
const btnresetHypotenuse = document.querySelector('#btn-reset-hypo');

function calculateHypotenuse(){
    if(inputA.value>0 && inputB.value>0){
        if(inputA.value && inputB.value){
            const sumOfSquares = calculateSumOfSquares(Number(inputA.value), Number(inputB.value));
            const hypotenuse =Math.sqrt(sumOfSquares);
            outputHypotenuse. innerText = "The length of the hypotenuse is " + hypotenuse + "cm";
        }else{
            outputHypotenuse.innerText = "Please provide length of both the sides!"
        }
    }else{
        outputHypotenuse.innerText = "Values of a & b should be greater than 0";
    }
    
}

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function resetInputValues(){
    inputA.value = "";
    inputB.value = "";
    outputHypotenuse.innerText = "";
}

btnCheckHypotenuse.addEventListener("click", calculateHypotenuse);
btnresetHypotenuse.addEventListener("click", resetInputValues);
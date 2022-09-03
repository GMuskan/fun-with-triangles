const inputBase = document.querySelector('#input-base');
const inputHeight = document.querySelector('#input-height');
const btnCheckArea = document.querySelector('#btn-check-area');
const outputArea = document.querySelector('#output-area');
const btnresetArea = document.querySelector('#btn-reset-area');

function calculateArea(){
    
    if(inputBase.value<0 || inputHeight.value<0){
        outputArea. innerText = "Base or Height cannot be negative!";
    }
    else if(inputBase.value && inputHeight.value){
        const area = ((Number(inputBase.value))*(Number(inputHeight.value)))/2;
        outputArea. innerText = "The area of the triangle is " + area + "cm²";
    }else{
        outputArea.innerText = "Please provide length of both base and height!"
    }
}

function resetAreaValues(){
    inputBase.value = "";
    inputHeight.value = "";
    outputArea.innerText = "";
}

btnCheckArea.addEventListener("click", calculateArea);
btnresetArea.addEventListener("click", resetAreaValues);
const angleInput = document.querySelectorAll(".angle-input");
const btnTriangleCheck = document.querySelector("#btn-check-triangle");
const outputTriangle = document.querySelector("#output-triangle");
const btnReset = document.querySelector("#btn-reset");

function isTriangle(){
    
    if(angleInput[0].value && angleInput[1].value && angleInput[2].value){
        const angleSum = calculateSumOfAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
        if(angleSum === 180){
            outputTriangle.innerText = "Given angles will form a triangle.";
        }else{
            outputTriangle.innerText = "Given angles will not form a triangle.";
        }
    }else{
        outputTriangle.innerText = "Please provide all the three angles.";
    }   
}
function calculateSumOfAngles(angle1, angle2, angle3){
    angleSum = angle1 + angle2 + angle3;
    return angleSum;
}
function resetAllValues(){
    outputTriangle.innerText = "";
    angleInput[0].value='';
    angleInput[1].value='';
    angleInput[2].value='';
}

btnTriangleCheck.addEventListener("click",isTriangle);
btnReset.addEventListener("click", resetAllValues)
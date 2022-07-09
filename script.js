const angleInput = document.querySelectorAll(".angle-input");
const btnTriangleCheck = document.querySelector("#btn-check-triangle");
const output = document.querySelector("#output");
const btnReset = document.querySelector("#btn-reset");

function isTriangle(){
    
    if(angleInput[0].value && angleInput[1].value && angleInput[2].value){
        const angleSum = calculateSumOfAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
        if(angleSum === 180){
            output.innerText = "Given angles will form a triangle.";
        }else{
            output.innerText = "Given angles will not form a triangle.";
        }
    }else{
        output.innerText = "Please provide all the three angles.";
    }   
}
function calculateSumOfAngles(angle1, angle2, angle3){
    angleSum = angle1 + angle2 + angle3;
    return angleSum;
}
function resetAllValues(){
    output.innerText = "";
    angleInput[0].value='';
    angleInput[1].value='';
    angleInput[2].value='';
}

btnTriangleCheck.addEventListener("click",isTriangle);
btnReset.addEventListener("click", resetAllValues)
const gridParent = document.getElementById("grid-parent");
const historyInputs = document.getElementById("current-inputs");
const display = document.getElementById("current-answer");
let isOperatorActive = false;
let isDecimalActive = false;


gridParent.addEventListener("click", e=>{
    if(e.target.matches("button")){

        const key = e.target;
        const action = key.dataset.action; //determine the type of key that is clicked.
        const numberKey = key.textContent;
        const displayedNum = display.textContent ;
        const lastInput = historyInputs.textContent;
        const calculate = eval;
        

        if(!action){
            numberKeys()

        }else if(
            action==="divide" ||
            action==="multiply" ||
            action==="minus" ||
            action==="add")
            {
            operatorKeys()

        }else if(action ==="reset"){
            reset()

        }else if(action ==="clear"){
            clear()

        }else if(action ==="decimal"){
            appendDecimal()

        }else if(action ==="calculate"){  
            calculateAnswer()
        }



// FUNCTIONS

function operatorKeys(){
    if(!isOperatorActive){

        if(historyInputs.textContent === "" && display.textContent != ""){
            historyInputs.textContent += displayedNum +" "+ numberKey +" "
        }else{
            historyInputs.textContent +=" "+ numberKey +" "
        }

    }else{
        key.disabled
    }

    isOperatorActive = true;

}

function reset(){
    display.textContent =""
    historyInputs.textContent =""
}

function clear(){
    display.textContent = displayedNum.substring(0, displayedNum.length - 1)
    historyInputs.textContent = lastInput.substring(0, lastInput.trimEnd().length - 1)
}

function appendDecimal(){
    if(!isDecimalActive){
        if(displayedNum===""){
            display.textContent = "0"+ displayedNum + "."
            historyInputs.textContent += "0" + "."
        }else{
            display.textContent = displayedNum + "."
            historyInputs.textContent += "."
        }
        isDecimalActive = true

    }else{
         key.disabled

    }
}

function calculateAnswer(){
    try{
        const returnedAnswer = calculate(historyInputs.textContent)
        display.textContent = parseFloat(Number(returnedAnswer).toFixed(5))

    } catch{
        historyInputs.textContent =""
        display.textContent ="ERROR"
    }

    historyInputs.textContent = ""
}

function numberKeys(){
    if(displayedNum === " " || isOperatorActive){
        display.textContent = numberKey;
        historyInputs.textContent += numberKey;
        isOperatorActive = false;
        
    }else{

        display.textContent = displayedNum + numberKey;
        historyInputs.textContent += numberKey;
    }

    isDecimalActive = false
}

    }    
})




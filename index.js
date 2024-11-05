const gridParent = document.getElementById("grid-parent");
const historyInputs = document.getElementById("current-inputs");
const display = document.getElementById("current-answer");
let isOperatorActive = false;


gridParent.addEventListener("click", e=>{
    if(e.target.matches("button")){

        const key = e.target;
        const action = key.dataset.action; //determine the type of key that is clicked.
        const numberKey = key.textContent;
        const displayedNum = display.textContent ;
        const lastInput = historyInputs.textContent;
        const calculate = eval;
        

        if(!action){

            if(displayedNum === " " || isOperatorActive){
                display.textContent = numberKey;
                historyInputs.textContent += numberKey;
                isOperatorActive = false;
                
            }else{

                display.textContent = displayedNum + numberKey;
                historyInputs.textContent += numberKey;
            }

        }else if(
            action==="divide" ||
            action==="multiply" ||
            action==="minus" ||
            action==="add"
        ){

            historyInputs.textContent +=" "+ numberKey +" "
            key.classList.add("is-depressed")
            isOperatorActive = true;
            

        }else if(action ==="clear"){

            display.textContent =""
            historyInputs.textContent =""

        }else if(action ==="clear"){

            display.textContent = displayedNum.substring(0, displayedNum.length - 1)
            historyInputs.textContent = lastInput.substring(0, lastInput.trimEnd().length - 1)
            

        }else if(action ==="decimal"){

            display.textContent = displayedNum + ","
            historyInputs.textContent += ","

        }else if(action ==="calculate"){
            
            try{
                display.textContent = calculate(historyInputs.textContent)
            } catch{
                historyInputs.textContent =""
                display.textContent ="ERROR"
            }
        }

    }    
})


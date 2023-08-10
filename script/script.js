//console.log("hello js working");
//To do
/*
-Form heading DONE
- One value input DONE
- one button DONE
- one output field DONE
**WORKING***
*/
/* To do 2
-Add single select radio with fixes tip amount
-Fetch the radio input
-Calc total using the radio input
-validate form 
    - change lebel text 
    - change form borded to red DONE
    - add empty and int only validation DONE
*/

const form = document.getElementById('tipForm');
const totalInput = document.getElementById('preTipTotalInput');
const element = document.getElementById("billTotalHelp");

// Functions 
/* function validateForm() {
    let x = document.forms["tipForm"]["preTipTotalInput"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } */

function removeHelper() {
  element.remove(); // Removes the div with the 'div-02' id
}


//Function add error message below input field and turn swap css class to make border red/green
const setError = (element, errorMessage) => {
          const inputControl = element.parentElement;
          const errorDisplay = inputControl.querySelector('.error');
          removeHelper();
          errorDisplay.innerText = errorMessage;
          inputControl.classList.add('error');
          inputControl.classList.remove('success');
      
   
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}


//Add listener to form button click
document.getElementById('tipBtn').addEventListener('click', e => {

  /* e.preventDefault(); make the form checkboxes not work READ MORE  */ 
  validateInputs();

  console.log("click listener working");
} );


//Function from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-38.php to check if number decimal or not. 
//RETURN: TRUE if decimal.
function isDecimal(value) {
  return result = (value - Math.floor(value)) !== 0; 
}

//Validation for int only input field
const validateInputs = () => {
  //Trim value to get rid of empty space
  const tipInput = totalInput.value.trim(); 

  if(tipInput === ''){
    setError(totalInput, "Your bill total required");
  } else if ( isNaN(tipInput) ) {
     setError(totalInput, "Please enter only a number");
  } else if ( isDecimal(tipInput)) {
    console.log(isDecimal(tipInput));
    setError(totalInput, "Please enter only WHOLE numbers");
  } else { 
      setSuccess(totalInput);
      //call calculate tip method only if all validation pass
      calcTip();
  }

}



function calcTip(){
    
    let preTipTotal = parseInt(document.getElementById("preTipTotalInput").value);
   //Tip radio fetch - fetch array - select value from .checked 
   const radioButtons = document.querySelectorAll('input[name="tipAmount"]');
    let selectedTip;
       for (const radioButton of radioButtons) {
           if (radioButton.checked) {
            selectedTip = radioButton.value;
               break;
           }
        }
    
    console.log(selectedTip); 
  //  console.log(typeof preTipTotal);
    let billTotal = preTipTotal + preTipTotal * selectedTip;
  //  console.log(typeof billTotal);
  //  console.log(billTotal);
    document.getElementById("postTipTotalOutput").form.id = billTotal.toFixed(2);
    document.tipForm.postTipTotalOutput.value = billTotal.toFixed(2);
  }


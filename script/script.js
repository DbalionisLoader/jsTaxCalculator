//console.log("hello js working");
//To do
/*
-Form heading
- One value input
- one button
- one output field
**WORKING***
*/
/* To do 2
-Add single select radio with fixes tip amount
-Fetch the radio input
-Calc total using the radio input
-validate form 
    - change lebel text 
    - change form borded to red
    - add empty and int only validation
*/

const form = document.getElementById('tipForm');
const totalInput = document.getElementById('preTipTotalInput');

// Functions 
/* function validateForm() {
    let x = document.forms["tipForm"]["preTipTotalInput"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } */

//Function add error message below input field and turn swap css class to make border red/green
const setError = (element, errorMessage) => {
          const inputControl = element.parentElement;
          const errorDisplay = inputControl.querySelector('.error');
         
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


const validateInputs = () => {
  //Trim value to get rid of empty space
  const tipInput = totalInput.value.trim(); 

  if(tipInput === ''){
    setError(totalInput, "Your bill total required");
  } else if ( isNaN(tipInput)) {
     setError(totalInput, "Please enter only a number");
  } else { 
      setSuccess(totalInput);
      //call calculate tip method only if all validation pass
      calcTip();
  }

}



function calcTip(){
    
   /*  if (validateForm() == false){
        console.log("No input");
    } else {
    
    const tax = 0.2; */

    let preTipTotal = parseInt(document.getElementById("preTipTotalInput").value);
   //Tip radio fetch
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


//console.log("hello js working");
//To do
/*
-Form heading
- One value input
- one button
- one output field
**WORKING**
*/


// Functions

function calcTip(){
    const tax = 0.2;

    let preTipTotal = parseInt(document.getElementById("preTipTotalInput").value);
    console.log(typeof preTipTotal);
    let billTotal = preTipTotal + preTipTotal * tax;
    console.log(typeof billTotal);
    console.log(billTotal);
    document.getElementById("postTipTotalOutput").form.id = billTotal.toFixed(2);
    document.tipForm.postTipTotalOutput.value = billTotal.toFixed(2);
}
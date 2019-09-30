    var billTotal = document.getElementById("billAmount").value;
    
    var noOfPpl = document.getElementById("noOfPeople").value;
    var tipAmount;
    var tipPercentage;


    /* function calculateTip() {
    if (serviceQuality === "Excellent" && serviceQuality.cheked === true) {
        tipPercentage = .2;
        tipAmount = ((billTotal * tipPercentage) / noOfPpl).toFixed();

    } else if (serviceQuality === "Average") {
        tipPercentage = .15;
        tipAmount = ((billTotal * tipPercentage) / noOfPpl).toFixed();

    } else {
        tipPercentage = .05;
        tipAmount = ((billTotal * tipPercentage) / noOfPpl).toFixed();

    }
    console.log(tipAmount);
    alert(tipAmount);
} */

var serviceQuality;

function tipPerPerson() {
    serviceQuality = document.getElementsByClassName("smiley");

    for (i = 0; i < serviceQuality.length; i++) {
        if (serviceQuality[i].checked) {
            tipPercentage = serviceQuality[i].value;
            var billTotal = document.getElementById("billAmount").value;
    
            var noOfPpl = document.getElementById("noOfPeople").value;
            var tipAmount;
            var tipAmountPerPerson;
            tipAmountPerPerson = (billTotal * tipPercentage) / noOfPpl;
            tipAmount = billTotal * tipPercentage;
            var totalAmountwTips = (billTotal / noOfPpl) + tipAmountPerPerson;
            document.getElementById("result").innerHTML = "Tip amount: &pound; " + tipAmount.toFixed(1) + '<br>' + "Each person pays: &pound; " + totalAmountwTips.toFixed(1);

        }
    }
}


document.getElementById("calculate").onclick = 
function () {
    tipPerPerson();
};





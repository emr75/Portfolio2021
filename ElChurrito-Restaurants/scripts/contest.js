window.onload = function () {
    // generate a random number between 1 - 100
    var luckyNumber = Math.floor(Math.random() * 100) + 1;
    // contest form
    var contestForm = document.forms.contestForm;
    var userInput = contestForm.luckNumber;

    // contestResult
    var contestResult = document.getElementById("contestResult");

    function handleSubmit() {
        var guessedNumber = Number(userInput.value);
        if (guessedNumber !== 0) {
            if (guessedNumber === luckyNumber) {
                // generate a random coupon number
                var couponNumber = String(Math.floor(Date.now() / luckyNumber));
                // genrate a random code from the coupon number
                var couponCode = "lucky" + couponNumber.substr(couponNumber.length - 3);
                // display results
                contestResult.style.display = "block";
                contestResult.innerHTML = "You Won! Your Coupon Code: " + couponCode;
            } else {
                // display results
                contestResult.style.display = "block";
                contestResult.innerHTML =
                    "Sorry, the lucky number was " + luckyNumber + ", better luck next time!";
            }
        }
        // regenerate random lucky number
        luckyNumber = Math.floor(Math.random() * 100) + 1;
        //to change to known number
        return false;
    }

    function clearResults() {
        contestResult.style.display = "none";
        contestResult.innerHTML = "";
    }

    contestForm.onsubmit = handleSubmit;
    userInput.onkeypress = clearResults;
};
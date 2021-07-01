window.onload = function () {
    var giftCardForm = document.forms[0];

    var submitBtn = document.getElementById('submitBtn');
    var yourName = giftCardForm.yourName;
    var personsName = giftCardForm.personsName;
    var email = giftCardForm.email;
    var emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    submitBtn.addEventListener("click", processForm);

    function processForm() {
        if (yourName.value === "" || yourName.value === null) {
            yourName.focus();
            yourName.style.backgroundColor = "pink";
        } else if (personsName.value === "" || personsName.value === null) {
            personsName.focus();
            personsName.style.backgroundColor = "pink";
        } else if (!email.value || email.value === "someone@example.com" || !emailValidation.test(email.value)) {
            email.focus();
            email.style.backgroundColor = "pink";
        } else if (amount.value <= 0 || isNaN(amount.value)) {
            amount.focus();
            amount.style.backgroundColor = "pink";
        } else {
            var par = document.getElementById('p');
            giftCardForm.style.display = "none";
            submitBtn.style.display = "none";
            var thankYouString = `Thank you ${yourName.value}, your gift card is made out to ${personsName.value}. The amount on the card is $${amount.value}. A confirmation email will be sent to ${email.value}`;
            par.innerHTML = thankYouString;
            par.style.color = "red";
            par.style.textAlign = "center";
        }
    }
};
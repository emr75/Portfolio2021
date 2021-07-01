window.onload = function () {

	/* Variables */

	var thankyou = document.getElementById("thankyou");
	var customername = document.getElementById("customername");
	var name = document.forms[0].thename;
	var email = document.forms[0].theemail;
	var zip = document.forms[0].thezip;
	var message = document.forms[0].message;
	var prov = document.forms[0].theprov;
	var phone = document.forms[0].thephone;
	var zippat = /^\w\d\w\d\w\d$/;
	var phonepat = /^\d\d\d\d\d\d\d\d\d\d$/;
	var empat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


	var formhandle = document.forms.contactus;
	formhandle.onsubmit = processform;

	function processform() {

		if (name.value === "" || name.value === null) {
			name.style.background = "pink";
			name.focus();
			return false;
		} else
			if (!phonepat.test(phone.value)) {
				phone.style.background = "pink";
				phone.focus();
				return false;
			} else
				if (!empat.test(email.value)) {
					email.style.background = "pink";
					email.focus();
					return false;
				} else
					if (!zippat.test(zip.value)) {
						zip.style.background = "pink";
						zip.focus();
						return false;
					} else
						if (prov.value == null) {
							prov.style.background = "pink";
							prov.focus();
							return false;
						} else
							if (message.value === "" || message.value === null) {
								message.style.background = "pink";
								message.focus();
								alert("your message is empty")
								return false;
							} else {

								thankyou.style.display = "block";
								customername.innerHTML = " " + name.value;


								/*-- Clear form after submission --*/

								formhandle.style.display = "none";
								return false;
							}
	};

}
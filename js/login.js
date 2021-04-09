var email = document.getElementById("email");
var password = document.getElementById("password");

var validations = {
	emailValid: false,
	passwordValid: false,
};

function checkAllFields() {
	var allGoodElement = document.getElementById("all_good");
	if(allInputsValid()) {
		var message = 'All the inputs are valid.';
		allGoodElement.innerHTML = message;
		allGoodElement.style.display = "block";
	} else {
		allGoodElement.style.display = "none";
	}
}

function allInputsValid() {
	return (validations.emailValid == true &&
		validations.passwordValid == true)
}
    
function setAllInputsValid() {
	validations.passwordValid = true;
	validations.emailValid = true;
}

function runValidations() {
	validatePassword();
	validateEmail();
}

function checkAllFields() {
	var allGoodElement = document.getElementById("all_good");
	if(allInputsValid()) {
		var message = 'All the inputs are valid.';
		allGoodElement.innerHTML = message;
		allGoodElement.style.display = "block";
	} else {
		allGoodElement.style.display = "none";
	}
}

function formSubmit() {
	runValidations();

	if(allInputsValid()) {
		window.location.replace("postlogin.html");
	}
}

function validateEmailRegex(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePasswordRegex(password) {
      const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(String(password).toLowerCase());
}

    function validatePassword() {
        var password = document.getElementById("password").value;
        var error = document.getElementById("password_error");
        
        if(!validatePasswordRegex(password)) {
            var message = 'The password is invalid.';
            error.innerHTML = message;
          error.style.display = "block";
            validations.passwordValid = false;
            checkAllFields();
        } else {
            error.style.display = "none";
            validations.passwordValid = true;
            checkAllFields()
        }
}


function validateEmail() {
	var email = document.getElementById("email").value;
	var error = document.getElementById("email_error");
	
	if(!validateEmailRegex(email)) {
		var message = 'The email is invalid.';
		error.innerHTML = message;
	  error.style.display = "block";
		validations.emailValid = false;
		checkAllFields();
	} else {
		error.style.display = "none";
		validations.emailValid = true;
		checkAllFields();
	}
}
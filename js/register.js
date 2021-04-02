var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("passwordConfirmation");
var errors = document.getElementById("errors");

var validations = {
	fullNameValid: false,
	emailValid: false,
	passwordValid: false,
	passwordConfirmationValid: false
};

// This function is used to validate the email format using a regular expression
// Function Name: validateEmailRegex
// Parameters: email (string)
// Return: boolean (if email format is valid)
function validateEmailRegex(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
function validatePasswordRegex(password) {
	const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(String(password).toLowerCase());
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

function validatePasswordConfirmation() {
	var passwordConfirmation = document.getElementById("passwordConfirmation").value;
	var password = document.getElementById("password").value;
	var error = document.getElementById("password_confirmation_error");

	if(passwordConfirmation != password) {
		var message = "The password confirmation does not match the password.";
		error.innerHTML = message;
	  error.style.display = "block";
		validations.passwordConfirmationValid = false;
		checkAllFields();
	}	else if (!validatePasswordRegex(password)) {
		var message = 'The password confirmation is invalid.';
		error.innerHTML = message;
	  error.style.display = "block";
		validations.passwordConfirmationValid = false;
		checkAllFields();
	} else {
		error.style.display = "none";
		validations.passwordConfirmationValid = true;
		checkAllFields();
	}
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
		checkAllFields();
	}
}

function validateFullName() {
	var fullName = document.getElementById("fullName").value;
	var error = document.getElementById("fullname_error");
	
	if(fullName.length > 128 || fullName.length < 3) {
		var message = 'The name is invalid.';
		error.innerHTML = message;
	  error.style.display = "block";
		validations.fullNameValid = false;
		checkAllFields();
	} else {
		error.style.display = "none";
		validations.fullNameValid = true;
		checkAllFields();
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

function cleanInputs() {
	document.getElementById("fullName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("passwordConfirmation").value = "";
}

function cleanAllGood() {
	var allGoodElement = document.getElementById("all_good").style.display = "none";
}

function formReset() {
	cleanInputs();
	cleanErrorMessages();
	cleanAllGood();
}

function runValidations() {
	validateFullName();
	validatePasswordConfirmation();
	validatePassword();
	validateEmail();
}

function formSubmit() {
	runValidations();

	if(allInputsValid()) {
		window.location.replace("login.html");
	}
}

function allInputsValid() {
	return (validations.fullNameValid == true &&
		validations.emailValid == true &&
		validations.passwordValid == true &&
		validations.passwordConfirmationValid == true)
}

function cleanErrorMessages() {
	var elements = ["fullname_error", "email_error", "password_error", "password_confirmation_error"];

	for(i = 0; i < elements.length; i++) {
		document.getElementById(elements[i]).style.display = "none";
	}
}

function setAllInputsValid() {
	validations.passwordConfirmationValid = true;
	validations.passwordValid = true;
	validations.emailValid = true;
	validations.fullNameValid = true;
}

function fillForm() {
	document.getElementById("passwordConfirmation").value = "Aa123456*";
	document.getElementById("password").value = "Aa123456*";
	document.getElementById("fullName").value = "Juan Alloatti";
	document.getElementById("email").value = "juan_alloatti@hotmail.com";
	setAllInputsValid();
	checkAllFields();
	cleanErrorMessages()
}
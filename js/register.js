// INPUTS VALIDATION

var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("passwordConfirmation");
var errors = document.getElementById("errors");
var postingEnabled = true;

var validations = {
	fullNameValid: false,
	emailValid: false,
	passwordValid: false,
	passwordConfirmationValid: false
};

function validateEmailRegex(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePasswordRegex(password) {
	const re = /(?=.*\d)(?=.*[a-z]).{8,}/; 
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
		document.getElementById("passwordConfirmation").style.background = "rgb(255 165 165 / 58%)"
		checkAllFields();
	}	else if (!validatePasswordRegex(password)) {
		var message = 'The password confirmation is invalid.';
		error.innerHTML = message;
	  	error.style.display = "block";
		validations.passwordConfirmationValid = false;
		document.getElementById("passwordConfirmation").style.background = "rgb(255 165 165 / 58%)"
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
		document.getElementById("password").style.background = "rgb(255 165 165 / 58%)";
	} else {
		error.style.display = "none";
		validations.passwordValid = true;
		checkAllFields();
	}
}

function validateFullName() {
	var fullName = document.getElementById("fullName").value;
	var error = document.getElementById("fullname_error");
	
	if(fullName.length > 128 || fullName.length < 6 || !fullName.includes(" ")){
		var message = 'The name is invalid.';
		error.innerHTML = message;
	  	error.style.display = "block";
		validations.fullNameValid = false;
		document.getElementById("fullName").style.background = "rgb(255 165 165 / 58%)"
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
		document.getElementById("email").style.background = "rgb(255 165 165 / 58%)"
		checkAllFields();
	} else {
		error.style.display = "none";
		validations.emailValid = true;
		checkAllFields();
	}
}

function onFocusValidateFullName(){
	var error = document.getElementById("fullname_error").style.display = "none";
	document.getElementById("fullName").style.background = "white"
}

function onFocusValidatePassword(){
	var error = document.getElementById("password_error").style.display = "none";
	document.getElementById("password").style.background = "white"

}

function onFocusValidatePasswordConfirmation(){
	var error = document.getElementById("password_confirmation_error").style.display = "none";
	document.getElementById("passwordConfirmation").style.background = "white"

}

function onFocusValidateEmail(){
	var error = document.getElementById("email_error").style.display = "none";
	document.getElementById("email").style.background = "white"

}

function cleanInputs() {
	document.getElementById("fullName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("passwordConfirmation").value = "";
}

function cleanErrorMessages() {
	var elements = ["fullname_error", "email_error", "password_error", "password_confirmation_error"];

	for(i = 0; i < elements.length; i++) {
		document.getElementById(elements[i]).style.display = "none";
	}
}

function cleanAllGood() {
	var allGoodElement = document.getElementById("all_good").style.display = "none";
}

function cleanValidationDiv(){
	var resetedValidationDiv = document.querySelector(".validationContent").style.display = "none";
}

function cleanDataDiv(){
	var resetedDataDiv = document.querySelector("#formDataId").style.display = "none";
}

function formReset() {
	cleanInputs();
	cleanErrorMessages();
	cleanAllGood();
	cleanValidationDiv();
	cleanDataDiv();
	document.getElementById("fullName").style.background = "white"
	document.getElementById("email").style.background = "white"
	document.getElementById("password").style.background = "white"
	document.getElementById("passwordConfirmation").style.background = "white"
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

var formData = document.querySelector(".formData");
var formDataUL = document.querySelector(".formDataUL");

function setDataDivDisplayNone(){
	document.querySelector(".formData").style.display = "none"
}
setDataDivDisplayNone();

function registerPostRequest() {
	var url = "http://localhost:4000/register";	
	
	var params = {
		fullName: document.querySelector("#fullName").value,
		email: document.querySelector("#email").value,
		password: document.querySelector("#password").value,
		passwordConfirmation: document.querySelector("#passwordConfirmation").value
	};

	axios({
		method: 'post',
		url: url,
		data: params
	})
	.then((response) => {
        console.log(response);
		if(response.data.register_successful) {
			alert("Register Successful!");
		}
    })
    .catch((error) => {
       console.log(error);
    });
}

function formDataDiv() {
	if(postingEnabled) {
		registerPostRequest();
	}

	if(document.querySelector(".formData").style.display == "none"){
		var formNodeName = document.createElement("LI");
		var formInfoName = document.createTextNode("Full name:" + " " + document.querySelector("#fullName").value);
		var formNodeEmail = document.createElement("LI");
		var formInfoEmail = document.createTextNode("Email:" + " " + document.querySelector("#email").value);
		var formNodePassword = document.createElement("LI");
		var formInfoPassword = document.createTextNode("Password:" + " " + document.querySelector("#password").value);
		var formNodePasswordConfirmation = document.createElement("LI");
		var formInfoPasswordConfirmation = document.createTextNode("Password Confirmation:" + " " + document.querySelector("#passwordConfirmation").value);
		
		formNodeName.appendChild(formInfoName);
		formNodeEmail.appendChild(formInfoEmail);
		formNodePassword.appendChild(formInfoPassword)
		formNodePasswordConfirmation.appendChild(formInfoPasswordConfirmation)
		formDataUL.appendChild(formNodeName);
		formDataUL.appendChild(formNodeEmail);
		formDataUL.appendChild(formNodePassword);
		formDataUL.appendChild(formNodePasswordConfirmation);
		
		document.querySelector(".formData").style.display = "block";
		cleanAllGood();
	}
}	

var validText = " ";
var validationDiv = document.querySelector('.validationContent');
var validationList = document.querySelector('.validationList');
var formValidationHash = {
	formInDom: false,
	fieldsQuantity: false,
	requiredFields: false,
	associatedLabels: false,
	validButtons: false
}


var formInDom = function() {
    validationDiv.style.display = 'flex';
    if (document.querySelector('#loginForm')) {
        var formNode = document.createElement("LI");
        var formText = document.createTextNode(validText + " " + 'Form is found' + " ");
        formNode.appendChild(formText);
        validationList.appendChild(formNode);
		formValidationHash.formInDom = true;
    }
    else {
        var noFormNode = document.createElement("LI");
        var noFormText = document.createTextNode(validText + " " + 'Form is not found' + " ");
        noFormNode.style.color = "red"
		noFormNode.appendChild(noFormText);
        validationList.appendChild(noFormNode);
    }
}

var fieldsQuantity = function () {
    validationDiv.style.display = 'flex';
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber == 9) {
        var fieldsNode = document.createElement("LI");
        var fieldsText = document.createTextNode(validText + " " + 'Input fields are correct' + " ");
        fieldsNode.appendChild(fieldsText);
        validationList.appendChild(fieldsNode);
		formValidationHash.fieldsQuantity = true;    
		}
    else {
        var noFieldsNode = document.createElement("LI");
        noFieldsNode.style.color = "red";
        var noFieldsText = document.createTextNode(validText + " " + 'There are missing inputs' + " ");
        noFieldsNode.appendChild(noFieldsText);
        validationList.appendChild(noFieldsNode);
    }
}

var requiredFields = function () {
    validationDiv.style.display = 'flex';
    var isValid = true;

		var inputs = ["fullName", "email", "password", "passwordConfirmation"];
		for(i = 0; i < inputs.length; i++) {
			var field = document.getElementById(inputs[i]);
			if(!field.hasAttribute('required')) {
				isValid = false;
			}
		}

    if (isValid == true) {
        var requiredNode = document.createElement("LI");
        var requiredText = document.createTextNode(validText + " " + 'All fields are required' + " ");
        requiredNode.appendChild(requiredText);
        validationList.appendChild(requiredNode);
        formValidationHash.requiredFields = true; 
    }
    else {
        var noRequiredNode = document.createElement("LI");
        noRequiredNode.style.color = "red";
        var noRequiredText = document.createTextNode(validText + " " + 'Required attributes missing' + " ");
        noRequiredNode.appendChild(noRequiredText);
        validationList.appendChild(noRequiredNode);
    }
}

var associatedLabels = function () {
    validationDiv.style.display = 'flex';
    var inputs = document.querySelectorAll('.infoInput').name;
    var labels = document.querySelectorAll('labels').for;
    if (inputs == labels) {
        var labelNode = document.createElement("LI");
        var labelText = document.createTextNode(validText + " " + 'All inputs have associated labels' + " ");
        labelNode.appendChild(labelText);
        validationList.appendChild(labelNode);
        formValidationHash.associatedLabels = true; 
    }
    else {
        var noLabelNode = document.createElement("LI");
        noLabelNode.style.color = "red";
        var noLabelText = document.createTextNode(validText + " " + 'There are Labels missing for inputs' + " ");
        noLabelNode.appendChild(noLabelText);
        validationList.appendChild(noLabelNode);
    }
}

var validButtons = function() {
    validationDiv.style.display = 'flex';
    var submitButton = document.querySelector('.submit-button').value;
    var resetButton = document.querySelector('.reset-button').value;
    var submitValue = 'Register';
    var resetValue = 'Reset';
    if ((submitButton == submitValue) && (resetButton == resetValue)) {
        var buttonsNode = document.createElement("LI");
        var buttonsText = document.createTextNode(validText + " " + 'Buttons content is correct' + " ");
        buttonsNode.appendChild(buttonsText);
        validationList.appendChild(buttonsNode);
        formValidationHash.validButtons = true; 
    }
    else {
        var noButtonsNode = document.createElement("LI");
        noButtonsNode.style.color = "red";
        var noButtonsText = document.createTextNode(validText + " " + 'Buttons content is wrong' + " ");
        noButtonsNode.appendChild(noButtonsText);
        validationList.appendChild(noButtonsNode);
    }
}

var validation = function () {
  if(formValidationHash.validButtons === true &&
		formValidationHash.formInDom === true &&
		formValidationHash.fieldsQuantity === true &&
		formValidationHash.requiredFields === true &&
		formValidationHash.associatedLabels == true) {
      	validationDiv.textContent = validText + " " + 'Every validation has passed!';
  }
}

function validateAll(){
	var titleNode = document.createElement("LI");
	var titleText = document.createTextNode("VALIDATION RESULTS:");
	titleNode.appendChild(titleText);
    validationList.appendChild(titleNode);
	validationList.firstElementChild.style.color="black";
	formInDom();
	fieldsQuantity()
	requiredFields();
	associatedLabels();
	validButtons();
	validation();
}
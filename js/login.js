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

function loginPostRequest() {
    var url = "http://localhost:4000/login";
	
	var params = {
		email: document.querySelector("#email").value,
		password: document.querySelector("#password").value,
	};

	axios({
		method: 'put',
		url: url,
		data: params
	});
}

function formSubmit() {
	runValidations();
    if(allInputsValid()){
        loginPostRequest();
    }
    // SCREEN CHANGE DISABLED FOR CONSOLE.LOG CHECKING THE EMAIL DATA SEND
	// 	window.location.replace("postlogin.html");
	//
}

function validateEmailRegex(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePasswordRegex(password) {
	const re = /(?=.*\d)(?=.*[a-z]).{8,}/; 
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

function onFocusValidatePassword(){
	var error = document.getElementById("password_error").style.display = "none";
	}
function onFocusValidateEmail(){
	var error = document.getElementById("email_error").style.display = "none";
	}


// FORM VALIDATION FUNCTION

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
    if (fieldsNumber == 4) {
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

		var inputs = ["email", "password"];
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
    var loginButton = document.querySelector('.login-button').value;
    var loginValue = 'Log in';
    
    if (loginButton == loginValue) {
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
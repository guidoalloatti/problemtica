var password = document.getElementById("password")
var passwordConfirmation = document.getElementById("passwordConfirmation");

function validatePassword(){
  if(password.value != passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity("Passwords Don't Match");
  } else {
    passwordConfirmation.setCustomValidity('');
  }
}

password.onchange = validatePassword;
passwordConfirmation.onkeyup = validatePassword;

var firstNameError = document.getElementById("firstName-error")
var lastNameError = document.getElementById("lastName-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")
var checkBoxError = document.getElementById("checkBox-error")
var submitError = document.getElementById("submit-error")

//validation for firstname
function validateFirstName(){
    var firstName = document.getElementById("firstName").value 
    if(firstName.length == 0){
        firstNameError.innerHTML = 'First Name is required';
        return false;
    }
    if(!firstName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      firstNameError.innerHTML = 'Write Properly'
      return false;
    }
    firstNameError.innerHTML = 'Valid';
    firstNameError.style.color = 'green'
    return true;
}

//validation for lastName
function validateLastName(){
    var lastName = document.getElementById("lastName").value
    if(lastName.length == 0){
        lastNameError.innerHTML = 'Last Name is required'

        return false;
    }
    lastNameError.innerHTML = 'valid';
    lastNameError.style.color = 'green'
}

//validation for Email
function validateEmail(){
    var email = document.getElementById("email").value
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "write properly"
        return false;
    }
    emailError.innerHTML = 'valid'
    emailError.style.color = 'green'

    
}

//validation for message
function validateMessage(){
    var message = document.getElementById("message").value
    var required = 30;
    var left = required-message.length
    if(left>0){
        messageError.innerHTML= left + "Please writ the message"
        return false;
    }
    messageError.innerHTML= 'valid'
    messageError.style.color = 'green'

}

//validation for the checkbox
function validateCheckBox(){
    var checkBox = document.getElementById("checkBox").value
    if(checkBox.checked == false){
        checkBoxError.innerHTML = 'please accept the condition'
        return true;
    }
    else if(checkBox.checked == true){
        checkBoxError.innerHTML = 'valid'
        return false;
    }
}

//form validation
function validateForm(){
    if(!validateFirstName() || !validateLastName() || !validateEmail() || !validateMessage() || validateCheckBox()){
        submitError.style.display = "block"
        submitError.innerHTML = 'Please fix the error'
        setTimeout(function(){
            submitError.style.display = "none"
        },2500)
        return false;
    }
}

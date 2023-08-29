"use strict";

//create some vars
let subject;
let message;
function validateForm() {
    //save the email that the user entered
    let email = document.getElementById("email").value;
    //check the email
    if (!validateEmail(email)) {
        //his email is not valid
        alert("Invalid email address");
    }else{
        //the email is valid
        //go to the user email
        sendEmail();
        alert("The form of the email submitted successfully!");
    }
}
//a method that check a valid email
function validateEmail(email) {
    let emailIsValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailIsValid.test(email);
}
//a method that connect to the user email by mailto with the subject and massage he entered the web
function sendEmail() {
    //save the subject and the massage
    subject = document.getElementById("Subject").value;
    message = document.getElementById("message").value;
    window.location.href = "mailto:" + "alonido66712@gmail.com" + "?subject=" + subject + "&body=" + message;
}

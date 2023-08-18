function validate() {
  username();
  emailid();
  messages();
}

function username() {
  var isname = /^[a-zA-Z]+$/;
  let name = document.getElementById("name");
  let nameError = document.getElementById("nameError");

  if (name.value.trim() === "") {
    setError(nameError, "Username is empty");
  } else if (!isname.test(name.value.trim())) {
    setError(nameError, "Username cannot contain numbers or special characters");
  } else {
    setSuccess(nameError);
  }
}

function emailid() {
  var isemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("email");
  let emailError = document.getElementById("emailError");

  if (email.value.trim() === "") {
    setError(emailError, "Email is empty");
  } else if (!isemail.test(email.value.trim())) {
    setError(emailError, "You have entered an invalid email address!");
  } else {
    setSuccess(emailError);
  }
}

function messages() {
  let message1 = document.getElementById("message");
  let messageError = document.getElementById("messageError");

  if (message1.value.trim() === "") {
    setError(messageError, "Enter a message");
  } else {
    setSuccess(messageError);
  }
}

function setError(errorElement, message) {
  let submitbutton = document.getElementById("button");
  errorElement.className = "smallshown";
  errorElement.innerText = message;
  submitbutton.disabled = true;
}

function setSuccess(successElement) {
  let submitbutton = document.getElementById("button");
  successElement.className = "smallhidden";
  successElement.innerText = "";
  submitbutton.disabled = false;
}

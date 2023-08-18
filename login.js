function usernamecheck() {
    var isusername = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userinput = document.getElementById("username");
    let usernameError = document.getElementById("usernameError");
  
    if (userinput.value.trim() === "") {
      setError(usernameError, "Username is empty");
    } else if (!isusername.test(userinput.value.trim())) {
      setError(usernameError, "Username cannot contain numbers or special characters");
    } else {
      setSuccess(usernameError);
    }
  }

  
  function passwordcheck() {
    var ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let pwdinput = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
  
    if (pwdinput.value.trim() === "") {
      setError(passwordError, "User password is empty");
    } else if (!ispassword.test(pwdinput.value.trim())) {
      setError(passwordError, "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be 8-20 characters long");
    } else {
      setSuccess(passwordError);
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
  
  function validation() {
    passwordcheck();
    usernamecheck();
  }
  


function setDateOfBirthMax() {
  var today = new Date();
  var minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  var minDateFormatted = minDate.toISOString().split('T')[0];
  document.getElementById("text-dateofbirth").setAttribute("max", minDateFormatted);
}
window.onload = setDateOfBirthMax;

function validate() {
  
 
  validatefirstname()
    validatelastname();
    dateofbirth();
    calculateAge()
    validatenumber();
    validatestate()
    ChangeCityList()
    validateusername()
    validatepassword()
    validatecpassword()
   
  }
  
 
  function validatefirstname() {
    const isname = /^[a-zA-Z]+$/;
    let name = document.getElementById("text-firstname");
    let firstnameerror = document.getElementById("firstnameerror");
  
    if (name.value.trim() === "") {
      setError(firstnameerror, "First name is empty");
    } else if (!isname.test(name.value.trim())) {
      setError(firstnameerror, "Username cannot contain numbers or special characters");
    } else {
      setSuccess(firstnameerror);
    }
  }
  function validatelastname() {
    const isname = /^[a-zA-Z]+$/;
    let name = document.getElementById("text-lastname");
    let lastnameerror = document.getElementById("lastnameerror");
  
    if (name.value.trim() === "") {
      setError(lastnameerror, "Last name is empty");
    } else if (!isname.test(name.value.trim())) {
      setError(lastnameerror, "Username cannot contain numbers or special characters");
    } else {
      setSuccess(lastnameerror);
    }
  }

  function calculateAge() {
    var dob = document.getElementById("text-dateofbirth").value;
    var dobDate = new Date(dob);
    var today = new Date();
  
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
  
    document.getElementById("text-age").value = age;
  }
  
  document.getElementById("text-dateofbirth").addEventListener("input", calculateAge);
  

  function validatenumber()
   {
    const isnumber = /^\d{10}$/;;
    let number = document.getElementById("text-phoneno");
    let numbererror = document.getElementById("numbererror");
  
    if (number.value.trim() === "") 
    {
      setError(numbererror, "mobile number is empty");
    } 
    else if (!isnumber.test(number.value.trim())) 
    {
      setError(numbererror, "mobile number cannot contain alphabets and must be 10 digits");
    } 
    else
     {
      setSuccess(numbererror);
    }
  }
  function validateemail() {
    var isemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("text-email");
    let emailerror = document.getElementById("emailerror");
  
    if (email.value.trim() === "") {
      setError(emailerror, "Email is empty");
    } else if (!isemail.test(email.value.trim())) {
      setError(emailerror, "You have entered an invalid email address!");
    } else {
      setSuccess(emailerror);
    }
  }
  function validateState() {
    let stateInput = document.getElementById("select-state");
    let stateError = document.getElementById("stateerror");
    
    if (stateInput.value === "") {
      setError(stateError, "Please select a state");
    } else {
      setSuccess(stateError);
    }
  }
  
  var city = {};
  city['ker'] = ['Kochi', 'Alua', 'Angamaly'];
  city['goa'] = ['Panaji', 'Margo', 'Vasco da Gama'];
  city['kar'] = ['Bangalore', 'Mysore', 'Mandiya'];
  city['tam'] = ['Chennai', 'Coimbatore', 'Madurai'];
  
  function changeCityList() {
    var stateList = document.getElementById("select-state");
    var cityList = document.getElementById("select-city");
    var selectedState = stateList.options[stateList.selectedIndex].value;
    cityList.innerHTML = "";
  
    var cities = city[selectedState];
    if (cities) {
      for (var i = 0; i < cities.length; i++) {
        var option = new Option(cities[i], i);
        cityList.appendChild(option);
      }
    }
  }
  
 
  document.getElementById("select-state").addEventListener("change", validateState);
  document.getElementById("select-state").addEventListener("focusout", changeCityList);
  
  function validateusername() {
    var isuser = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let username = document.getElementById("text-username");
    let usernameerror = document.getElementById("usernameerror");
  
    if (username.value.trim() === "") {
      setError(usernameerror, "username is empty");
    } else if (!isuser.test(username.value.trim())) {
      setError(usernameerror, "You have entered an invalid username its must be a valid email!");
    } else {
      setSuccess(usernameerror);
    }
  }
  function validatepassword() {
    var ispassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let password = document.getElementById("text-password");
    let passworderror = document.getElementById("passworderror");
  
    if (password.value.trim() === "") {
      setError(passworderror, "password   is required");
    } else if (!ispassword.test(password.value.trim())) {
      setError(passworderror, "password must conatain 8 charectors and atleast one alphabet!");
    } else {
      setSuccess(passworderror);
    }
  }
  function validatecpassword() {
    var iscpassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let cpassword = document.getElementById("text-cpassword");
    let password = document.getElementById("text-password");
    let cpassworderror = document.getElementById("cpassworderror");
  
    if (cpassword.value.trim() === "")
     {
      setError(cpassworderror, "confirm password   is required");
    } 
    else if (cpassword.value.trim()!=password.value.trim()) 
    {
      setError(cpassworderror, "confirm passwoird is not same!");
    }
     else 
    {
      setSuccess(cpassworderror);
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
  
  
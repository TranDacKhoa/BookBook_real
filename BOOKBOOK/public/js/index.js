const formLogin = document.querySelector('.login');
const formSignUp = document.querySelector('.sign-up');

// tab switching
// const label_sign_up = document.querySelector('.label-sign-up');
// label_sign_up.addEventListener('click', () => {
//    formLogin.classList.toggle('isActive');
//    formSignUp.classList.toggle('isActive');
// });
// const label_login = document.querySelector('.label-login');
// label_login.addEventListener('click', () => {
//    formLogin.classList.toggle('isActive');
//    formSignUp.classList.toggle('isActive');
// });

// Event button login, signup
const button_login = document.querySelector('.btn-login');
button_login.addEventListener('click', (e) => {
   e.preventDefault();
});
const button_signup = document.querySelector('.btn-signup');
button_signup.addEventListener('click', (e) => {
   e.preventDefault();
});


// function validateLogin() {
//    const login_form = document.forms.namedItem("form-login")
 
//    if (validator(login_form[0])) {
//      setSuccess(login_form[0])
//      setSuccess(login_form[1])
//      return true
//    }
//    else {
//      setError(login_form[0])
//      return false
//    }
//  }
 
//  let isDupUsername = false
//  function validateSignup() {
//    const signup_form = document.forms.namedItem("form-signup")
//    let isValid = true
 
//    for (let i = 0; i < signup_form.length - 2; i++) {
//      if (signup_form[i].id == "male" || signup_form[i].id == "female") {
//        continue
//      }
//      if (signup_form[i].id == "password" || signup_form[i].id == "dob" || 
//          signup_form[i].id == "secretkey" || validator(signup_form[i])) {
//        setSuccess(signup_form[i])
//      }
//      else {
//        if (signup_form[i].id == "username" && isDupUsername) {
//          setError(signup_form[i], "has been used")
//        }
//        else {
//          setError(signup_form[i])
//        }
//        isValid = false
//      }
//    }
 
//    return isValid
//  }
 
//  function setSuccess(input) {
//    const formControl = input.parentElement;
//    formControl.className = "form-group success";
//  }
 
//  function setError(input, msg = "is invalid", prefix = true, longMSG = false) {
//    const formControl = input.parentElement;
//    const small = formControl.querySelector("small");
//    formControl.className = "form-group error";
//    small.innerText = (prefix ? input.id : "") + " " + msg;
//  }
 
//  function validator(input) {
//    switch (input.id) {
//      case "fullname":
//        return checkFullname(input.value)
//      case "username":
//        return checkUsername(input.value)
//      case "email":
//        return checkEmail(input.value)
//      case "phone":
//        return checkTel(input.value)
//    }
//  }
 
//  function checkFullname(fullname) {
//    const fullname_regex = /^[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*(?: [A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*$/
//    return fullname_regex.test(fullname)
//  }
 
//  function checkUsername(username) {
//    const username_regex = /^(?!\d)(\w){6,}$/
 
//    fetch('/user', {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Accept: "application/json",
//      },
//      body: JSON.stringify({todo: "checkusername", username: username})
//    })  
//    .then((res) => res.json())
//    .then((data_received) => {
//      if (data_received.result == 0) {
//        isDupUsername = true
//      }
//      else {
//        isDupUsername = false
//      }
//    })
//    .catch((error) => {
//      console.error(error)
//    })
 
//    if (username_regex.test(username) && !isDupUsername) {
//      return true
//    }
//    else {
//      return false
//    }
//  }
 
//  function checkEmail(email) {
//    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//    return email_regex.test(email)
//  }
 
//  function checkTel(tel) {
//    const tel_regex = /^0[0-9]{9}$/
//    return tel_regex.test(tel)
//  }
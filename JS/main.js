var Username = document.getElementById("name");
var Email = document.getElementById("email");
var Password = document.getElementById("password");

var invalidData = document.getElementById("invalid_data");
var success_login = document.getElementById("success");
var signUpArray = [];

var getArrayUsers = [];
var Login = document.getElementById("login");

var signUp = document.getElementById("signup");
var userNameH1 = document.getElementById('username');


function login() {

    if (Login.innerHTML == "Sign Up") {
        var user = {
            name: Username.value,
            mail: Email.value,
            pass: Password.value
        }
        signUpArray.push(user);
        invalidData.classList.remove('d-none');
        invalidData.classList.add('text-success')
        invalidData.innerHTML = "Sign Up Successed";
        ClearElement();
        console.log(signUpArray);

        Signup();
        localStorage.setItem(`users`, JSON.stringify(signUpArray));

        // for (let i = 0; i < signUpArray.length; i++) {

        //     localStorage.setItem(`usersMail`, signUpArray[i].name);
        //     localStorage.setItem(`usersMail`, signUpArray[i].mail);
        //     localStorage.setItem(`usersPass`, signUpArray[i].pass);

        // }


    } else if (Login.innerHTML == "Log in") {
        getArrayUsers = JSON.parse(localStorage.getItem('users'));
        if (getArrayUsers.length == 0) {
            invalidData.innerHTML = "invalid username or password!";
            invalidData.classList.remove('d-none');
        } else {
            for (let i = 0; i < getArrayUsers.length; i++) {
                if (Email.value == getArrayUsers[i].mail && Password.value == getArrayUsers[i].pass) {
                    invalidData.innerHTML = "Log in Successed";
                    // userNameH1.innerHTML = "Welcome" + getArrayUsers[i].name;
                    Login.setAttribute('href', 'home.html');
                } else {
                    invalidData.innerHTML = "invalid username or password!";
                    invalidData.classList.remove('d-none');

                }
            }
            if (invalidData.innerHTML != "Log in Successed") {
                invalidData.classList.remove('d-none');
            }
        }
    }

}

function Signup() {
    if (signUp.innerHTML == "Sign Up") {
        Username.classList.remove('d-none');
        Login.innerHTML = "Sign Up";
        signUp.innerHTML = "Log in";
    } else {
        Username.classList.add('d-none');
        Login.innerHTML = "Log in";
        signUp.innerHTML = "Sign Up";
    }


}

function ClearElement() {
    Username.value = "";
    Email.value = "";
    Password.value = "";

}


signUp.addEventListener('click', Signup)

Login.addEventListener('click', login);
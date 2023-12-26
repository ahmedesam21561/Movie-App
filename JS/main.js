var Username = document.getElementById("name");
var Email = document.getElementById("email");
var Password = document.getElementById("password");

var invalidData = document.getElementById("invalid_data");
var success_login = document.getElementById("success");
var signUpArray = [];

var getArrayUsers = [];
var Login = document.getElementById("login");

var signUp = document.getElementById("signup");
var userNameH1 = document.getElementById("USername");


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

        // Signup();
        // localStorage.setItem(`users`, JSON.stringify(signUpArray));


    } else if (Login.innerHTML == "Log in") {
        signUpArray = JSON.parse(localStorage.getItem('users'));
        if (signUpArray.length == 0) {
            invalidData.innerHTML = "invalid username or password!";
            invalidData.classList.remove('d-none');
            Signup();

        } else {
            for (let i = 0; i < signUpArray.length; i++) {
                if (Email.value == signUpArray[i].mail && Password.value == signUpArray[i].pass) {
                    invalidData.innerHTML = "Log in Successed";
                    Login.setAttribute('href', 'home.html');
                    userNameH1.innerHTML = "Welcome" + signUpArray[i].name;
                }
            }
            if (invalidData.innerHTML != "Log in Successed") {
                invalidData.classList.remove('d-none');
                invalidData.innerHTML = "invalid username or password!";

            }
        }
    }
    // Signup();
    localStorage.setItem(`users`, JSON.stringify(signUpArray));

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
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgButton0 = document.getElementById("button0");
const imgButton1 = document.getElementById("button1");
const imgButton2 = document.getElementById("button2");
const imgButton3 = document.getElementById("button3");
const imgButton4 = document.getElementById("button4");
const imgButton5 = document.getElementById("button5");
const imgButton6 = document.getElementById("button6");
const imgButton7 = document.getElementById("button7");
const imgButton8 = document.getElementById("button8");
let loginString = "";

// Buttons to create the login string
imgButton0.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "corgi";
})

imgButton1.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "soccerball";
})

imgButton2.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "passport";
})

imgButton3.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "tori";
})

imgButton4.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "moon";
})

imgButton5.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "shirt";
})

imgButton6.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "king";
})

imgButton7.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "controller";
})

imgButton8.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "bike";
})


// Login Button checking the current string against the password
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginString;

    // Alert if successful, then reload page
    if (username === "user" && password === "corgipassportmoon") {
        alert("You have successfully logged in.");
        location.reload();

    // Otherwise show hidden error and reset the string
    } else {
        loginErrorMsg.style.opacity = 1;
        loginString = "";
    }
})
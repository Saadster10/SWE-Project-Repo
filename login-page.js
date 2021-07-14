// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCziOBzOn0M_NpghDUiKQYKk3_DDn8TcwI",
  authDomain: "swe-graphical-password.firebaseapp.com",
  projectId: "swe-graphical-password",
  storageBucket: "swe-graphical-password.appspot.com",
  messagingSenderId: "78275528816",
  appId: "1:78275528816:web:379da07703a58460f08cb5",
  measurementId: "G-TT0D2G4EZK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();


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

function signUp(){
  var email = document.getElementById("email");
  var password = loginString;
  const promise = auth.createUserWithEmailAndPassword(email.value, password);

  promise.catch(e => alert(e.message));
  alert("Signup Successful!");
}

function signOut(){
  auth.signOut();
  alert("SignOut Successfully from System");
  window.location.href = 'login-page.html';
}

function  signIn(){
  var email = document.getElementById("email");
  var password  = loginString;
  const promise = auth.signInWithEmailAndPassword(email.value,password);
  promise.catch(e=>alert(e.message));
  
}

function reset(){
  loginString = "";
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);
    location.replace("main.html");

  }else{
    //alert("No Active user Found");
  }
})


/*
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
*/
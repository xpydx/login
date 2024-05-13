let pas;
let em;
let emai;
let nae;
let paa;
let paspass;
let eror = document.querySelector("#err");
let error = document.querySelector("#er");
let reg = document.getElementById("registation");
reg.style.display = "none";

function login() {
  em = document.getElementById("em").value;
  pas = document.getElementById("pa").value;
  if (em == "" || pas == "") {
    eror.innerHTML = "enter email or password";
  } else if (em == emai && pas === paa) {
    window.location.href = "intinya.html";
  } else {
    eror.innerHTML = "register";
  }
  event.preventDefault();
}

function register() {
  emai = document.getElementById("emaii");
  nae = document.getElementById("name");
  paa = document.getElementById("pa");
  paspass = document.getElementById("paa");
  if (paa == "" || emai == "" || nae == "" || paspass == "") {
    error.innerHTML = "enter all field";
  } else if (paspass !== paa) {
    //gfdvdgfvgbfdgvgfdghfkjsdklhfvjdhfhwufhufdv
    error.innerHTML = "password and confirm passwor not matching";
  } else {
    sessionStorage.setItem("storedname", document.getElementById("nae").value);
    alert("registration sucsesfully");
    let reg = document.getElementById("registation");
    reg.style.display = "none";
    let login = document.getElementById("hilang");
    login.style.display = "block";
  }
  event.preventDefault();
}
function navbar() {
  let reg = document.getElementById("registation");
  reg.style.display = "block";
  let login = document.getElementById("hilang");
  login.style.display = "none";
}
function welcome() {
  let welcomehome = (document.getElementById = "wel");
  welcomehome.innerHTML = "welcome";
}

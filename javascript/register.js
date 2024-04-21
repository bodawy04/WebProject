function sumbit() {
    let password = document.querySelector(".pass").value;
    let confPass = document.querySelector(".confPassword").value;
    let checkbox = document.querySelector("#checkbox").checked;
    let email = document.querySelector("#email").value;

    console.log(checkbox);

    if (
    password.length > 1 &&
    password.length < 8 &&
    confPass.length > 1 &&
    confPass.length < 8
    ) {
    alert("Password can't be less than 8 characters");
    } else if (password == "") {
    alert("Password can't be empty");
    } else if (password !== confPass) {
    alert("Passwords doesn't match");
    } else if (
    password === confPass &&
    password != "" &&
    password.length >= 8 &&
    confPass.length >= 8
    ) {
    save(checkbox);
    }}

function save(c) {
    let username = document.querySelector(".username").value;
    window.localStorage.setItem("username", username);

    let password = document.querySelector(".pass").value;
    window.localStorage.setItem("password", password);
    
    let email = document.querySelector("#email").value;
    window.localStorage.setItem("email", email);

    if (c == true) {
    window.localStorage.setItem("isAdmin", "true");
    window.localStorage.setItem("isVerified", "false");
    window.location.href = "/html/index.html";
    }
    else if (c == false) {
    window.localStorage.setItem("isAdmin", "false");
    window.localStorage.setItem("isVerified", "false");
    window.location.href = "/html/index.html";
    }}
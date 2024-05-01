if (localStorage.getItem("accounts") == null) {
  window.localStorage.setItem("accounts", "[]");
}

function sumbit() {
  let username = document.querySelector(".username").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".pass").value;
  let confPass = document.querySelector(".confPassword").value;
  let checkbox = document.querySelector("#checkbox").checked;

  // console.log(checkbox);

  function validEmail(e) {
    let regex = new RegExp(/.{5,15}@(gmail|yahoo).(com|net)/i);
    let result = regex.test(e);
    return result;
  }

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
  } else if (validEmail(email) == false) {
    alert("Invalid Email");
  } else if (
    password === confPass &&
    password != "" &&
    password.length >= 8 &&
    confPass.length >= 8 &&
    validEmail(email) == true
  ) {
    save(username, email, password, checkbox);
    window.location.href = "homeUser.html";
  }
}

function save(u, email, pass, c) {
  window.localStorage.setItem("username", u);
  if (c == true) {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.push([u, email, pass, "true"]);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    window.localStorage.setItem("isAdmin", "true");
  } else if (c == false) {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.push([u, email, pass, "false"]);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    window.localStorage.setItem("isAdmin", "false");
  }
}

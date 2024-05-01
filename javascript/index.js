let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;
  let checkAdmin = document.getElementById("checkbox").checked.toString();

  let accounts = JSON.parse(localStorage.getItem("accounts"));
  let resultArr;
  for (var i in accounts) {
    if (
      email == accounts[i][1] &&
      password == accounts[i][2] &&
      checkAdmin == accounts[i][3]
    )
      resultArr = accounts[i];
    // else alert("Try Again !");
  }
  console.log(resultArr == null);
  if (resultArr == null) window.alert("Try Again !");
  else window.location.href = "homeUser.html";
  if (resultArr[3] == "true") {
    localStorage.setItem("username", resultArr[0]);
    localStorage.setItem("isAdmin", "true");
  } else if (resultArr[3] == "false") {
    localStorage.setItem("username", resultArr[0]);
    localStorage.setItem("isAdmin", "false");
  }
  //   console.log(resultArr);
});

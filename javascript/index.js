let loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkAdmin = document.getElementById("checkbox").checked.toString();

    let savedEmail = localStorage.getItem('email');
    let savedPass = localStorage.getItem('password');
    let savedCheck = localStorage.getItem('isAdmin');

    if (savedEmail === email && savedPass === password && savedCheck === checkAdmin) {
        if (checkAdmin == "false")  {
        window.localStorage.setItem("isVerified", "true");
        window.location.href = "/html/user_recipes.html";
        }
        else{
        window.localStorage.setItem("isVerified", "true");
        window.location.href = "/html/adminrecipes.html";
        }
    } else {
        alert("something in the verification information. Please check them again.");
    }
    });
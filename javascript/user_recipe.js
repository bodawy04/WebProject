const storedData = JSON.parse(localStorage.getItem('rcpData'));  
let addRcp = document.querySelector(".addRcp");
let body = document.querySelector(".body");
let cancelBtn = document.querySelector(".cancelBtn");
let addRcpBtn = document.querySelector(".addRcpbtn");
let customedAlert = document.querySelector(".custAlert");
let recipeGrid = document.querySelector(".recipeGrid");
let addRcpFlag = false;

function goToRecipe(element) {
  const title = element.querySelector('.desc').textContent;
  localStorage.setItem('recipeTitle', title);
  window.location.href = "recipe.html"

}
function addNewRecipe(r) {
  let recipeTile = document.createElement("div");
  recipeTile.setAttribute("class", "recipeTile");
  recipeTile.setAttribute("onclick","goToRecipe(this)")

  let img = document.createElement("img");
  // console.log(reader.result)
  img.setAttribute("src", `${r[4]}`);
  img.setAttribute("class", `recipe-img`);
  recipeTile.appendChild(img);

  let recipeName = document.createElement("div");
  recipeName.setAttribute("class", "desc");
  recipeName.innerHTML = r[1];
  recipeTile.appendChild(recipeName);

  recipeGrid.appendChild(recipeTile);
}



let dataList = JSON.parse(localStorage.getItem("rcpData"));
console.log(dataList);
if (dataList != null && dataList.length > 0) {
  let empty = document.querySelector(".emptyRcps");
  recipeGrid.removeChild(empty);
  for (let i = 0; i < dataList.length; i++) {
    addNewRecipe(dataList[i]);
  }
}

  let log_outBtn = document.getElementById("log-out")

let isVerified = window.localStorage.getItem("isVerified")
if (isVerified === "true") {
    let username = window.localStorage.getItem("username")
    let username_contactPage = document.getElementById("username-contactPage")
    username_contactPage.innerHTML = username

    log_outBtn.style.display ="block"
    document.getElementById("log-in").style.display="none"
    document.getElementById("Register").style.display="none"

    log_outBtn.addEventListener("click" , function(){
        window.localStorage.setItem("isVerified", "false")
        document.getElementById("log-in").style.display="block"
        document.getElementById("Register").style.display="block"
        window.location.href = "/html/user_recipes.html"
    })
}else{
    log_outBtn.style.display ="none"
    let log_inBtn = document.getElementById("log-in")
    log_inBtn.style.cursor ="pointer"

    log_inBtn.addEventListener("click", function(){
    window.location.href="/html/index.html"
})
    let RegisterBtn = document.getElementById("Register")
    RegisterBtn.style.cursor ="pointer"
    RegisterBtn.addEventListener("click",function(){
    window.location.href="/html/register.html"
})} 
  
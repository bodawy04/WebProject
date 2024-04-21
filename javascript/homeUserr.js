// // const recipe = document.querySelector(".rep");

// function goToRecipe(element) {
//     // const title = element.querySelector('.rec-txt').textContent;
//     // localStorage.setItem('recipeTitle', title);
//     window.location.href = "recipe.html"

// }


// let username = document.querySelector(".displayName p");
//       username.innerHTML = localStorage.getItem("username");

//       let logout = document.querySelector(".displayName img");
//       logout.addEventListener("click", () => {
//         localStorage.removeItem("username");
//         localStorage.removeItem("isAdmin");
//         location.href = "/html/index.html";
//       });

//       let favList = document.querySelector(".fav");
//       let rcpLink = document.querySelector(".rcpLink");
//       if (localStorage.getItem("isAdmin") == "true") {
//         favList.style.display = "none";
//         rcpLink.addEventListener(
//           "click",
//           () => (location.href = "/html/admin_recipes.html")
//         );
//       } else if (localStorage.getItem("isAdmin") == "false") {
//         rcpLink.addEventListener(
//           "click",
//           () => (location.href = "/html/user_recipes.html")
//         );
//       }



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
  let len = Math.min(dataList.length, 4);
  for (let i = 0; i < len; i++) {
    addNewRecipe(dataList[i]);
  }
}

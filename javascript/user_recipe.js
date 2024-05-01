if (localStorage.getItem("favRcp") == null)
  window.localStorage.setItem("favRcp", "[]");
// const storedData = JSON.parse(localStorage.getItem('userData'));

// Serialize and store initial data in localStorage
//   localStorage.setItem('rcpData', JSON.stringify(rcpData));

//   Retrieve and parse data from localStorage
const storedData = JSON.parse(localStorage.getItem("rcpData"));
let addRcp = document.querySelector(".addRcp");
let body = document.querySelector(".body");
let cancelBtn = document.querySelector(".cancelBtn");
let addRcpBtn = document.querySelector(".addRcpbtn");
let customedAlert = document.querySelector(".custAlert");
let recipeGrid = document.querySelector(".recipeGrid");
let addRcpFlag = false;

//for adding in local stoarge

function goToRecipe(element) {
  const title = element.innerHTML;
  localStorage.setItem("recipeTitle", title);
  // console.log(title);
  window.location.href = "recipe.html";
}
function addNewRecipe(r) {
  let recipeTile = document.createElement("div");
  recipeTile.setAttribute("class", "recipeTile");
  recipeTile.style.cursor = "pointer";

  let img = document.createElement("img");
  // console.log(reader.result)
  img.setAttribute("src", `${r[4]}`);
  img.setAttribute("class", `recipe-img`);
  recipeTile.appendChild(img);

  let favIcon = document.createElement("div");
  favIcon.setAttribute("class", "favIcon");

  let icon = document.createElement("i");
  icon.setAttribute("class", "fa fa-heart");
  icon.setAttribute("style", "font-size: 20px");
  favIcon.appendChild(icon);
  recipeTile.appendChild(favIcon);

  let recipeName = document.createElement("div");
  recipeName.setAttribute("class", "desc");
  recipeName.setAttribute("onclick", "goToRecipe(this)");
  recipeName.innerHTML = r[1];
  recipeTile.appendChild(recipeName);

  recipeGrid.appendChild(recipeTile);
}

let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function () {
  let searchQuery = document.querySelector("#search").value.toLowerCase();
  let filteredRecipes = dataList.filter((recipe) => {
    return recipe[1].toLowerCase().includes(searchQuery); // Search in recipe name
  });

  // Clear the recipe grid before displaying search results
  recipeGrid.innerHTML = "";

  // Display filtered recipes
  if (filteredRecipes.length > 0) {
    for (let i = 0; i < filteredRecipes.length; i++) {
      addNewRecipe(filteredRecipes[i]);
    }
  } else {
    // If no matching recipes found, display a message
    recipeGrid.innerHTML = "<p>No matching recipes found.</p>";
  }
});

let dataList = JSON.parse(localStorage.getItem("rcpData"));
if (dataList != null && dataList.length > 0) {
  let empty = document.querySelector(".emptyRcps");
  recipeGrid.removeChild(empty);
  for (let i = 0; i < dataList.length; i++) {
    addNewRecipe(dataList[i]);
  }
}

let toFav = document.querySelectorAll(".favIcon");

toFav.forEach((button, index) => {
  button.addEventListener("click", function () {
    let oldData = JSON.parse(localStorage.getItem("favRcp"));
    oldData.push([dataList[index][1]]);
    localStorage.setItem("favRcp", JSON.stringify(oldData));
    location.reload();
  });
});

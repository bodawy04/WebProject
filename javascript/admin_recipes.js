//customized dialogue box
if (localStorage.getItem("rcpData") == null) {
  window.localStorage.setItem("rcpData", "[]");
}

let addRcp = document.querySelector(".addRcp");
let body = document.querySelector(".body");
let cancelBtn = document.querySelector(".cancelBtn");
let addRcpBtn = document.querySelector(".addRcpbtn");
let customedAlert = document.querySelector(".custAlert");
let recipeGrid = document.querySelector(".recipeGrid");
let addRcpFlag = false;
addRcp.addEventListener("click", function () {
  body.style.opacity = "0.2";
  customedAlert.style.display = "block";
  customedAlert.style.opacity = "1";
  addRcpFlag = true;
});
cancelBtn.addEventListener("click", function () {
  body.style.opacity = "1";
  customedAlert.style.display = "none";
  addRcpFlag = false;
});

//for adding in local stoarge
let rcpNameField = document.querySelector("#rcpName");
let rcpDescField = document.querySelector("#rcpDesc");

addRcpBtn.addEventListener("click", function () {
  console.log(rcpNameField.value);
  console.log(rcpDescField.value);
  let oldData = JSON.parse(localStorage.getItem("rcpData"));
  oldData.push([rcpNameField.value, rcpDescField.value]);
  localStorage.setItem("rcpData", JSON.stringify(oldData));
  location.reload();
});

//for saving items

let oldData = JSON.parse(localStorage.getItem("rcpData"));
oldData.push([rcpNameField.value, rcpDescField.value]);

function addNewRecipe(r) {
  let recipeTile = document.createElement("div");
  recipeTile.setAttribute("class", "recipeTile");

  let img = document.createElement("img");
  img.setAttribute("src", "../images/1.jpg.webp");
  recipeTile.appendChild(img);

  let recipeName = document.createElement("div");
  recipeName.setAttribute("class", "desc");
  recipeName.innerHTML = r[0];
  recipeTile.appendChild(recipeName);

  let recipeSettings = document.createElement("div");
  recipeSettings.setAttribute("class", "settings");

  let settings = document.createElement("img");
  settings.setAttribute("src", "../images/ellipsis-vertical-solid.svg");
  settings.setAttribute("class", "settingsIcon");
  settings.setAttribute("style", "width: 25px");
  recipeSettings.appendChild(settings);

  let settingsContent = document.createElement("div");
  settingsContent.setAttribute("class", "settings-content");

  let editH4 = document.createElement("h4");
  editH4.setAttribute("class", "edit");
  editH4.innerHTML = "Edit";
  settingsContent.appendChild(editH4);
  let deleteH4 = document.createElement("h4");
  deleteH4.setAttribute("class", "delete");
  deleteH4.innerHTML = "Delete";
  settingsContent.appendChild(deleteH4);

  recipeSettings.appendChild(settingsContent);

  recipeTile.appendChild(recipeSettings);

  recipeGrid.appendChild(recipeTile);
}

let dataList = JSON.parse(localStorage.getItem("rcpData"));
if (dataList != null && dataList.length > 0) {
  let empty = document.querySelector(".emptyRcps");
  recipeGrid.removeChild(empty);
  for (let i = 0; i < dataList.length; i++) {
    addNewRecipe(dataList[i]);
  }
}

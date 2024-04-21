// Retrieve and parse data from localStorage

if (localStorage.getItem("rcpData") == null) {
  window.localStorage.setItem("rcpData", "[]");
  const rcpData = [
    [
      1,
      "Um Ali",
      "Dessert",
      "Ingredients 1 sheet frozen puff pastry, thawed ¼ cup raisins ¼ cup slivered almonds ¼ cup pine nuts ¼ cup chopped pistachio nuts ¼ cup sweetened, flaked coconut 5 cups milk 1 cup white sugar 1 teaspoon vanilla extract Directions Preheat the oven to 400 degrees F (200 degrees C). Unroll 1 puff pastry sheet onto a lightly floured surface and roll out to about 17x12-inches. Place on a baking tray. Bake in the preheated oven until puffed and golden brown, about 15 minutes. Break puff pastry into pieces and place in a large bowl. Add raisins, almonds, pine nuts, pistachios, and coconut; toss until well combined. Spread evenly in a 9x13-inch glass baking dish. Pour milk into a saucepan; stir in sugar and vanilla. Cook over medium-high heat, stirring occasionally, until hot but not quite boiling. Pour over puff pastry mixture in the baking dish. Return to the oven and bake for 15 minutes. Turn on the broiler and continue baking until the top is browned, about 2 minutes. Let stand for 5 minutes before serving warm.  ",
      "../images/omAli.png",
    ],
    [
      2,
      "Lasagna",
      "Main Course",
      "Ingredients The Allrecipes community adores this lasagna recipe because it's incredibly customizable, so you can easily alter the ingredient list to suit your needs. If you want to stay true to the original recipe, though, these are the ingredients you'll need to add to your grocery list: Meat: This super meaty lasagna has sweet Italian sausage and lean ground beef. Onion and garlic: An onion and two cloves of garlic are cooked with the meat to add tons of flavor. Tomato products: You'll need a can of crushed tomatoes, two cans of tomato sauce, and two cans of tomato paste. Sugar: Two tablespoons of white sugar add subtle sweetness and enhance the flavor of the sauce. Spices and seasonings: This lasagna recipe is flavored with fresh parsley, dried basil leaves, salt, Italian seasoning, fennel seeds, and black pepper. Lasagna noodles: Use store-bought or homemade lasagna noodles. Cheeses: Parmesan, mozzarella, and ricotta cheese make this lasagna extra decadent. Egg: An egg helps bind the ricotta so it doesn't ooze out of the lasagna when you cut into it.",
      "../images/lassagna.png",
    ],
    [
      3,
      "Pizza",
      "Main Course",
      "Ingredients for 16 servings 2 ½ cups warm water(600 mL) 1 teaspoon sugar 2 teaspoons active dry yeast 7 cups all-purpose flour(875 g), plus more for dusting 6 tablespoons extra virgin olive oil, plus more for greasing 1 ½ teaspoons kosher salt ¼ cup semolina flour(30 g) OPTIONAL TOPPINGS TOMATO SAUCE 28 oz canned whole tomatoes(795 g) 1 tablespoon kosher salt MARGHERITA tomato sauce fresh mozzarella cheese, torn into small pieces fresh basil leaf TASTY’S BIANCA extra virgin olive oil fresh mozzarella cheese, torn into small pieces ricotta cheese fresh basil pesto dried oregano PEPPERONI tomato sauce fresh mozzarella cheese, torn into small pieces spicy pepperoni slice freshly grated parmesan cheese",
      "../images/1.jpg.webp",
    ],
    [
      4,
      "Molten Cake",
      "Dessert",
      "Ingredients 6 ounces bittersweet chocolate, preferably 66% cacao Valrhona, chopped (about 1 cup plus 1 1/2 tablespoons) 1/2 cup unsalted butter (4 ounces), cubed, plus more for greasing the ramekins 2 large eggs, room temperature 2 large egg yolks, room temperature 1/4 cup sugar 1/4 teaspoon kosher salt 2 tablespoons all-purpose flour, plus more for dusting the ramekins",
      "../images/Chocolate-Lava-Cake-Recipe.png",
    ],
  ];
  localStorage.setItem("rcpData", JSON.stringify(rcpData));

  const storedData = JSON.parse(localStorage.getItem("userData"));
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
let rcpID = document.querySelector("#rcpID");
let rcpPlate = document.querySelector("#rcpPlate");
let uploadButton = document.getElementById("upload-button");
let choosenImage = document.getElementById("choosen-image");
const fileName = document.getElementById("file-name");

let reader;
uploadButton.onchange = () => {
  reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    choosenImage.setAttribute("src", reader.result);
  };
};

addRcpBtn.addEventListener("click", function () {
  let oldData = JSON.parse(localStorage.getItem("rcpData"));
  oldData.push([
    rcpID.value,
    rcpNameField.value,
    rcpPlate.value,
    rcpDescField.value,
    reader.result,
  ]);
  localStorage.setItem("rcpData", JSON.stringify(oldData));
  location.reload();
});

//for saving items

// let oldData = JSON.parse(localStorage.getItem("rcpData"));
// oldData.push([rcpNameField.value, rcpDescField.value]);

// function goToRecipe(element) {
//   const title = element.querySelector('.desc').textContent;
//   localStorage.setItem('recipeTitle', title);
//   window.location.href = "recipe.html"

// }
function goToRecipe(element) {
  const title = element.textContent;
  localStorage.setItem("recipeTitle", title);
  window.location.href = "recipe.html";
}
function addNewRecipe(r) {
  let recipeTile = document.createElement("div");
  recipeTile.setAttribute("class", "recipeTile");

  let img = document.createElement("img");
  // console.log(reader.result)
  img.setAttribute("src", `${r[4]}`);
  img.setAttribute("class", `recipe-img`);
  recipeTile.appendChild(img);

  let recipeName = document.createElement("div");
  recipeName.setAttribute("class", "desc");
  recipeName.innerHTML = r[1];
  recipeTile.appendChild(recipeName);
  recipeName.setAttribute("onclick", "goToRecipe(this)");

  let recipeSettings = document.createElement("div");
  recipeSettings.setAttribute("class", "settings");

  let settings = document.createElement("img");
  settings.setAttribute("src", "../images/ellipsis-vertical-solid.svg");
  settings.setAttribute("class", "settingsIcon");
  settings.setAttribute("style", "width: 25px;height:25px");
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

let customedAlert2 = document.querySelector(".custAlert2");
let editRcpBtn = document.querySelectorAll(".settings-content .edit");
let editAlertBtn = document.querySelector(".edit .editRcpbtn");
let deleteRcpBtn = document.querySelectorAll(".settings-content .delete");
let cancelBtn2 = document.querySelector(".cancelBtn2");
let editRcpFlag = false;

editRcpBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Display recipe details here
    displayRecipeDetails(dataList[index], index);
    // Show the edit form
    body.style.opacity = "0.2";
    customedAlert2.style.display = "block";
    customedAlert2.style.opacity = "1";
    editRcpFlag = true;
  });
});

deleteRcpBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    let oldData = JSON.parse(localStorage.getItem("rcpData"));

    oldData.splice(index, 1);

    localStorage.setItem("rcpData", JSON.stringify(oldData));
    location.reload();
  });
});

// editRcpBtn.addEventListener("click", function () {
//   body.style.opacity = "0.2";
//   customedAlert2.style.display = "block";
//   customedAlert2.style.opacity = "1";
//   editRcpFlag = true;
// });
cancelBtn2.addEventListener("click", function () {
  body.style.opacity = "1";
  customedAlert2.style.display = "none";
  editRcpFlag = false;
});

function displayRecipeDetails(recipe, i) {
  let editRcpName = document.querySelector("#editRcpName");
  let editRcpID = document.querySelector("#editRcpID");
  let editRcpPlate = document.querySelector("#editRcpPlate");
  let editRcpDesc = document.querySelector("#editRcpDesc");

  editRcpName.value = recipe[1];
  editRcpID.value = recipe[0];
  editRcpPlate.value = recipe[2];
  editRcpDesc.value = recipe[3];

  editAlertBtn.addEventListener("click", function () {
    let oldData = JSON.parse(localStorage.getItem("rcpData"));

    oldData.splice(i, 1);

    oldData.push([
      editRcpID.value,
      editRcpName.value,
      editRcpPlate.value,
      editRcpDesc.value,
    ]);
    // console.log(tmp);

    localStorage.setItem("rcpData", JSON.stringify(oldData));
    location.reload();
  });
}

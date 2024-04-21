
  // const storedData = JSON.parse(localStorage.getItem('userData'));
  
  
  // Serialize and store initial data in localStorage
//   localStorage.setItem('rcpData', JSON.stringify(rcpData));
  
//   Retrieve and parse data from localStorage
  const storedData = JSON.parse(localStorage.getItem('rcpData'));  
  let addRcp = document.querySelector(".addRcp");
  let body = document.querySelector(".body");
  let cancelBtn = document.querySelector(".cancelBtn");
  let addRcpBtn = document.querySelector(".addRcpbtn");
  let customedAlert = document.querySelector(".custAlert");
  let recipeGrid = document.querySelector(".recipeGrid");
  let addRcpFlag = false;

  
  //for adding in local stoarge
  
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
    // let recipeGrid = document.querySelector(".recipeGrid")
    let empty = document.querySelector(".emptyRcps");
    recipeGrid.removeChild(empty);
    for (let i = 0; i < dataList.length; i++) {
      addNewRecipe(dataList[i]);
    }
  }
  
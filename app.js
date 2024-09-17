window.onload = function () {
  fetch("https://<AWS_BASE_URL>/prod/recipies")
    .then((response) => response.json())
    .then((data) => {
      const recipeList = document.getElementById("recipeList");
      const recipes = JSON.parse(data.body);
      recipes.forEach((recipe) => {
        const recipeItem = document.createElement("div");
        recipeItem.textContent = `${recipe.name}: ${recipe.instructions}`;
        recipeList.appendChild(recipeItem);
      });
    });
};

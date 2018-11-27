function Recipe(recipeTitle, servings, ingredients, directions) {
    this.recipeTitle = recipeTitle;
    this.servings = servings
    this.ingredients = ingredients;
    this.directions = directions;
}

// Add Let's cook as protoype
Recipe.prototype.letsCook = function() {
    console.log(" I'm hungry! Let's cook this " + this.recipeTitle);
}

// Calc
let recipe = new Recipe(
    "Pepperoni Pizza", 4, ["Cheese", "Peta", "Ham", "Nan Bread"],
    "Add ingredients to nan bread and cook in oven for 10 minutes"
);


recipe.letsCook();
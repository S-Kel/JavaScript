// Object referring to itself using this.

// Mozzila docdevelopment
let recipes = {
    recipeTitle: "Pepperoni Pizza",
    servings: 4,
    ingredients: ["Cheese", "Peta", "Ham", "Nan Bread"],
    directions: "Add ingredients to nan bread and cook in oven for 10 minutes",
    letsCook: function() {
        console.log("I'm hungry! Let's cook..." + this.recipeTitle);

    }
};

// Display information about recipe
// console.log(recipes.recipeTitle);
// console.log(recipes.servings);

for (let recipe in recipes) {
    console.log(recipes[recipe]);
}
recipes.letsCook();
const oneCupRecipe = {
    Water = 200,
    Milk = 50,
    TeaLeaves = 1,
    Sugar = 2
}


function calculateChaiIngredients(numberOfCups) {
    const recipe = {};

for (const key in oneCupRecipe) {
    recipe(oneCupRecipe[key] * numberOfCups);

} 
console.log(`To make ${numberofCups} of Kenyan Chai, you will need:`);
console.log(`Water: &{recipe.Water} ml`);
console.log(`Milk: &{recipe.Milk} ml`);
console.log(`Tea Leaves (Majani): &{recipe.TeaLeaves} ml`);
}




const cups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(cups);




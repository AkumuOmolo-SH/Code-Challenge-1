const oneCupRecipe = {
    Water : 200, //ml
    Milk : 50,  //ml
    TeaLeaves : 1, //tablespoon
    Sugar : 2  //tablespoon
}

function calculateChaiIngredients(numberOfCups) { //calculates total ingredients based on no. of cups
    const recipe = {};//stores total amounts

for (const key in oneCupRecipe) { //Loops through the ingredients in the oneCupRecipe
    recipe[key]=(oneCupRecipe[key] * numberOfCups); 

} 
//Shows results in a clear, readable format
console.log(`To make ${numberOfCups} of Kenyan Chai, you will need:`);
console.log(`Water: ${recipe.Water} ml`);
console.log(`Milk: ${recipe.Milk} ml`);
console.log(`Tea Leaves (Majani): ${recipe.TeaLeaves} tablespoons`);
console.log("\nEnjoy your Chai Bora!");
}

const cups = prompt("Karibu! How many cups of Chai Bora would you like to make?");// Prompts the user to input how many cups
const numberOfCups = parseInt(cups); //converts input to number.

if (numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter number of cups.");
}



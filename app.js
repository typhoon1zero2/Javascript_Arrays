/*
Exercise 1:
  - Define an empty array named foods
*/

const foods = [];
console.log("Exercise 1 Result: ", foods);
/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
	- Hint use the push method
*/
foods.push("pizza", "cheeseburger");
console.log("Exercise 2 Result: ", foods);
/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
	- How do you add things to the front of an array, push wont work so what do you do?
*/
foods.unshift("taco");
console.log("Exercise 3 Result: ", foods);
/*
Exercise 4:
  - Access the string 'pizza' with bracket notation (based upon its known position) in the foods array and assign to a variable named favFood.
	- You should end up with a variable called favorite food that is equal to 'pizza'
*/
let favFood = foods [1];
console.log("Exercise 4 Result: ", foods);
/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
	- How do we add stuff to the middle of the array at a specific spot cant use push, cant use unshift
*/
foods.splice(2,0, 'tofu');
console.log('Exercise 5 Result: ', foods);
/*
Exercise 6:
  - Remove the string 'pizza' in the foods array and replace it with the separate strings 'sushi' & 'cupcake'.
	- Hmm tricky, think about what the end result should be.... yes Arthur talked about this in class. What is the intended result, pizza will be gone and instead, now sushi & cupcake will be in their instead
*/
foods.splice(1,1, "sushi", "cupcake");
console.log('Exercise 6 Result: ', foods);
/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
	- You should have a food array and a yummy array now.
*/
const yummy = foods.slice(1,3);
console.log('Exercise 7 Result: ', yummy);
/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
	- Easiest question yet don't overthink it trust me.
*/
soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 Result: ', soyIdx);
/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
	- Easier than it sounds.... google it
*/
let allFoods = foods.join(" -> ");
console.log('Exercise 9 Result: ', allFoods);
/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/
let hasSoup = foods.includes('soup');
console.log('Exercise 10 Result: ', hasSoup);

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

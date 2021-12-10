/*HOISTING advantages of hoisting is that it lets you use a function before
 you declare it in your code.*/

//Function declarations
// hoisted(); // Output: "This function has been hoisted."
// function hoisted() {
//   console.log("This function has been hoisted.");
// }

//Function expressions
//Function expressions, however are not hoisted.

// expression(); //Output: "TypeError: expression is not a function
// const expression = function () {
//   console.log("Will this work?");
// };

//Let’s try the combination of a function declaration and expression.

// expression(); // Ouput: TypeError: expression is not a function

// const expression = function hoisting() {
//   console.log("Will this work?");
// };

//class declarations
// class Hobbit {
//   constructor(height, weight) {
//     this.height = height;
//     this.weight = weight;
//   }
// }

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;
// console.log(Frodo); // Output: { height: 100, weight: 300 }

//Class expressions
// var Square = new Polygon();
// Square.height = 10;
// Square.width = 10;
// console.log(Square); // Output: TypeError: Polygon is not a constructor

// var Polygon = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// const foo = () => {
//   a = 2;
// };
// console.log(foo());
// console.log(a);

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

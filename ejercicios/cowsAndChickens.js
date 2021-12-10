//write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens
//after them and zeros padded before both numbers so that they are always three digits long.

// const cowsAndChickens = (cows, chickens) => {
//   let cowString = String(cows);
//   let chickenString = String(chickens);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// };
// cowsAndChickens(100, 12);

const farm = (chicken, cow) => {
  let chickenString = String(chicken);
  let cowString = String(cow);
  while (chickenString.length < 3) {
    chickenString = "0" + chicken;
  }
  console.log(`${chickenString} chickens`);

  while (cowString.length < 3) {
    cowString = "0" + cow;
  }
  console.log(`${cowString} cows`);
};
farm(10, 100);

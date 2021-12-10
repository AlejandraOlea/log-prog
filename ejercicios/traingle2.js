// const triangle = (number) => {
//   let result = "";
//   for (let i = 0; i < number; i++) {
//     result += "*";
//     console.log(result);
//   }
// };
// console.log(triangle(7));

const triangle = (number) => {
  for (let line = "#"; line.length < number; line += "#") {
    console.log(line);
  }
};
triangle(7);

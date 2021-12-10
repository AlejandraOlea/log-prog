const range = (start, end, step = 1) => {
  let result = [];
  for (let i = start; i <= end; i += step) result.push(i);

  let sum = result.reduce((a, b) => a + b);
  return { result, sum };
};
console.log(range(1, 10, 4));

function fn() {
  return "I am a result. Rarr";
}
console.log(`foo ${fn()} bar`);
//=> foo I am a result. Rarr bar.

//https://www.youtube.com/watch?v=k7-N8R0-KY4
let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
};
countDownFrom(10);

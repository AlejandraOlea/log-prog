//How many measurements are larger than the previous measurement?

//199 (N/A - no previous measurement)
// 200 (increased)
// 208 (increased)
// 210 (increased)
// 200 (decreased)
// 207 (increased)
// 240 (increased)
// 269 (increased)
// 260 (decreased)
// 263 (increased)

let data = [200, 208, 210, 200, 207, 240, 269, 260, 263];

const meassurements = (data) => {
  console.log(data[data.length - 1] - [data.length - 2]);
};
meassurements(data);

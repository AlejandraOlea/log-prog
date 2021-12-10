const laMedia = (arr) => {
  let suma = arr.reduce((a, b) => {
    return a + b;
  });
  return suma / arr.length;
};

module.exports = laMedia;

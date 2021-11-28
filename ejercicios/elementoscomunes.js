//Dados dos arrays devolver solamente uno con los elementos comunes entre ambos

const eleComunes = (array1, array2) => {
  return array1.filter((element) => array2.includes(element));
};
// console.log(eleComunes([6, 7, 8, 2], [1, 2, 3, 4]));
console.log(eleComunes(["cat", "dog", "fish"], ["cat", "fox", "lyon"]));

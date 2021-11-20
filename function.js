const arr1 = [1, 2, 3, 4];
const arr2 = [10, 11, 12, 13];

const map1 = arr1.map(function (x, i) {
  return x + arr2[i];
});

console.log(map1);

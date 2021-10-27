const sum = function (x, y) {
  console.log(arguments);
  return arguments[0] + arguments[1];
};

const a = sum(1, 3);
const b = sum(4, 12);

console.log(sum(7, 3));

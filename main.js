import random from "./getRandom.js";

const a = random();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 1:
    console.log("a is 1");
    break;
  case 2:
    console.log("a is 2");
    break;
  default:
    console.log("rest...");
}

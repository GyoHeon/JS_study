import random from "./getRandom.js";

const a = random();

if (a === 0) {
  console.log("a is 0");
} else if (a === 1) {
  console.log("a is 1");
} else if (a === 2) {
  console.log("a is 2");
} else {
  console.log("rest...");
}

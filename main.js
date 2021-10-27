const timer = setInterval(() => {
  console.log("Heropy!");
}, 2000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearInterval(timer);
});

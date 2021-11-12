const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "grey";
}
function handleWindowCopy() {
  alert("copier!");
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

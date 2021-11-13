const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleh1Click);

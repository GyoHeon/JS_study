const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  //const username = loginInput.value;
  console.log(event);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

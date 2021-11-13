const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit(data) {
  data.preventDefault();
  //const username = loginInput.value;
  console.log(data);
}

loginForm.addEventListener("submit", onLoginSubmit);

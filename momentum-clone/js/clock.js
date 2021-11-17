const clock = document.querySelector("h2#clock");

const date = new Date();

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
default
getClock();
setInterval(getClock, 1000);

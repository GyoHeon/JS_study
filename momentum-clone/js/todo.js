const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

let inp = document.querySelector(".input-field");
let list = document.querySelector(".to-do");
let addTask = document.querySelector(".btn");
let taskClear = document.querySelector(".btnClear");
let todo = [];

function render(elemments) {
  list.innerHTML = "";
  elemments.forEach(e => {
    let newEl = document.createElement("li");
    newEl.innerHTML = e;
    newEl.classList.add("list-group-item");
    list.appendChild(newEl);
  });
}

addTask.addEventListener("click", e => {
  if (inp.value !== "") {
    todo.push(inp.value);
    inp.value = "";
    render(todo);
    taskClear.style.display = "block";
    localStorage.setItem("mylist", JSON.stringify(todo));
  } else {
    alert("Please input your task");
  }
});

let saved = localStorage.getItem("mylist");
if (saved) {
  todo = JSON.parse(localStorage.getItem("mylist"));
  render(todo);
} else {
  taskClear.style.display = "none";
}

taskClear.addEventListener("click", function() {
  localStorage.clear();
  list.innerHTML = "";
  todo = [];
  taskClear.style.display = "none";
});

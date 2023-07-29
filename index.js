function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    newTask.classList.add("custom-li");
    taskList.appendChild(newTask);
    taskInput.value = "";

    newTask.addEventListener("click", toggleCrossedOut);
  }
  saveTaksListCookies();
}

function toggleCrossedOut(event) {
  event.target.classList.toggle("crossed-out");
}
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keypress", handleKeyPress);
function clearTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}

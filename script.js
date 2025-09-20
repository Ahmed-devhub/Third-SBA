const form = document.getElementById("Form");
const taskInputForm = document.getElementById("enterTask");
const taskListForm = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  li.textContent = taskInputForm.value;
  taskListForm.appendChild(li);

  taskInputForm.value = "";
});
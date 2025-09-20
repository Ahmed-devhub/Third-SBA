const form = document.getElementById("Form");
const taskInputForm = document.getElementById("enterTask");
const taskListForm = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  li.textContent = taskInputForm.value;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "X";
  deleteTaskButton.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteTaskButton);
  taskListForm.appendChild(li);

  taskInputForm.value = "";
});
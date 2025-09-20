const form = document.getElementById("Form");
const taskInputForm = document.getElementById("enterTask");
const taskListForm = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (taskInputForm.value.trim().length < 3) {
    alert("Task must be at least 3 characters long");
    return;
  }

  if (taskInputForm.value[0].toUpperCase() !== taskInputForm.value[0]) {
    alert("First letter needs to be capital");
    return;
  }

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
  const clonedTask = li.cloneNode(true);
  clonedTask.textContent = "Cloned: " + taskInputForm.value;
  taskListForm.appendChild(clonedTask);
  taskInputForm.value = "";
  setTimeout(() => {
    alert("New Task Added Successfully");
  }, 500);
  const taskList = document.querySelectorAll("li");
  for (let task of taskList) {
    console.log(task.textContent);
  }
});

const footer = document.querySelector("footer");
const screenInfo = document.createElement("p");
footer.append(screenInfo);

function updateScreenSize() {
  screenInfo.textContent = `Screen size: ${innerWidth} x ${innerHeight}`;
}

updateScreenSize();
window.addEventListener("resize", updateScreenSize);

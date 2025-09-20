const taskInputForm = document.getElementById("enterTask")
const taskListForm = document.querySelector("ul")
const form = document.getElementById("Form")
const footer = document.querySelector("footer")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(taskInputForm.value.trim().length < 3){
        alert("Task must be at aleast 3 characters long")
        return
    }
    if(taskInputForm.value[0].toUpperCase() !== taskInputForm.value[0]){
        alert("First letter need to be capital")
        return
    }
    const li = document.createElement("li");
    li.addEventListener("click",(event)=>{
        li.classList.toggle("done")
        clonedTask.classList.toggle("done")
    })
    const deleteTaskButton = document.createElement("button") 
    deleteTaskButton.textContent = "X"
    deleteTaskButton.style.color = "red"
    deleteTaskButton.style.border = "2px solid black"
    deleteTaskButton.addEventListener("click",(event)=>{
        event.stopPropagation();
        li.remove();
        clonedTask.remove();
    })
    li.textContent = taskInputForm.value
    li.append("\t")
    li.append(deleteTaskButton)
    taskListForm.append(li)
    const clonedTask = li.cloneNode(true);
    clonedTask.textContent = "Cloned: " + taskInputForm.value;
    taskListForm.append(clonedTask);
    taskInputForm.value = "";
    setTimeout(() => {
        alert("New Task Added Successfully")
    }, 500)
    const taskList = document.querySelectorAll("li")
    for(let task of taskList){
        console.log(task.textContent)
    }
})

const screenInfo = document.createElement("p")
footer.append(screenInfo)

function updateScreenSize(){
    screenInfo.textContent = `Screen size: ${innerWidth} X ${innerHeight}`
}

updateScreenSize()
window.addEventListener(("resize"),updateScreenSize)

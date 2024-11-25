// document body styles 
const body = document.querySelector("body");

body.style.backgroundColor = "#000000";
body.style.display = "flex";
body.style.flexDirection = "flex-row";
body.style.justifyContent = "center";
body.style.alignItems = "center";

// Main-Container 
const mainContainer = document.createElement("div");

document.body.append(mainContainer);
mainContainer.id = "main-Container";
mainContainer.style.height = "auto";
mainContainer.style.paddingBottom = "40px";
mainContainer.style.width = "350px";
mainContainer.style.backgroundColor = "white";
mainContainer.style.marginTop = "100px";
mainContainer.style.borderRadius = "10px";

// title-container
const titleContainer = document.createElement("div");

titleContainer.style.display = "flex";
titleContainer.style.flexDirection = "flex-row";
titleContainer.style.gap = "10px";
titleContainer.style.marginLeft = "20px";
mainContainer.append(titleContainer);

// title-continer-todoText
const todoText = document.createElement("p");
const img = document.createElement("img");
titleContainer.append(todoText, img);

// Style for ToDo Text
todoText.style.fontSize = "20px";
todoText.style.color = "blue";
todoText.style.fontWeight = "bold";
todoText.style.fontFamily = "cursive";
todoText.textContent = "TO-DO List";
todoText.style.order = "2";

// Style for img 
img.src = "./todo-img.jpg";
img.style.width = "50px";
img.style.height = "50px";
img.style.paddingTop = "10px";
img.style.order = "1";

// task-container
const taskContainer = document.createElement("div");
mainContainer.append(taskContainer);

// Style for taskContainer
taskContainer.style.display = "flex";
taskContainer.style.flexDirection = "row";
taskContainer.style.marginLeft = "30px";
taskContainer.style.marginTop = "20px";

const inputTask = document.createElement("input");
const taskAdd = document.createElement("button");

taskContainer.append(inputTask, taskAdd);

// Style for input
inputTask.style.padding = "10px";
inputTask.style.borderRadius = "20px";
inputTask.style.height = "20px";
inputTask.style.width = "250px";
inputTask.placeholder = "Add your task";
inputTask.style.textIndent = "10px";
inputTask.style.color = "#4169E1";
inputTask.style.fontSize = "15px";
inputTask.style.outline = "none";
inputTask.style.border = "none";
inputTask.style.backgroundColor = "#F2F2F2";

// Style for taskAdd button
taskAdd.textContent = "Add";
taskAdd.style.paddingLeft = "25px";
taskAdd.style.paddingRight = "25px";
taskAdd.style.borderRadius = "20px";
taskAdd.style.backgroundColor = "#4169E1";
taskAdd.style.color = "white";
taskAdd.style.border = "none";
taskAdd.style.cursor = "pointer";
taskAdd.style.position = "relative";
taskAdd.style.right = "30px";

taskAdd.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#1E90FF";
});

taskAdd.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#4169E1";
});

// User-Task-Container
const userTaskContainer = document.createElement("div");
userTaskContainer.id = "userTaskContainer";
userTaskContainer.style.marginTop = "10px";
mainContainer.append(userTaskContainer);

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(task => createTaskElement(task.content, task.checked));
    }
});

// Function to create task elements
const createTaskElement = (taskContent, isChecked = false) => {
    const tasks = document.createElement("div");
    const tasksContent = document.createElement("p");
    const checkBox = document.createElement("input");
    const deleteTask = document.createElement("button");

    userTaskContainer.append(tasks);
    tasks.id = "tasks";
    tasks.append(checkBox, tasksContent, deleteTask);

    tasks.style.display = "flex";
    tasks.style.flexDirection = "row";
    tasks.style.alignItems = "center";
    tasks.style.paddingLeft = "10px";
    tasks.style.gap = "5px";
    tasks.style.marginLeft = "40px";
    tasks.style.marginRight = "40px";

    checkBox.type = "checkbox";
    checkBox.style.cursor = "pointer";
    checkBox.checked = isChecked;

    tasksContent.textContent = taskContent.trim();
    tasksContent.style.position = "relative";
    tasksContent.style.bottom = "1px";

    deleteTask.textContent = "x";
    deleteTask.style.color = "#4169E1";
    deleteTask.style.backgroundColor = "transparent";
    deleteTask.style.border = "none";
    deleteTask.style.fontSize = "20px";
    deleteTask.style.cursor = "pointer";
    deleteTask.style.marginLeft = "auto";

    // Add event listener for checkbox
    checkBox.addEventListener("change", (e) => {
        if (e.target.checked) {
            tasksContent.innerHTML = `<del>${taskContent}</del>`;
            tasksContent.style.color = "#4169E1";
        } else {
            tasksContent.style.color = "black";
            tasksContent.textContent = taskContent;
        }
        saveTasks(); // Save tasks after checkbox change
    });

    // Add event listener for delete button
    deleteTask.addEventListener("click", () => {
        tasks.remove();
        saveTasks(); // Save tasks after deletion
    });
};

// Function to save tasks to localStorage
const saveTasks = () => {
    const tasks = [];
    userTaskContainer.querySelectorAll("#tasks").forEach(task => {
        const taskContent = task.querySelector("p").textContent;
        const isChecked = task.querySelector("input[type='checkbox']").checked;
        tasks.push({ content: taskContent, checked: isChecked });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Function to create task
const createTask = () => {
    if (inputTask.value === "") {
        inputTask.style.border = "1px double red";
        inputTask.placeholder = "Please enter your task here";
    } else {
        inputTask.style.border = "none";
        inputTask.placeholder = "Add your task";
        createTaskElement(inputTask.value);
        inputTask.value = ""; // Clear input after creating task
        saveTasks(); // Save tasks after creation
    }
};

// Task add button event listener
taskAdd.addEventListener("click", createTask);

// Ensure tasks are saved when page is unloaded
window.addEventListener("beforeunload", () => {
    saveTasks();
});

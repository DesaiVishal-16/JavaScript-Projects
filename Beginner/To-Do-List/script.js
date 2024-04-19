const body = document.querySelector("body")

body.style.backgroundColor="#000000"
body.style.display="flex"
body.style.flexDirection="flex-row"
body.style.justifyContent="center"
body.style.alignItems="center"

const mainContainer = document.createElement("div")

document.body.append(mainContainer)
mainContainer.id="main-Container"
mainContainer.style.height="auto"
mainContainer.style.paddingBottom="40px"
mainContainer.style.width="350px"
mainContainer.style.backgroundColor="white"
mainContainer.style.marginTop="100px"
mainContainer.style.borderRadius="10px"


const titleContainer = document.createElement("div")
const taskContainer = document.createElement("div")
mainContainer.append(titleContainer,taskContainer)

//Style for titleContainer

titleContainer.style.display="flex"
titleContainer.style.flexDirection="flex-row"
titleContainer.style.gap="10px"
titleContainer.style.marginLeft="20px"

const todoText = document.createElement("p")
const img = document.createElement("img");
titleContainer.append(todoText,img)

//style for ToDo Text
todoText.style.fontSize="20px"
todoText.style.color="blue"
todoText.style.fontWeight="bold"
todoText.style.fontFamily="cursive"
todoText.textContent="TO-DO List"
todoText.style.order="2"

//Style for img 
img.src="./todo-img.jpg"
img.style.width="50px"
img.style.height="50px"
img.style.paddingTop="10px"
img.style.order="1"


// Style for taskContainer
taskContainer.style.display="flex"
taskContainer.style.flexDirection="row"
taskContainer.style.marginLeft="30px"
taskContainer.style.marginTop="20px"

const inputTask = document.createElement("input")
const taskAdd =  document.createElement("button")

taskContainer.append(inputTask,taskAdd)

//Style for input
inputTask.style.padding="10px"
inputTask.style.borderRadius="20px"
inputTask.style.height="20px"
inputTask.style.width="250px"
inputTask.placeholder="Add your task"
inputTask.style.textIndent="10px"
inputTask.style.color="#4169E1"
inputTask.style.fontSize="15px"
inputTask.style.outline="none"
inputTask.style.border="none"
inputTask.style.backgroundColor="#F2F2F2"


// style for taskAdd button
taskAdd.textContent="Add"
taskAdd.style.paddingLeft="25px"
taskAdd.style.paddingRight="25px"
taskAdd.style.borderRadius="20px"
taskAdd.style.backgroundColor="#4169E1"
taskAdd.style.color="white"
taskAdd.style.border="none"
taskAdd.style.cursor="pointer"
taskAdd.style.position="relative"
taskAdd.style.right="30px"

taskAdd.addEventListener("mouseenter",(e)=>{
    e.target.style.backgroundColor="#1E90FF"
})

taskAdd.addEventListener("mouseleave",(e)=>{
   e.target.style.backgroundColor="#4169E1"
})



//User Added task

const userTaskContainer = document.createElement("div")
userTaskContainer.id="userTaskContainer"
userTaskContainer.style.marginTop="10px"
mainContainer.append(userTaskContainer)



taskAdd.addEventListener("click",()=>{
const tasks = document.createElement("div")
const tasksContent = document.createElement("p")
const checkBox = document.createElement("input")
const deleteTask = document.createElement("button")

userTaskContainer.append(tasks)
tasks.id="tasks"
tasks.append(checkBox,tasksContent,deleteTask)

// style for tasks
tasks.style.display="flex"
tasks.style.flexDirection="row"
tasks.style.alignItems="center"
tasks.style.paddingLeft="10px"
tasks.style.gap="5px"
tasks.style.marginLeft="40px"
tasks.style.marginRight="40px"


//style for checkbox
checkBox.type="checkbox"
checkBox.style.cursor="pointer"

//style for tasksContent
tasksContent.textContent= inputTask.value.trim()
tasksContent.style.position="relative"
tasksContent.style.bottom="1px"


// delete the input text
inputTask.value=""

//style for deleteTask
deleteTask.textContent="x"
deleteTask.style.color="#4169E1"
deleteTask.style.backgroundColor="transparent"
deleteTask.style.border="none"
deleteTask.style.fontSize="20px"
deleteTask.style.cursor="pointer"
deleteTask.style.marginLeft="auto"

//delete task addEvent 
deleteTask.addEventListener("click",()=>{
    const removeTasks = userTaskContainer.querySelector("#tasks")
    if(removeTasks){
        removeTasks.remove();
    }
})

// checkbox clicked
 
    checkBox.addEventListener("change",(e)=>{
       if(e.target.checked){
        const cutCheck = document.createElement("del")
        cutCheck.textContent=tasksContent.textContent;
        tasksContent.textContent=""
         tasksContent.append(cutCheck)
         tasksContent.style.color="#4169E1"
       }else{
        tasksContent.style.color="black"
        tasksContent.textContent=inputTask.value
       }
    })


})

const body = document.querySelector("body")
const mainContainer = document.createElement("div")

body.style.backgroundColor="#000000"
document.body.append(mainContainer)

mainContainer.style.margin="0px"
mainContainer.style.display="flex"
mainContainer.style.justifyContent="center"
mainContainer.style.alignItems="center"
mainContainer.style.height="100vh"
mainContainer.id="main-Container"

   function createNote(){
    const note = document.createElement("div");
    mainContainer.append(note);

    const navbar = document.createElement("div");
    const bodyContent = document.createElement("div");

    note.append(navbar, bodyContent);

    const title = document.createElement("p")
    const menuColor = document.createElement("button")
    const buttonDelete = document.createElement("button")

   
    title.style.fontSize="20px"
    title.style.color="white"
    title.style.marginRight="auto"
    title.style.padding="2px"
     
    menuColor.textContent="..."
    menuColor.style.fontSize="20px"
    menuColor.style.color="white"
    menuColor.style.padding="5px"
    menuColor.style.border="none"
    menuColor.style.backgroundColor="none"
    menuColor.style.background="none"
    menuColor.style.cursor="pointer"
    menuColor.style.order="2"
    menuColor.style.position="relative"
    menuColor.style.bottom="6px"
   
    menuColor.addEventListener("click",()=>{
        const randomColor= `#${Math.floor(Math.random()*16777215).toString(16)}`
        navbar.style.backgroundColor=`${randomColor}`

    })

    buttonDelete.textContent="X"
    buttonDelete.style.fontSize="20px"
    buttonDelete.style.color="white"
    buttonDelete.style.padding="5px"
    buttonDelete.style.border="none"
    buttonDelete.style.backgroundColor="none"
    buttonDelete.style.background="none"
    buttonDelete.style.cursor="pointer"
    buttonDelete.style.order="3"
   

     
    buttonDelete.addEventListener('click',(e)=>{
        note.remove()
})


    navbar.append(title,menuColor,buttonDelete);

    navbar.style.display="flex"
    navbar.style.flexDirection="row"
    navbar.style.justifyContent="space-between"
    navbar.style.alignItems="center"

    note.style.height = "200px";
    note.style.width = "300px";
    note.style.backgroundColor = "yellow";
    note.style.border = "none";

    navbar.style.height = "40px";
    navbar.style.backgroundColor = "blue";
    navbar.style.zIndex = "2";

    const inputField = document.createElement("textarea");
    bodyContent.append(inputField);
    inputField.style.height = "155px";
    inputField.style.width = "294.5px";
    inputField.style.backgroundColor = "#36454F";
    inputField.style.color = "white";
    inputField.style.outline = "none";
    inputField.style.resize = "none";
    inputField.style.fontSize = "20px";
    inputField.style.zIndex = "1";
    inputField.placeholder="Type Title.."
    inputField.placeholderColor="white"
     

     inputField.addEventListener('input',(e)=>{
           const content = e.target.value.trim()
           const line = content.split('\n')
           const firstLine = line[0]
           title.textContent=firstLine
     })
      



    let x, y;

        x = Math.random() * (window.innerWidth - 300);
        y = Math.random() * (window.innerHeight - 300); 

    note.style.position = "absolute";
    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
};



const notes = document.createElement("div")
mainContainer.append(notes)

notes.style.height="30px"
notes.style.width="100px"
notes.style.backgroundColor="yellow"
notes.style.border="none"
notes.style.borderRadius="5px"
notes.style.display="flex"
notes.style.flexDirection="row"
notes.style.justifyContent="center"
notes.style.alignItems="center"
notes.style.gap="15px"


const ptag= document.createElement("p")
const createButton = document.createElement("button")
createButton.textContent="+"
createButton.style.fontSize="30px"
createButton.style.background="none"
createButton.style.border="none"
createButton.style.cursor="pointer"
createButton.style.padding="4px"
notes.append(ptag,createButton)

ptag.textContent="Notes"
ptag.style.fontSize="20px"


createButton.addEventListener("click",()=>{
    createNote();
})





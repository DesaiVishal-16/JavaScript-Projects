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
    note.className="note"
    note.classList.add("note");

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
     
    menuColor.className="color"
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
   
    menuColor.addEventListener("click",(event)=>{
        event.stopPropagation(); 
        const randomColor= `#${Math.floor(Math.random()*16777215).toString(16)}`
        navbar.style.backgroundColor=`${randomColor}`
        saveNotes()
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
    navbar.className="navbar"
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
    inputField.id="input-textarea"
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
           saveNotes()
     })
      



    let x, y;

        x = Math.random() * (window.innerWidth - 300);
        y = Math.random() * (window.innerHeight - 300); 

    note.style.position = "absolute";
    note.style.left = `${x}px`;
    note.style.top = `${y}px`;

    noteDragable(note)
    saveNotes()
    return note;

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





function noteDragable(note) {
    let offsetX, offsetY;
    let isDragging = false;

    note.addEventListener("mousedown", startDragging);

    function startDragging(event) {
        const clickedElement = event.target;

        if (clickedElement.tagName.toLowerCase() === "textarea") {
            return; 
        }

        event.preventDefault();
        offsetX = event.clientX - note.getBoundingClientRect().left;
        offsetY = event.clientY - note.getBoundingClientRect().top;
        isDragging = true;

        document.addEventListener("mousemove", dragNote);
        document.addEventListener("mouseup", stopDragging);
    }

    function dragNote(event) {
        if (!isDragging) return;

        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;

        note.style.left = `${newX}px`;
        note.style.top = `${newY}px`;
    }

    function stopDragging() {
        if (!isDragging) return;

        isDragging = false;
        document.removeEventListener("mousemove", dragNote);
        document.removeEventListener("mouseup", stopDragging);
    }
}



function saveNotes() {
    const notesData = Array.from(document.querySelectorAll(".note")).map(note => {
        return {
            x: parseInt(note.style.left),
            y: parseInt(note.style.top),
            title: note.querySelector("p").textContent,
            content: note.querySelector("textarea").value,
            color: note.querySelector(".navbar").style.backgroundColor 
        };
    });
    localStorage.setItem("notes", JSON.stringify(notesData));
    
}


// Function to load notes from local storage
function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
        savedNotes.forEach(noteData => {
            const note = createNote();
            note.style.left = `${noteData.x}px`;
            note.style.top = `${noteData.y}px`;
            note.querySelector("p").textContent = noteData.title;
            note.querySelector("textarea").value = noteData.content;
            note.querySelector(".navbar").style.backgroundColor = noteData.color; // Set the color
        });
    }
}


window.addEventListener("load", () => {
    loadNotes();
});


function removeNoteFromLocalStorage(note) {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    const updatedNotesData = notesData.filter(noteData => {
        return noteData.x !== parseInt(note.style.left) || noteData.y !== parseInt(note.style.top);
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotesData));
}


document.addEventListener("click", (event) => {
    const note = event.target.closest(".note");
    if (note) {
        const clickedElement = event.target;
        if (clickedElement.tagName.toLowerCase() === "button") {
            note.remove();
            removeNoteFromLocalStorage(note);
            saveNotes();
        }
    }
});
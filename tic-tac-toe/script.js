
const rows = document.getElementById("rows");
const inputs = document.querySelectorAll(".cell");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const result = document.getElementById("current-status");

let currentPlayer = "";


btn1.addEventListener("click",()=>{
    if(currentPlayer===""){
    btn1.style.backgroundColor="red"
    currentPlayer="X"
    }
})

btn2.addEventListener("click",()=>{
    if(currentPlayer===""){
    currentPlayer="O"
    btn2.style.backgroundColor="green"
    }
})



function handleClick(event) {
    const inputs = event.target;
    if (!inputs.textContent.trim()&& !result.textContent) { 
        inputs.textContent = currentPlayer; 
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        inputs.style.color = currentPlayer === "X" ? "green" : "red";
    }    
}

inputs.forEach(input => {
    input.addEventListener("click", handleClick);
});

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];


    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (inputs[a].textContent && inputs[a].textContent === inputs[b].textContent && inputs[b].textContent === inputs[c].textContent) {
            result.textContent = `${currentPlayer} Won!`;
            result.style.color = currentPlayer === "X" ? "red" : "green";
            result.style.display="flex"
            return;
            
        }
    }

    if (checkDraw()) {
      result.textContent = "Draw!";
  }
}
function checkDraw() {
    for (const input of inputs) {
        if (!input.textContent.trim()) {
            return false; 
        }
    }
    return true; 
} 

function resetGame() {
    inputs.forEach(input => {
        input.textContent = ""; 
    });
    result.textContent = ""; 
    currentPlayer = ""; 
    btn1.style.backgroundColor=""
    btn2.style.backgroundColor=""
}


document.getElementById("reset").addEventListener("click", resetGame);

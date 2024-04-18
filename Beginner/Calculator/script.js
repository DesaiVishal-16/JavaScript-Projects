const body = document.querySelector("body")
const createMainContainer = document.createElement("div")
const createDisplayContent = document.createElement("div")
const createOperationContainer = document.createElement("div")
const createNumbersContainer = document.createElement("div")

createMainContainer.setAttribute('id',"main")
createDisplayContent.setAttribute('id','display')
createOperationContainer.setAttribute('id','operation')
createNumbersContainer.setAttribute('id','numbers')

const main = document.getElementById("main")
const display = document.getElementById("display")
const operation = document.getElementById("operation")
const numbers = document.getElementById("numbers")


document.body.append(createMainContainer);
createMainContainer.append(createDisplayContent, createOperationContainer, createNumbersContainer);


body.style.backgroundColor="#000000"

createMainContainer.style.height="550px"
createMainContainer.style.width="500px"
createMainContainer.style.borderColor="none"
createMainContainer.style.backgroundColor="#7D26CD"
createMainContainer.style.border="1px solid"
createMainContainer.style.borderRadius="10px"

createMainContainer.style.marginLeft="500px"
createMainContainer.style.marginTop="100px"


createDisplayContent.style.backgroundColor="#ffffff"
createDisplayContent.style.height="100px"
createDisplayContent.style.borderRadius="10px"



createOperationContainer.style.backgroundColor="#FFD700"
createOperationContainer.style.height="150px"
createOperationContainer.style.borderRadius="10px"

createNumbersContainer.style.backgroundColor="#0390fc"
createNumbersContainer.style.height="230px"
createNumbersContainer.style.borderRadius="10px"



const ulOperation = document.createElement("ul")
const liOperation = document.createElement("li")

//Add
const buttonAdd = document.createElement("button")
const spanAdd = document.createElement("span")
//Substract
const buttonSubstract = document.createElement("button")
const spanSubstract = document.createElement("span")
//Multiply
const buttonMultiply = document.createElement("button")
const spanMultiply = document.createElement("span")
//Divide
const buttonDivide= document.createElement("button")
const spanDivide = document.createElement("span")
//Percentage
const buttonPercent= document.createElement("button")
const spanPercent = document.createElement("span")
//Equal
const buttonEqual= document.createElement("button")
const spanEqual = document.createElement("span")
//Clear
const buttonClear= document.createElement("button")
const spanClear = document.createElement("span")
//All Clear
const buttonAllClear= document.createElement("button")
const spanAllClear = document.createElement("span")


ulOperation.append(liOperation)
createOperationContainer.append(ulOperation)
liOperation.append(buttonAdd,buttonSubstract,buttonMultiply,buttonDivide,buttonPercent,buttonClear,buttonAllClear,buttonEqual)
buttonAdd.append(spanAdd)
buttonSubstract.append(spanSubstract)
buttonMultiply.append(spanMultiply)
buttonDivide.append(spanDivide)
buttonPercent.append(spanPercent)
buttonClear.append(spanClear)
buttonAllClear.append(spanAllClear)
buttonEqual.append(spanEqual)


buttonAdd.style.height="50px"
buttonAdd.style.width="50px"
spanAdd.textContent="+"
spanAdd.style.fontSize="30px"
spanAdd.style.color="blue"

buttonSubstract.style.height="50px"
buttonSubstract.style.width="50px"
spanSubstract.textContent="-"
spanSubstract.style.fontSize="30px"
spanSubstract.style.color="blue"


buttonMultiply.style.height="50px"
buttonMultiply.style.width="50px"
spanMultiply.textContent="x"
spanMultiply.style.fontSize="30px"
spanMultiply.style.color="blue"


buttonDivide.style.height="50px"
buttonDivide.style.width="50px"
spanDivide.textContent="/"
spanDivide.style.fontSize="30px"
spanDivide.style.color="blue"

buttonPercent.style.height="50px"
buttonPercent.style.width="50px"
spanPercent.textContent="%"
spanPercent.style.fontSize="30px"
spanPercent.style.color="blue"

buttonClear.style.height="50px"
buttonClear.style.width="50px"
spanClear.textContent="CE"
spanClear.style.fontSize="25px"
spanClear.style.color="blue"

buttonAllClear.style.height="50px"
buttonAllClear.style.width="50px"
spanAllClear.textContent="C"
spanAllClear.style.fontSize="25px"
spanAllClear.style.color="blue"




buttonEqual.style.height="50px"
buttonEqual.style.width="50px"
spanEqual.textContent="="
spanEqual.style.fontSize="30px"
spanEqual.style.color="blue"


ulOperation.style.padding="20px"
liOperation.style.display="grid"
liOperation.style.gridTemplateColumns="repeat(4,2fr)"
liOperation.style.gap="20px"
liOperation.style.marginLeft="30px"




const ulNumbers = document.createElement("ul")
const liNumbers = document.createElement("li")

//One
const buttonOne = document.createElement("button")
const spanOne = document.createElement("span")
//Two
const buttonTwo = document.createElement("button")
const spanTwo = document.createElement("span")
//Three
const buttonThree = document.createElement("button")
const spanThree = document.createElement("span")
//Four
const buttonFour= document.createElement("button")
const spanFour = document.createElement("span")
//Five
const buttonFive= document.createElement("button")
const spanFive = document.createElement("span")
//Six
const buttonSix= document.createElement("button")
const spanSix = document.createElement("span")
//Seven
const buttonSeven= document.createElement("button")
const spanSeven = document.createElement("span")
//Eight
const buttonEight= document.createElement("button")
const spanEight = document.createElement("span")
//Nine
const buttonNine= document.createElement("button")
const spanNine = document.createElement("span")
//Zero
const buttonZero= document.createElement("button")
const spanZero = document.createElement("span")
//Decimal
const buttonDecimal= document.createElement("button")
const spanDecimal = document.createElement("span")



ulNumbers.append(liNumbers)
createNumbersContainer.append(ulNumbers)
liNumbers.append(buttonOne,buttonTwo,buttonThree,buttonFour,buttonFive,buttonSix,buttonSeven,buttonEight,buttonNine,buttonZero,buttonDecimal)
buttonOne.append(spanOne)
buttonTwo.append(spanTwo)
buttonThree.append(spanThree)
buttonFour.append(spanFour)
buttonFive.append(spanFive)
buttonSix.append(spanSix)
buttonSeven.append(spanSeven)
buttonEight.append(spanEight)
buttonNine.append(spanNine)
buttonZero.append(spanZero)
buttonDecimal.append(spanDecimal)

buttonOne.style.height="50px"
buttonOne.style.width="50px"
spanOne.textContent="1"
spanOne.style.fontSize="30px"
spanOne.style.color="blue"

buttonTwo.style.height="50px"
buttonTwo.style.width="50px"
spanTwo.textContent="2"
spanTwo.style.fontSize="30px"
spanTwo.style.color="blue"


buttonThree.style.height="50px"
buttonThree.style.width="50px"
spanThree.textContent="3"
spanThree.style.fontSize="30px"
spanThree.style.color="blue"


buttonFour.style.height="50px"
buttonFour.style.width="50px"
spanFour.textContent="4"
spanFour.style.fontSize="30px"
spanFour.style.color="blue"

buttonFive.style.height="50px"
buttonFive.style.width="50px"
spanFive.textContent="5"
spanFive.style.fontSize="30px"
spanFive.style.color="blue"

buttonSix.style.height="50px"
buttonSix.style.width="50px"
spanSix.textContent="6"
spanSix.style.fontSize="30px"
spanSix.style.color="blue"

buttonSeven.style.height="50px"
buttonSeven.style.width="50px"
spanSeven.textContent="7"
spanSeven.style.fontSize="30px"
spanSeven.style.color="blue"

buttonEight.style.height="50px"
buttonEight.style.width="50px"
spanEight.textContent="8"
spanEight.style.fontSize="30px"
spanEight.style.color="blue"

buttonNine.style.height="50px"
buttonNine.style.width="50px"
spanNine.textContent="9"
spanNine.style.fontSize="30px"
spanNine.style.color="blue"

buttonZero.style.height="50px"
buttonZero.style.width="50px"
spanZero.textContent="0"
spanZero.style.fontSize="30px"
spanZero.style.color="blue"


buttonDecimal.style.height="50px"
buttonDecimal.style.width="50px"
spanDecimal.textContent="."
spanDecimal.style.fontSize="30px"
spanDecimal.style.color="blue"

ulNumbers.style.paddingTop="20px"
ulNumbers.style.paddingLeft="40px"
liNumbers.style.display="flex"
liNumbers.style.display="grid"
liNumbers.style.gridTemplateColumns='repeat(4,3fr)'
liNumbers.style.gap="20px"



const displayRes=document.createElement("p")
createDisplayContent.append(displayRes)
displayRes.id="displayRes"
displayRes.style.height="50px"
displayRes.style.width="150px"
displayRes.style.color="indigo"
displayRes.style.fontSize="25px"
displayRes.style.position="relative"
displayRes.style.left="20px"
displayRes.style.top="20px"


const initialNum= document.createElement("p")
createDisplayContent.append(initialNum)
initialNum.style.height="50px"
initialNum.style.width="150px"
initialNum.style.position="relative"
initialNum.style.left="20px"
initialNum.style.bottom="30px"
initialNum.style.color="green"
initialNum.style.fontSize="40px"


const equal=document.createElement("span")
equal.textContent="="
createDisplayContent.append(equal)
equal.style.color="white"
equal.style.position="relative"
equal.style.bottom="115px"
equal.style.left="2px"
equal.style.fontSize="30px"
initialNum.textContent="0"


buttonOne.addEventListener("click",(e)=>{
    initialNum.textContent="1"
    const sp = document.createElement("span")
    sp.textContent="1"
    
    displayRes.append(sp)
})
buttonTwo.addEventListener("click",(e)=>{
    initialNum.textContent="2"
    const sp = document.createElement("span")
     sp.textContent="2"
    displayRes.append(sp)
})
buttonThree.addEventListener("click",(e)=>{
    initialNum.textContent="3"
    const sp = document.createElement("span")
    sp.textContent="3"
   displayRes.append(sp)
})
buttonFour.addEventListener("click",(e)=>{
    initialNum.textContent="4"
    const sp = document.createElement("span")
     sp.textContent="4"
    displayRes.append(sp)
})
buttonFive.addEventListener("click",(e)=>{
    initialNum.textContent="5"
    const sp = document.createElement("span")
     sp.textContent="5"
    displayRes.append(sp)
})
buttonSix.addEventListener("click",(e)=>{
    initialNum.textContent="6"
    const sp = document.createElement("span")
     sp.textContent="6"
    displayRes.append(sp)
})
buttonSeven.addEventListener("click",(e)=>{
    initialNum.textContent="7"
    const sp = document.createElement("span")
     sp.textContent="7"
    displayRes.append(sp)
})
buttonEight.addEventListener("click",(e)=>{
    initialNum.textContent="8"
    const sp = document.createElement("span")
     sp.textContent="8"
    displayRes.append(sp)
})
buttonNine.addEventListener("click",(e)=>{
    initialNum.textContent="9"
    const sp = document.createElement("span")
     sp.textContent="9"
    displayRes.append(sp)
})
buttonZero.addEventListener("click",(e)=>{
    initialNum.textContent="0"
    const sp = document.createElement("span")
     sp.textContent="0"
    displayRes.append(sp)
})
buttonDecimal.addEventListener("click",(e)=>{
    const sp = document.createElement("span")
     sp.textContent="."
    displayRes.append(sp)
})


buttonAdd.addEventListener('click',(e)=>{
    const sp = document.createElement("span")
    sp.textContent="+"
   displayRes.append(sp)
})
buttonSubstract.addEventListener('click',(e)=>{
    const sp = document.createElement("span")
    sp.textContent="-"
   displayRes.append(sp)
})
buttonMultiply.addEventListener('click',(e)=>{
    const sp = document.createElement("span")
    sp.textContent='*';
   displayRes.append(sp)
})
buttonDivide.addEventListener('click',(e)=>{
    const sp = document.createElement("span")
    sp.textContent="/"
   displayRes.append(sp)
})

buttonPercent.addEventListener('click',(e)=>{
    const sp = document.createElement("span")
    sp.textContent="%"
   displayRes.append(sp)
})


buttonClear.addEventListener('click',(e)=>{
    initialNum.textContent='0'
    const removeSpan= createDisplayContent.querySelector("#displayRes").querySelectorAll("span")
   const lastSpan = removeSpan[removeSpan.length-1]
   if(lastSpan){
    lastSpan.remove()
   }
})
buttonAllClear.addEventListener('click',()=>{
    initialNum.textContent='0'
    const removeSpan= createDisplayContent.querySelector("#displayRes").querySelectorAll("span")
    removeSpan.forEach((e)=>{
     e.remove()
    })
})


buttonEqual.addEventListener('click',(e)=>{
    try{
    const finalRes = (`${eval(displayRes.textContent)}`);
    initialNum.textContent=finalRes
    }catch(error){
      console.error(error);
    }
})



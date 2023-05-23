let gridContainer = document.querySelector('.grid-container');
let promptMessage = document.getElementById('popup');
let validity = document.getElementById('validity');
let buttonReset = document.getElementById('reset');
//default color
let color ='black';

//Default grid
createGrid(16);

//reset function
buttonReset.addEventListener('click', resetDivs);

//when the user clicks the button, a prompt message is shown
promptMessage.addEventListener('click', ()=>{
    let size = createPrompt();
    createGrid(size);
});

//prompt message to get size from the user
function createPrompt(){
    let userInput = prompt("Enter the size of the grid");
    if(userInput===null || userInput==="" ){
        validity.style.color ='red';
        validity.textContent =`Please enter the size of the grid`;
    }else if(userInput <= 0 || userInput >= 100){
        validity.style.color ='red';
        validity.textContent =`Please enter a size range between 2 and 99`;
    }else{
        validity.style.color ='#3EB489';
        validity.textContent=`Draw now `;
        return userInput;
    }
  }

//creating a function that creates the grid squares
function createGrid(size){
    //creating 16 x 16 grid squares
gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let numDivs = size * size;
//loop through and create a new div
for(let i =0;i<numDivs; i++){
    //create new div
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', colorChange)
    gridContainer.insertAdjacentElement('beforeend', div);
}
}

function colorChange(){
    if(color ==='random'){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let newColor = "rgb(" + red + "," + green + "," + blue + ")";
        this.style.backgroundColor = newColor;
    }else if(color ==='red'){
        this.style.backgroundColor = 'red';
    }else if(color ==='blue'){
        this.style.backgroundColor ='blue';
    }else{
        this.style.backgroundColor = 'black';
    }

}
function setColor(colorChoice){
    color = colorChoice;

}
function resetDivs(){
    let divs = document.querySelectorAll('div');
    divs.forEach(div=>{
        div.style.backgroundColor = '';
    })

}

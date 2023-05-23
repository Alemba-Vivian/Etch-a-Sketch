let gridContainer = document.querySelector('.grid-container');
createGrid(64);


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
    div.style.backgroundColor ='red';
    gridContainer.insertAdjacentElement('beforeend', div);
}
    

}

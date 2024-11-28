// Select the container and reset button from the DOM
const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(size){
    container.innerHTML = ''; // clear the existing container
    container.style.display = 'flex'; 
    container.style.flexWrap = 'wrap'; 
    container.style.width = '960px'; 
    container.style.height = '960px'; 

    //creating the squares
    const squareSize = 960 / size; 
    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div'); 
        square.style.width = `${squareSize}px`; 
        square.style.height = `${squareSize}px`; 
        square.style.border = '1px solid #ddd'
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black'; 
        }); 
        container.appendChild(square); 
    }
}

resetGrid.addEventListener("click", () => {
    let size = parseInt(prompt("Enter a new size (1-100):"), 10); 
    if(size > 0 && size <= 100){
        createGrid(size); 
    } else {
        alert("Please enter a number between 1 and 100");
    }
}); 

createGrid(16); 
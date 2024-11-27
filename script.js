const container = document.getElementById("container"); 

function createGrid(size){
    container.innerHTML = ''; // clear the existing container
    container.style.display = 'flex'; 
    container.style.flexWrap = 'wrap'; 
    container.style.width = '960px'; 
    container.style.height = '960px'; 

    //creating the squares
    const squareSize = 960 / size; 
    for(let i = 0; i < size; i++){
        const square = document.createElement('div'); 
        square.style.width = squareSize; 
        square.style.height = squareSize; 
        square.style.border = '1px solid #ddd'
        square.addEventListener("mouseover", () => {

        }); 
        container.appendChild(square); 
    }
}

createGrid(16); 
// Select the container and reset button from the DOM
const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
const darkenButton = document.getElementById('darkenButton');
const randomButton = document.getElementById('randomButton'); 

// Variable to track the active mode (default is darken)
let activeMode = "darken";
// Function to create a grid
function createGrid(size){
    container.innerHTML = ''; // clear existing grid
    container.style.display = 'flex'; // Flexbox Layout
    container.style.flexWrap = 'wrap'; // Allow wrapping
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

        // Append the square to the container
        container.appendChild(square); 
    }
}

// Initial grid creation
createGrid(16);

resetButton.addEventListener("click", () => {
    // Prompt user for new grid size
    let size = parseInt(prompt("Enter a new size (1-100):"), 10); 

    // Validate input
    if(size > 0 && size <= 100){
        createGrid(size); // Generate new grid
    } else {
        alert("Please enter a number between 1 and 100"); // Error message
    }
}); 

// Event listener for the Random button
randomButton.addEventListener("click", ()=> {
    activeMode = 'random'; // Set mode to random
    randomButton.classList.add('active'); // Highlight active button
    darkenButton.classList.remove('active'); // Highlight active button
}); 

// Event listener for the Darken button
darkenButton.addEventListener("click", ()=> {
    activeMode = 'darken'; // Set mode to random
    darkenButton.classList.add('active'); // Highlight active button
    randomButton.classList.remove('active'); // Highlight active button
}); 
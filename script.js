// Select the container and buttons from the DOM
const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
const randomButton = document.getElementById('randomButton');
const darkenButton = document.getElementById('darkenButton');

// Variable to track the active mode (default is darken)
let activeMode = 'darken';

// Function to create a grid
function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  container.style.display = 'flex'; // Flexbox layout
  container.style.flexWrap = 'wrap'; // Allow wrapping
  container.style.width = '960px'; // Fixed width for the grid
  container.style.height = '960px'; // Fixed height for the grid

  const squareSize = 960 / size; // Calculate size of each square
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = `${squareSize}px`; // Set width
    square.style.height = `${squareSize}px`; // Set height
    square.style.border = '1px solid #ddd'; // Optional border for visibility
    square.dataset.opacity = 0; // Initialize opacity for progressive darkening

    // Add mouseover event based on the active mode
    square.addEventListener('mouseover', () => {
      if (activeMode === 'random') {
        // Random color mode
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;
      } else if (activeMode === 'darken') {
        // Progressive darkening mode
        let currentOpacity = parseFloat(square.dataset.opacity) || 0;
        if (currentOpacity < 1) {
          currentOpacity += 0.1;
          square.style.backgroundColor = 'black'; // Set to black
          square.style.opacity = currentOpacity; // Apply opacity increment
          square.dataset.opacity = currentOpacity; // Update opacity value
        }
      }
    });

    // Append the square to the container
    container.appendChild(square);
  }
}

// Initial grid creation
createGrid(16);

// Event listener for the reset button
resetButton.addEventListener('click', () => {
  // Prompt user for new grid size
  let size = parseInt(prompt('Enter grid size (1-100):'), 10);

  // Validate input
  if (size > 0 && size <= 100) {
    createGrid(size); // Generate new grid
  } else {
    alert('Please enter a number between 1 and 100.'); // Error message
  }
});

// Event listener for the Random button
randomButton.addEventListener('click', () => {
  activeMode = 'random'; // Set mode to random
  randomButton.classList.add('active'); // Highlight active button
  darkenButton.classList.remove('active'); // Remove highlight from darken
});

// Event listener for the Darken button
darkenButton.addEventListener('click', () => {
  activeMode = 'darken'; // Set mode to darken
  darkenButton.classList.add('active'); // Highlight active button
  randomButton.classList.remove('active'); // Remove highlight from random
});
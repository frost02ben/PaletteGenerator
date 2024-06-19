function getRandomColor() {
    const r = Math.floor(Math.random() * (200-75) + 100);
    const g = Math.floor(Math.random() * (200-75) + 100);
    const b = Math.floor(Math.random() * (200-75) + 100);
    return { r, g, b, rgbString: `rgb(${r}, ${g}, ${b})`};
  }

  function generateColors(numberOfColors) {
    const colorContainer = document.getElementById('color-container');
    colorContainer.innerHTML = '';
    colorContainer.style.width = 100;

    for (let i = 0; i < numberOfColors; i++) {
    const color = getRandomColor(); 

      const colorBox = document.createElement('div');
      colorBox.className = 'color-box';
      colorBox.style.backgroundColor = getRandomColor();
      colorBox.style.backgroundColor = color.rgbString;

      colorBox.innerHTML = `

            <p id="display">${color.rgbString}</p>
        `;

        colorContainer.appendChild(colorBox);

    }

    adjustBoxHeights(numberOfColors);
   
  }

  function adjustBoxHeights(numberOfBoxes) {
    const colorContainer = document.getElementById('color-container');
    const containerHeight = colorContainer.clientHeight;
    const boxHeight = containerHeight / numberOfBoxes;

    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        box.style.height = `${boxHeight}px`;
    });
}

  document.getElementById('generate-btn').addEventListener('click', function() {
    const numColors = document.getElementById("myRange").value;
    generateColors(numColors);
  });


  


  // Dark Mode

  function changeMode(){
    document.body.classList.toggle('dark-mode');
  }
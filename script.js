const container = document.querySelector(".grid");
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');

slider.addEventListener('input', updateGrid);

function updateGrid() {
  const squaresPerSide = parseInt(slider.value);

  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

  genGrid(squaresPerSide * squaresPerSide);

  sliderValue.textContent = `Squares per side: ${squaresPerSide}`;
}

function genGrid(size) {
  for (let i = 0; i < size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);

    square.addEventListener("mouseenter", function () {
      square.classList.add("shaded");
    })
  }
}

updateGrid();
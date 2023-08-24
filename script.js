const container = document.querySelector(".container");

function genGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("div");
      cell.className = "gridsquare";
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}
genGrid(16);

const gridDivs = document.querySelectorAll(".gridsquare");
gridDivs.forEach((gridDiv) => {
  gridDiv.addEventListener("mouseenter", function () {
    gridDiv.classList.add("shaded");
  });
});
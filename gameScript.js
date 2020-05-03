var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width + 1;
var h = canvas.height + 1;
var gridSize = 10;
var cells = [];
var simulating = false;

class Cell {
  constructor(x, y) {
    this.x = x - x % gridSize;
    this.y = y - y % gridSize;
  }
}

function simulateClicked() {
  let elem = document.getElementById("simulateButton");
  simulating = !simulating;
  elem.value = simulating ? "Pause" : "Simulate";
}

function resetClicked() {
  let elem = document.getElementById("simulateButton");
  elem.value = "Simulate";
  simulating = false;
  cells = [];
  draw();
}

function canvasClicked(event) {
  if (!simulating) {
    addCell(event.offsetX, event.offsetY);
    draw();
  }
}

function addCell(x, y) {
  let cell = new Cell(x, y);
  let includes = false;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].x == cell.x && cells[i].y == cell.y) {
      includes = true;
    }
  }
  if (!includes) {
    cells.push(cell);
  }
}

function updateCells() {
  if (simulating) {
    draw();
  }
}

function drawGrid() {
  ctx.strokeStyle = "#dedede"
  for (x = -0.5; x <= w; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }
  for (y = -0.5; y <= h; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
  }
  ctx.stroke();
}

function drawCells() {
  ctx.fillStyle = "#000000";
  for (let i = 0; i < cells.length; i++) {
    ctx.fillRect(cells[i].x - 0.5, cells[i].y - 0.5, gridSize, gridSize);
  }
}

function draw() {
  ctx.clearRect(-0.5, -0.5, w, h);
  drawGrid();
  drawCells();
}

canvas.addEventListener("click", canvasClicked);
// Initial draw
draw();
setInterval(updateCells, 100);

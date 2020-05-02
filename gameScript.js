var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var gridSize = 10;
var cells = [];

class Cell {
  constructor(x, y) {
    this.x = x - x%gridSize;
    this.y = y - y%gridSize;
  }
}

document.addEventListener("click", mouseClicked);

function mouseClicked(event) {
  cells.push(new Cell(event.offsetX, event.offsetY));
  draw();
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
    ctx.fillRect(cells[i].x, cells[i].y, gridSize, gridSize);
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  drawGrid();
  drawCells();
}

// Initial draw
draw();
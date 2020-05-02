var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var gridSize = 15;

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

function draw() {
  ctx.clearRect(0, 0, w, h);
  drawGrid();
}

setInterval(draw, 10);
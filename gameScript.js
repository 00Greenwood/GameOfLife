var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

function drawBackground() {
    for (x = 0; x <= w; x += 15) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }
    for (y = 0; y <= h; y += 15) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }
    ctx.stroke();
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    drawBackground();
}

setInterval(draw, 10);
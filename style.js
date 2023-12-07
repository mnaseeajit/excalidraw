const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
//c responsible for making any kind of drwawing in the canvas

canvas.addEventListener("mousedown", onMouseDown);

let previousPosition = null;
let drawingColor = "blue";

function onMouseDown(event) {
    let { clientX: x, clientY: y } = event;
    c.strokeStyle = drawingColor;
    previousPosition = [x, y];

    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onmousemove(e) {
    let currentPosition = [e.clientX, e.clientY];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
}

function onMouseUp(e) {
    canvas.removeEventListener("mousemove", onmousemove);
}



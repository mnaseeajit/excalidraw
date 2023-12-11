const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
//c responsible for making any kind of drwawing in the canvas

canvas.addEventListener("mousedown", onMouseDown);

let previousPosition = null;
let drawingColor = "black";

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



const colorPicker = document.getElementById("colorPicker");
const pencil = document.getElementById("pencil");

pencil.addEventListener("click",onPencilClick);

let isPencilActive = false;

function onPencilClick(){
    pencil.classList.toggle("active");
    isPencilActive = !isPencilActive;
    if(isPencilActive){
        canvas.addEventListener("mousedown",onMouseDown);
        drawingColor = colorPicker.value;
        canvas.style.cursor = "crosshair";
        pencil.style.backgroundColor = "blue";
    }
    else{
        canvas.removeEventListener("mousedown",onMouseDown);
        canvas.style.cursor = "auto";
        pencil.style.backgroundColor = "white";
    }
}


const eraser = document.getElementById("eraser");
  eraser.addEventListener("click",onEraserClick);
let isEraserActive = false;

function onEraserClick(){
    eraser.classList.toggle("active");
    isEraserActive = !isEraserActive;
    if(isEraserActive){
        canvas.addEventListener("mousedown",onMouseDown)
        // drawingColor = canvas.style.backgroundColor; // Set eraser color to canvas background color
        drawingColor = "white";
        // canvas.style.cursor = "url('eraser.png'), auto";
        eraser.style.backgroundColor = "blue" ;
        c.lineWidth = 10;
    }
    else{
        canvas.removeEventListener("mousedown",onMouseDown);
        canvas.style.cursor = "auto";
        eraser.style.backgroundColor = "white";
    }
}




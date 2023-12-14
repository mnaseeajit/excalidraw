
// const canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const c = canvas.getContext("2d");
// //c responsible for making any kind of drwawing in the canvas

// //canvas.addEventListener("mousedown", onMouseDown);

// let previousPosition = null;
// let drawingColor = "black";

// let drawingSize = 1;

// function onMouseDown(event) {
//     let { clientX: x, clientY: y } = event;
//     c.strokeStyle = drawingColor;
//     c.lineWidth = drawingSize;
//     previousPosition = [x, y];

//     canvas.addEventListener("mousemove", onmousemove);
//     canvas.addEventListener("mouseup", onMouseUp);
// }

// function onmousemove(e) {
//     let currentPosition = [e.clientX, e.clientY];
//     c.beginPath();
//     c.moveTo(...previousPosition);
//     c.lineTo(...currentPosition);
//     c.stroke();
//     c.closePath();
//     previousPosition = currentPosition;
// }

// function onMouseUp(e) {
//     canvas.removeEventListener("mousemove", onmousemove);
// }

// const sizePicker = document.getElementById("sizePicker");
// sizePicker.addEventListener("input", onSizeChange);

// function onSizeChange() {
//     // Get the current value of the size picker
//     drawingSize = sizePicker.value;
// }

// const colorPicker = document.getElementById("colorPicker");
// const pencil = document.getElementById("pencil");

// pencil.addEventListener("click",onPencilClick);

// let isPencilActive = false;

// function onPencilClick(){
//     pencil.classList.toggle("active");
//     isPencilActive = !isPencilActive;
//     if(isPencilActive){
//         canvas.addEventListener("mousedown",onMouseDown);
//         drawingColor = colorPicker.value;
//         canvas.style.cursor = "crosshair";
//         pencil.style.backgroundColor = "blue";
//         drawingSize = sizePicker.value;
//     }
//     else{
//         canvas.removeEventListener("mousedown",onMouseDown);
//         canvas.style.cursor = "auto";
//         pencil.style.backgroundColor = "white";
//     }
// }


// const eraser = document.getElementById("eraser");
//   eraser.addEventListener("click",onEraserClick);
// let isEraserActive = false;

// function onEraserClick(){
//     eraser.classList.toggle("active");
//     isEraserActive = !isEraserActive;
//     if(isEraserActive){
//         canvas.addEventListener("mousedown",onMouseDown)
//         // drawingColor = canvas.style.backgroundColor; // Set eraser color to canvas background color
//         drawingColor = "white";
//         // canvas.style.cursor = "url('eraser.png'), auto";
//         eraser.style.backgroundColor = "blue" ;
//         //c.lineWidth = 10;
//         drawingSize = sizePicker.value;
//     }
//     else{
//         canvas.removeEventListener("mousedown",onMouseDown);
//         canvas.style.cursor = "auto";
//         eraser.style.backgroundColor = "white";
//     }
// }

// // CIRCLE   



// let isCircleActive = false;

// const circle = document.getElementById("circle");
// circle.addEventListener("click", drawCircle);

// function drawCircle() {
//     isCircleActive = !isCircleActive;
//     if (isCircleActive) {
//         canvas.addEventListener("mousedown", onMouseDownCircle);
//         drawingColor = colorPicker.value; // Change this to the desired color
//         canvas.style.cursor = "crosshair";
//         circle.classList.add("active");
//         circle.style.backgroundColor = "blue";
//         drawingSize = sizePicker.value; // Change this to the desired size
//     } else {
//         canvas.removeEventListener("mousedown", onMouseDownCircle);
//         canvas.style.cursor = "auto";
//         circle.classList.remove("active");
//         circle.style.backgroundColor = "white";
//     }
// }

// function onMouseDownCircle(event) {
//     let { clientX: x, clientY: y } = event;
//     c.strokeStyle = drawingColor;
//     c.lineWidth = drawingSize;
//     previousPosition = [x, y];

//     canvas.addEventListener("mousemove", onmousemoveCircle);
//     canvas.addEventListener("mouseup", onMouseUpCircle);
// }

// function onmousemoveCircle(e) {
//     let { clientX: x, clientY: y } = e;
//     // drawingColor = colorPicker.value;
//     // drawingSize = sizePicker.value;
//    // c.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
//     c.beginPath();
//     c.arc(previousPosition[0], previousPosition[1], Math.sqrt(Math.pow(x - previousPosition[0], 2) + Math.pow(y - previousPosition[1], 2)), 0, 2 * Math.PI);
//     c.fillStyle = "white";
//     c.fill();
//     c.stroke();
//     c.closePath();
    
// }

// function onMouseUpCircle() {
//     canvas.removeEventListener("mousemove", onmousemoveCircle);
// }


const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let previousPosition = null;
let drawingColor = "black";
let drawingSize = 1;

const sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("input", onSizeChange);

const colorPicker = document.getElementById("colorPicker");

const pencil = document.getElementById("pencil");
pencil.addEventListener("click", onPencilClick);

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", onEraserClick);

const circle = document.getElementById("circle");
circle.addEventListener("click", drawCircle);

let isPencilActive = false;
let isEraserActive = false;
let isCircleActive = false;

function onSizeChange() {
    drawingSize = sizePicker.value;
}

function onPencilClick() {
    isPencilActive = !isPencilActive;
    if (isPencilActive) {
        canvas.addEventListener("mousedown", onMouseDown);
        drawingColor = colorPicker.value;
        canvas.style.cursor = "crosshair";
        pencil.style.backgroundColor = "blue";
        drawingSize = sizePicker.value;
    } else {
        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.style.cursor = "auto";
        pencil.style.backgroundColor = "white";
    }
}

function onEraserClick() {
    isEraserActive = !isEraserActive;
    if (isEraserActive) {
        canvas.addEventListener("mousedown", onMouseDown);
        drawingColor = "white";
        eraser.style.backgroundColor = "blue";
        drawingSize = sizePicker.value;
    } else {
        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.style.cursor = "auto";
        eraser.style.backgroundColor = "white";
    }
}

function drawCircle() {
    isCircleActive = !isCircleActive;
    if (isCircleActive) {
        canvas.addEventListener("mousedown", onMouseDownCircle);
        drawingColor = "white"; // Get the color picker value here
        canvas.style.cursor = "crosshair";
        circle.classList.add("active");
        circle.style.backgroundColor = "blue";
        drawingSize = sizePicker.value; // Get the size picker value here
    } else {
        canvas.removeEventListener("mousedown", onMouseDownCircle);
        canvas.style.cursor = "auto";
        circle.classList.remove("active");
        circle.style.backgroundColor = "white";
    }
}

function onMouseDown(event) {
    let { clientX: x, clientY: y } = event;
    c.strokeStyle = drawingColor;
    c.lineWidth = drawingSize;
    previousPosition = [x, y];

    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onmousemove(e) {
    let currentPosition = [e.clientX, e.clientY];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.strokeStyle = colorPicker.value;
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
}

function onMouseUp() {
    canvas.removeEventListener("mousemove", onmousemove);
}

function onMouseDownCircle(event) {
    let { clientX: x, clientY: y } = event;
    c.strokeStyle = drawingColor;
    c.lineWidth = drawingSize;
    previousPosition = [x, y];

    canvas.addEventListener("mousemove", onmousemoveCircle);
    canvas.addEventListener("mouseup", onMouseUpCircle);
}

function onmousemoveCircle(e) {
    let { clientX: x, clientY: y } = e;
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.arc(
        previousPosition[0],
        previousPosition[1],
        Math.sqrt(Math.pow(x - previousPosition[0], 2) + Math.pow(y - previousPosition[1], 2)),
        0,
        2 * Math.PI
    );
    c.fillStyle = drawingColor;
    c.strokeStyle = colorPicker.value;
    c.fill();
    c.stroke();
    c.closePath();
}

function onMouseUpCircle() {
    canvas.removeEventListener("mousemove", onmousemoveCircle);
}

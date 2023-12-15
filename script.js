

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

const square = document.getElementById("square");
square.addEventListener("click", drawSquare);

const diamond = document.getElementById("diamond");
diamond.addEventListener("click", drawDiamond);

let isPencilActive = false;
let isEraserActive = false;
let isCircleActive = false;
let isSquareActive = false;
let isDiamondActive = false;

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





//SQUARE

function drawSquare() {
    isSquareActive = !isSquareActive;
    if (isSquareActive) {
        canvas.addEventListener("mousedown", onMouseDownSquare);
        drawingColor = "white"; // Get the color picker value here
        canvas.style.cursor = "crosshair";
        square.classList.add("active");
        square.style.backgroundColor = "blue";
        drawingSize = sizePicker.value; // Get the size picker value here
    } else {
        canvas.removeEventListener("mousedown", onMouseDownSquare);
        canvas.style.cursor = "auto";
        square.classList.remove("active");
        square.style.backgroundColor = "white";
    }
}


function onMouseDownSquare(event) {
    let { clientX: x, clientY: y } = event;
    c.strokeStyle = colorPicker.value;
    c.lineWidth = drawingSize;
    previousPosition = [x, y];

    canvas.addEventListener("mousemove", onmousemoveSquare);
    canvas.addEventListener("mouseup", onMouseUpSquare);
}

function onmousemoveSquare(e) {
    let { clientX: x, clientY: y } = e;
    let sideLength = Math.min(Math.abs(x - previousPosition[0]), Math.abs(y - previousPosition[1]));

   // c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.rect(
        previousPosition[0],
        previousPosition[1],
        x > previousPosition[0] ? sideLength : -sideLength,
        y > previousPosition[1] ? sideLength : -sideLength
    );
    c.fillStyle = drawingColor;
    c.fill();
    c.stroke();
    c.closePath();
}

function onMouseUpSquare() {
    canvas.removeEventListener("mousemove", onmousemoveSquare);
}


//DIAMOND

function drawDiamond() {
    isDiamondActive = !isDiamondActive;
    if (isDiamondActive) {
        canvas.addEventListener("mousedown", onMouseDownDiamond);
        drawingColor = "white"; // Get the color picker value here
        canvas.style.cursor = "crosshair";
        diamond.classList.add("active");
        diamond.style.backgroundColor = "blue";
        drawingSize = sizePicker.value; // Get the size picker value here
    } else {
        canvas.removeEventListener("mousedown", onMouseDownDiamond);
        canvas.style.cursor = "auto";
        diamond.classList.remove("active");
        diamond.style.backgroundColor = "white";
    }
}

function onMouseDownDiamond(event) {
    let { clientX: x, clientY: y } = event;
    c.strokeStyle = colorPicker.value;
    c.lineWidth = drawingSize;
    previousPosition = [x, y];

    canvas.addEventListener("mousemove", onmousemoveDiamond);
    canvas.addEventListener("mouseup", onMouseUpDiamond);
}

function onmousemoveDiamond(e) {
    let { clientX: x, clientY: y } = e;
    let halfWidth = Math.abs(x - previousPosition[0]) / 2;
    let halfHeight = Math.abs(y - previousPosition[1]) / 2;

   // c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.moveTo(previousPosition[0], previousPosition[1] - halfHeight);
    c.lineTo(previousPosition[0] + halfWidth, previousPosition[1]);
    c.lineTo(previousPosition[0], previousPosition[1] + halfHeight);
    c.lineTo(previousPosition[0] - halfWidth, previousPosition[1]);
    c.closePath();

    c.fillStyle = drawingColor;
    c.fill();
    c.stroke();
}

function onMouseUpDiamond() {
    canvas.removeEventListener("mousemove", onmousemoveDiamond);
}



function onEraserClick() {
    isEraserActive = !isEraserActive;
    if (isEraserActive) {
        canvas.addEventListener("mousedown", onMouseDownEraser);
        canvas.style.cursor = "crosshair";
        eraser.classList.add("active");
        eraser.style.backgroundColor = "blue";
        drawingSize = sizePicker.value; // Adjust this as needed
    } else {
        canvas.removeEventListener("mousedown", onMouseDownEraser);
        canvas.style.cursor = "auto";
        eraser.classList.remove("active");
        eraser.style.backgroundColor = "white";
    }
}

function onMouseDownEraser(event) {
    let { clientX: x, clientY: y } = event;
    c.globalCompositeOperation = "destination-out"; // Set composite mode to erase
    c.lineWidth = drawingSize; // Set the eraser size
    previousPosition = [x, y];

    canvas.addEventListener("mousemove", onmousemoveEraser);
    canvas.addEventListener("mouseup", onMouseUpEraser);
}

function onmousemoveEraser(e) {
    let { clientX: x, clientY: y } = e;
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...[x, y]);
    c.stroke();
    c.closePath();
    previousPosition = [x, y];
}

function onMouseUpEraser() {
    canvas.removeEventListener("mousemove", onmousemoveEraser);
    c.globalCompositeOperation = "source-over"; // Reset composite mode
}

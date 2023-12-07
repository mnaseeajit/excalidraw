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
    }
    else{
        canvas.removeEventListener("mousedown",onMouseDown);
        canvas.style.cursor = "auto";
    }
}
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
//c responsible for making any kind of drwawing in the canvas

// canvas.addEventListener("mousedown",onmousedown);
// canvas.addEventListener("mouseup",onmouseup);

// function onmousedown(event){
//     let (clientX , clientY) = event ;
//     c.strokeStyle = red;
//     c.beginPath();
//     c.moveto(clientX,clientY);
// }

// function onmouseup(event){
//     let (clientX,clientY) = event;
//     c.lineTo(clientX,clientY);
//     c.stroke();
//     c.closePath();
// }

c.beginPath();
c.moveTo(200,300);
c.lineTo(400,1000);
c.stroke();
c.closePath();
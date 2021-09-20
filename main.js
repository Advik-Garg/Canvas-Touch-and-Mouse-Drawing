var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


var MouseEvent="";
// color = "black";
// width_of_line = 3;
function submit()
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
	console.log(color);    
    console.log(width_of_line);
   }


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    MouseEvent="mousedown"
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    MouseEvent="mouseup"
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    MouseEvent="mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    // MouseEvent="mousemove"
  
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop; 

    if (MouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();  
    }
    last_position_of_x = current_position_of_x; 
    last_position_of_y = current_position_of_y;


}



function my_touchstart(e)
{
    //Addictonal Activity start
    //color = document.getElementById("color").value;
   // width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
     current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    last_position_of_x = current_position_of_x; 
    last_position_of_y = current_position_of_y;
}
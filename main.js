canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
roverwidth= 100;
roverheight= 90;
roverx= 10;
rovery= 10;

backgroundimage= "mars.jpg";
roverimage= "rover.png";

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = backgroundimage;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = roverimage;


}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadrover() {
ctx.drawImage(rover_imgTag, 0, 0, roverwidth, roverheight);


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
 if(keyPressed == '38')
 {
up();
console.log("up");

 }

if (keyPressed == '40')
{
down();
console.log("down");

}

if(keyPressed == '37')
{
left();
console.log("left");
}

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}


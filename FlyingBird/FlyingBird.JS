window.onclick = startGame;
var a = 9;
var xMove=1;
var xPosition=100;
var start = true;
var ctx;
var canvas;
var myVar;

function startGame()
{
    
    canvas= document.getElementById("myCanvas");
    ctx= canvas.getContext("2d");
    console.log(start);
    if(start==false)
    {
        myVar = setInterval(draw,10);
        
    }
   
}

function clickedButton()
{
   start = false;
}

function draw()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath()
    ctx.fillRect(xPosition,0,10,200);
    ctx.fillStyle= "#444444";
    ctx.fill();
    ctx.closePath();
    xPosition = xPosition + xMove;
    if(xPosition==200)
        math();
}
function math()
{
    var x = 7;
    var y = 5;
    var problem = prompt("Please add "+x+" and "+y,"Answer Here");
    if(problem==12){
        document.getElementById("demo").innerHTML = "Your answer is correct";
    }
    else
    {
        document.getElementById("demo").innerHTML = "Your answer was incorrect";
    }

}




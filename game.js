var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");
	
function Click()
{
	var x=100;
	var y=100;
	cvs.onclick=function(e)
	{
	x = Number(e.clientX);
	 y = Number(e.clientY);
	 ctx.beginPath();
ctx.arc(x, y, 50, 0, 2 * Math.PI);
ctx.stroke(); 
			}
    
	 
}
function Refresh()
{
	canvas.width = canvas.width;
}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;
var startX = 0, startY = 300;
var hitTopBoundary = false;
//var circle = new Circle(300, 300, 150, 'green');

var drawCircle = function (x, y, radius, color, lineWidth) {
	ctx.save();
	ctx.translate(x, y);
	ctx.fillStyle = color || 'green';
	ctx.strokeStyle = color || 'pink';
	ctx.lineWidth = lineWidth || 1;
	ctx.beginPath();	
	ctx.arc(0, 0, radius, 0, tau);
	ctx.stroke();
	ctx.fill();
	ctx.restore();
};

// drawCircle(300, 300, 20, 'green', 2);


var start = function () {

}
setInterval(function () {
	if(hitTopBoundary){
		startX -= 5;
	}
	else{
		startX += 5;
	}
	if(startX >= 590)hitTopBoundary = true;
	if(startX <= 10)hitTopBoundary = false;
	ctx.clearRect(0, 0, 600, 600);
	drawCircle(startX, startY, 20, 'blue', 2);
}, 50);
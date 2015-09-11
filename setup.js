var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;

var height;
var width;
var halfHeight;
var halfWidth;

var resizeWindow = function(){
	height = canvas.height;
	width = canvas.width;
	halfHeight = Math.round(height / 2);
	halfWidth = Math.round(width / 2);
};

var draw = {
	circle: function (position, radius, color, lineWidth) {
		context.save();
		context.translate(position.x, position.y);
		context.fillStyle = color || 'green';
		context.strokeStyle = color || 'pink';
		context.lineWidth = lineWidth || 1;
		context.beginPath();
		context.arc(0, 0, radius, 0, tau);
		context.stroke();
		context.fill();
		context.restore();
	}
};

var updateQueue = [];

var updateLoop = function () {
	context.save();
	context.clearRect(0, 0, width, height);
	context.translate(halfWidth, halfHeight);
	updateQueue.forEach(function(item){
		item.update();
	});
	updateQueue.forEach(function(item){
		item.render();
	});
	context.restore();
};

var intervalId;
var start = function(){
	resizeWindow();
	intervalId = setInterval(updateLoop, 1000/30);
};
var stop = function(){
	clearInterval(intervalId);
};

start();

var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;

var Clock = function(vec2, rpm){
	this.pivot = new Vector2(0,0);
	this.secondHand = new Vector2(300, 0);
	this.rpm = rpm;
};

Clock.prototype.update = function() {
	this.x2 += 10;
	this.y2 += 10;
};

Clock.prototype.render = function(){
	draw.line(this.x, this.y, this.x2, this.y2);
};

Clock.prototype.start = function() {
	//setInterval(function(){
	//
	//}, this.rpm / 60000);
};


var myClock = new Clock(0, 0, -300, -300, 1);
updateQueue.push(myClock);
//myClock.start();


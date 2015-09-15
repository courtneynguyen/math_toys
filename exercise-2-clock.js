var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;

var Clock = function(vec2, rpm){
	this.pivot = new Vector2(0,0);
	this.secondHand = new Vector2(300, 0);
	this.rpm = rpm;
};

Clock.prototype.update = function() {
	this.secondHand.rotate(10 * deg);
};

Clock.prototype.render = function(){
	draw.line(0, 0, this.secondHand.x, this.secondHand.y);
};

Clock.prototype.start = function() {
	//setInterval(function(){
	//
	//}, this.rpm / 60000);
};


var myClock = new Clock(0, 0, -300, -300, 1);
updateQueue.push(myClock);
//myClock.start();


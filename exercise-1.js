var Ball = function(x, y, radius){
	this.position = new Vector2(x, y);
	this.radius = radius;
	this.hitTopBoundary = false;
};

Ball.prototype.render = function(){
	draw.circle(this.position, this.radius, 'blue', 2);
};
Ball.prototype.update = function(){
	if(this.hitTopBoundary){
		this.position.x -= 5;
	}
	else{
		this.position.x += 5;
	}
	if(this.position.x >= halfWidth){this.hitTopBoundary = true;}
	if(this.position.x <= -halfWidth){this.hitTopBoundary = false;}
};

var myBall = new Ball(0, 0, 20);

updateQueue.push(myBall);
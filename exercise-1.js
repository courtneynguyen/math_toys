var Vector2 = function(x, y){
	this.x = x;
	this.y = y;
};

Vector2.prototype = {
	add: function(v) {
		this.x += v.x;
		this.y += v.y;
	},
	sub : function(v){
		this.x -= v.x;
		this.y -= v.y;
	},
	scale: function(n){
		this.x *= n;
		this.y *= n;
	},
	rotation : function(a){
		var currentAngle = Math.atan2(this.y, this.x);

	}
};

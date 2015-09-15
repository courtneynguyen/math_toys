var Vector2 = function(x, y){
	this.x = x;
	this.y = y;
	this.angle = function(){
		return Math.atan2(this.y,this.x);
	};
	this.length = function() {
		var t = this;
		return Math.sqrt(t.sqlen());
	};
	this.sqlen = function(){
		var t = this;
		return ((t.x*t.x) + (t.y*t.y));
	}
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
	rotate:function(r){
		var t = this;
		var r = parseFloat(r); //in Radians
		var currentRotation = t.angle(); //in Radians
		var currentLength = t.length();
		t.x = Math.cos(currentRotation + r) * currentLength;
		t.y = Math.sin(currentRotation + r) * currentLength;
		return t;
	}
};

var Plane = function () {
	this.life = true;
	this.armor = 1;
	this.position = {x: 0, y: 0};
	this.direction = "up";
	this.bullets = null;
	this.lv = 1;
};

var MyPlane = function () {
};
MyPlane.prototype = new Plane();
MyPlane.prototype.init = function () {
	this.plane = new Image();
	this.plane.src = "./src/myPlane.gif";
};
MyPlane.prototype.draw = function (ctx) {
	ctx.drawImage(this.plane, this.position.x - 33, this.position.y - 45, 66, 80)
};

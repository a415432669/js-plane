var Plane = function () {
	this.life = true;
	this.armor = 1;
	this.position = {x:0,y:0};
	this.direction = "up";
	this.bullets = null;
	this.lv = 1;
};

var MyPlane = function () {
};
MyPlane.prototype = new Plane();
MyPlane.prototype.init = function () {
	this.plane = new Image();
	this.plane.src = "./src/myPlane.gif"
};
MyPlane.prototype.draw = function (ctx) {
	var _this = this;
	console.log(ctx);
	ctx.drawImage(_this.plane, _this.position.x, _this.position.y)
};
MyPlane.prototype.show = function () {
console.log('show')
};
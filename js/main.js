var canvas, ctx, lastTime, deltaTime, bullet, myPlane;
var game = {
	canvas: document.getElementById('canvas'),
	ctx: this.canvas.getContext('2d'),
	lastTime: null,
	deltaTime: null,
	bullet: null,
	myPlane: null,
	interval: 1000 / 24
};

document.body.onload = function() {
	game.init();
	game.run();
};

game.init = function () {
	var _this = this;
	_this.lastTime = Date.now();
	_this.bullet = new Bullet();
	_this.bullet.init();
	_this.bullet.draw();
};

game.run = function () {
	var _this = this;
	var now = Date.now();
	_this.deltaTime = now - _this.lastTime;
	_this.lastTime = now;
	_this.bullet.draw();
	_this.initMyPlane();
};

game.initMyPlane = function () {
	this.myPlane = new MyPlane();
	this.myPlane.position = {x: "45%", y: 460};
	this.myPlane.init();
	this.myPlane.draw(this.ctx);
	this.myPlane.show();
};
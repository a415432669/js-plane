// var canvas, ctx, lastTime, deltaTime, bullet, myPlane;
var game = {
	canvas: document.getElementById('canvas'),
	container: document.getElementById('all_background'),
	ctx: this.canvas.getContext('2d'),
	bullet: null,
	myPlane: null,
	level: 1,
	interval: 1000 / 24,
	bgY: 0,
	lastFrameTime: null,
	diffFrameTime: 0
};

document.body.onload = function () {
	game.init()
};

game.init = function () {
	var pic = new Image();
	pic.src = './src/begin.png';
	this.lastFrameTime = Date.now();
	this.canvas.width = document.body.offsetWidth;
	this.canvas.height = document.body.offsetHeight;
	// this.ctx.drawImage(pic, this.canvas.width / 2 - 160, 150);

	this.initMyPlane();
	this.initBullet();
	this.run();
};

game.run = function () {
	var now = Date.now();
	var _this = game;
	_this.diffFrameTime = now - _this.lastFrameTime;
	_this.lastFrameTime = now;

	// 背景运动
	_this.bgY += 0.05 * _this.diffFrameTime;
	_this.container.style.backgroundPositionY = _this.bgY + "px";

	// 清除画布
	_this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
	// 绘制我的飞机
	_this.myPlane.draw(_this.ctx);
	// 绘制子弹
	_this.bullet.fire(_this.level, _this.myPlane.position, _this.ctx, _this.diffFrameTime);
	requestAnimFrame(_this.run);
};

game.initMyPlane = function () {
	this.myPlane = new MyPlane();
	this.myPlane.position = {x: this.canvas.width / 2, y: this.canvas.height - 40};
	this.myPlane.init();
};

game.initBullet = function () {
	this.bullet = new Bullet();
	this.bullet.position = {x: this.myPlane.position.x, y: this.myPlane.position.y};
	this.bullet.init();
};
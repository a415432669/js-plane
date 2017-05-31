var Bullet = function () {
	this.alive = [];
	this.position = [];
	this.pic = null;
	this.lv1 = new Image();
	this.lv2 = new Image();
	this.lv3 = new Image();
	this.speed = 70;
	this.bullets = [];
};
Bullet.prototype.num = 1;
Bullet.prototype.init = function () {
	this.h = [];
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = true;
		this.position[i] = {x: 0, y: 0};
		this.h[i] = 0;
	}
	this.lv1.src = './src/bullet1.png';
	this.lv2.src = './src/bullet2.png';
	this.lv3.src = './src/bullet3.png';
};
Bullet.prototype.draw = function (level, position, ctx, time) {
	if (level === 1) {
		this.pic = this.lv1;
		this.pic.width = 6;
		this.pic.height = 14;
	} else if (level === 2) {
		this.pic = this.lv2;
		this.pic.width = 22;
		this.pic.height = 27;
	} else {
		this.pic = this.lv3;
		this.pic.width = 35;
		this.pic.height = 33;
	}
	ctx.save();
	ctx.globalCompositeOperation = "destination-over";
	for (var i = 0; i < this.num; i++) {
		ctx.drawImage(this.pic, position.x - this.pic.width / 2, position.y - this.pic.height / 2 - this.h[i]);
		this.h[i] += this.speed / time;
		if (position.y - this.pic.height / 2 - this.h[i] < 0) {
			this.alive[i] = true;
			this.h[i] = 0;
		}
	}
	ctx.restore();
};
Bullet.prototype.fire = function (level, position, ctx, time) {
	var _this = this;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			_this.draw(level, position, ctx, time);
		}
	}
};
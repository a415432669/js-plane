var Bullet = function () {
	this.alive = [];
	this.lv1 = new Image();
	this.lv2 = new Image();
	this.lv3 = new Image();
};
Bullet.prototype.num = 30;
Bullet.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = true
	}
	this.lv1.src = './src/bullet1.png';
	this.lv2.src = './src/bullet2.png';
	this.lv3.src = './src/bullet3.png';
};
Bullet.prototype.draw = function () {
	// console.log('bullet')
};
Bullet.prototype.update = function () {
	var num = 0;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) num++;
	}
};
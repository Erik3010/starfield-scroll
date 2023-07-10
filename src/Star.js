class Star {
  constructor({ ctx, x, y, radius, color, speed }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.speed = speed;

    this.color = color;

    this.radius = radius;
  }
  update() {
    this.x += this.speed.x;
    this.y += this.speed.y;
  }
  draw() {
    this.update();

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color ?? "#ffffff";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
}

export default Star;

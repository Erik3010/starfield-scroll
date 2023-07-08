class Star {
  constructor({ ctx, x, y, radius, color, speed = 0 }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.speed = speed;

    this.color = color;

    this.radius = radius;
  }
  update() {
    this.y += this.speed;
  }
  draw() {
    this.update();

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // this.ctx.fillStyle = "#ffffff";
    this.ctx.fillStyle = this.color ?? "#ffffff";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
}

export default Star;

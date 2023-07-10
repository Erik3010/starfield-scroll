class Star {
  constructor({ ctx, x, y, radius, color, speed, divisor }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.speed = speed;

    this.color = color;

    this.radius = radius;

    this.divisor = divisor;
  }
  get scaledRadius() {
    return this.radius / this.divisor;
  }
  get scaledXSpeed() {
    return this.speed.x / this.divisor;
  }
  get scaledYSpeed() {
    return this.speed.y / this.divisor;
  }
  update() {
    this.x += this.scaledXSpeed;
    this.y += this.scaledYSpeed;
  }
  draw() {
    this.update();

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.scaledRadius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color ?? "#ffffff";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }
}

export default Star;

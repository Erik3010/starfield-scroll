import Star from "./Star";
import { random } from "./utility";

class Layer {
  constructor({ instance, starCount = 0, divisor }) {
    this.divisor = divisor;
    this.instance = instance;
    this.starCount = starCount;

    this.stars = [];

    this.generateStars();
  }
  generateStars() {
    const {
      ctx,
      canvas,
      config: { starSize, speed, colors },
    } = this.instance;

    for (let i = 0; i < this.starCount; i++) {
      const star = new Star({
        ctx,
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: starSize,
        speed: { y: speed.y, x: speed.x },
        divisor: this.divisor,
        color: colors.star,
      });

      this.stars.push(star);
    }
  }
  draw() {
    const {
      canvas: { width, height },
      config: { speed },
    } = this.instance;

    for (const star of this.stars) {
      star.y = (star.y + height) % height;
      star.x = (star.x + width) % width;
      star.speed = speed;

      star.draw();
    }
  }
}

export default Layer;

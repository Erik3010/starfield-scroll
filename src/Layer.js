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
    const { ctx, canvas, starSize, speed } = this.instance;

    for (let i = 0; i < this.starCount; i++) {
      const star = new Star({
        ctx,
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: starSize / this.divisor,
        speed: { y: speed / this.divisor, x: 0 },
      });

      this.stars.push(star);
    }
  }
  draw() {
    const { width, height } = this.instance.canvas;

    for (const star of this.stars) {
      star.y = (star.y + height) % height;
      star.x = (star.x + width) % width;

      star.draw();
    }
  }
}

export default Layer;

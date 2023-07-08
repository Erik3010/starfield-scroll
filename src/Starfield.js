import { random } from "./utility";
import Layer from "./Layer";
import Star from "./Star";

class Starfield {
  constructor({ canvas }) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.layers = [];

    this.starsCount = 150;
    this.layersCount = 4;

    this.colors = ["#ff0000", "#00ff00", "#0000ff", "#ffffff"];
  }
  init() {
    const INITIAL_STAR_SIZE = 1.5;
    const INITIAL_SPEED = 1;
    let divisor = 1;

    for (let i = 0; i < this.layersCount; i++) {
      const layer = new Layer({ yBoundary: this.canvas.height });

      const avgStarPerLayer = Math.floor(this.starsCount / this.layersCount);
      const remainder = this.starsCount % this.layersCount;
      const starPerLayer =
        avgStarPerLayer + (i === this.layersCount - 1 ? remainder : 0);

      for (let j = 0; j < starPerLayer; j++) {
        layer.addStar(
          new Star({
            ctx: this.ctx,
            x: random(0, this.canvas.width),
            y: random(0, this.canvas.height),
            radius: INITIAL_STAR_SIZE / divisor,
            speed: INITIAL_SPEED / divisor,
            // color: this.colors[i],
          })
        );
      }

      console.log(divisor, i);
      divisor *= 1.5;
      this.layers.push(layer);
    }

    this.render();
  }
  drawBg() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawBg();

    for (const layer of this.layers) {
      layer.draw();
    }
  }
  render() {
    this.draw();

    requestAnimationFrame(this.render.bind(this));
  }
}

export default Starfield;

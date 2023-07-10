import { random } from "./utility";
import Layer from "./Layer";
import Star from "./Star";

class Starfield {
  constructor({ canvas }) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.layers = [];

    this.layersCount = 4;
    this.starsCount = 150;
    this.directions = { y: 1, x: 0 };
    this.speed = 1;
    this.starSize = 1.5;

    this.colors = ["#ff0000", "#00ff00", "#0000ff", "#ffffff"];
  }
  init() {
    let divisor = 1;
    for (let i = 0; i < this.layersCount; i++) {
      const avgStarPerLayer = Math.floor(this.starsCount / this.layersCount);
      const remainder = this.starsCount % this.layersCount;
      const starPerLayer =
        avgStarPerLayer + (i === this.layersCount - 1 ? remainder : 0);

      const layer = new Layer({
        divisor,
        instance: this,
        starCount: starPerLayer,
      });

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

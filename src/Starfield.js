import ConfigPane from "./ConfigPane";
import Layer from "./Layer";

class Starfield {
  constructor({ canvas }) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.layers = [];

    this.config = {
      layersCount: 4,
      starsCount: 150,
      speed: { y: 1, x: 0 },
      starSize: 1.5,
      colors: { background: "#000000", star: "#ffffff" },
    };

    this.configPane = new ConfigPane(this.config);
  }
  init() {
    const { layersCount, starsCount } = this.config;

    let divisor = 1;
    for (let i = 0; i < layersCount; i++) {
      const avgStarPerLayer = Math.floor(starsCount / layersCount);
      const remainder = starsCount % layersCount;
      const starPerLayer =
        avgStarPerLayer + (i === layersCount - 1 ? remainder : 0);

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
    this.ctx.fillStyle = this.config.colors.background;
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

class Layer {
  constructor({ yBoundary }) {
    this.yBoundary = yBoundary;

    this.stars = [];
  }
  addStar(star) {
    this.stars.push(star);
  }
  draw() {
    for (const star of this.stars) {
      if (star.y >= this.yBoundary) {
        star.y = 0;
      }
      star.draw();
    }
  }
}

export default Layer;

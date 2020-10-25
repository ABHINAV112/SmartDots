class Goal {
  constructor(x, y, radius = 4) {
    this.position = createVector(x, y);
    this.radius = radius;
  }
  render() {
    fill(255, 0, 0);
    circle(this.position.x, this.position.y, this.radius);
    fill(255, 255, 255);
  }
}

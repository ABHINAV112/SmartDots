class Agent {
  constructor(start, goal, radius = 10) {
    this.position = createVector(start.position.x, start.position.y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.dead = false;
    this.reachedGoal = false;
    this.step = 0;

    this.start = start;
    this.goal = goal;
    this.radius = radius;
    this.brain = new Brain(INSTRUCTIONS);
  }
  reset() {
    this.position = createVector(start.position.x, start.position.y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.dead = false;
    this.reachedGoal = false;
    this.step = 0;
  }
  move() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.step += 1;
  }
  update() {
    if (!this.dead && !this.reachedGoal) {
      // check if reached the goal
      // console.log(this.position);

      if (this.position.dist(this.goal.position) <= this.goal.radius) {
        this.reachedGoal = true;
      }
      this.acceleration = this.brain.getAcceleration(this.step);
      // as the number of instructions inside the brain has run out
      if (!this.acceleration) {
        this.dead = true;
      }
      //checking if edge hit
      if (
        !(
          this.position.x - this.radius > 0 &&
          this.position.x + this.radius < BOARD_WIDTH &&
          this.position.y - this.radius > 0 &&
          this.position.y + this.radius < BOARD_HEIGHT
        )
      ) {
        this.dead = true;
      }
      this.move();
    }
  }
  calculateFitness() {
    if (this.goalReached) {
      return 1 / this.step;
    }
    if (this.dead) {
      return 1 / this.goal.position.dist(this.position);
    }
  }
  clone() {
    let newClone = new Agent(this.start, this.goal, this.radius);
    newClone.brain = this.brain.clone();
    return newClone;
  }
  render() {
    this.update();
    if (this.isBest) {
      fill(0, 255, 0);
    } else {
      fill(255, 204, 0);
    }
    // console.log(this.position.x, this.position.y, this.radius);
    circle(this.position.x, this.position.y, this.radius);
    fill(255, 255, 255);
  }
}

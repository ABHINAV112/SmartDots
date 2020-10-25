class Brain {
  constructor(numInstructions) {
    this.numInstructions = numInstructions;
    this.instructions = [];
    this.randomize();
  }
  randomize() {
    for (let i = 0; i < this.numInstructions; i++) {
      this.instructions.push(p5.Vector.random2D());
    }
  }
  clone() {
    let clone = new Brain(this.numInstructions);
    // clone.instructions = JSON.parse(JSON.stringify(this.instructions));
    for (let i = 0; i < this.numInstructions; i++) {
      clone.instructions[i] = this.instructions[i].copy();
    }
    return clone;
  }
  getAcceleration(step) {
    if (step >= this.numInstructions) {
      return false;
    }
    return this.instructions[step];
  }
  mutate(mutationRate) {
    for (let i = 0; i < this.numInstructions; i++) {
      let selection = Math.random();
      if (selection < mutationRate) {
        this.instructions[i] = p5.Vector.random2D();
      }
    }
  }
}

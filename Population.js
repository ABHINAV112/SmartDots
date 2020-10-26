class Population {
  constructor(numAgents, start, goal) {
    this.agents = [];
    this.numAgents = numAgents;
    this.doneAgents = 0;
    this.start = start;
    this.goal = goal;
    for (let i = 0; i < numAgents; i++) {
      this.agents.push(new Agent(start, goal));
    }
  }
  isAllDone() {
    return this.doneAgents == this.numAgents;
  }
  findBestAgent() {
    let bestAgentIndex = 0;
    // console.log(this.agents);
    for (let i = 1; i < this.numAgents; i++) {
      if (
        this.agents[i].calculateFitness() >
        this.agents[bestAgentIndex].calculateFitness()
      ) {
        bestAgentIndex = i;
      }
    }
    return this.agents[bestAgentIndex].clone();
  }
  createNewPopulation() {
    let bestAgentBrain = this.findBestAgent().brain.clone();
    // resetting everything other than brain to initial values
    // console.log(bestAgentBrain.instructions);
    let bestAgent = new Agent(this.start, this.goal);
    bestAgent.brain = bestAgentBrain;
    // console.log(
    //   String(bestAgent.position),
    //   String(bestAgent.velocity),
    //   String(bestAgent.acceleration),
    //   bestAgent.brain.instructions
    // );
    this.agents = [bestAgent];
    bestAgent.isBest = false;
    for (let i = 1; i < this.numAgents; i++) {
      let newAgent = bestAgent.clone();
      newAgent.brain.mutate(MUTATION_RATE);
      this.agents.push(newAgent);
    }
    bestAgent.isBest = true;
  }
  render() {
    let allDone = this.isAllDone();
    // console.log(allDone);
    // console.log(this.doneAgents);
    this.doneAgents = 0;
    if (allDone) {
      this.createNewPopulation();

      return;
    }

    for (let i = this.numAgents - 1; i >= 0; i--) {
      this.agents[i].render();
      if (this.agents[i].dead || this.agents[i].reachedGoal) {
        this.doneAgents += 1;
      }
    }
  }
}

let goal;
let start;
const POPULTION_SIZE = 10;
const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 400;
const INSTRUCTIONS = 1000;
const MUTATION_RATE = 0.01;
let population;
function setup() {
  createCanvas(BOARD_WIDTH, BOARD_HEIGHT);
  goal = new Goal(BOARD_WIDTH / 2, 10, 10);
  goal.render();
  start = new Start(BOARD_WIDTH / 2, 300);
  population = new Population(POPULTION_SIZE, start, goal);
  noStroke();
}

function draw() {
  background(255);
  goal.render();
  population.render();
}

let goal;
let start;
const POPULTION_SIZE = 100;
const BOARD_WIDTH = window.innerWidth;
const BOARD_HEIGHT = window.innerHeight;
const INSTRUCTIONS = 400;
const MUTATION_RATE = 0.01;
let population;
function setup() {
  createCanvas(BOARD_WIDTH, BOARD_HEIGHT);
  goal = new Goal(BOARD_WIDTH / 2, 10, 10);
  goal.render();
  start = new Start(10, BOARD_HEIGHT - 10);
  population = new Population(POPULTION_SIZE, start, goal);
  noStroke();
}

function draw() {
  background(255);
  goal.render();
  population.render();
}

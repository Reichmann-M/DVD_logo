const SPEED = 3;
let wallhits = 0;
let dvd;
let obj;
let speed = {
  x: SPEED,
  y: SPEED,
}
let size;
let col = 20;

var WallHitsEL;

function preload() {
  dvd = loadImage("assets/dvd_logo.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  WallHitsEL = document.getElementById("WallHits");
  size = {
    x: 472 / 2,
    y: 210 / 2
  };
  obj = {
    x: round(random(1, width - size.x)),
    y: round(random(1, height - size.y))
  };
  colorMode(HSB, 100);
  tint(col, 100, 100);
  let r = round(random(5));
  if (r == 1) {
    speed.x = -speed.x;
    speed.y = -speed.y;
  }
}

function draw() {
  background(0);
  fill(255);
  image(dvd, obj.x, obj.y, size.x, size.y);
  obj.x = obj.x + speed.x;
  obj.y = obj.y + speed.y;
  if (obj.x + size.x >= width || obj.x <= 0) {
    speed.x = -speed.x;
    changeStuff();
  }
  if (obj.y + size.y >= height || obj.y <= 0) {
    speed.y = -speed.y;
    changeStuff();
  }
}

function changeStuff() {
  // Change Color
  col = col + 10;
  tint(col, 100, 100);
  if (col == 100) {
    col = 0;
  }
  // Change Counter
  wallhits = wallhits + 1;
  WallHitsEL.innerHTML = wallhits;
}

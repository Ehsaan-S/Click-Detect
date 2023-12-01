let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let circles = [];
let rectangles = [];

function gameLoop() {
  DrawCircles();
  DrawRectangles();
  MoveCircles();
  MoveRectangles();
  requestAnimationFrame(gameLoop);
}

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function addCircles(count) {
  for (let i = 0; i < count; i++) {
    circles.push({
      x: randomNum(0, cnv.width),
      y: randomNum(0, cnv.height),
      radius: randomNum(12, 20),
      speed: randomNum(-2, 2),
    });
  }
}

function addRectangles(count) {
  for (let i = 0; i < count; i++) {
    rectangles.push({
      x: randomNum(0, cnv.width),
      y: randomNum(0, cnv.height),
      width: randomNum(20, 25),
      height: randomNum(25, 30),
      speed: randomNum(-2, 2),
    });
  }
}

function DrawCircles() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
}

function DrawRectangles() {
  for (let i = 0; i < rectangles.length; i++) {
    let rectangle = rectangles[i];
    ctx.fillStyle = "red";
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  }
}
function MoveCircles() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.x += circle.speed;
    circle.y += circle.speed;
  }
}
function MoveRectangles() {
  for (let i = 0; i < rectangles.length; i++) {
    let rectangle = rectangles[i];
    rectangle.x += rectangle.speed;
    rectangle.y += rectangle.speed;
  }
}

console.log(circles);
console.log(rectangles);
addCircles(randomNum(10, 25));
addRectangles(randomNum(8, 15));
gameLoop();

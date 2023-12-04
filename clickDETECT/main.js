let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let circles = [];
let rectangles = [];

function gameLoop() {
  DrawCircles();
  DrawRectangles();
  collisionCircle();
  collisionRectangle();
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
      radius: randomNum(15, 30),
      xspeed: randomNum(-1.5, 1.5),
      yspeed: randomNum(-1.5, 1.5),
    });
  }
}

function addRectangles(count) {
  for (let i = 0; i < count; i++) {
    rectangles.push({
      x: randomNum(0, cnv.width),
      y: randomNum(0, cnv.height),
      width: randomNum(20, 30),
      height: randomNum(25, 35),
      xspeed: randomNum(-1.5, 1.5),
      yspeed: randomNum(-1.5, 1.5),
    });
  }
}

function DrawCircles() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    circle.x += circle.xspeed;
    circle.y += circle.yspeed;
  }
}

function collisionCircle() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    if (circle.x + circle.radius > cnv.width) {
      circle.xspeed = -circle.xspeed;
    }
    if (circle.x - circle.radius < 0) {
      circle.xspeed = -circle.xspeed;
    }

    if (circle.y + circle.radius > cnv.height) {
      circle.yspeed = -circle.yspeed;
    }
    if (circle.y - circle.radius < 0) {
      circle.yspeed = -circle.yspeed;
    }
  }
}

function DrawRectangles() {
  for (let i = 0; i < rectangles.length; i++) {
    let rectangle = rectangles[i];
    ctx.fillStyle = "red";
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

    rectangle.x += rectangle.xspeed;
    rectangle.y += rectangle.yspeed;
  }
}
function collisionRectangle() {
  for (let i = 0; i < rectangles.length; i++) {
    let rectangle = rectangles[i];

    if (rectangle.x + rectangle.width < 0) {
      rectangle.x = cnv.width;
    }
    if (rectangle.x > cnv.width) {
      rectangle.x = -rectangle.width;
    }

    if (rectangle.y + rectangle.height < 0) {
      rectangle.y = cnv.height;
    }
    if (rectangle.y > cnv.height) {
      rectangle.y = -rectangle.height;
    }
  }
}

console.log(circles);
console.log(rectangles);
addCircles(randomNum(5, 10));
addRectangles(randomNum(4, 8));
gameLoop();

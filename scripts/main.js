const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let player;
let gravity = 0.1;
let jump = true;

/*window.onload = function () {
  start();
  setInterval(update, 10);
};*/

function start() {
  player = new Cat(400, 400);
}

function update() {
  canvas.width = canvas.width;
  context.fillStyle = 'green';
  context.fillRect(0, 750, 1600, 100);
  player.paint();
  player.update();
}

function keyDown(e) {
  if (e.keyCode === 68) {
    player.xVelocity = 5;
  } else if (e.keyCode === 65) {
    player.xVelocity = -5;
  } else if (e.keyCode === 32 && jump) {
    player.yVelocity = -5;
  }
}

function keyUp(e) {
  if (e.keyCode === 68) {
    player.xVelocity = 0;
  } else if (e.keyCode === 65) {
    player.xVelocity = 0;
  }
}

document.onkeydown = keyDown;
document.onkeyup = keyUp;

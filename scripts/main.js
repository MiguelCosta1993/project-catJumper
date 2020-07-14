const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

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

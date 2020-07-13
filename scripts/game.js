class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.player = new Cat(400, 400);

    this.fruit = new Fly(this);
    this.fruit.setRandomPosition();

    this.scoreboard = new Scoreboard(this);

    this.setKeyBindings();
  }
  // continue here!
  setKeyBindings() {
    let rightPressed = false;
    let leftPressed = false;
    let spacePressed = false;
    function keyDownHandler(e) {}

    function keyUpHandler(e) {
      if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
      } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
      }
    }
  }

  runLogic() {
    this.player.runLogic();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.player.paint();
    this.fruit.paint();
    this.scoreboard.paint();
  }

  loop() {
    // Run logic
    this.runLogic();

    // Erase
    this.clean();

    // Paint
    this.paint();

    if (this.running) {
      setTimeout(() => {
        this.loop();
      }, 300);
    }
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

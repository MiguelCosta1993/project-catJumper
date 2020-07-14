class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Cat(100, 400, this);
    this.dog = new Dog(400, 710, this);
    this.setKeyBindings();

    //this.fly = new Fly(this);
    // this.fruit.setRandomPosition();

    //this.scoreboard = new Scoreboard(this);
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 32:
          this.player.catMove('up');
          break;
        case 65:
          this.player.catMove('left');

          break;
        case 68:
          this.player.catMove('right');

          break;
      }
    });
  }

  runLogic() {
    this.player.runLogic();
    this.dog.runLogic();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    //this.fruit.paint();
    //this.scoreboard.paint();
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 750, 1600, 100);
    this.player.paint();
    this.dog.paint();
  }

  loop() {
    // Run logic
    this.runLogic();

    // Erase
    this.clean();

    // Paint
    this.paint();

    setTimeout(() => {
      this.loop();
    }, 1000 / 60);
  }
}

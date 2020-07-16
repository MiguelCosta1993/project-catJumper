const FLOORHEIGHT = 710;
const DOGXPOSITION = 700;
const MAXDOGS = 10;

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Cat(100, 400, this);
    this.dogs = [];
    this.dogsBamboozled = 0;
    this.scoreboard = new Scoreboard(this);
    this.crash = false;
    this.gamestate = true;
    this.difficulty = 1;
    this.spaceDifficulty = 1;
    this.time_since_last_difficulty_change = Date.now();
  }

  gameOver() {
    this.gamestate = false;
  }

  checkCollision() {
    this.dogs.forEach(dog => {
      if (
        this.player.x + this.player.w >= dog.x &&
        this.player.y + this.player.h >= dog.y &&
        this.player.x <= dog.x + dog.w
      ) {
        this.crash = true;
        this.gameOver();
      }
    });
  }

  runLogic() {
    this.dogs.map(actor => {
      actor.x = actor.x - 10 * this.difficulty;
    });

    if (this.dogs.length && this.dogs[0].x + this.dogs[0].w <= 0) {
      this.dogsBamboozled++;
    }
    this.dogs = this.dogs.filter(dog => dog.x + dog.w > 0);

    if (Date.now() - this.time_since_last_difficulty_change > 15000) {
      this.difficulty += 0.2;
      this.time_since_last_difficulty_change = Date.now();
    }

    if (Math.floor(Math.random() * 100) < 50) {
      if (this.dogs.length < MAXDOGS) {
        let acceptablePosition = 0;
        while (!acceptablePosition) {
          acceptablePosition = DOGXPOSITION + Math.floor(Math.random() * 100);
          console.log(acceptablePosition);
          if (
            this.dogs.every(
              dog =>
                dog.x + acceptablePosition > 200 &&
                dog.x - acceptablePosition < 200
            )
          ) {
            this.dogs.push(new Dog(1600, FLOORHEIGHT, this));
          }
        }
      }
    }
    this.player.runLogic();
    this.dogs.map(dog => dog.runLogic());
    this.checkCollision();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 750, 1600, 100);
    this.player.paint();
    this.dogs.forEach(dog => {
      dog.paint();
    });
    this.scoreboard.paint();

    if (this.gamestate === false) {
      this.context.rect(0, 0, 1600, 800);
      this.context.fillStyle = 'rgba(0,0,0,1)';
      this.context.fill();
      this.context.font = '60px Roboto Mono';
      this.context.fillStyle = 'white';
      this.context.textAlign = 'center';
      this.context.fillText('Game Over', 800, 400);
      this.context.font = '20px Roboto Mono';
      this.context.fillStyle = 'white';
      this.context.textAlign = 'center';
      this.context.fillText('Press ESC to restart', 800, 500);
    }
  }

  loop() {
    this.runLogic();

    this.clean();

    this.paint();

    setTimeout(() => {
      this.loop();
    }, 1000 / 60);
  }
}

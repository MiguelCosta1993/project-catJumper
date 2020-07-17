const FLOORHEIGHT = 420;
const DOGXPOSITION = 100;
const MAXDOGS = 5;

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Cat(50, 350, this);
    this.dogs = [];
    this.dogsBamboozled = 0;
    this.scoreboard = new Scoreboard(this);
    this.crash = false;
    this.gamestate = { menu: true, running: false, gameover: false };
    this.difficulty = 1;
    this.spaceDifficulty = 1;
    this.time_since_last_difficulty_change = Date.now();
  }

  startGame() {
    this.gamestate.running = true;
    this.gamestate.menu = false;
    //   setTimeout(() => {
    //     this.loop();
    //   }, 1000 / 60);
    // });
  }

  gameOver() {
    this.gamestate.running = false;
    this.gamestate.menu = false;
    this.gamestate.gameover = true;
    musicplay(this);
  }

  checkCollision() {
    this.dogs.forEach(dog => {
      if (
        this.player.x + this.player.w - 10 >= dog.x + 40 &&
        this.player.y + this.player.h >= dog.y + 30 &&
        this.player.x <= dog.x + dog.w - 40
      ) {
        this.crash = true;
        this.gameOver();
      }
    });
  }

  runLogic() {
    this.dogs.map(actor => {
      actor.x = actor.x - 9 * this.difficulty;
    });

    if (this.dogs.length && this.dogs[0].x + this.dogs[0].w <= 0) {
      this.dogsBamboozled++;
    }
    this.dogs = this.dogs.filter(dog => dog.x + dog.w > 0);

    if (Date.now() - this.time_since_last_difficulty_change > 15000) {
      this.difficulty += 0.1;
      this.time_since_last_difficulty_change = Date.now();
    }

    if (Math.floor(Math.random() * 100) < 50) {
      if (this.dogs.length < MAXDOGS) {
        let acceptablePosition = 0;
        while (!acceptablePosition) {
          acceptablePosition = DOGXPOSITION + Math.floor(Math.random() * 100);
          if (
            this.dogs.every(
              dog =>
                dog.x + acceptablePosition > 200 &&
                dog.x - acceptablePosition < 200
            )
          ) {
            this.dogs.push(new Dog(900, FLOORHEIGHT, this));
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
    this.player.paint();
    this.dogs.forEach(dog => {
      dog.paint();
    });
    this.scoreboard.paint();

    if (this.gamestate.gameover === true) {
      this.context.rect(0, 0, 960, 540);
      this.context.fillStyle = 'rgba(0,0,0,1)';
      this.context.fill();
      this.context.font = '60px Roboto Mono';
      this.context.fillStyle = 'white';
      this.context.textAlign = 'center';
      this.context.fillText('Game Over', 480, 270);
      this.context.font = '20px Roboto Mono';
      this.context.fillStyle = 'white';
      this.context.textAlign = 'center';
      this.context.fillText(
        'Dogs Bamboozled :' + this.scoreboard.score,
        480,
        300
      );
      this.context.fillText('Press ESC to restart', 480, 330);
    }
  }

  loop() {
    this.runLogic();

    this.clean();

    this.paint();

    if (this.gamestate.running === true) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 60);
    }
  }
}

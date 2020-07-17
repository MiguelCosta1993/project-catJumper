class Cat {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.w = 121;
    this.h = 90;
    this.yVelocity = 3;
    this.xVelocity = 0;
    this.game = game;
    this.catMove();
    this.direction = 'down';
    this.jump = 0;
    this.maxJumps = 2;
    this.gato = new Image();
    this.gato.src = '/sprites/cat no bg.png';
  }

  setDirection(direction) {
    this.direction = direction;
  }
  grounded() {
    this.y = 410;
    this.yVelocity = 0;
  }

  catMove(direction) {
    switch (direction) {
      case 'right':
        if (this.x <= 900) {
          this.xVelocity = 5;
        }
        break;
      case 'left':
        if (this.x >= 0) {
          this.xVelocity = -5;
        }
        break;
      case 'up':
        if (this.y >= 350) {
          this.yVelocity = -7;
        }
        break;
      case 'stopleft':
        this.xVelocity = 0;
        break;
      case 'stopright':
        this.xVelocity = 0;
        break;
    }
  }

  runLogic() {
    let gravity = 0.3;
    //let friction = 0.1;

    this.y += this.yVelocity;
    this.yVelocity += gravity;
    this.x += this.xVelocity;

    //this.xVelocity = this.xVelocity / (1 + friction);

    if (this.y >= 410) {
      this.yVelocity = 0;
    }
  }

  paint() {
    this.game.context.drawImage(this.gato, this.x, this.y, this.w, this.h);
    //this.game.context.fillRect(this.x, this.y, this.w, this.h);
  }
}

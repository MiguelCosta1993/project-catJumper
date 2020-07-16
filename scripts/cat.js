class Cat {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 30;
    this.yVelocity = 3;
    this.xVelocity = 0;
    this.game = game;
    this.catMove();
    this.direction = 'down';
    this.jump = 0;
    this.maxJumps = 2;
  }

  setDirection(direction) {
    this.direction = direction;
  }
  grounded() {
    this.y = 730;
    this.yVelocity = 0;
  }
  spriteCat() {
    let image = new Image();
    image.src('/sprites/cat_ani/cat_fighter_sprite2.png');
    let counter = 0;
  }

  catMove(direction) {
    switch (direction) {
      case 'right':
        this.xVelocity = 5;
        break;
      case 'left':
        this.xVelocity = -5;
        break;
      case 'up':
        if (this.y >= 700) {
          this.yVelocity = -6;
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

    if (this.y >= 720) {
      this.yVelocity = 0;
    }
  }

  paint() {
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.x, this.y, this.w, this.h);
  }
}

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
  }
  /* checkCollisionFly() {
    const fly = this.game.fly;
    const x = fly.x;
    const y = fly.y;
    const intersection = this.checkIntersection(x, y);
    return intersection;
  }*/

  setDirection(direction) {
    this.direction = direction;
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
        this.yVelocity = -4;
        break;
      case 'down':
        this.y += this.yVelocity;
        this.yVelocity += gravity;
        break;
    }
  }

  runLogic() {
    let gravity = 0.1;
    let friction = 0.1;
    let jump = true;

    this.y += this.yVelocity;
    this.yVelocity += gravity;
    this.x += this.xVelocity;

    this.xVelocity = this.xVelocity / (1 + friction);

    if (this.y >= 750 - 35) {
      this.yVelocity = 0;
    }
  }
  /* const intersection = this.checkCollisionFly();
    let flies = 0;
    const flyCounter = [flies];
    if (intersection) {
      this.flyCounter.push(flies++);
    }*/

  paint() {
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.x, this.y, this.w, this.h);
  }
}

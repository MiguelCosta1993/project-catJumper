class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 30;
    this.yVelocity = 3;
    this.xVelocity = 0;
  }
  checkCollision() {
    const fly = this.game.fly;
    const x = fly.x;
    const y = fly.y;
    const intersection = this.checkIntersection(x, y);
    return intersection;
  }

  runLogic() {
    let gravity = 0.1;
    let jump = true;

    this.y += this.yVelocity;
    this.yVelocity += gravity;
    this.x += this.xVelocity;

    if (this.y >= 750 - 30) {
      jump = true;
      this.yVelocity = 0;
    } else jump = false;

    const intersection = this.checkCollision();
    let flies = 0;
    const flyCounter = [flies];
    if (intersection) {
      this.flyCounter.push(flies++);
    }
  }
  paint() {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.w, this.h);
  }
}

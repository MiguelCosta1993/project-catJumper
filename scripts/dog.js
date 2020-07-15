class Dog {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.game = game;
    this.dogX = 400;
  }

  runLogic() {}

  paint() {
    this.game.context.fillStyle = 'black';
    this.game.context.fillRect(this.x, this.y, this.w, this.h);
  }
}

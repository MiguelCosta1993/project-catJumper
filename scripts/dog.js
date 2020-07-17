class Dog {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.w = 88;
    this.h = 72;
    this.game = game;
    this.dogX = 400;
    this.perro = new Image();
    this.perro.src = '/sprites/dog no bg.png';
  }

  runLogic() {}

  paint() {
    this.game.context.drawImage(this.perro, this.x, this.y, this.w, this.h);
  }
}

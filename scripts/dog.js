class Dog {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.game = game;
    this.dogs = [];
    this.dogX = 400;
  }

  runLogic() {
    // use timestamp and interval to push to the array
    /* for (let i = 0; i < 10; i++) {
      let d = new dog(this.dogX, 710);
      this.dogs.push(d);
      this.dogX += 300;
    }
    for (let i = 0; i < this.dogs.length; i++) {
      this.dogs[i].paint();
    }*/
  }

  paint() {
    this.game.context.fillStyle = 'black';
    this.game.context.fillRect(this.x, this.y, this.w, this.h);
  }
}

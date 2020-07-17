class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
  }

  paint() {
    this.score = this.game.dogsBamboozled;
    this.game.context.fillStyle = 'red';
    this.game.context.font = '20px Arial';
    this.game.context.fillText(
      'Dogs Bamboozled x:' + ' ' + this.score,
      670,
      35
    );
  }
}

class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
  }

  paint() {
    this.score = this.game.dogsBamboozled;

    this.game.context.font = '16px Roboto Mono';

    this.game.context.fillText('Dogs Bamboozled x:' + this.score, 1425, 25);
  }
}

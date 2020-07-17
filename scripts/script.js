window.addEventListener('load', () => {
  const canvas = document.getElementById('game');

  const game = new Game(canvas);

  setKeyBindings();

  musicplay(game);

  const start = document.getElementById('startGame');
  start.addEventListener('click', () => {
    if (game.gamestate.running === false) {
      game.gamestate.running = true;
      game.gamestate.menu = false;
      musicplay(game);
      game.loop();
    }
  });

  function setKeyBindings() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 32:
          event.preventDefault();
          game.player.catMove('up');
          break;
        case 65:
          event.preventDefault();
          game.player.catMove('left');
          break;
        case 68:
          event.preventDefault();
          game.player.catMove('right');
          break;
        case 27:
          event.preventDefault();
          if (game.gamestate.gameover) {
            location.reload();
          }
          break;
      }
    });
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 65:
          event.preventDefault();
          game.player.catMove('stopleft');
          break;
        case 68:
          event.preventDefault();
          game.player.catMove('stopright');
          break;
      }
    });
  }
});

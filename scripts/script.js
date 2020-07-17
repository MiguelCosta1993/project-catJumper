window.addEventListener('load', () => {
  const canvas = document.getElementById('game');

  const game = new Game(canvas);
  const soundTrack = new Audio('/song/Megalovania.mp3');
  soundTrack.volume = 0.4;
  game.loop();
  setKeyBindings();
  soundTrack.play();

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
          if (!game.gamestate) {
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

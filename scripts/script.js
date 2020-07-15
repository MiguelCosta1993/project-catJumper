window.addEventListener('load', () => {
  const canvas = document.getElementById('game');

  const game = new Game(canvas);
  const soundTrack = new Audio('/song/Megalovania.mp3');
  game.loop();
  soundTrack.play();
});

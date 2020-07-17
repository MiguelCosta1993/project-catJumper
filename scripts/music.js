const megalovania = new Audio('/song/Megalovania.mp3');
const kirby = new Audio('/song/Kirby dream land theme song.mp3');
const ffX = new Audio('/song/Final Fantasy X OST  To Zanarkand.mp3');
const megaMan = new Audio('/song/Mega Man 2 - Dr. Wilys Castle.mp3');
const donkeyKong = new Audio(
  '/song/Donkey Kong Country Music SNES - DK Island Swing.mp3'
);
let audioSelector = Math.floor(Math.random() * 3);

const musicplay = game => {
  if (
    game.gamestate.running === true &&
    game.gamestate.menu === false &&
    game.gamestate.gameover === false
  ) {
    if (audioSelector === 0) {
      donkeyKong.pause();
      megalovania.volume = 0.2;
      megalovania.play();
    } else if (audioSelector === 1) {
      donkeyKong.pause();
      kirby.volume = 0.2;
      kirby.play();
    } else if (audioSelector === 2) {
      donkeyKong.pause();
      megaMan.volume = 0.2;
      megaMan.play();
    }
  } else if (
    game.gamestate.running === false &&
    game.gamestate.menu === false &&
    game.gamestate.gameover === true
  ) {
    megalovania.pause();
    megaMan.pause();
    kirby.pause();
    ffX.volume = 0.3;
    ffX.play();
  } else if (
    game.gamestate.running === false &&
    game.gamestate.menu === true &&
    game.gamestate.gameover === false
  ) {
    ffX.pause();
    donkeyKong.volume = 0.3;
    donkeyKong.play();
  }
};

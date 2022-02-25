import readlineSync from 'readline-sync';
import gameProgression from '../game/code_game_progression.js';
import gamePrime from '../game/code_game_prime.js';
import getNumber from '../game/code_games_number.js';
import gameNode from '../game/code_game_node.js';
import gameCalc from '../game/code_games_calc.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const game = readlineSync.question('What game do you want to play?\nlist of games:\n 1.brain-calc\n 2.brain-node\n 3.brain-even\n 4.brain-prime\n 5.brain-progression\nEnter the name of the game:');
  if (game === 'brain-prime') {
    return console.log(gamePrime());
  }
  if (game === 'brain-even') {
    return console.log(getNumber());
  }
  if (game === 'brain-progression') {
    return console.log(gameProgression());
  }
  if (game === 'brain-node') {
    return console.log(gameNode());
  } if (game === 'brain-calc') {
    return console.log(gameCalc());
  }
  return 'There is no such game!';
};
startGame();

import readlineSync from 'readline-sync';
import { getProgression, invisibleNumber } from '../src/getProgression.js';
import welcome from '../src/cli.js';

const gameProgression = () => {
  const nameUser = welcome();
  for (let i = 0; i < 1; i += 1) {
    const result = getProgression();
    const number = readlineSync.question(`What number is missing in the progression?.\nQuestion: ${result}\nYour answer: `);
    if (+number !== invisibleNumber) {
      return `${number} is wrong answer ;(. Correct answer was ${invisibleNumber} .\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  for (let i = 0; i < 2; i += 1) {
    const result = getProgression();
    const number = readlineSync.question(`Question: ${result}\nYour answer: `);
    if (+number !== invisibleNumber) {
      return `${number} is wrong answer ;(. Correct answer was ${invisibleNumber} .\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${nameUser}!`;
};
export default gameProgression;

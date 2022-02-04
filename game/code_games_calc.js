import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
import getRandomInt from '../src/getRandomInt.js';
import { randomChar1, randomChar } from '../src/randomChar.js';

const gameCalc = () => {
  const nameUser = welcome();

  for (let i = 0; i < 1; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const char = randomChar();
    const result = randomChar1(num1, num2, char);

    const number = readlineSync.question(`What is the result of the expression?.\nQuestion: ${num1} ${char} ${num2}\nYour answer: `);
    if (+number !== result) {
      return `'${number}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  for (let i = 0; i < 2; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const char = randomChar();
    const result = randomChar1(num1, num2, char);

    const number = readlineSync.question(`Question: ${num1} ${char} ${num2}\nYour answer: `);
    if (+number !== result) {
      return `'${number}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${nameUser}!`;
};
export default gameCalc;

import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
import getRandomInt from '../src/getRandomInt.js';
import maxDivisor from '../src/maxDivisor.js';

const gameNode = () => {
  const nameUser = welcome();

  for (let i = 0; i < 1; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const result = maxDivisor(num1, num2);

    const number = readlineSync.question(`What is the result of the expression?.\nQuestion: ${num1} ${num2}\nYour answer: `);
    if (+number !== result) {
      return `${number} is wrong answer ;(. Correct answer was ${result} .\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  for (let i = 0; i < 2; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const result = maxDivisor(num1, num2);

    const number = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
    if (+number !== result) {
      return `${number} is wrong answer ;(. Correct answer was ${result} .\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${nameUser}!`;
};
export default gameNode;

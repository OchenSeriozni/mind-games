import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const gameNumber = () => {
  const nameUser = welcome();
  for (let i = 0; i < 1; i += 1) {
    const number = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${15}\nYour answer: `);
    if (number !== 'no') {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameUser}!`;
    }

    console.log('Correct!');

    const number2 = readlineSync.question(`Question: ${6}\nYour answer: `);
    if (number2 !== 'yes') {
      return `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${nameUser}!`;
    }

    console.log('Correct!');

    const number3 = readlineSync.question(`Question: ${7}\nYour answer: `);
    if (number3 !== 'no') {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameUser}!`;
    }

    console.log('Correct!');
  }
  return `Congratulations, ${nameUser}!`;
};
export default gameNumber;

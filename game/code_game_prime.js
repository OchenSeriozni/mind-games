import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';
import getPrimeNumber from '../src/getPrimeNumber.js';
import getRandomIntInclusive from '../src/getRandomIntInclusive.js';

const gamePrime = () => {
  const nameUser = welcome();

  for (let i = 0; i < 1; i += 1) {
    const chek = getRandomIntInclusive();
    const num = getPrimeNumber(chek);
    let result = '';
    const number = readlineSync.question(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${num}\nYour answer: `);
    if (chek <= 3) {
      result = 'yes';
    } else {
      result = 'no';
    }
    if (number !== result) {
      return `"${number}" is wrong answer ;(. Correct answer was "${result}" .\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  for (let i = 0; i < 2; i += 1) {
    const chek = getRandomIntInclusive();
    const num = getPrimeNumber(chek);
    let result = '';

    const number = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (chek <= 3) {
      result = 'yes';
    } else {
      result = 'no';
    }
    if (number !== result) {
      return `"${number}" is wrong answer ;(. Correct answer was "${result}" .\nLet's try again, ${nameUser}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${nameUser}!`;
};
export default gamePrime;

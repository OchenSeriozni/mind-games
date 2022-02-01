import getRandomInt from './getRandomInt.js';
import getRandomIntInclusive from './getRandomIntInclusive.js';

// eslint-disable-next-line import/no-mutable-exports
export let invisibleNumber = 0;
export const getProgression = () => {
  let startProgress = getRandomInt();
  const stepProgress = getRandomIntInclusive();
  let counter = 0;
  const arr = [];
  const getPosinvisibleNumber = getRandomIntInclusive();
  const progression = () => {
    startProgress += stepProgress;
    counter += 1;
    if (counter === getPosinvisibleNumber) {
      arr.push('..');
      invisibleNumber = startProgress;
    } else {
      arr.push(startProgress);
    }
    if (counter <= 5) {
      progression();
    }
    return arr.join(' ');
  };
  return progression();
};

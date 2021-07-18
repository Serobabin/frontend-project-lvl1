import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrime = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = generateRandomNum(0, 100);
    const answer = isPrime(number) ? 'yes' : 'no';
    const question = `${number}`;
    gameData.push([question, answer]);
  }
  play(rule, gameData);
};
export default brainPrime;

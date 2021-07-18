import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const isEven = (number) => number % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = generateRandomNum(0, 100);
    const answer = isEven(number) ? 'yes' : 'no';
    const question = `${number}`;
    gameData.push([question, answer]);
  }
  play(rule, gameData);
};
export default brainEven;

import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const getGcd = (value1, value2) => {
  let number1 = value1;
  let number2 = value2;
  if (number1 === 0 && number2 !== 0) {
    return number2;
  }
  if (number2 === 0) {
    return number1;
  }
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};
const rule = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number1 = generateRandomNum(0, 100);
    const number2 = generateRandomNum(0, 100);
    const answer = `${getGcd(number1, number2)}`;
    const question = `${number1} ${number2}`;
    gameData.push([question, answer]);
  }
  play(rule, gameData);
};
export default brainGcd;

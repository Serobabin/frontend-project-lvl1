import getRandomNum from '../getRandomNum.js';

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const number = getRandomNum(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};
export default brainEven;

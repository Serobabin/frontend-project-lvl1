import getRandomNum from '../getRandomNum.js';

const getGcd = (value1, value2) => {
  let number1 = value1;
  let number2 = value2;
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};
const brainGcd = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const answer = `${getGcd(number1, number2)}`;
  const question = `${number1} ${number2}`;
  return [question, answer];
};
export default brainGcd;

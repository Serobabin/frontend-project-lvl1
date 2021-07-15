import getRandomNum from '../getRandomNum.js';

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
const brainPrime = () => {
  const number1 = getRandomNum(0, 100);
  const answer = isPrime(number1) ? 'yes' : 'no';
  const question = `${number1}`;
  return [question, answer];
};
export default brainPrime;

import getRandomNum from '../RandomNum.js';

const prime = () => {
  const question = getRandomNum(0, 100);
  const isPrime = (number) => {
    if (number < 2) {
      return 'no';
    }
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const answer = isPrime(question);
  return [question, answer];
};
export default prime;

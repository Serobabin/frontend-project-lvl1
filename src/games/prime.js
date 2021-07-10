import readlineSync from 'readline-sync';
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
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export default prime;

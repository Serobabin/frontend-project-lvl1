import generateRandomNum from '../generateRandomNum.js';
import play from '../index.js';

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
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const answers = [];
  const maxIteration = 3;
  for (let i = 0; i < maxIteration; i += 1) {
    const number = generateRandomNum();
    const answer = isPrime(number) ? 'yes' : 'no';
    const question = `${number}`;
    questions.push(question);
    answers.push(answer);
  }
  play(rule, questions, answers);
};
export default brainPrime;

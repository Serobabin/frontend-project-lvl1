import generateRandomNum from '../generateRandomNum.js';
import play from '../index.js';

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];
  const maxIteration = 3;
  for (let i = 0; i < maxIteration; i += 1) {
    const number = generateRandomNum();
    const answer = isEven(number) ? 'yes' : 'no';
    const question = `${number}`;
    questions.push(question);
    answers.push(answer);
  }
  play(rule, questions, answers);
};
export default brainEven;

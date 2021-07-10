import readlineSync from 'readline-sync';
import getRandomNum from '../RandomNum.js';

const calc = () => {
  const a = getRandomNum(0, 30);
  const b = getRandomNum(0, 30);
  const operator = getRandomNum(0, 2);
  let question;
  let answer;
  switch (operator) {
    case 0:
      question = `${a} + ${b}`;
      answer = a + b;
      break;
    case 1:
      question = a >= b ? `${a} - ${b}` : `${b} - ${a}`;
      answer = a >= b ? a - b : b - a;
      break;
    case 2:
      question = `${a} * ${b}`;
      answer = a * b;
      break;
    default:
      return 'something wrong with calc';
  }
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  answer = String(answer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export default calc;

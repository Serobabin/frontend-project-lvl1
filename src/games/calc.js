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
  return [question, answer];
};
export default calc;

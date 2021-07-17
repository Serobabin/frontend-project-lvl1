import generateRandomNum from '../generateRandomNum.js';
import play from '../index.js';

const calc = (operand1, operator, operand2) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      return 'something wrong with calc';
  }
  return result;
};

const brainCalc = () => {
  const rule = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const questions = [];
  const answers = [];
  const maxIteration = 3;
  for (let i = 0; i < maxIteration; i += 1) {
    const number1 = generateRandomNum();
    const number2 = generateRandomNum();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const answer = `${calc(number1, operator, number2)}`;
    const question = `${number1} ${operator} ${number2}`;
    questions.push(question);
    answers.push(answer);
  }
  play(rule, questions, answers);
};
export default brainCalc;

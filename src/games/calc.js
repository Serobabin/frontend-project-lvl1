import getRandomNum from '../getRandomNum.js';

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
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, 2)];
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const answer = `${calc(number1, operator, number2)}`;
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};
export default brainCalc;

import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

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
const rule = 'What is the result of the expression?';
const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number1 = generateRandomNum(0, 25);
    const number2 = generateRandomNum(0, 25);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const answer = `${calc(number1, operator, number2)}`;
    const question = `${number1} ${operator} ${number2}`;
    gameData.push([question, answer]);
  }
  play(rule, gameData);
};
export default brainCalc;

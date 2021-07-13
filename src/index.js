import { greeting, getRule, getUserAnswer } from './cli.js';
import { getProgression, getHiddenElement, getStringFromArray } from './games/progression.js';
import calc from './games/calc.js';
import getGcd from './games/getGcd.js';
import isPrime from './games/isPrime.js';
import getRandomNum from './getRandomNum.js';
import isEven from './games/isEven.js';

const getStart = (game) => {
  const userName = greeting();
  const rule = getRule(game);
  console.log(rule);
  let counter = 0;
  let answer;
  let question;
  while (counter < 3) {
    switch (game) {
      case 'brain-even': {
        const number1 = getRandomNum(0, 100);
        answer = isEven(number1) ? 'yes' : 'no';
        question = `${number1}`;
        break;
      }
      case 'brain-prime': {
        const number1 = getRandomNum(0, 100);
        answer = isPrime(number1) ? 'yes' : 'no';
        question = `${number1}`;
        break;
      }
      case 'brain-gcd': {
        const number1 = getRandomNum(1, 100);
        const number2 = getRandomNum(1, 100);
        answer = `${getGcd(number1, number2)}`;
        question = `${number1} ${number2}`;
        break;
      }
      case 'brain-progression': {
        const hiddenNumber = getRandomNum(0, 9);
        const number1 = getRandomNum(1, 10);
        const number2 = getRandomNum(1, 25);
        const progression = getProgression(number1, number2);
        answer = `${progression[hiddenNumber]}`;
        question = `${getStringFromArray(getHiddenElement(progression, hiddenNumber))}`;
        break;
      }
      case 'brain-calc': {
        const operators = ['+', '-', '*'];
        const operator = operators[getRandomNum(0, 2)];
        const number1 = getRandomNum(1, 100);
        const number2 = getRandomNum(1, 100);
        answer = `${calc(number1, operator, number2)}`;
        question = `${number1} ${operator} ${number2}`;
        break;
      }
      default:
        return 'something wrong';
    }
    const userAnswer = getUserAnswer(question);
    if (userAnswer !== answer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`;
    }
    counter += 1;
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};
export default getStart;

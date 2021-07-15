import readlineSync from 'readline-sync';
import greeting from './cli.js';

const getStart = (game, functionName) => {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();
  let rule;
  switch (game) {
    case 'brain-even':
      rule = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'brain-calc':
      rule = 'What is the result of the expression?';
      break;
    case 'brain-gcd':
      rule = 'Find the greatest common divisor of given numbers.';
      break;
    case 'brain-progression':
      rule = 'What number is missing in the progression?';
      break;
    case 'brain-prime':
      rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    default:
      return 'something wrong';
  }
  console.log(rule);
  let counter = 0;
  let result;
  while (counter < 3) {
    result = functionName();
    const question = result[0];
    const answer = result[1];
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== result[1]) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`;
    }
    counter += 1;
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};
export default getStart;

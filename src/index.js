import readlineSync from 'readline-sync';
import greeting from './cli.js';
import parityCheck from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const start = (game) => {
  const userName = greeting();
  let rule;
  let playGame;
  switch (game) {
    case 'brain-even':
      playGame = parityCheck;
      rule = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'brain-calc':
      playGame = calc;
      rule = 'What is the result of the expression?';
      break;
    case 'brain-gcd':
      playGame = gcd;
      rule = 'Find the greatest common divisor of given numbers.';
      break;
    case 'brain-progression':
      playGame = progression;
      rule = 'What number is missing in the progression?';
      break;
    case 'brain-prime':
      playGame = prime;
      rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    default:
      return 'something wrong';
  }
  console.log(rule);
  let counter = 0;
  let result;
  while (counter < 3) {
    result = playGame();
    const question = result[0];
    const answer = String(result[1]);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== answer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`;
    }
    counter += 1;
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default start;

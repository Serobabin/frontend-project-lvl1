import name from './cli.js';
import {
  parityCheck, calc, gcd, progression, prime,
} from './games/games.js';

const start = (game) => {
  const userName = name();
  console.log(`Hello, ${userName}!`);
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
    if (result[0] === false) {
      return `'${result[1]}' is wrong answer ;(. Correct answer was '${result[2]}'.\nLet's try again, ${userName}!`;
    }
    counter += 1;
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default start;

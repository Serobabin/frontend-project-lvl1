import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const getRule = (game) => {
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
  return rule;
};
export const getUserAnswer = (question) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
};

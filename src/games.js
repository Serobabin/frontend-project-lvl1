import readlineSync from 'readline-sync';
import name from './cli.js';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const getRandomNum = () => {
  const min = Math.ceil(0);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const parityCheck = () => {
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const question = getRandomNum();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const answer = isEven(question);
    if (userAnswer !== answer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`;
    }
    counter += 1;
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default parityCheck;

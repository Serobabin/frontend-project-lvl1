import readlineSync from 'readline-sync';
import getRandomNum from '../RandomNum.js';

const gcd = () => {
  let a = getRandomNum(1, 30);
  let b = getRandomNum(1, 30);
  const question = `${a} ${b}`;
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = String(a);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export default gcd;

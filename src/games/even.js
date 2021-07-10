import readlineSync from 'readline-sync';
import getRandomNum from '../RandomNum.js';

const parityCheck = () => {
  const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');
  const question = getRandomNum(0, 100);
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  const answer = isEven(question);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export default parityCheck;

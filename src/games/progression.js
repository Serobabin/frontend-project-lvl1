import readlineSync from 'readline-sync';
import getRandomNum from '../RandomNum.js';

const progression = () => {
  const lengthOfProgression = getRandomNum(6, 10);
  const stepOfProgression = getRandomNum(1, 10);
  const startOfProgression = getRandomNum(1, 25);
  const hiddenElement = getRandomNum(0, lengthOfProgression - 1);
  let question = '';
  let answer;
  let y = 0;
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    if (i === hiddenElement) {
      if (i === 0) {
        y += startOfProgression;
        answer = y;
        question += '..';
      } else {
        y += stepOfProgression;
        answer = y;
        question += ' ..';
      }
    } else if (i === 0 && y === 0) {
      y += startOfProgression;
      question += ` ${y}`;
    } else {
      y += stepOfProgression;
      question += ` ${y}`;
    }
  }
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  answer = String(answer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export default progression;

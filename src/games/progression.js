import readlineSync from 'readline-sync';
import getRandomNum from '../RandomNum.js';

const progression = () => {
  const lengthOfProgression = getRandomNum(5, 9);
  const stepOfProgression = getRandomNum(1, 10);
  const startOfProgression = getRandomNum(1, 25);
  const hiddenElement = getRandomNum(0, lengthOfProgression - 1);
  let question = ` ${startOfProgression}`;
  let answer;
  let y = startOfProgression;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hiddenElement) {
      y += stepOfProgression;
      answer = y;
      question += ' ..';
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

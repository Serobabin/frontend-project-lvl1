import readlineSync from 'readline-sync';
import getRandomNum from '../RandomNum.js';

const progression = () => {
  const lengthOfProgression = 10;
  const stepOfProgression = getRandomNum(1, 10);
  const startOfProgression = getRandomNum(1, 25);
  const hiddenElement = getRandomNum(0, 9);
  let y = 0;
  const result = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === 0) {
      result.push(startOfProgression);
    } else {
      y = result[i - 1] + stepOfProgression;
      result.push(y);
    }
  }
  let answer = result[hiddenElement];
  result[hiddenElement] = '..';
  let question = '';
  for (let i = 0; i < result.length; i += 1) {
    question += ` ${result[i]}`;
  }
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  answer = String(answer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
export default progression;

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
  const question = `${result[0]} ${result[1]} ${result[2]} ${result[3]} ${result[4]} ${result[5]} ${result[6]} ${result[7]} ${result[8]} ${result[9]}`;
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  answer = String(answer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export default progression;

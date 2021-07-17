import generateRandomNum from '../generateRandomNum.js';
import play from '../index.js';

const getProgression = (stepOfProgression, startOfProgression) => {
  const lengthOfProgression = 10;
  const numbers = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === 0) {
      numbers.push(startOfProgression);
    } else {
      numbers.push(numbers[i - 1] + stepOfProgression);
    }
  }
  return numbers;
};

const hideElement = (array, hiddenElement) => {
  const resultArray = array;
  resultArray[hiddenElement] = '..';
  return resultArray;
};

const makeStringFromArray = (array) => {
  let str = '';
  let element;
  for (let i = 0; i < array.length; i += 1) {
    element = array[i];
    str += `${element} `;
  }
  return str;
};
const brainProgression = () => {
  const rule = 'What number is missing in the progression?';
  const questions = [];
  const answers = [];
  const maxIteration = 3;
  for (let i = 0; i < maxIteration; i += 1) {
    const stepOfProgression = generateRandomNum() + 1;
    const startOfProgression = generateRandomNum();
    const progression = getProgression(stepOfProgression, startOfProgression);
    const hiddenNumber = Math.floor(Math.random() * progression.length);
    const answer = `${progression[hiddenNumber]}`;
    const question = `${makeStringFromArray(hideElement(progression, hiddenNumber))}`;
    questions.push(question);
    answers.push(answer);
  }
  play(rule, questions, answers);
};
export default brainProgression;

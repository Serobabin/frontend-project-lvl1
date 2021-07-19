import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const rule = 'What number is missing in the progression?';

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

const makeGameDataprogression = () => {
  const stepOfProgression = generateRandomNum(1, 20);
  const startOfProgression = generateRandomNum(0, 50);
  const progression = getProgression(stepOfProgression, startOfProgression);
  const hiddenNumber = Math.floor(Math.random() * progression.length);
  const answer = `${progression[hiddenNumber]}`;
  const question = `${makeStringFromArray(hideElement(progression, hiddenNumber))}`;
  return [question, answer];
};

const brainProgression = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    gameData.push(makeGameDataprogression());
  }
  play(rule, gameData);
};
export default brainProgression;

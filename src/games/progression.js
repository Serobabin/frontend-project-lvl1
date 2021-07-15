import getRandomNum from '../getRandomNum.js';

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

const getHiddenElement = (array, hiddenElement) => {
  const resultArray = array;
  resultArray[hiddenElement] = '..';
  return resultArray;
};

const getStringFromArray = (array) => {
  let str = '';
  let element;
  for (let i = 0; i < array.length; i += 1) {
    element = array[i];
    str += `${element} `;
  }
  return str;
};
const brainProgression = () => {
  const hiddenNumber = getRandomNum(0, 9);
  const number1 = getRandomNum(1, 10);
  const number2 = getRandomNum(1, 25);
  const progression = getProgression(number1, number2);
  const answer = `${progression[hiddenNumber]}`;
  const question = `${getStringFromArray(getHiddenElement(progression, hiddenNumber))}`;
  return [question, answer];
};
export default brainProgression;

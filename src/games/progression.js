export const getProgression = (stepOfProgression, startOfProgression) => {
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

export const getHiddenElement = (array, hiddenElement) => {
  const resultArray = array;
  resultArray[hiddenElement] = '..';
  return resultArray;
};

export const getStringFromArray = (array) => {
  let str = '';
  let element;
  for (let i = 0; i < array.length; i += 1) {
    element = array[i];
    str += `${element} `;
  }
  return str;
};

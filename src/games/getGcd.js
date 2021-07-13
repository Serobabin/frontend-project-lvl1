const getGcd = (value1, value2) => {
  let number1 = value1;
  let number2 = value2;
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};
export default getGcd;

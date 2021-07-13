const calc = (operand1, operator, operand2) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      return 'something wrong with calc';
  }
  return result;
};
export default calc;

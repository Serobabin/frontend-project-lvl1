import getRandomNum from '../RandomNum.js';

const parityCheck = () => {
  const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');
  const question = getRandomNum(0, 100);
  const answer = isEven(question);
  return [question, answer];
};
export default parityCheck;

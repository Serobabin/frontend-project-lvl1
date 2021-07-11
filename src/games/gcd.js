import getRandomNum from '../RandomNum.js';

const gcd = () => {
  let a = getRandomNum(1, 30);
  let b = getRandomNum(1, 30);
  const question = `${a} ${b}`;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = a;
  return [question, answer];
};
export default gcd;

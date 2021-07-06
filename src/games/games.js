import readlineSync from 'readline-sync';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const getRandomNum = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const parityCheck = () => {
  const question = getRandomNum(0, 100);
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  const answer = isEven(question);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};

export const calc = () => {
  const a = getRandomNum(0, 30);
  const b = getRandomNum(0, 30);
  const operator = getRandomNum(0, 2);
  let question;
  let answer;
  switch (operator) {
    case 0:
      question = `${a} + ${b}`;
      answer = a + b;
      break;
    case 1:
      question = a >= b ? `${a} - ${b}` : `${b} - ${a}`;
      answer = a >= b ? a - b : b - a;
      break;
    case 2:
      question = `${a} * ${b}`;
      answer = a * b;
      break;
    default:
      return 'something wrong with calc';
  }
  let userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  userAnswer = Number(userAnswer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};

export const gcd = () => {
  let a = getRandomNum(1, 30);
  let b = getRandomNum(1, 30);
  const question = `${a} ${b}`;
  let userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = a;
  userAnswer = Number(userAnswer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};

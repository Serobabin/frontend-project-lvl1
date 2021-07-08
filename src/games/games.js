import readlineSync from 'readline-sync';

const getRandomNum = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const parityCheck = () => {
  const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');
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
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  answer = String(answer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};

export const gcd = () => {
  let a = getRandomNum(1, 30);
  let b = getRandomNum(1, 30);
  const question = `${a} ${b}`;
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = String(a);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};

export const progression = () => {
  const lengthOfProgression = getRandomNum(5, 9);
  const stepOfProgression = getRandomNum(1, 10);
  const startOfProgression = getRandomNum(1, 25);
  const hiddenElement = getRandomNum(0, lengthOfProgression - 2);
  let question = ` ${startOfProgression}`;
  let answer;
  let y = startOfProgression;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hiddenElement) {
      y += stepOfProgression;
      answer = y;
      question += ' ..';
    } else {
      y += stepOfProgression;
      question += ` ${y}`;
    }
  }
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  answer = String(answer);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};
export const prime = () => {
  const question = getRandomNum(0, 100);
  const isPrime = (number) => {
    if (number < 2) {
      return 'no';
    }
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const answer = isPrime(question);
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return (userAnswer !== answer) ? [false, userAnswer, answer] : [true, userAnswer, answer];
};

import readlineSync from 'readline-sync';

const play = (rule, questions, answers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  const maxRounds = 3;
  let counter = 0;
  let question;
  let answer;
  let userAnswer;
  let correctAnswer = 0;
  while (counter < maxRounds) {
    question = questions[counter];
    answer = answers[counter];
    userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== answer) {
      break;
    }
    counter += 1;
    console.log('Correct!');
    correctAnswer += 1;
  }
  if (correctAnswer < 3) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default play;

import readlineSync from 'readline-sync';

export const maxRounds = 3;
export const play = (rule, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let counter = 0;
  while (counter < maxRounds) {
    const question = gameData[counter][0];
    const answer = gameData[counter][1];
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

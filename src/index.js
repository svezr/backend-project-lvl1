import readlineSync from 'readline-sync';

const defaultGameValues = {
  roundsCount: 3,
  gameQuestionText: 'Question:',
  gameAnswerText: 'Your answer: ',
  gameCorrectText: 'Correct!',
};

const playGame = (gameConfig) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  const { generateGameData, gameDescription } = gameConfig;

  const roundsCount = gameConfig.roundsCount || defaultGameValues.roundsCount;
  const gameQuestionText = gameConfig.gameQuestionText || defaultGameValues.gameQuestionText;
  const gameAnswerText = gameConfig.gameAnswerText || defaultGameValues.gameAnswerText;
  const gameCorrectText = gameConfig.gameCorrectText || defaultGameValues.gameCorrectText;

  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { gameQuestion, gameAnswer } = generateGameData();

    const roundQuestion = `${gameQuestionText} ${gameQuestion}`;

    console.log(roundQuestion);

    const userAnswer = readlineSync.question(gameAnswerText);

    const userAnsweredCorrectly = (userAnswer === gameAnswer);

    if (!userAnsweredCorrectly) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log(gameCorrectText);
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

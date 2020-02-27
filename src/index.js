import readlineSync from 'readline-sync';

const startGame = (gameConfig) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  const { gameData: getGameData, gameTerms } = gameConfig;
  const helloMsg = `Hello, ${userName}!`;
  const roundCount = gameConfig.roundCount || 3;
  const gameQuestionText = gameConfig.gameQuestionText || 'Question:';
  const gameAnswerText = gameConfig.gameAnswerText || 'Your answer: ';
  const gameCorrectText = gameConfig.gameCorrect || 'Correct!';
  const gameWin = gameConfig.gameWin || `Congratulations, ${userName}!`;

  console.log(helloMsg);
  console.log(gameTerms);

  for (let i = 1; i <= roundCount; i += 1) {
    const { gameQuestion, gameAnswer } = getGameData();

    const roundQuestion = `${gameQuestionText} ${gameQuestion}`;

    console.log(roundQuestion);

    const userAnswer = readlineSync.question(gameAnswerText);

    const isCorrect = (userAnswer === gameAnswer);

    if (!isCorrect) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log(gameCorrectText);
  }

  console.log(gameWin);
};

export default startGame;

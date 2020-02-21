import readlineSync from 'readline-sync';

export const generateNumber = (min = 0, max = 99) => {
  const rnd = Math.random() * (max - min) + min;
  return Math.floor(rnd);
};

export const generatePairNumber = (easyMode = false) => {
  const firstNumber = generateNumber();
  const secondNumber = easyMode ? generateNumber(1, 9) : generateNumber();

  return [firstNumber, secondNumber];
};

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const showMsg = (text) => console.log(text);

const getUserName = () => readlineSync.question('May I have your name? ');

const queryAnswer = (questionString) => readlineSync.question(questionString);

export const createResultObj = (gameText, gameAnswer) => ({ gameText, gameAnswer });

export const startGame = (gameConfig) => {
  showGreeting();

  const userName = getUserName();

  let userAnswer;

  const helloMsg = `Hello, ${userName}!`;
  const gameFunction = gameConfig.gameFn;
  const roundCount = gameConfig.roundCount || 3;
  const gameTerms = gameConfig.gameTerms || '';
  const gameQuestionText = gameConfig.gameQuestion || 'Question:';
  const gameAnswerText = gameConfig.gameAnswerText || 'Your answer: ';
  const gameCorrectText = gameConfig.gameCorrect || 'Correct!';
  const gameWin = gameConfig.gameWin || `Congratulations, ${userName}!`;

  showMsg(helloMsg);
  showMsg(gameTerms);

  for (let i = 1; i <= roundCount; i += 1) {
    const { gameText, gameAnswer } = gameFunction();

    const roundQuestion = `${gameQuestionText} ${gameText}`;

    showMsg(roundQuestion);

    userAnswer = queryAnswer(gameAnswerText);

    const isCorrect = (userAnswer === gameAnswer);

    if (!isCorrect) {
      const gameLose = gameConfig.gameLose || `${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.\nLet's try again, ${userName}!`;

      showMsg(gameLose);

      return;
    }

    showMsg(gameCorrectText);
  }

  showMsg(gameWin);
};

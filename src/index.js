import readlineSync from 'readline-sync';

export const createResultObj = (gameText, gameAnswer) => ({ gameText, gameAnswer });

export const generateNumber = (min = 0, max = 99) => {
  const rnd = Math.random() * (max - min + 1) + min;
  return Math.floor(rnd);
};

export const generatePairNumber = (easyMode = false) => {
  const firstNumber = generateNumber();
  const secondNumber = easyMode ? generateNumber(1, 9) : generateNumber();

  return [firstNumber, secondNumber];
};

// Формат описания игры

export class Config {
  constructor(gameConfig) {
    this.gameFn = gameConfig.gameFn;
    this.roundCount = gameConfig.roundCount ? gameConfig.roundCount : 3;
    this.gameTerms = gameConfig.gameTerms ? gameConfig.gameTerms : '';
    this.gameQuestion = gameConfig.gameQuestion ? gameConfig.gameQuestion : '';
    this.gameAnswer = gameConfig.gameAnswer ? gameConfig.gameAnswer : '';
    this.gameLose = gameConfig.gameLose ? gameConfig.gameLose : '';
    this.gameRight = gameConfig.gameRight ? gameConfig.gameRight : '';
    this.gameWin = gameConfig.gameWin ? gameConfig.gameWin : '';
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRoundCount() {
    return this.roundCount;
  }

  getTerms() {
    return this.gameTerms;
  }

  getQuestion() {
    return this.gameQuestion;
  }

  getAnswer() {
    return this.gameAnswer;
  }

  getLose(userName, userAnswer, correctAnswer) {
    return this.gameLose.replace('%userAnswer%', userAnswer).replace('%correctAnswer%', correctAnswer).replace('%userName%', userName);
  }

  getWin(userName) {
    return this.gameWin.replace('%userName%', userName);
  }

  getRight() {
    return this.gameRight;
  }
}

// хранить config игры в модуле каждой игры
// там же хранить вызов функции

const getUserName = () => readlineSync.question('May I have your name? ');

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};


const queryAnswer = (questionString) => readlineSync.question(questionString);

const showMsg = (text) => console.log(text);

export const startGame = (gameConfig) => {
  showGreeting();

  const userName = getUserName();
  const gameTerms = gameConfig.getTerms();
  const gameCount = gameConfig.getRoundCount();
  const gameQuestionText = gameConfig.getQuestion();
  const gameAnswerText = gameConfig.getAnswer();
  const gameRightText = gameConfig.getRight();
  const helloMsg = `Hello, ${userName}!`;

  showMsg(helloMsg);
  showMsg(gameTerms);

  for (let i = 1; i <= gameCount; i += 1) {
    const { gameText, gameAnswer } = gameConfig.gameFn();

    showMsg(`${gameQuestionText} ${gameText}`); // todo Fix it!

    const userAnswer = queryAnswer(gameAnswerText);

    const isCorrect = (userAnswer === gameAnswer);

    if (!isCorrect) {
      const gameLose = gameConfig.getLose(userName, userAnswer, gameAnswer);

      showMsg(gameLose);
      return;
    }

    showMsg(gameRightText);
  }

  const gameWon = gameConfig.getWin(userName);

  showMsg(gameWon);
};

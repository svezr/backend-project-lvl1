import { generateNumber } from '../utils.js';
import startGame from '../index.js';

const getQuestion = (startNumber, diffValue, numberOfElements, indexToHide) => {
  const result = [];

  for (let i = 0; i < numberOfElements; i += 1) {
    const elementOfProgression = (i === indexToHide) ? '..' : startNumber + diffValue * i;
    result.push(elementOfProgression);
  }

  const gameQuestion = result.join(' ');

  return gameQuestion;
};

const generateGameData = () => {
  const startNumber = generateNumber();

  const numberOfElements = 10;

  const minDiffValue = 2;
  const maxDiffValue = 9;
  const diffValue = generateNumber(maxDiffValue, minDiffValue);

  const minHideValue = 3;
  const maxHideValue = numberOfElements - 2;
  const indexToHide = generateNumber(maxHideValue, minHideValue);

  const gameQuestion = getQuestion(startNumber, diffValue, numberOfElements, indexToHide);

  const correctAnswer = startNumber + diffValue * indexToHide;
  const gameAnswer = correctAnswer.toString();

  return { gameQuestion, gameAnswer };
};

const gameConfig = {
  gameData: generateGameData,
  gameTerms: 'What number is missing in the progression?',
};

export default () => {
  startGame(gameConfig);
};

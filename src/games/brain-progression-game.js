import { generateNumber } from '../utils.js';
import startGame from '../index.js';

const isThisIndexToHide = (i, j) => (i === j);

const getQuestion = (startNumber, diffValue, numberOfElements, indexToHide) => {
  const result = [];

  for (let i = 0; i < numberOfElements; i += 1) {
    const elementOfProgression = isThisIndexToHide(i, indexToHide) ? '..' : startNumber + diffValue * i;
    result.push(elementOfProgression);
  }

  const correctAnswer = startNumber + diffValue * indexToHide;
  const gameQuestion = result.join(' ');
  const gameAnswer = correctAnswer.toString();

  return { gameQuestion, gameAnswer };
};

const startProgressionGame = (numberOfElements = 10) => {
  const startNumber = generateNumber();

  const minDiffValue = 2;
  const maxDiffValue = 9;
  const diffValue = generateNumber(maxDiffValue, minDiffValue);

  const minHideValue = 3;
  const maxHideValue = numberOfElements - 2;
  const indexToHide = generateNumber(maxHideValue, minHideValue);

  const result = getQuestion(startNumber, diffValue, numberOfElements, indexToHide);

  return result;
};

const gameConfig = {
  gameFunction: startProgressionGame,
  gameTerms: 'What number is missing in the progression?',
};

export default () => {
  startGame(gameConfig);
};

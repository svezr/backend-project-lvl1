import { generateNumber } from '../utils.js';

const getQuestion = (lowerProgressionEdge, progressionStep, progressionLength, indexToHide) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const elementOfProgression = (i === indexToHide) ? '..' : lowerProgressionEdge + progressionStep * i;
    result.push(elementOfProgression);
  }

  const gameQuestion = result.join(' ');

  return gameQuestion;
};

const generateGameData = () => {
  const lowerProgressionEdge = generateNumber();

  const progressionLength = 10;

  const minStepValue = 2;
  const maxStepValue = 9;
  const progressionStep = generateNumber(maxStepValue, minStepValue);

  const minHideIndex = 2;
  const maxHideIndex = progressionLength;
  const indexToHide = generateNumber(maxHideIndex, minHideIndex);

  const gameQuestion = getQuestion(lowerProgressionEdge, progressionStep, progressionLength,
    indexToHide);

  const correctAnswer = lowerProgressionEdge + progressionStep * indexToHide;
  const gameAnswer = correctAnswer.toString();

  return { gameQuestion, gameAnswer };
};

const gameConfig = {
  gameData: generateGameData,
  gameDescription: 'What number is missing in the progression?',
};

export default gameConfig;

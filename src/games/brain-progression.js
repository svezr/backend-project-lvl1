import generateNumber from '../utils.js';

const getQuestion = (firstProgressionElement, progressionStep,
  progressionLength, hiddenElementIndex) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const elementOfProgression = (i === hiddenElementIndex) ? '..' : firstProgressionElement + progressionStep * i;
    result.push(elementOfProgression);
  }

  const gameQuestion = result.join(' ');

  return gameQuestion;
};

const generateGameData = () => {
  const firstProgressionElement = generateNumber().value;

  const progressionLength = 10;

  const minStepValue = 2;
  const maxStepValue = 9;

  const randomNumberData = generateNumber(maxStepValue, minStepValue);

  const progressionStep = randomNumberData.value;

  const minHiddenIndex = randomNumberData.minValue;
  const maxHiddenIndex = randomNumberData.maxValue;

  const hiddenElementIndex = generateNumber(maxHiddenIndex, minHiddenIndex).value;

  const gameQuestion = getQuestion(firstProgressionElement, progressionStep, progressionLength,
    hiddenElementIndex);

  const correctAnswer = firstProgressionElement + progressionStep * hiddenElementIndex;
  const gameAnswer = correctAnswer.toString();

  return { gameQuestion, gameAnswer };
};

const gameConfig = {
  generateGameData,
  gameDescription: 'What number is missing in the progression?',
};

export default gameConfig;

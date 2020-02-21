import {
  createResultObj, generateNumber, startGame,
} from './index.js';

const isEven = (number) => (number % 2 === 0);

const startBrainEvenFunction = () => {
  const newNumber = generateNumber();

  const gameAnswer = isEven(newNumber) ? 'yes' : 'no';
  const gameText = newNumber.toString();

  const result = createResultObj(gameText, gameAnswer);

  return result;
};

const gameConfig = {
  gameFn: startBrainEvenFunction,
  gameTerms: 'Answer "yes" if the number is even otherwise answer "no".',
};

export default () => {
  startGame(gameConfig);
};

import { generateNumber } from '../utils.js';
import startGame from '../index.js';

const isEven = (number) => (number % 2 === 0);

const startBrainEvenGame = () => {
  const gameQuestion = generateNumber().toString();

  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  const result = { gameQuestion, gameAnswer };

  return result;
};

const gameConfig = {
  gameFunction: startBrainEvenGame,
  gameTerms: 'Answer "yes" if the number is even otherwise answer "no".',
};

export default () => {
  startGame(gameConfig);
};

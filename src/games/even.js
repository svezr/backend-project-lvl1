import generateNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const generateGameData = () => {
  const gameQuestion = generateNumber().toString();

  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  const result = { gameQuestion, gameAnswer };

  return result;
};

const gameConfig = {
  generateGameData,
  gameDescription: 'Answer "yes" if the number is even otherwise answer "no".',
};

export default gameConfig;

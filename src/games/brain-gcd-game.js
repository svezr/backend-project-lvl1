import { generateNumber } from '../utils.js';
import startGame from '../index.js';

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }

  let smallNum;
  let rest;
  let bigNum;

  smallNum = Math.max(a, b);
  rest = Math.min(a, b);

  do {
    bigNum = smallNum;

    smallNum = rest;

    rest = bigNum % smallNum;
  } while (rest !== 0);

  return smallNum;
};

const startBrainGCDGame = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();

  const gameQuestion = `${number1} ${number2}`;
  const gameAnswer = getGCD(number1, number2).toString();

  return { gameQuestion, gameAnswer };
};

const gameConfig = {
  gameFunction: startBrainGCDGame,
  gameTerms: 'Find the greatest common divisor of given numbers.',
};

export default () => {
  startGame(gameConfig);
};

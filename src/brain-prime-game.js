import {
  createResultObj, generateNumber, startGame,
} from './index.js';

const isPrime = (numb) => {
  if (numb % Math.sqrt(numb) === 0) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numb); i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }

  return true;
};

const startGamePrimeFunction = () => {
  const numb = generateNumber(2, 99);

  const gameText = numb;
  const gameAnswer = isPrime(numb) ? 'yes' : 'no';

  return createResultObj(gameText, gameAnswer);
};

const gameConfig = {
  gameFn: startGamePrimeFunction,
  gameTerms: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export default () => {
  startGame(gameConfig);
};

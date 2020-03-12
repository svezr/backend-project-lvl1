import generateNumber from '../utils.js';

const isPrime = (numb) => {
  if ((numb <= 1) || (numb % Math.sqrt(numb) === 0)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numb); i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const maxAllowedNumber = 99;
  const minAllowedNumber = -99;

  const questionNumber = generateNumber(minAllowedNumber, maxAllowedNumber);

  const gameQuestion = questionNumber;
  const gameAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  return { gameQuestion, gameAnswer };
};

const gameConfig = {
  generateGameData,
  gameDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export default gameConfig;

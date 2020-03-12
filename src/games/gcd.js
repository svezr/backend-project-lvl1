import generateNumber from '../utils.js';

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }

  let number1 = Math.max(a, b);
  let number2 = Math.min(a, b);

  while (number2 !== 0) {
    number1 %= number2;

    const temp = number1;

    number1 = number2;
    number2 = temp;
  }

  return number1;
};

const generateGameData = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();

  const gameQuestion = `${number1} ${number2}`;
  const gameAnswer = getGCD(number1, number2).toString();

  return { gameQuestion, gameAnswer };
};

const gameConfig = {
  generateGameData,
  gameDescription: 'Find the greatest common divisor of given numbers.',
};

export default gameConfig;

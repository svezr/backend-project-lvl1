import { generateNumber, generatePairNumber } from '../utils.js';

const operations = [
  {
    sign: '+',
    operationFunction: (a, b) => a + b,
    onlyOneDigitAllowed: false,
  },
  {
    sign: '-',
    operationFunction: (a, b) => a - b,
    onlyOneDigitAllowed: false,
  },
  {
    sign: '*',
    operationFunction: (a, b) => a * b,
    onlyOneDigitAllowed: true,
  },
];

const getRandomOperation = () => {
  const countOfOperations = operations.length;
  const maxIndexOperation = countOfOperations - 1;

  const randomIndexOperation = generateNumber(maxIndexOperation).toString();

  const randomObject = operations[randomIndexOperation];

  return randomObject;
};

const generateGameData = () => {
  const operationObject = getRandomOperation();

  const { onlyOneDigitAllowed, sign, operationFunction } = operationObject;

  const [firstNumber, secondNumber] = generatePairNumber(onlyOneDigitAllowed);

  const gameAnswer = operationFunction(firstNumber, secondNumber).toString();

  const gameQuestion = `${firstNumber} ${sign} ${secondNumber}`;

  const result = { gameQuestion, gameAnswer };

  return result;
};

const gameConfig = {
  gameData: generateGameData,
  gameDescription: 'What is the result of the expression?',
};

export default gameConfig;

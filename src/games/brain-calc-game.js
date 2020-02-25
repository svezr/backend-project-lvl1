import { generateNumber, generatePairNumber } from '../utils.js';
import startGame from '../index.js';

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


const getBrainCalcGame = (operationObject) => {
  const { onlyOneDigitAllowed, sign, operationFunction } = operationObject;

  const [firstNumber, secondNumber] = generatePairNumber(onlyOneDigitAllowed);

  const gameAnswer = operationFunction(firstNumber, secondNumber).toString();

  const gameQuestion = `${firstNumber} ${sign} ${secondNumber}`;

  const result = { gameQuestion, gameAnswer };

  return result;
};

const startBrainCalcGame = () => {
  const operationObject = getRandomOperation();

  const result = getBrainCalcGame(operationObject);

  return result;
};

const gameConfig = {
  gameFunction: startBrainCalcGame,
  gameTerms: 'What is the result of the expression?',
};


export default () => {
  startGame(gameConfig);
};

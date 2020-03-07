import { generateNumber, generatePairNumber } from '../utils.js';

const operations = [
  {
    sign: '+',
    operation: (a, b) => a + b,
    onlyOneDigitAllowed: false,
  },
  {
    sign: '-',
    operation: (a, b) => a - b,
    onlyOneDigitAllowed: false,
  },
  {
    sign: '*',
    operation: (a, b) => a * b,
    onlyOneDigitAllowed: true,
  },
];

const getRandomOperation = () => {
  const countOfOperations = operations.length;
  const maxIndexOperation = countOfOperations - 1;

  const randomData = generateNumber(maxIndexOperation);

  const randomIndexOperation = randomData.value.toString();

  const operationData = operations[randomIndexOperation];

  return operationData;
};

const generateGameData = () => {
  const operationData = getRandomOperation();

  const { onlyOneDigitAllowed, sign, operation } = operationData;

  const [firstNumber, secondNumber] = generatePairNumber(onlyOneDigitAllowed);

  const gameAnswer = operation(firstNumber, secondNumber).toString();

  const gameQuestion = `${firstNumber} ${sign} ${secondNumber}`;

  const result = { gameQuestion, gameAnswer };

  return result;
};

const gameConfig = {
  generateGameData,
  gameDescription: 'What is the result of the expression?',
};

export default gameConfig;

import generateNumber from '../utils.js';

const operations = [
  {
    sign: '+',
    operation: (a, b) => a + b,
  },
  {
    sign: '-',
    operation: (a, b) => a - b,
  },
  {
    sign: '*',
    operation: (a, b) => a * b,
  },
];

const getRandomOperation = () => {
  const countOfOperations = operations.length;
  const maxIndexOperation = countOfOperations;
  const minIndexOperation = 0;

  const randomData = generateNumber(maxIndexOperation, minIndexOperation);

  const randomIndexOperation = randomData.value.toString();

  const operationData = operations[randomIndexOperation];

  return operationData;
};

const generateGameData = () => {
  const operationData = getRandomOperation();

  const { sign, operation } = operationData;

  const firstNumber = generateNumber().value;
  const secondNumber = generateNumber().value;

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

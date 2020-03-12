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
  const maxIndexOperation = operations.length - 1;
  const minIndexOperation = 0;

  const randomIndexOperation = generateNumber(minIndexOperation, maxIndexOperation);

  const operationData = operations[randomIndexOperation.toString()];

  return operationData;
};

const generateGameData = () => {
  const { sign, operation } = getRandomOperation();

  const firstNumber = generateNumber();
  const secondNumber = generateNumber();

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

import {
  createResultObj, startGame, generateNumber, generatePairNumber,
}
  from '../index.js';

// easyMode means, that one of operand is in [1, 9]
const operations = {
  0: {
    symb: '+',
    fn: (a, b) => a + b,
    easyMode: false,
  },
  1: {
    symb: '-',
    fn: (a, b) => a - b,
    easyMode: false,
  },
  2: {
    symb: '*',
    fn: (a, b) => a * b,
    easyMode: true,
  },

  getRandomOperation() {
    const maxIndexOperation = Object.keys(this).length - 1;
    const minIndexOperation = 0;
    const randomIndexOperation = generateNumber(minIndexOperation, maxIndexOperation).toString();

    const randomObject = this[randomIndexOperation];

    return randomObject;
  },
};

const getBrainCalcGame = (operationObject) => {
  const { easyMode: onlyOneDigit, symb: operationSymbol, fn: operationFunction } = operationObject;

  const [firstNumber, secondNumber] = generatePairNumber(onlyOneDigit);

  const gameAnswer = operationFunction(firstNumber, secondNumber).toString();

  const gameText = `${firstNumber} ${operationSymbol} ${secondNumber}`;

  const result = createResultObj(gameText, gameAnswer);

  return result;
};

const brainCalcFunction = () => {
  const operationObject = operations.getRandomOperation();

  const result = getBrainCalcGame(operationObject);

  return result;
};

const gameConfig = {
  gameFn: brainCalcFunction,
  gameTerms: 'What is the result of the expression?',
};


export default () => {
  startGame(gameConfig);
};

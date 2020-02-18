#!/usr/bin/env node
import {
  createResultObj, startGame, generateNumber, generatePairNumber,
}
  from '../../index.js';

// easyMode means, that one of operand is in [1, 9]
const operations = [
  {
    number: 0,
    symb: '+',
    fn: (a, b) => a + b,
    easyMode: false,
  },
  {
    number: 1,
    symb: '-',
    fn: (a, b) => a - b,
    easyMode: false,
  },
  {
    number: 2,
    symb: '*',
    fn: (a, b) => a * b,
    easyMode: true,
  }];

const startBrainCalc = () => {
  const operationNumber = generateNumber(0, 2);

  const operationObject = operations[operationNumber];

  const { easyMode } = operationObject;

  const [firstNumber, secondNumber] = generatePairNumber(easyMode);

  const operationSymbol = operations[operationNumber].symb;

  const operationFunction = operationObject.fn;

  const gameAnswer = operationFunction(firstNumber, secondNumber).toString();
  const gameText = `${firstNumber} ${operationSymbol} ${secondNumber}`;

  return createResultObj(gameText, gameAnswer);
};

const gameConfig = {
  gameFn: startBrainCalc,
  gameTerms: 'What is the result of the expression?',
};

startGame(gameConfig);

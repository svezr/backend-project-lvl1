#!/usr/bin/env node
import {
  createResultObj, Config, startGame, generateNumber, generatePairNumber,
}
  from '../index.js';

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
  roundCount: 3,
  gameTerms: 'What is the result of the expression?',
  gameQuestion: 'Question:',
  gameAnswer: 'Your answer: ',
  gameLose: '"%userAnswer%" is wrong answer ;(. Correct answer was "%correctAnswer%".\nLet\'s try again, %userName%!',
  gameRight: 'Correct!',
  gameWin: 'Congratulations, %userName%!',
};

startGame(new Config(gameConfig));

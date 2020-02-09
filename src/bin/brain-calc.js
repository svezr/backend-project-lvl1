#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { onGameSessionStart, generateNumber, generatePairNumber } from '../index.js';

// easyMode means, that one of operand is in [1, 9]
const operations = [
  {
    number: 0,
    name: 'addDigits',
    symb: '+',
    fn: (a, b) => a + b,
    easyMode: false,
  },
  {
    number: 1,
    name: 'substractDigits',
    symb: '-',
    fn: (a, b) => a - b,
    easyMode: false,
  },
  {
    number: 2,
    name: 'multiplytDigits',
    symb: '*',
    fn: (a, b) => a * b,
    easyMode: true,
  }];

const queryAnswer = () => readlineSync.question('Your answer: ');


const brainCalcGame = (userName = 'Player', tries = 3) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < tries; i += 1) {
    const operationNumber = generateNumber(0, 2);
    const operationObject = operations[operationNumber];
    const { easyMode } = operationObject;

    const [firstNumber, secondNumber] = generatePairNumber(easyMode);

    const operationSymbol = operations[operationNumber].symb;
    const operationFunction = operationObject.fn;

    const expectingResult = operationFunction(firstNumber, secondNumber).toString();

    console.log(`Question: ${firstNumber} ${operationSymbol} ${secondNumber}`);

    const userResult = queryAnswer();

    const isCorrectAnswer = (expectingResult === userResult);

    if (!isCorrectAnswer) {
      console.log(`"${userResult}" is wrong answer ;(. Correct answer was "${expectingResult}".\nLet's try again, ${userName}`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};


const userNameInput = onGameSessionStart();

brainCalcGame(userNameInput);

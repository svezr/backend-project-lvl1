#!/usr/bin/env node

import {
  createResultObj, generateNumber, startGame,
} from '../../index.js';

// by Euclid

const getGCDOfPair = (a, b) => {
  if (a === b) {
    const gameAnswer = a.toString();
    const gameText = `${a} ${b}`;

    return createResultObj(gameText, gameAnswer);
  }

  let smallNum;
  let rest;
  let bigNum;

  smallNum = Math.max(a, b);
  rest = Math.min(a, b);

  do {
    bigNum = smallNum;

    smallNum = rest;

    rest = bigNum % smallNum;
  } while (rest !== 0);

  const gameText = `${a} ${b}`;
  const gameAnswer = smallNum.toString();

  return createResultObj(gameText, gameAnswer);
};

const startBrainGCD = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();

  return getGCDOfPair(number1, number2);
};

const gameConfig = {
  gameFn: startBrainGCD,
  gameTerms: 'Find the greatest common divisor of given numbers.',
};

startGame(gameConfig);

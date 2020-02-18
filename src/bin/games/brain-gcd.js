#!/usr/bin/env node

import {
  createResultObj, generateNumber, startGame,
} from '../../index.js';

// by Euclid
const startBrainGCD = () => {
  const a = generateNumber();
  const b = generateNumber();
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

const gameConfig = {
  gameFn: startBrainGCD,
  gameTerms: 'Find the greatest common divisor of given numbers.',
};

startGame(gameConfig);

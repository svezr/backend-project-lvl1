#!/usr/bin/env node

import {
  createResultObj, generateNumber, Config, startGame,
} from '../index.js';


// by Euclid
const startBrainGCD = () => {
  const a = generateNumber();
  const b = generateNumber();
  if (a === b) {
    return createResultObj(`${a} ${b}`, a.toString());
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

  return createResultObj(`${a} ${b}`, smallNum.toString());
};

const gameConfig = {
  gameFn: startBrainGCD,
  roundCount: 3,
  gameTerms: 'Find the greatest common divisor of given numbers.',
  gameQuestion: 'Question: ',
  gameAnswer: 'Your answer: ',
  gameLose: '"%userAnswer%" is wrong answer ;(. Correct answer was "%correctAnswer%".\nLet\'s try again, %userName%!',
  gameRight: 'Correct!',
  gameWin: 'Congratulations, %userName%!',
};

startGame(new Config(gameConfig));

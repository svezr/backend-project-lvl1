#!/usr/bin/env node

import {
  createResultObj, generateNumber, Config, startGame,
} from '../index.js';

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
  roundCount: 3,
  gameTerms: 'Find the greatest common divisor of given numbers.',
  gameQuestion: 'Question:',
  gameAnswer: 'Your answer: ',
  gameLose: '"%userAnswer%" is wrong answer ;(. Correct answer was "%correctAnswer%".\nLet\'s try again, %userName%!',
  gameRight: 'Correct!',
  gameWin: 'Congratulations, %userName%!',
};

startGame(new Config(gameConfig));

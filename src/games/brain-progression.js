#!/usr/bin/env node

import {
  createResultObj, generateNumber, Config, startGame,
} from '../index.js';

const startGameProgression = (numberOfElements = 10) => {
  const startNumber = generateNumber();
  const incNumber = generateNumber(2, 9);
  const indexToHide = generateNumber(3, numberOfElements - 3);

  const resultArr = [startNumber];

  for (let i = 1; i < numberOfElements; i += 1) {
    resultArr.push(resultArr[i - 1] + incNumber);
  }

  const correctAnswer = resultArr[indexToHide].toString();

  resultArr[indexToHide] = '..';

  const gameText = resultArr.join(' ');
  const gameAnswer = correctAnswer;

  return createResultObj(gameText, gameAnswer);
};

const gameConfig = {
  gameFn: startGameProgression,
  roundCount: 3,
  gameTerms: 'What number is missing in the progression?',
  gameQuestion: 'Question:',
  gameAnswer: 'Your answer: ',
  gameLose: '"%userAnswer%" is wrong answer ;(. Correct answer was "%correctAnswer%".\nLet\'s try again, %userName%!',
  gameRight: 'Correct!',
  gameWin: 'Congratulations, %userName%!',
};

startGame(new Config(gameConfig));

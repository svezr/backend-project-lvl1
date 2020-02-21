#!/usr/bin/env node

import {
  createResultObj, generateNumber, startGame,
} from '../../index.js';

const isThisIndexToHide = (i, j) => (i === j);

const getProgression = (startNumber, diffValue, numberOfElements, indexToHide) => {
  const resultArr = [];

  for (let i = 0; i < numberOfElements; i += 1) {
    const elementOfProgression = isThisIndexToHide(i, indexToHide) ? '..' : startNumber + diffValue * i;
    resultArr.push(elementOfProgression);
  }

  const correctAnswer = startNumber + diffValue * indexToHide;
  const gameText = resultArr.join(' ');
  const gameAnswer = correctAnswer.toString();

  return createResultObj(gameText, gameAnswer);
};

const startGameProgression = (numberOfElements = 10) => {
  const startNumber = generateNumber();

  const minDiffValue = 2;
  const maxDiffValue = 9;
  const diffValue = generateNumber(minDiffValue, maxDiffValue);

  const minHideValue = 3;
  const maxHideValue = numberOfElements - 2;
  const indexToHide = generateNumber(minHideValue, maxHideValue);

  const result = getProgression(startNumber, diffValue, numberOfElements, indexToHide);

  return result;
};

const gameConfig = {
  gameFn: startGameProgression,
  gameTerms: 'What number is missing in the progression?',
};

startGame(gameConfig);

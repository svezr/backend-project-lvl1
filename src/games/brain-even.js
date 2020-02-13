#!/usr/bin/env node

import {
  createResultObj, generateNumber, Config, startGame,
} from '../index.js';

const isEven = (number) => (number % 2 === 0);

const startBrainEven = () => {
  const numb = generateNumber();

  const gameAnswer = isEven(numb) ? 'yes' : 'no';
  const gameText = numb.toString();

  return createResultObj(gameText, gameAnswer);
};

const gameConfig = {
  name: 'Brain-even',
  gameFn: startBrainEven,
  roundCount: 3,
  gameTerms: 'Answer "yes" if the number is even otherwise answer "no".',
  gameQuestion: 'Question:',
  gameAnswer: 'Your answer: ',
  gameLose: '"%userAnswer%" is wrong answer ;(. Correct answer was "%correctAnswer%".\nLet\'s try again, %userName%!',
  gameRight: 'Correct!',
  gameWin: 'Congratulations, %userName%!',
};

startGame(new Config(gameConfig));
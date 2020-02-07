#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { onGameSessionStart } from '..';

const isEven = (number) => (number % 2 === 0);

const queryAnswer = () => {
  const possibleAnswers = ['yes', 'no'];
  let userAnswer;

  userAnswer = readlineSync.question('Your answer: ');

  if (!possibleAnswers.includes(userAnswer)) {
    userAnswer = 'no';
  }

  return userAnswer;
};

const convertAnswer = (answer) => (answer === 'yes');

const convertAnswerBack = (boolAnswer) => {
  let result = 'no';
  if (boolAnswer) {
    result = 'yes';
  }

  return result;
};

const generateNumber = (min = 0, max = 99) => Math.floor(Math.random() * (max - min + 1) + min);

const brainEvenGame = (userName = 'Player', tries = 3) => {
  console.log('Answer "yes" if the number is even otherwise answer "no".');

  for (let i = 0; i < tries; i += 1) {
    const inputNumber = generateNumber();

    console.log(`Question: ${inputNumber}`);

    const userAnswer = queryAnswer(); // str answer
    const userResult = convertAnswer(userAnswer); // boolean

    const isCorrectAnswer = (isEven(inputNumber) === userResult);

    if (!isCorrectAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${convertAnswerBack(!userResult)}.\nLet's try again, ${userName}`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};


const userNameInput = onGameSessionStart();

brainEvenGame(userNameInput);

#!/usr/bin/env node

console.log('Welcome to the Brain Games!');

const gamesArr = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];

const gameNames = gamesArr.reduce((prev, item) => `${prev}\n * "${item}"`, '');

console.log(`\nAvailable games are:\n${gameNames}.\n\nType the name of the game (without quotes) and hit "enter".\n`);

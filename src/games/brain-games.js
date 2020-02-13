#!/usr/bin/env node

import { showGreeting } from '../index.js';

const gamesArr = [];

gamesArr.push('brain-even');
gamesArr.push('brain-calc');
gamesArr.push('brain-gcd');
gamesArr.push('brain-progression');
gamesArr.push('brain-prime');

showGreeting();

const gameNames = gamesArr.reduce((prev, item) => `${prev}\n * "${item}"`, '');

console.log(`\nAvailable games are:\n${gameNames}.\n\nType the name of the game (without quotes) and hit "enter".\n`);

#!/usr/bin/env node

import queryName from '..';

console.log('Welcome to the Brain Games!');

const userName = queryName();
console.log(`Hello, ${userName}!`);

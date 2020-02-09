#!/usr/bin/env node

import { onGameSessionStart } from '../index.js';

const userName = onGameSessionStart();
console.log(`Hello, ${userName}!`);

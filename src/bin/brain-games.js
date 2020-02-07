#!/usr/bin/env node

import { onGameSessionStart } from '..';

const userName = onGameSessionStart();
console.log(`Hello, ${userName}!`);

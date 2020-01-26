import readlineSync from 'readline-sync';

export const queryName = () => readlineSync.question('May I have your name? ');
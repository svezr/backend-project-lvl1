import readlineSync from 'readline-sync';

export const queryName = () => readlineSync.question('May I have your name? ');

export const onGameSessionStart = () => {
  console.log('Welcome to the Brain Games!');
  return queryName();
};

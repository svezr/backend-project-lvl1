import readlineSync from 'readline-sync';

const queryName = () => readlineSync.question('May I have your name? ');

export default queryName;

import readlineSync from 'readline-sync';

export const queryName = () => readlineSync.question('May I have your name? ');

export const onGameSessionStart = () => {
  console.log('Welcome to the Brain Games!');
  return queryName();
};

export const generateNumber = (min = 0, max = 99) => {
  const rnd = Math.random() * (max - min + 1) + min;
  return Math.floor(rnd);
};

export const generatePairNumber = (easyMode = false) => {
  const firstNumber = generateNumber();
  const secondNumber = easyMode ? generateNumber(1, 9) : generateNumber();

  return [firstNumber, secondNumber];
};


// перенести весь общий вызов в модуль!
// todo создать ассоциативный массив, где прописать ассоциации строкаПриветствия, строкаЗапросОтвета, строкаОшибка, строкаКорректно, строкаПоздравление
// todo Прописать функции с выводом из вышесозданного объекта.
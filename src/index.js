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


export const config = {
  brainEven: {
    name: 'brain-even',
    module: 'brain-even', // импортируемый модуль
    fn: 'brainEvenGame', // имя запускаемой функции
    messageGreeting: 'Answer "yes" if the number is even otherwise answer "no".',
    messageQuestion: 'Question: %questionString%',
    messageAnswer: 'Your answer: ',
    messageWrong: '',
    messageRight: '',
    messageWin: '',
  },
  getGreeting(gameID) {
    return this[gameID].messageGreeting;
  },
  getQuestion(qString) {
    return this[gameID].messageQuestion.
  }

};

// хранить config игры в модуле каждой игры
// там же хранить вызов функции


// перенести весь общий вызов в модуль!
// todo создать ассоциативный массив, где прописать ассоциации строкаПриветствия, строкаЗапросОтвета, строкаОшибка, строкаКорректно, строкаПоздравление
// todo Прописать функции с выводом из вышесозданного объекта.

export const generateNumber = (max = 99, min = 1) => {
  const rnd = Math.random() * (max - min) + min;
  return Math.floor(rnd);
};

export const generatePairNumber = (easyMode = false) => {
  const firstNumber = generateNumber();

  const minAllowedNumber = 1;
  const maxAllowedNumber = 9;
  const secondNumber = easyMode ? generateNumber(maxAllowedNumber, minAllowedNumber)
    : generateNumber();

  return [firstNumber, secondNumber];
};

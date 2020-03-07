export const generateNumber = (maxValue = 99, minValue = 1) => {
  const rnd = Math.random() * (maxValue - minValue) + minValue;

  const randomData = {
    value: Math.floor(rnd),
    minValue,
    maxValue,
  };
  return randomData;
};

export const generatePairNumber = (easyMode = false) => {
  const firstNumber = generateNumber().value;

  const minAllowedNumber = 1;
  const maxAllowedNumber = 9;
  const secondNumber = easyMode ? generateNumber(maxAllowedNumber, minAllowedNumber).value
    : generateNumber().value;

  return [firstNumber, secondNumber];
};

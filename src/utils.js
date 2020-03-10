const generateNumber = (maxValue = 99, minValue = 1) => {
  const rnd = Math.random() * (maxValue - minValue) + minValue;

  const randomData = {
    value: Math.floor(rnd),
    minValue,
    maxValue,
  };
  return randomData;
};

export default generateNumber;

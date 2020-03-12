const generateNumber = (minValue = 1, maxValue = 99) => {
  const rnd = Math.random() * (maxValue - minValue + 1) + minValue;

  return Math.floor(rnd);
};

export default generateNumber;

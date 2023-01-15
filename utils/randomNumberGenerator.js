export const randomNumberGenerator = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return randomNumberGenerator(min, max, exclude);
  } else {
    return rndNum;
  }
}
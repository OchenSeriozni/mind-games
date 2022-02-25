function getRandomInt(min = 1, max = 10) {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  // eslint-disable-next-line max-len
  const result = (Math.floor(Math.random() * (max1 - min1 + 1)) + min1);
  return result; // Максимум и минимум включаются
}
export default getRandomInt;

function getRandomIntInclusive(min = 2, max = 5) {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1; // Максимум и минимум включаются
}
export default getRandomIntInclusive;

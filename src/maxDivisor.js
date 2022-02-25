const maxDivisor = (num1, num2) => {
  const minNum = num1 >= num2 ? num2 : num1;
  const maxNum = num1 >= num2 ? num1 : num2;
  for (let i = minNum; i >= 1; i -= 1) {
    if (minNum % i === 0 && maxNum % i === 0) {
      return i;
    }
  }
  return NaN;
};
export default maxDivisor;

const maxDivisor = (num1, num2) => {
  if (num1 === 1 || num2 === 1) {
    return 1;
  }
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  let chek = 0;
  if (num1 > num2) {
    chek = num2;
  }
  chek = num1;
  for (let i = chek - 1; i >= 1; i -= 1) {
    if (i === 1) {
      if (num1 % num2 !== 0 || num2 % num2 !== 0) {
        return 1;
      }
      return chek;
    }
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return NaN;
};
export default maxDivisor;

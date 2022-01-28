const chars = ['+', '-', '*'];
export const randomChar = () => {
  const char = chars[Math.floor(Math.random() * chars.length)];
  return char;
};

export const randomChar1 = (num1, num2, char = randomChar()) => { // Получение случайного знака
  if (char === '+') {
    return num1 + num2;
  }
  if (char === '-') {
    return num1 - num2;
  }
  if (char === '*') {
    return num1 * num2;
  }
  return 'error';
};

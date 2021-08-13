function ValidParanthesis(input) {
  const stack = [];
  const matchingBraces = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  const openingBraces = Object.keys(matchingBraces);

  for (let char of input) {
    if (openingBraces.includes(char)) {
      stack.push(char);
    } else {
      const lastItem = stack.pop();
      if (char !== matchingBraces[lastItem]) return false;
    }
  }

  if (stack.length !== 0) return false;
  return true;
}

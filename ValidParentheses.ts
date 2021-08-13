function ValidParanthesis(input: String) {
  const stack = [];
  const matchingBraces = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  const openingBraces = Object.keys(matchingBraces);

  for (let char in input) {
    if (openingBraces.includes(char)) {
      
    }
  }
}

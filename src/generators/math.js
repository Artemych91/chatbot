module.exports = {
  calculateSum: (chatbotMessages) => {
    const numbersMatch = chatbotMessages.match(/\d+/g);
    if (numbersMatch) {
      const sum = numbersMatch.reduce((acc, num) => acc + parseInt(num), 0);
      return sum.toString();
    }
    return '';
  },

  calculateSubtraction: (chatbotMessages) => {
    const numbersMatch = chatbotMessages.match(/-?\d+/g);
    if (numbersMatch) {
      const result = numbersMatch.reduce((acc, num) => acc - parseInt(num), 0);
      return result.toString();
    }
    return '';
  },

  calculateMultiplication: (chatbotMessages) => {
    const numbersMatch = chatbotMessages.match(/-?\d+/g);
    if (numbersMatch) {
      const result = numbersMatch.reduce((acc, num) => acc * parseInt(num), 1);
      return result.toString();
    }
    return '';
  },

  findLargestNumber: (chatbotMessages) => {
    const numbersMatch = chatbotMessages.match(/-?\d+/g);
    if (numbersMatch) {
      const largest = Math.max(...numbersMatch.map(num => parseInt(num)));
      return largest.toString();
    }
  },

  findSmallestNumber: (chatbotMessages) => {
    const numbersMatch = chatbotMessages.match(/-?\d+/g);
    if (numbersMatch) {
      const smallest = Math.min(...numbersMatch.map(num => parseInt(num)));
      return smallest.toString();
    }
    return '';
  },
}

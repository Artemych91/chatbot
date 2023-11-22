module.exports = {
  countEvenWords: (chatbotMessages) => {
    const wordsMatch = chatbotMessages.match(/:\s*(.*?)\./);

    if (wordsMatch && wordsMatch[1]) {
      const evenWords = wordsMatch[1]
        .split(',')
        .map(word => word.trim())
        .filter(word => word.length % 2 === 0);

      return evenWords.join(', ');
    }

    return '';
  },

  countOddWords: (chatbotMessages) => {
    const wordsMatch = chatbotMessages.match(/:\s*(.*?)\./);

    if (wordsMatch && wordsMatch[1]) {
      const oddWords = wordsMatch[1]
        .split(',')
        .map(word => word.trim())
        .filter(word => word.length % 2 !== 0);

      return oddWords.join(', ');
    }

    return '';
  },

  alphabetizeWords: (chatbotMessages) => {
    const wordsMatch = chatbotMessages.match(/:\s*(.*?)\./);

    if (wordsMatch && wordsMatch[1]) {
      const alphabetizedWords = wordsMatch[1]
        .split(/\s*,\s*/)
        .map(word => word.trim())
        .filter(word => word !== '')
        .sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);

      return alphabetizedWords.join(', ');
    }

    return '';
  },
}

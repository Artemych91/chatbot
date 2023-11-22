module.exports = {
  parseChatbotMessages: function (response) {
    try {
      const lastMessage = response[response.length - 1].text || '';
      return lastMessage;
    } catch (error) {
      console.error('Error parsing chatbot messages:', error.message);
      return null;
    }
  },

  isEndMessage: (chatbotMessages) => {
    return /\b(?:Thank you)\b/i.test(chatbotMessages);
  },

  isYesNoQuestion: (chatbotMessages) => {
    return /\b(?:are|is|am|do|does|did|have|has|will|can|should|would)\b/i.test(chatbotMessages);
  },

  isSumQuestion: (chatbotMessages) => {
    return /\b(?:sum|add|total)\b/i.test(chatbotMessages);
  },

  isSubtractQuestion: (chatbotMessages) => {
    return /\b(?:subtract|minus)\b/i.test(chatbotMessages);
  },

  isMultiplyQuestion: (chatbotMessages) => {
    return /\b(?:multiply|times)\b/i.test(chatbotMessages);
  },

  isLargestQuestion: (chatbotMessages) => {
    return /\b(?:largest|biggest|highest)\b/i.test(chatbotMessages);
  },

  isSmallestQuestion: (chatbotMessages) => {
    return /\b(?:smallest|lowest)\b/i.test(chatbotMessages);
  },

  isCountEvenWordsQuestion: (chatbotMessages) => {
    return /\b(?:repeat).*(?:even|even-number|even letter|even-letter)\b/i.test(chatbotMessages);
  },

  isCountOddWordsQuestion: (chatbotMessages) => {
    return /\b(?:repeat).*(?:odd|odd-number|odd letter|odd-letter)\b/i.test(chatbotMessages);
  },

  isAlphabetizeWordsQuestion: (chatbotMessages) => {
    return /\b(?:alphabetize)\b/i.test(chatbotMessages);
  },

  isSportsQuestion: (chatbotMessages) => {
    return /\b(?:team|teams)\b/i.test(chatbotMessages);
  },
};

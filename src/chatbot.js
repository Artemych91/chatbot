const api = require('./api/api');
const utils = require('./utils');
const math = require('./generators/math');
const strings = require('./generators/strings');
const sport = require('./generators/sport');

module.exports = {
  startConversation: async () => {
    try {
      const userId = await api.registerUser('Artem', 'artem.batog@gmail.com');
      const conversationId = await api.initConversation(userId);

      await module.exports.conversationLoop(conversationId);
    } catch (error) {
      console.error('Error starting conversation:', error.message);
    }
  },

  conversationLoop: async (conversationId) => {
    try {
      while (true) {
        const messages = await api.getNextMessages(conversationId);
        const parsedMessages = utils.parseChatbotMessages(messages);

        if (!parsedMessages) {
          break;
        }

        const replyContent = module.exports.generateReply(parsedMessages);
        const isCorrect = await api.sendReply(conversationId, replyContent);

        if (!isCorrect) {
          console.log('Chatbot did not like the reply. Exiting conversation.');
          break;
        }
      }
    } catch (error) {
      console.error('Error in conversation loop:', error.message);
    }
  },

  generateReply: (chatbotMessages) => {
    if (utils.isEndMessage(chatbotMessages)) {
      console.log('Message:', chatbotMessages);
      return 'Thank you too';
    }

    if (utils.isSumQuestion(chatbotMessages)) {
      return math.calculateSum(chatbotMessages);
    }

    if (utils.isSubtractQuestion(chatbotMessages)) {
      return math.calculateSubtraction(chatbotMessages);
    }

    if (utils.isMultiplyQuestion(chatbotMessages)) {
      return math.calculateMultiplication(chatbotMessages);
    }

    if (utils.isLargestQuestion(chatbotMessages)) {
      return math.findLargestNumber(chatbotMessages)
    }

    if (utils.isSmallestQuestion(chatbotMessages)) {
      return utils.findSmallestNumber(chatbotMessages);
    }

    if (utils.isCountEvenWordsQuestion(chatbotMessages)) {
      return strings.countEvenWords(chatbotMessages)
    }

    if (utils.isAlphabetizeWordsQuestion(chatbotMessages)) {
      return strings.alphabetizeWords(chatbotMessages);
    }

    if (utils.isSportsQuestion(chatbotMessages)) {
      return sport.getSportAnswer(chatbotMessages)
    }

    if (utils.isYesNoQuestion(chatbotMessages)) {
      return 'yes';
    }

    return '';
  }
};

const axios = require('axios');
const config = require('../../config/config');

module.exports = {
  registerUser: async (name, email) => {
    try {
      const response = await axios.post(`${config.BASE_URL}/challenge-register`, {
        name: name,
        email: email
      });
      return response.data.user_id;
    } catch (error) {
      console.error('Error registering user:', error.message);
      throw error;
    }
  },

  initConversation: async (userId) => {
    try {
      const response = await axios.post(`${config.BASE_URL}/challenge-conversation`, {
        user_id: userId
      });
      return response.data.conversation_id;
    } catch (error) {
      console.error('Error initializing conversation:', error.message);
      throw error;
    }
  },

  getNextMessages: async (conversationId) => {
    try {
      const response = await axios.get(`${config.BASE_URL}/challenge-behaviour/${conversationId}`);
      return response.data.messages;
    } catch (error) {
      console.error('Error retrieving messages:', error.message);
      throw error;
    }
  },

  sendReply: async (conversationId, content) => {
    try {
      const response = await axios.post(`${config.BASE_URL}/challenge-behaviour/${conversationId}`, {
        content: content
      });
      return response.data.correct;
    } catch (error) {
      console.error('Error sending reply:', error.message);
      throw error;
    }
  }
};

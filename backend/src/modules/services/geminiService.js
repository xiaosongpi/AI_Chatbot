require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const AIModel = new GoogleGenerativeAI(process.env.AI_API_KEY);

const aiService = {
    queryGemini: async (message) => {
        const request = `User Question: ${message}`;
        const model = AIModel.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const result = await model.generateContent(request);
        const response = result.response.text();
        return response;
    }
};

module.exports = aiService;
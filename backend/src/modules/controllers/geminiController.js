const geminiService = require("../services/geminiService");

const geminiController = {
    chatWithGemini: async (req, res) => {
        const { message } = req.body;
        try {
            const response = await geminiService.queryGemini(message);
            res.status(200).json({ message: response });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = geminiController;

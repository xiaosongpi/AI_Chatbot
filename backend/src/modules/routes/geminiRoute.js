const express = require('express');
const geminiController = require('../controllers/geminiController');

const router = express.Router();

router.post('/chat', geminiController.chatWithGemini);

module.exports = router;

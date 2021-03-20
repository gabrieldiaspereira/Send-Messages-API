const { Router } = require('express');

const messagesRoutes = Router();
const MensagemController = require('../app/controllers/message.controller');

messagesRoutes.post('/messages', MensagemController.store);
messagesRoutes.get('/messages/message/:message', MensagemController.showForMessage);
messagesRoutes.get('/messages/from/:from', MensagemController.showForFrom);

module.exports = messagesRoutes;

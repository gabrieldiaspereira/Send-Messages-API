const { Router } = require('express');

const messagesRoutes = Router();
const MensagemController = require('../app/controllers/message.controller');

messagesRoutes.post('/', MensagemController.store);
messagesRoutes.get('/message/:message', MensagemController.showForMessage);
messagesRoutes.get('/from/:from', MensagemController.showForFrom);

module.exports = messagesRoutes;

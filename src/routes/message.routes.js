const { Router } = require('express');

const messagesRoutes = Router();
const MensagemController = require('../app/controllers/message.controller');

messagesRoutes.post('/', MensagemController.store);
messagesRoutes.get('/:message?', MensagemController.index);

module.exports = messagesRoutes;

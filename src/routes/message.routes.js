const { Router } = require('express');

const messagesRoutes = Router();
const MensagemController = require('../app/controllers/message.controller');

messagesRoutes.post('/', MensagemController.store);
messagesRoutes.get('/', MensagemController.index);
messagesRoutes.get('/message/:message', MensagemController.showForMessage);
messagesRoutes.get('/from/:from', MensagemController.showForFrom);
messagesRoutes.get('/target_id/:target_id', MensagemController.showForTargetId);

module.exports = messagesRoutes;

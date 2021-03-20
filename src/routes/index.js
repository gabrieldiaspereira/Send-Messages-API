const { Router } = require('express');

const routes = Router();

const messagesRoutes = require('./message.routes');

routes.use('/messages', messagesRoutes);

module.exports = routes;

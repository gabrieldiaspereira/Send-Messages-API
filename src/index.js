const express = require('express');
require('dotenv').config();
require('./database');

const routes = require('./routes');

const port = process.env.PORT || 3333;
const appUrl = process.env.APP_URL || 'localhost';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, appUrl);
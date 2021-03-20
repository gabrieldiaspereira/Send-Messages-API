const express = require('express');

dotenv.config();
const port = process.env.PORT || 3333;
const appUrl = process.env.APP_URL || 'localhost';

const app = express();

const route = require('./routes/message.routes');

app.use(express.json());
app.use(route);

app.listen(port, () => console.log(`server started at http://${appUrl}:${port}`));

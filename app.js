
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello! Logger middleware is working.');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});
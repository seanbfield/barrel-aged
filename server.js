const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json('pong!');
});



app.listen(PORT, () => {
  console.log(`barrel-aged server listening on port ${PORT}`);
});
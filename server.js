const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000;

const app = express();
const { userRouter } = require('./routes/userRouter');
const { whiskeyRouter } = require('./routes/whiskeyRouter');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/whiskey', whiskeyRouter);

app.use((e, req, res, next) => {
  if (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Barrel-Aged server is listening on PORT ${PORT}.`);
});
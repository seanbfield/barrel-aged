const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userRouter } = require('./routes/userRouter');


const PORT = process.env.PORT || 3000;

const app = express();
const { UserRouter } = require('./Authentication/user');



app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/users', userRouter);

// Routes
app.use('/user', UserRouter);


app.get('/ping', (req, res) => {
  res.json('pong!');
});



app.listen(PORT, () => {
  console.log(`barrel-aged server listening on port ${PORT}`);
});
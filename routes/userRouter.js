const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { genToken, restrict } = require('../auth');

const SALT = 4;
const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
userRouter.post('/signup', async (req, res) => {
  const { userName, password, email } = req.body;
  const pwDigest = await bcrypt.hash(password, SALT);
  const newUser = await User.create({
    user_name: userName,
    password_digest: pwDigest,
    email,
  });
  const tokenData = {
    user_name: newUser.userName,
    email: newUser.email,
    id: newUser.id,
  };
  const token = await genToken(tokenData);
  res.json(token);
});
userRouter.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        user_name: userName,
      },
    });
    const isValid = await bcrypt.compare(password, user.password_digest)
    if (isValid) {
      const token = genToken(req.body);
      res.json(token);
    } else res.status(401).send('Not Authorized');
  } catch (e) {
    res.json(e.message);
  }
});

userRouter.get('/verify', restrict, (req, res) => {
  res.json(res.locals.user);
});

module.exports = {
  userRouter,
};
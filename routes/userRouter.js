const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { genToken, restrict } = require('../auth');

const SALT = 4;
const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
})
userRouter.post('/signup', async (req, res) => {
  const { name, password, email } = req.body;
  const pwDigest = await bcrypt.hash(password, SALT);
  const newUser = await User.create({
    name: name,
    password_digest: pwDigest,
    email: email
  });
  const tokenData = {
    name: newUser.name,
    email: newUser.email,
    id: newUser.id
  }
  const token = await genToken(tokenData);
  res.json(token);
})
userRouter.post('/login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        name: name
      }
    });
    const isValid = await bcrypt.compare(password, user.password_digest)
    if (isValid) {
      const token = genToken(req.body);
      res.json(token)
    } else res.status(401).send('Not Authorized');
  } catch (e) {
    res.json(e.message);
  }
});

userRouter.get('/verify', restrict, (req, res) => {
  res.json(res.locals.user);
})

module.exports = {
  userRouter,
}
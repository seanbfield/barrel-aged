const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User, Whiskey, Review } = require('../models');
const { genToken, restrict } = require('../auth');

const SALT = 4;
const userRouter = Router();

// Create User (Signup) – BW

userRouter.post('/signup', async (req, res) => {
  debugger;
  const { user, password, email } = req.body;
  const pwDigest = await bcrypt.hash(password, SALT);
  const newUser = await User.create({
    username: user,
    password_digest: pwDigest,
    email,
  });
  const tokenData = {
    username: newUser.username,
    email: newUser.email,
    id: newUser.id,
  };
  const token = await genToken(tokenData);
  res.json(token);
});

// Create Token (Login) – BW

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  const isValid = await bcrypt.compare(password, user.password_digest);
  if (isValid) {
    const token = genToken(req.body);
    res.json(token);
  } else res.status(401).send('Not Authorized');
});

// Index Users – BW

userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Show User – SB

userRouter.get('/:id', async (req, res) => {
  const specificUser = await User.findByPk(req.params.id);
  res.json(specificUser);
});

// Update User – MK

userRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  await User.update({
    first_name: req.body.first_name,
    username: req.body.username,
    email: req.body.email,
    location: req.body.location,
    fav_whiskey: req.body.fav_whiskey,
  }, {
      where: {
        id,
      },
    });
  const updateUser = await User.findByPk(id);
  res.json(updateUser);
});

// Create Review - BW

userRouter.post('/:user_id/whiskey/:id/review', async (req, res) => {
  const user = await User.findByPk(req.params.user_id);
  const whiskey = await Whiskey.findByPk(req.params.id);
  const review = await Review.create(req.body);
  review.setUser(user);
  review.setWhiskey(whiskey);
  res.json(review);
});

// Index Reviews - SB

userRouter.get('/review', async (req, res) => {
  const everyReview = await Review.findAll();
  console.log(everyReview);
  res.json(everyReview);
});

// Index User's Reviews - SB

userRouter.get('/:id/review', async (req, res) => {
  const { id } = req.params;
  const findReview = await Review.findAll({
    where: { id },
    include: [{ model: User }],
  });
  res.json(findReview);
});

// Update Review - SB

userRouter.put('/:user_id/review/:id', async (req, res) => {
  const { id } = req.params;
  await Review.update({
    rating: req.body.rating,
    comment: req.body.comment,
  }, {
      where: {
        id,
      },
    });
  const editReview = await Review.findByPk(id);
  res.json(editReview);
});

// Delete Review - BW

userRouter.delete('/:user_id/review/:id', async (req, res) => {
  const user = await User.findByPk(req.params.user_id);
  const review = await Review.findByPk(req.params.id);
  if (
    user.id === review.userId) {
    await Review.destroy({
      where: {
        id: review.id,
      },
    });
    res.json('Review deleted');
  } else {
    res.status(401).send('Not Authorized');
  }
});

module.exports = {
  userRouter,
};
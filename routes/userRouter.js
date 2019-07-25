const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User, Whiskey, Review } = require('../models');
const { genToken, restrict } = require('../auth');

const SALT = 4;
const userRouter = Router();

// Create User (Signup) – BW/SB


userRouter.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;
  const pwDigest = await bcrypt.hash(password, SALT);
  const newUser = await User.create({
    username: username,
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

userRouter.post('/login', async (req, res, next) => {
  try {
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
    } else res.status(401).send('Invalid credentials');
  } catch (e) {
    console.log(e.message);
    res.status(401).send('Invalid credentials');
  }
});

// Index Users – BW

userRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
});

// Show User – SB

userRouter.get('/:id', restrict, async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.id);
    res.json(specificUser);
  } catch (e) {
    next(e);
  }
});

// Update User – MK

userRouter.put('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        username: req.locals.user.username,
      }
    });
    if (user.id === id) {
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
    }
  } catch (e) {
    next(e);
  }
});

// Create Review - BW

userRouter.post('/whiskey/:id/review', restrict, async (req, res, next) => {
  try {
    const localUser = res.locals.user
    const data = await User.findOne({
      where: {
        username: localUser.username,
      }
    });
    const user = data.datavalues;
    const whiskey = await Whiskey.findByPk(req.params.id);
    const review = await Review.create(req.body);
    review.setUser(user);
    review.setWhiskey(whiskey);
    res.json(review);
  } catch (e) {
    next(e);
  }
});

// Index Reviews - SB

userRouter.get('/review', restrict, async (req, res, next) => {
  try {
    const everyReview = await Review.findAll();
    console.log(everyReview);
    res.json(everyReview);
  } catch (e) {
    next(e);
  }
});

// Index User's Reviews - SB

userRouter.get('/:id/review', restrict, async (req, res, next) => {
  try {
    const { id } = req.params;
    const findReview = await Review.findAll({
      where: { id },
      include: [{ model: User }],
    });
    res.json(findReview);
  } catch (e) {
    next(e);
  }
});

// Update Review - SB

userRouter.put('/:user_id/review/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        username: req.locals.user.username,
      }
    });
    if (user.id === req.params.userId) {
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
    } else {
      res.status(401).send('Not Authorized');
    }
  } catch (e) {
    next(e);
  }
});

// Delete Review - BW

userRouter.delete('/:user_id/review/:id', restrict, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.locals.user.username,
      }
    });
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
  } catch (e) {
    next(e);
  }
});

module.exports = {
  userRouter,
};

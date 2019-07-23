const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User, Whiskey, Review } = require('../models');
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


// BW - Create a review
userRouter.post('/:user_id/whiskey/:id/review', async (req, res) => {
  // add 'restrict, ' before async when tokens are running on front end and uncomment userid check
  const user = await User.findByPk(req.params.user_id);
  const whiskey = await Whiskey.findByPk(req.params.id);
  // if (user.id === res.locals.user.id) {
  const review = await Review.create(req.body);
  review.setUser(user);
  review.setWhiskey(whiskey);
  res.json(review);
  // } else {
  //   res.status(401).send('Not Authorized');
  // }
})

// BW - Delete a review
userRouter.delete('/:user_id/review/:id', async (req, res) => {
  // add 'restrict, ' before async when tokens are running on front end and uncomment userid check
  const user = await User.findByPk(req.params.user_id);
  const review = await Review.findByPk(req.params.id);
  if (
    // user.id === res.locals.user.id && 
    user.id === review.userId) {
    await Review.destroy({
      where: {
        id: review.id
      }
    });
    res.json('Review deleted');
  } else {
    res.status(401).send('Not Authorized');
  }
})



// SB - Get user by ID
userRouter.get('/:id', async (req, res) => {
  const specificUser = await User.findByPk(req.params.id)
  res.json({
    specificUser
  })
})



//SB - Get all reviews
userRouter.get('/review', async (req, res) => {
  const everyReview = await Review.findAll()
  console.log(everyReview);
  res.json({
    everyReview
  })
})



// SB - See all reviews of a user

userRouter.get('/:id/review', async (req, res) => {
  try {
    const id = req.params.id
    const findReview = await Review.findAll({
      where: { id: id },
      include: [{ model: User, }]
    })
    res.json({ findReview })
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
})


// SB - Update a review

userRouter.put('/:user_id/review/:id', async (req, res) => {
  try {

    const id = req.params.id;
    // const data = req.body;
    await Review.update({
      rating: req.body.rating,
      comment: req.body.comment
    }, {
        where: {
          id
        },
      });
    const editReview = await Review.findByPk(id)
    res.json(editReview);

  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
})

module.exports = {
  userRouter,
};
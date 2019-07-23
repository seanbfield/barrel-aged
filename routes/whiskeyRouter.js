const { Router } = require('express');
const { User, Whiskey, Review } = require('../models');
const { genToken, restrict } = require('../auth');

const whiskeyRouter = Router();

// See all whiskeys: NB

whiskeyRouter.get('/', async (req, res) => {
  const AllWhiskey = await Whiskey.findAll();
  res.json({ AllWhiskey });
});

// MK – Index Whiskey Reviews

whiskeyRouter.get('/:id/review', async (req, res) => {
  const { id } = req.params;
  const findReview = await Review.findAll({
    where: { whiskeyId: id },
    include: [{ model: Whiskey }],
  });
  res.json({ findReview });
});

// Create a whiskey: NB
// Add Verify
whiskeyRouter.post('/', async (req, res) => {
  try {
    const data = req.body;
    const AllWhiskey = await Whiskey.create(data);
    res.json({ AllWhiskey });
  } catch (e) {
    res.json({ err: e.message });
  }
});


module.exports = {
  whiskeyRouter,
};

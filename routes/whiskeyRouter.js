const { Router } = require('express');
const { Whiskey, Review } = require('../models');
const { restrict } = require('../auth');

const whiskeyRouter = Router();

// Create Whiskey – NB

whiskeyRouter.post('/', async (req, res) => {
  const data = req.body;
  const newWhiskey = await Whiskey.create(data);
  res.json(newWhiskey);
});

// Index Whiskeys – NB

whiskeyRouter.get('/', async (req, res) => {
  const AllWhiskey = await Whiskey.findAll({
    include: [Review]
  });
  res.json(AllWhiskey);
});

// Index Whiskey's Reviews - MK

whiskeyRouter.get('/:id/review', async (req, res) => {
  const { id } = req.params;
  const findReviews = await Whiskey.findAll({
    where: { id },
    include: [{ model: Review }],
  });
  res.json(findReviews);
});

module.exports = {
  whiskeyRouter,
};

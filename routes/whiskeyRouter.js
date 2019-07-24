const { Router } = require('express');
const { Whiskey, Review } = require('../models');
const { restrict } = require('../auth');

const whiskeyRouter = Router();

// Create Whiskey – NB

whiskeyRouter.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newWhiskey = await Whiskey.create(data);
    res.json(newWhiskey);
  } catch (e) {
    next(e);
  }
});

// Index Whiskeys – NB

whiskeyRouter.get('/', async (req, res) => {
  try {
    const AllWhiskey = await Whiskey.findAll({
      include: [Review],
    });
    res.json(AllWhiskey);
  } catch (e) {
    next(e);
  }
});

// Index Whiskey's Reviews - MK

whiskeyRouter.get('/:id/review', async (req, res) => {
  try {
    const { id } = req.params;
    const findReviews = await Whiskey.findAll({
      where: { id },
      include: [{ model: Review }],
    });
    res.json(findReviews);
  } catch (e) {
    next(e);
  }
});

module.exports = {
  whiskeyRouter,
};

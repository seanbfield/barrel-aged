//import students from models.js
const { User, Review } = require('./models')
require

const main = async () => {

  await Review.put({
    id: 1,
    comment: "Oh good. You're making tea. 'Cause I could use some with honey and lemon. And bourbon. But actually, without the honey and lemon. And the tea.",
  })
}

main();
const Sequelize = require('sequelize');


//Sequelize

const sequelize = new Sequelize({
  database: 'barrelaged_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});


//USER MODEL

const User = sequelize.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
});


//WHISKEY MODEL
const Whiskey = sequelize.define('whiskey', {

  name: Sequelize.STRING,
  type: Sequelize.STRING,
  agg: Sequelize.DECIMAL(10, 2),
});


//REVIEW
const Review = sequelize.define('review', {

  score: Sequelize.INTEGER,
  review: Sequelize.STRING,

});

module.exports = {
  sequelize,
  User,
  Whiskey,
  Review,
};
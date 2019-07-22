<<<<<<< HEAD
const { Sequelize } = require('sequelize');
=======
const Sequelize = require('sequelize');


//Sequelize
>>>>>>> 10c2b1d7223a963fa1a5dad5b909d1a24f9a4795

const sequelize = new Sequelize({
  database: 'barrelaged_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

<<<<<<< HEAD
const User = sequelize.define('user', {
  name: Sequelize.STRING,
=======

//USER MODEL

const User = sequelize.define('users', {
  user_name: Sequelize.STRING,
>>>>>>> 10c2b1d7223a963fa1a5dad5b909d1a24f9a4795
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    lowercase: true,
    validate: {
      isEmail: true,
      notEmpty: true,
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 10c2b1d7223a963fa1a5dad5b909d1a24f9a4795
  },
  password_digest: Sequelize.STRING,
});

<<<<<<< HEAD
module.exports = {
  User,
  sequelize,
};
=======

//WHISKEY MODEL
const Whiskey = sequelize.define('whiskey', {

  name: Sequelize.STRING,
  type: Sequelize.STRING,
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
>>>>>>> 10c2b1d7223a963fa1a5dad5b909d1a24f9a4795

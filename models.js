const Sequelize = require('sequelize');
// sb-model-update

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
  first_name: Sequelize.STRING,
  user_name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    lowercase: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  },
  password_digest: Sequelize.STRING,
  location: Sequelize.STRING,
  fav_whiskey: Sequelize.STRING,
});


//WHISKEY MODEL
const Whiskey = sequelize.define('whiskey', {

  name: Sequelize.STRING,
  brand: Sequelize.STRING,
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  url_to_image: Sequelize.STRING,

});


//REVIEW
const Reviews = sequelize.define('review', {
  rating: Sequelize.INTEGER,
  comment: Sequelize.STRING,
});


User.hasMany(Whiskey, Reviews);
Whiskey.hasMany(Reviews);
Review.belongsTo(User);
Review.belongsTo(Whiskey);

module.exports = {
  sequelize,
  User,
  Whiskey,
  Review,
};
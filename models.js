const Sequelize = require('sequelize');

// Sequelize
let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: 'barrelaged_db',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  });
}

// User Model
const User = sequelize.define('user', {
  first_name: Sequelize.STRING,
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    lowercase: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password_digest: Sequelize.STRING,
  location: Sequelize.STRING,
  fav_whiskey: Sequelize.STRING,
});

// Whiskey Model
const Whiskey = sequelize.define('whiskey', {
  name: Sequelize.STRING,
  brand: Sequelize.STRING,
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  url_to_image: Sequelize.STRING,
});

// Review Model
const Review = sequelize.define('review', {
  rating: Sequelize.INTEGER,
  comment: Sequelize.STRING,
});

User.hasMany(Whiskey);
User.hasMany(Review);
Whiskey.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Whiskey);

module.exports = {
  sequelize,
  User,
  Whiskey,
  Review,
};

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'barrelaged_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const User = sequelize.define('user', {
  name: Sequelize.STRING,
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
});

module.exports = {
  User,
  sequelize,
};

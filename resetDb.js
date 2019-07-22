const { sequelize } = require('./models');

const resetDb = async () => {
  await sequelize.sync({ force: true });
  console.log('synced');
  process.exit();
}

resetDb();
const { sequelize } = require('./models');

async function resetDb() {
  await sequelize.sync({ force: true });
  console.log('synced');
  process.exit();
}

resetDb();
const { User, Whiskey, Review } = require('./models');


const data = [
  {
    name: 'Isabella Islay',
    type: 'Scotch',
  },
  {
    name: 'Islay',
    type: 'Scotch',
  },
  {
    name: 'iwedhiw',
    type: 'kdjwe',
  },
];


const main = async () => {
  try {
    await Whiskey.bulkCreate(data);
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

main();
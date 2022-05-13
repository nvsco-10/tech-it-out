const db = require('../config/connection');
const { User, Resource } = require('../models');
const userSeeds = require('./userSeeds.json');
const resourceSeeds = require('./resourceSeeds.json');

db.once('open', async () => {
  try {
    await Resource.deleteMany({});
    // const users = await User.insertMany(userSeeds)
    const resources = await Resource.insertMany(resourceSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

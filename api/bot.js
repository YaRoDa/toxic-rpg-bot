
const db = require('../lib/db');

module.exports = async (req, res) => {
  const redis = db.connect();

  redis.quit();

  console.log(req.headers);

  res.send('Ok');
}

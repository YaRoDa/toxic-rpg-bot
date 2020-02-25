
const db = require('../lib/db');
const tgbot = require('../lib/tgbot');

module.exports = async (req, res) => {
  const redis = db.connect();
  if (!tgbot.isTgRequest(req)) {
    res.status(401).send('TG_TOKEN not in query');
  } else {
    res.send('Ok');
    redis.quit();
  }
}

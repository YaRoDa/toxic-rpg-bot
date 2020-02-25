
const { redis } = require('../lib/db');
const tgbot = require('../lib/tgbot');

const increase = require('../commands/increase');
const reset = require('../commands/reset');
const start = require('../commands/start');
const status = require('../commands/status');


module.exports = async (req, res) => {
  if (!tgbot.isTgRequest(req)) {
    console.log('TG_TOKEN not in query');
    res.status(401).send('TG_TOKEN not in query');
  } else {
    if (!req.body || !req.body.message) {
      console.log('Body not provided nor body.message');
      res.send('Body not provided nor body.message');
      return;
    }
    const text = req.body.message.text;
    if (text === '/increase') {
      increase(req, redis);
    }
    if (text === '/reset') {
      reset(req, redis);
    }
    if (text === '/status') {
      status(req, redis);
    }
    if (text === '/start') {
      start(req, redis);
    }
    res.send('Ok');
  }
}

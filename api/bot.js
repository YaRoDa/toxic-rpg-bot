
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
    console.log('req.body %j', req.body);
    const text = req.body.message.text;
    if (text === '/increase') {
      increase(req, redis);
    } else if (text === '/reset') {
      reset(req, redis);
    } else if (text === '/status') {
      status(req, redis);
    } else if (text === '/start') {
      start(req, redis);
    } else {
      console.log('command not found');
    }
    res.send('Ok');
  }
}

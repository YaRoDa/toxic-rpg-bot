const url = require('url');

const db = require('../lib/db');
const tgbot = require('../lib/tgbot');
// const db = require('../lib/db');

module.exports = async (req, res) => {
    const redis = db.connect();

    const fullUrl = url.format({
        protocol: 'https',
        hostname: 'toxic-rpg-bot.now.sh',
        pathname: '/bot',
        query: {
          TG_TOKEN: process.env.TG_TOKEN,
        }
    });
    const resp = await tgbot.setWebHook(fullUrl);

    // Inizialize DB
    const toxicity = redis.exists(redis, 'rodrigo:toxicity');
    if (!toxicity) { // 0
        redis.set('rodrigo:toxicity', '0');
    }
    const life = redis.exists(redis, 'rodrigo:life');
    if (!life) { // 0
        redis.set('rodrigo:life', '100');
    }
    const potions = redis.exists(redis, 'rodrigo:potions');
    if (!potions) { // 0
        redis.set('rodrigo:potions', '0');
    }

    res.status(201).json({ resp });
}
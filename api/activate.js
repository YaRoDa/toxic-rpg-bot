const url = require('url');

const tgbot = require('../lib/tgbot');
// const db = require('../lib/db');

module.exports = async (req, res) => {
    const fullUrl = url.format({
        protocol: 'https',
        hostname: 'toxic-rpg-bot.now.sh',
        pathname: '/bot',
        query: {
          TG_TOKEN: process.env.TG_TOKEN,
        }
    });
    const resp = await tgbot.setWebHook(fullUrl);

    res.status(201).json({ resp });
}
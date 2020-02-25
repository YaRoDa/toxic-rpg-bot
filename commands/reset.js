const tg = require('../lib/tgbot');

const YAGO_ID = 11696011;

module.exports = async (req, redis) => {
    const userId = req.body.message.from.id;
    const chatId = req.body.message.chat.id;
    if (userId !== YAGO_ID){
      return tg.sendMessage(chatId, `Sólo un Saiyan puede usar este comando `);
    }

    await redis.set('rodrigo:toxicity', "0");
    await redis.set('rodrigo:life', "100");
    await redis.set('rodrigo:potions', "0");
};
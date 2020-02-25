const tg = require('../lib/tgbot');

const YAGO_ID = 11696011;

module.exports = async (req, redis) => {
    const userId = req.body.message.from.id;
    const chatId = req.body.message.chat.id;
    if (userId !== YAGO_ID){
      return tg.sendMessage(chatId, `Sólo un Saiyan puede usar este comando `);
    }

    const toxicity = await redis.incr('rodrigo:toxicity');
    const txt = `Rodrigo's toxicity ingreased by 1.
  ☣️ Current toxicity: ${toxicity}`;
    return tg.sendMessage(chatId, txt);
};
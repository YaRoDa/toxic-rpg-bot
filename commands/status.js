const tg = require('../lib/tgbot');

const YAGO_ID = 11696011;

module.exports = async (req, redis) => {
    const userId = req.body.message.from.id;
    const chatId = req.body.message.chat.id;
    if (userId !== YAGO_ID){
      return tg.sendMessage(chatId, `Sólo un Saiyan puede usar este comando `);
    }

    const toxicity = redis.get('rodrigo:toxicity');
    const life = await redis.get('rodrigo:life');
    const potions = await redis.get('rodrigo:potions');

    const txt = `Rodrigo stats:
☣️ Toxicity level: ${toxicity}
🧪 Potions: ${potions}
💙 Life: ${life}`;
      return tg.sendMessage(chatId, txt);
};
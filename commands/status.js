const tg = require('../lib/tgbot');
const { User } = require('../lib/db');

// const YAGO_ID = 11696011;

module.exports = async (req) => {
    // const userId = req.body.message.from.id;
    const chatId = req.body.message.chat.id;
    const rodrigo = await User.findOne({ name: 'Rodrigo' });

    const txt = `Rodrigo stats:
☣️ Toxicity level: ${rodrigo.toxicity}
🧪 Potions: ${rodrigo.potions}
💙 Life: ${rodrigo.life}`;
      return tg.sendMessage(chatId, txt);
};
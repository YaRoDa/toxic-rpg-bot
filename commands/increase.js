const tg = require('../lib/tgbot');
const { User } = require('../lib/db');

const YAGO_ID = 11696011;

module.exports = async (req) => {
    const userId = req.body.message.from.id;
    const chatId = req.body.message.chat.id;
    if (userId !== YAGO_ID){
      return tg.sendMessage(chatId, `Sólo un Programador Asíncrono puede usar este comando `);
    }

    const rodrigo = await User.findOne({ name: 'Rodrigo' }).exec();
    if (!rodrigo) {
        throw new Error('Rodrigo not found');
    }
    rodrigo.toxicity++;
    rodrigo.save();
    const txt = `Rodrigo's toxicity ingreased by 1.
  ☣️ Current toxicity: ${rodrigo.toxicity}`;
    return tg.sendMessage(chatId, txt);
};

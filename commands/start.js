const tg = require('../lib/tgbot');

module.exports = (req) => {
    // const userId = req.body.message.from.id;
    const chatId = req.body.message.chat.id;
    return tg.sendMessage(chatId, `Current commands: /increase /reset and /status`);
}
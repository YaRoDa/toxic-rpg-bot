const axios = require('axios');

const TG_TOKEN = process.env.TG_TOKEN;

module.exports = {
    request: async (path, options) => {
        const resp = await axios({
            method: 'POST',
            url: `https://api.telegram.org/bot${TG_TOKEN}/${path}`,
            json: true,
            ...options
        });
        console.log('Response from TG %j', resp);
        return resp;
    },

    setWebHook: async (url) => {
        return module.exports.request('setWebHook', { data: { url }});
    },

    sendMessage: async (chat_id, text) => {
        return module.exports.request('sendMessage', {
            data: {
                chat_id, 
                text,
            },
        });
    },

    sendDocument: async (tg, chat_id, document) => {
        return module.exports.request('sendDocument', {
            data: {
                chat_id, 
                document,
            },
        });
    },

    isTgRequest: async (req) => {
        const token = req.query['TG_TOKEN'];
        return TG_TOKEN ? token === TG_TOKEN : false;
    }
}; 

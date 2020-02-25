const axios = require('axios');

const TG_TOKEN = process.env.TG_TOKEN;

const request = async (path, options) => {
    const resp = await axios({
        method: 'POST',
        url: `https://api.telegram.org/bot${TG_TOKEN}/${path}`,
        json: true,
        ...options
    });
    console.log('Response from TG %j', resp);
    return resp;
};

const setWebHook = async (url) => {
    return request('setWebHook', { data: { url }});
};

const sendMessage = async (chat_id, text) => {
    return request('sendMessage', {
        data: {
            chat_id,
            text,
        },
    });
};

const sendDocument = async (chat_id, document) => {
    return request('sendDocument', {
        data: {
            chat_id,
            document,
        },
    });
};

const isTgRequest = (req) => {
    const token = req.query['TG_TOKEN'];
    return TG_TOKEN ? token === TG_TOKEN : false;
};

module.exports = {
    request,
    setWebHook,
    sendMessage,
    sendDocument,
    isTgRequest,
}; 

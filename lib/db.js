const Redis = require("ioredis");

const redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASS,
    db: process.env.REDIS_DB,
});

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

module.exports = {
    redis,
    quit: (redis) => {
        redis.quit();
    },

    get: async (redis, key) => {
        return redis.get(key);
    },

    set: async (redis, key, value) => {
        return redis.set(key, value);
    }
}
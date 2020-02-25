const Redis = require("ioredis");

module.exports = {
    connect: () => {
        return new Redis({
            port: process.env.REDIS_PORT,
            host: process.env.REDIS_HOST,
            password: process.env.REDIS_PASS,
            db: process.env.REDIS_DB,
        });
    },

    quit: (redis) => {
        redis.quit();
    },

    get: async (redis, key) => {
        return redis.get(key);
    }

    set: async (redis, key, value) => {
        return redis.set(key, value);
    }
}
const Redis = require("ioredis");

module.exports = async (req, res) => {
  const redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASS,
    db: process.env.REDIS_DB,
  });

  const info = await redis.info();

  redis.quit();

  res.json({
    info,
    query: req.query,
    cookies: req.cookies
  });
}

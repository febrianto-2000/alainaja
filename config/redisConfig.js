const redis = require("redis");
require('dotenv').config

const url = process.env.REDIS_URL
const password = process.env.REDIS_PASSWORD 

const redisDb = redis.createClient({
    password,
    url
});


module.exports = redisDb  
const { Error } = require("mongoose");
const redis = require("../../config/redisConfig");

const set = async (key, value) => {
    return new Promise((resolve, reject) => {
        redis.set(key, value, (err, reply) => {
            if(err){
                reject(err)
            }else{ 
                resolve(reply)
            }
        })
    })
}

const get = async (key) => {

    return new Promise((resolve, reject) => {
        redis.get(key, (err, reply) => {
            if(err){
                reject(err)
            }else{
                resolve(reply)
            }
        })
    })
}

module.exports = { 
    get,
    set,
}
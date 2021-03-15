const userModel = require("../models/users")
const axios = require("axios").default
const jwt = require("../../app/helpers/genToken")  
require('dotenv').config()

const fetchUser = async () => {
  return userModel.find();
};

const testRedis = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('helo')
    },5000)
  })
}

const testFetchData = async () => {  
  try{

    const MOCK_URL = process.env.MOCK_URL
    const { token } = jwt.genToken()
    
    const result = await axios.post(`${MOCK_URL}/mocks/v1/personals/coverage/check`, {}, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-Access-Host": `${MOCK_URL}`,
        "Content-Type": "application/json",
        "accept": "application/json"
      }
    })

    return result.data;
  }catch(err){
    throw err
  }
}

const checkNumber = (number) => {
  if (number % 2 == 0) return true;

  return false;
};

module.exports = {
  fetchUser,
  checkNumber,
  testRedis,
  testFetchData
};

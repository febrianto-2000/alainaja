const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

/**
 * encode base64
 * 
 * @param {any} source 
 * @returns {string}
 */
const  base64url = (source) => {
  // Encode in classical base64
  encodedSource = crypto.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
}


/**
 * generate jwt token
 * 
 * @param {string} lat 
 * @param {strin} lng 
 * @returns \{token: string, publicKey: string\}
 */
const genToken =  (lat = '-7.8162001', lng = '110.3737914') => {

  const appID = "com.gear.dragonfly.ala";

  const header = {
    "alg": "HS256",
    "typ": "JWT",
    "kid": appID,
    "knd": "anonymous",
  };

  const now = parseInt(((new Date()).valueOf() / 1000).toFixed());

  const data = {
    "knd": "anonymous",
    "sub": "testd01",
    "l2i": `${lat},${lng}`,
    "aud": "http://dev.alainaja.com",
    "iss": appID,
    "iat": now,
    "nbf": now,
    "exp": now + (30 * 15),
  };

  const privateKey = "ala-partner";
  
  const appIDMD5 = crypto.MD5(appID).toString()
  const publicKey = `@alainaja.com! ${appIDMD5}`;

  const receipt = `anonymous@${privateKey}#${data.iss}:${data.sub}:${data.aud}:(${data.iat}+${data.nbf}+${data.exp})~${data.l2i}`;
  data.jti = crypto.MD5(receipt).toString();
  
  const encodedHeader = base64url(crypto.enc.Utf8.parse(JSON.stringify(header)));
  
  const encodedData = base64url(crypto.enc.Utf8.parse(JSON.stringify(data)));
  
  const token = encodedHeader + "." + encodedData;
  
  let signature = crypto.HmacSHA256(token, publicKey);
  signature = base64url(signature);
  
  const signedToken = token + "." + signature;

  return {
   token: signedToken,
   publicKey  
  }

};

module.exports = { 
  genToken
}

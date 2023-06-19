const crypto = require('crypto');
console.log(crypto.randomBytes(16).toString('base64'))

module.exports = ({ env }) => ({
  auth: {
    secret: crypto.randomBytes(16).toString('base64'),
  },

  // apiToken: {
  //   salt: env('API_TOKEN_SALT'),
  // },
  apiToken: {
    salt: crypto.randomBytes(16).toString('base64')
  }

});


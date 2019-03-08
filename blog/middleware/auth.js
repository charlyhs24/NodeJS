const jwt = require("jsonwebtoken");

module.exports = {
  generateToken(user) {
    var token = jwt.sign(user, "secret", {
      expiresIn: "24h"
    });
    return token;
  },
  tokenValidation(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, "secret", function(err, authData) {
        if (!err) {
          resolve(authData);
        } else {
          return reject(err);
        }
      });
    });
  }
};

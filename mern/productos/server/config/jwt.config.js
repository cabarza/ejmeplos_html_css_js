const jwt = require('jsonwebtoken');
const secret = "Este es el mejor secreto del mundo!!!!";
module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    console.log(req, res);
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if(err) {
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}
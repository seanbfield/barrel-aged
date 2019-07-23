const jwt = require('jsonwebtoken');

const SECRET = 'dhjjhgdscdsudcna82943724jdfwkjlhfj';

const genToken = (payload) => {
  const token = jwt.sign(payload, SECRET);
  return token;
};

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, SECRET);
    res.locals.user = user;
    next();
  } catch (e) {
    res.status(401).send('Not Authorized');
  }
};

module.exports = {
  genToken,
  restrict,
};
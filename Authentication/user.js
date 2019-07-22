const express = require('express');

const router = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_KEY = 'barrel';


// User models
const { User } = require('../models');

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password_digest, 11, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
      // eslint-disable-next-line no-else-return
    } else {
      // This will create New users
      const user = User.create({
        name: req.body.name,
        email: req.body.email,
        password_digest: hash,
      });
      user
        // .save(() => { console.log('saved'); })
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: 'User created',
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    }
  });
});

router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    // THis will chack if there is a user
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
      // this will password in the data and the password user typing.
      bcrypt.compare(req.body.password_digest, user[0].password_digest, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed',
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            JWT_KEY,
            {
              expiresIn: '2h',
            },
          );
          return res.status(200).json({
            message: 'Auth successful',
            token,
          });
        }
        res.status(401).json({
          message: 'Auth failed',
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});


// // This fun will verify Token
// function verifyToken(req, res, next) {
//   // Get auth header value
//   const user = req.headers['authorization'];
//   // Check if bearer is undefine
//   if (typeof user !== 'undefined') {
//     // split at the space
//     const bearer = user.split(' ');
//     // get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleeware
//     next();
//   } else {
//     // forbidden
//     res.sendStatus(403);
//   }
// }

// app.post('/post', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post Testing',
//         authData,
//       });
//     }
//   });
// });

//  this Route will create token
// app.post('/post/login', (req, res) => {
//   // Users
//   const user = {
//     id: 1,
//     username: 'naz',
//     email: 'naz@gmail.com',
//   };
//   jwt.sign({ user }, 'secretkey', { expiresIn: '7d' }, (err, token) => {
//     res.json({
//       token,
//     });
//   });
// });














module.exports = router;

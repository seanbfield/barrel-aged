const { Router } = require('express');

const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRouter = Router();

const JWT_KEY = 'barrel';


// User models
const { User } = require('../models');

userRouter.post('/signup', async (req, res) => {
  const hash = bcrypt.hash(req.body.password_digest, 11);
  // eslint-disable-next-line no-else-return
  // This will create New users
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password_digest: hash,
    });
    res.status(201).send('User Created');
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Error');
  }
  //     user
  //       // .save(() => { console.log('saved'); })
  //       .then((result) => {
  //         console.log(result);
  //         res.status(201).json({
  //           message: 'User created',
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         res.status(500).json({
  //           error,
  //         });
  //       });
  //   }
  // });
});

userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    const isValid = bcrypt.compare(req.body.password, user.password_digest);
    // if (err) {
    //   return res.status(401).json({
    //     message: 'Auth failed',
    //   });
    // }

    if (isValid) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        JWT_KEY,
        {
          expiresIn: '7d',
        },
      );
      res.status(200).json({
        message: 'Auth successful',
        token,
      });
    }
    res.status(401).json({
      message: 'Auth failed',
    });
  } catch (e) {
    console.log(e.message);
    res.status(401).send('Auth failed');
  }
});
// THis will chack if there is a user
// .then((user) => {
// if (user.length < 1) {
//   return res.status(401).json({
//     message: 'Auth failed',
//   });
// }
// this will password in the data and the password user typing.


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


module.exports = { userRouter };

"use strict";

const db = require('./db');
const dbs = require('./mongo');
/*
 * 通过封装，对象自己管理自己
 * */
function User(user) {
  this.username = user.username;
  this.password = user.password;
  this.email = user.email;
}

// User.getByUsername = function (username, callback) {
//   db.query('SELECT * FROM users WHERE username=?', [username], function (err, result) {
//     if (err) {
//       return callback(err, null);
//     }
//     callback(null, result[0]);
//   });
// };

User.getByUsername = function (username, callback) {
  // db.query('SELECT * FROM users WHERE username=?', [username], function (err, result) {
  //   if (err) {
  //     return callback(err, null);
  //   }
  //   callback(null, result[0]);
  // });
  dbs.find('object', {username: username}, (err, items) => {
    if(err) return callback(err);
    console.log(items);
    callback(null, items)
  });
};

// User.prototype.save = function (callback) {
//   db.query(
//       `INSERT INTO users VALUES(NULL,?,?,?)`
//       , [this.username, this.password, this.email]
//       , function (err, result) {
//         if (err) {
//           return callback(err, null);
//         }
//         callback(null, result);
//       });
// };

User.prototype.save = function (callback) {
  // db.query(
  //     `INSERT INTO users VALUES(NULL,?,?,?)`
  //     , [this.username, this.password, this.email]
  //     , function (err, result) {
  //       if (err) {
  //         return callback(err, null);
  //       }
  //       callback(null, result);
  //     });

  dbs.insert('object', [{username: this.username, password: this.password, email: this.email}], (err, result) => {
    if(err) return callback(err);
    console.log(result);
    callback(null, result);
  })
};

module.exports = User;

"use strict";

const path = require('path');

module.exports = {
  debug: true,
  secret:'happyblog',
  uploadDir: path.join(__dirname,'uploads'),
  mongourl: 'mongodb://localhost:27017/myblog',
  mongoName: 'myblog'
};

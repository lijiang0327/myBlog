"use strict";

const express = require('express');
const cookieParser = require('cookie-parser');

const app =express();

app.use(cookieParser());

app.get('/', function (req, res) {
  res.cookie('test',true);
  res.send('hello');
});

app.listen(5000);
"use strict";

const utility = require('utility');

// e10adc3949ba59abbe56e057f20f883e
// e10adc3949ba59abbe56e057f20f883e
// e10adc3949ba59abbe56e057f20f883e
// 4e4d6c332b6fe62a63afe56171fd3725
// 4e4d6c332b6fe62a63afe56171fd3725

// 14e1b600b1fd579f47433b88e8d85291
//

// md5 只需要给一个字符串，就可以根据不同的字符串计算不同的密文，不能反向解密
// md5 是不可逆的
// 67a734d9671151cac516e1ce33d0542f
// 67a734d9671151cac516e1ce33d0542f
console.log(utility.md5(utility.md5('123456'+'sibozi')));

// 123456 e10adc3949ba59abbe56e057f20f883e
// 456789 4e4d6c332b6fe62a63afe56171fd3725

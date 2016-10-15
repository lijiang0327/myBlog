'use strict';

var mongodb = require('mongodb');
var path = require('path');
var config = require(path.join(__dirname, '../config'));

var dbs = {};
var MongoClient = mongodb.MongoClient;
var url = config.mongourl;

module.exports = dbs;


dbs.find = function(collection, findObj, callback) {
    MongoClient.connect(url, (err, db) => {
        if(err) return callback(err);
        var col = db.collection(collection);
        
        col.find(findObj).toArray((err, items) => {
            db.close;
            if(err) return callback(err);
            callback(null, err);
        })
    })
}
dbs.insert = function(collection, insertObj, callback) {
    MongoClient.connect(url, (err, db) => {
        if(err) return callback(err);

        var col = db.collection(collection);

        col.insert(insertObj, (err, result) => {
            db.close();
            if(err) return callback(err);
            callback(null, result);
        })
    });
}
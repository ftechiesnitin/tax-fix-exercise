'use strict';
const Mongo = require('mongodb');
const cfg = require('../config');

const DBName = cfg.MONGO_DB_NAME;

class MongoDBDao {

  getDBConnection() {
    return new Promise((resolve, reject) => { 
          Mongo.MongoClient.connect(cfg.MASTER_MONGO_CONNECTION, (err, conn) => {
              if(err) reject(err);
              this.conn = conn;
              resolve(conn);
          });
      })
  }

  release() {
    return this.conn.close();
  }

  insertOne(collection, data, callback, options) {
    if(!collection) return callback('Invalid Collection Name');
    if(!data) return callback('Invalid Data.');
    if(!options) options = {};

    let db = this.conn.db('' + DBName + '');

    db.collection(collection).insertOne(data, options, (err, result) => {
      return callback(err, result);
    });
  }

}

module.exports = new MongoDBDao();

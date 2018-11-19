const dotenv = require('dotenv'),
      _ = require('lodash');

// Load environment variables from .env file
dotenv.load();

let config = module.exports = {};

// App configuration
config.NODE_ENV = _.get(process, 'env.NODE_ENV', 'development');
config.PORT = _.get(process, 'env.APP_PORT', 5000);

// Mongo configuration
config.MONGO_DB_NAME = _.get(process, 'env.MONGO_DB_NAME', 'exchanges');
config.MONGO_DB_URL =  _.get(process, 'env.MONGO_DB_URL', 'mongo');
config.MONGO_DB_PORT = _.get(process, 'env.MONGO_DB_PORT', '27017');
config.MASTER_MONGO_CONNECTION = 'mongodb://' + config.MONGO_DB_URL + ':' + config.MONGO_DB_PORT + '/' + config.MONGO_DB_NAME;

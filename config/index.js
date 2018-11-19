const dotenv = require('dotenv'),
      _ = require('lodash');

// Load environment variables from .env file
dotenv.load();

let config = module.exports = {};

// App configuration
config.NODE_ENV = _.get(process, 'env.NODE_ENV', 'development');
config.PORT = _.get(process, 'env.APP_PORT', 5000);
//npm packages
const	_ = require('lodash');
//local modules
const utils = require('../common/utils');

const Exchange = {
    // exchange rates
    rates: (req, res) => {
      return utils.responseSuccess(res, { success: 'ok' })
    }
};

module.exports = Exchange;
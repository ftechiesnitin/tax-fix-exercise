//npm packages
const	_ = require('lodash');
const request = require('request');
const xmljs = require('xml-js');
//local modules
const utils = require('../common/utils');
const validate = require('../common/validate');
const response = require('../common/response');

const Exchange = {
    // exchange rates
    rates: (req, res) => {
    	let params = req.body;

    	if(!validate.isString(params.to)) return response.badRequest(res, 'exchange-to-required');
    	if(!validate.isString(params.from)) return response.badRequest(res, 'exchange-from-required');
    	if(!params.amount) return response.badRequest(res, 'exchange-amount-required');

    	let options = {
    		url: 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',
			method: 'GET',
			json: true
    	};

    	request(options, (err, results) => {
    		if(err) return response.serverError(res, err);

    		let parsedResult = xmljs.xml2json(results.body, {
			    			compact: true, 
			    			spaces: 4,
			    			ignoreDeclaration: true,
			    			ignoreInstruction: true,
			    			ignoreComment: true
			    		}),
    			rates = utils.parseRateJson(_.get(JSON.parse(parsedResult), 'gesmes:Envelope.Cube.Cube.Cube'));


			let TO = (params.to == 'eur' ? 1 : rates[params.to]),
			    FROM = (params.from == 'eur' ? 1 : rates[params.from]);

			let xr = np.round(np.times(np.divide(params.amount, FROM), TO), 5);

      		return response.success(res, { success: 'ok', data: xr })
    	});
    }
};

module.exports = Exchange;
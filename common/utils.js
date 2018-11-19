// utils modules
const Utils = {

    parseRateJson: (rates) => {
        let result = {}, len = rates.length;

        if(len) {
            for(let i = 0; i < len; i++) {
                let data = _.get(rates, '[' + i + ']._attributes', {});

                if(data.currency && data.rate) {
                    result[data.currency.toLowerCase()] = data.rate;
                }
            }
        }

        return result;
    }
};

module.exports = Utils;

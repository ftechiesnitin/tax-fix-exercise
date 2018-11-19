const express = require("express");
const helmet = require('helmet');
const compression = require('compression');
// init db
const db = require('./db/mongoBaseDao');
//initialize config
const cfg = require('./config');
// init app
let app = new express();

// using helmet as security tool
app.use(helmet());
// middlewares
app.use(express.json());
app.use(compression());

// test api
app.get('/test', (req, res) => res.status(200).json({}));

// load apis
const exchange = require('./api/exchange');

// currency exchange api
app.post('/api/exchange/rates', exchange.rates);

// make sure db connection successful before running app
db.getDBConnection()
	.then(() => {
		app.listen(cfg.PORT, () => console.log('Listening to port ' + cfg.PORT));
	})
	.catch(err => {
		return console.error(err);
	});
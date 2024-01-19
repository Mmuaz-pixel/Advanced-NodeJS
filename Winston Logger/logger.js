const { createLogger, transports, format } = require("winston");
require('winston-mongodb'); 
require('dotenv').config(); 

const logger = createLogger({
	transports: [
		new transports.Console(), // logging to console
		new transports.File({ // local file for logging
			level: 'warn',
			filename: 'logsWarning.log'
		}),
		new transports.File({ // local file for logging
			level: 'error',
			filename: 'logsError.log'
		}),
		new transports.MongoDB({ // mongodb database link to log 
			db: process.env.MONGO_URI
		})
	],
	format: format.combine(
		format.json(), // make the req json 
		format.timestamp(), // add time 
		format.metadata(), // meta will come under meta data object (useful to get meta in mongodb logs)
		format.prettyPrint() // make the json pretty 
	),

	statusLevels: true, // set status levels e.g warn, error, info
	ignoreRoute: function (req, res) {
		return false;
	}, transports: [
		new transports.Console(), // logging to console
		new transports.File({ // local file for logging
			level: 'warn',
			filename: 'logsWarning.log'
		}),
		new transports.File({ // local file for logging
			level: 'error',
			filename: 'logsError.log'
		}),
		new transports.MongoDB({ // mongodb database link to log 
			db: process.env.MONGO_URI
		})
	],
	format: format.combine(
		format.json(), // make the req json 
		format.timestamp(), // add time 
		format.metadata(), // meta will come under meta data object (useful to get meta in mongodb logs)
		format.prettyPrint() // make the json pretty 
	),

	ignoreRoute: function (req, res) {
		return false;
	},
})

module.exports = logger; 
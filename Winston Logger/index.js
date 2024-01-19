const express = require('express');
const app = express();

const expressWinston = require('express-winston');
const { transports, format } = require('winston');

require('dotenv').config();
const logger = require('./logger'); 

app.use(expressWinston.logger({
	winstonInstance: logger, 
	statusLevels: true, // set status levels e.g warn, error, info
})); 

app.get('/', (req, res) => {
	logger.info("this is a info logger")
	res.json({ msg: 'hello world' })
})

app.get('/400', (req, res) => {
	res.status(400).json({ msg: 'hello world' })
})

app.get('/500', (req, res) => {
	res.status(500).json({ msg: 'hello world' })
})

app.get('/error', (req, res) => {
	throw new Error('This is a error');
})

app.use(expressWinston.errorLogger({ // to get custom error's (that we throw) complete details along with trace
	transports: [
		new transports.File({
			filename: 'internalError.log'
		})
	],

	format: format.combine(
		format.json(),
		format.timestamp(),
	),
}))

app.listen(4000); 
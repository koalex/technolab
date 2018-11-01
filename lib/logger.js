const path   = require('path');
const config = require('config');
const bunyan = require('bunyan');

let logger = bunyan.createLogger({
	name: 'Technolab',
	streams: [
		{
			level: 'error',
			path: path.join(config.logRoot, 'errors.log')
		}
	]
});

module.exports = logger;

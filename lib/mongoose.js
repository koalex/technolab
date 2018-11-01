const config          = require('config');
const mongoose        = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const log             = require('./logger').child({level: 'error'});

if (process.env.MONGOOSE_DEBUG || global.__DEBUG__) mongoose.set('debug', true);

mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', true);

mongoose.connect(config.mongoose.uri, config.mongoose.options).catch(err => {
    console.error(err);
    log.fatal(err);
});

mongoose.plugin(uniqueValidator);

module.exports = mongoose;

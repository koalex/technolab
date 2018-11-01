const config = require('config');
const NATS   = require('nats');
const nats   = NATS.connect(config.nats);

module.exports = nats;

const NATS = require('nats');
const nats = NATS.connect({
    url: 'nats://localhost:4222',
    encoding: 'utf8',
    json: false,
    maxReconnectAttempts: 10,
    reconnect: true,
    reconnectTimeWait: 1000
});

module.exports = nats;

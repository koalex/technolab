const path = require('path');
const join = path.join;

module.exports = {
    port: process.env.PORT || 3000,
    projectRoot: process.cwd(),
    logRoot: process.env.LOG_PATH || join(process.cwd(), './logs'),
    secret: ['technolab'],
    mongoose: {
        uri: 'mongodb://mongo:27017/technolab',
        dbName: 'technolab',
        options: {
            user: 'technolab',
            pass: '647hrtT5jcTuryj678xksKEfk2psJ790vsauT',
            autoIndex: false,
            keepAlive: 120,
            poolSize: 10,
            connectTimeoutMS: 0,
            socketTimeoutMS: 0,
            promiseLibrary: global.Promise,
            reconnectTries: Number.MAX_VALUE,
            bufferMaxEntries: 0
        }
    },
    nats: {
        url: 'nats://localhost:4222',
        encoding: 'utf8',
        json: false,
        maxReconnectAttempts: 10,
        reconnect: true,
        reconnectTimeWait: 1000
    }
};

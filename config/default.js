const path = require('path');
const join = path.join;

module.exports = {
    port: process.env.PORT || 3000,
    projectRoot: process.cwd(),
    logRoot: process.env.LOG_PATH || join(process.cwd(), './logs'),
    secret: ['technolab'],
    mongoose: {
        dbName: 'technolab',
        options: {
            keepAlive: 1,
            poolSize: 5,
            connectTimeoutMS: 0,
            socketTimeoutMS: 0,
            promiseLibrary: global.Promise,
            reconnectTries: Number.MAX_VALUE
        }
    }
};

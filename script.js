const http = require('http');
const winston = require('winston');
require('dotenv').config();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log', maxsize: 500 }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

http
    .createServer(function (request, response) {
    request.on('data', (chunk) => {
        logger.info(chunk + "")
    });
    response.end();
}).listen(process.env.PORT, (err) => {
    if (err) logger.error('something bad happened', err);
    logger.info(`server is listening on ${process.env.PORT}`)
});





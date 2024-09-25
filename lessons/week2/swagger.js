const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'End-points of my project'
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js']

swaggerAutogen(outputFile, routes, doc)
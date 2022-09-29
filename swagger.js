const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Movie API',
    description: 'CSE 341 Movie Project',
  },
  host: 'localhost:4000',

  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);
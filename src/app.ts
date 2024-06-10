import cheeseRoutes from './routes/cheeseRoutes';
import bodyParser = require('body-parser');
import PORT from './server';
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();
const BASE_URL = 'http://localhost';

app.use(cors());
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Cheeseria API',
      version: '1.0.0',
      description: 'API for managing cheeseria products and prices',
    },
    servers: [
      {
        url: `${BASE_URL}:${PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', cheeseRoutes);

export default app;

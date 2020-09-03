const express = require('express');
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes/')
app.use('/api', routes);

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Place API",
      description: "Place API Information",
      contact: {
        name: "Roger Albuquerque"
      },
      servers: ["http://localhost:5000"]
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get('/', function(req, res) {
  res.send('Root route.')
});
app.listen(port, () => console.log(`Listening on port ${port}`));

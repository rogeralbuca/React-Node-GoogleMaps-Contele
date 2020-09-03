
const express = require('express');
const router = express.Router()

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const fs = require('fs');
const poi = fs.readFileSync('./data/places.json','utf8')

/**
 * @swagger
 * /places:
 *  get:
 *    description: Use to request all places
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/places', (req, res) => {
  res.status(200).send(poi);
});

module.exports = router

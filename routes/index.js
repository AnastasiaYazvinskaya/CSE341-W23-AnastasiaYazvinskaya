const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.someoneNameFunction);
routes.get('/awesome', myController.awesomeFunction);
routes.get('/superAwesome', myController.superAwesomeFunction);

module.exports = routes;
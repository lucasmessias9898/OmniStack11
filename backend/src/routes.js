const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ROTA LOGIN(SESSÃO DA ONG)
routes.post('/sessions', SessionController.create);

//ROTAS ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//ROTAS INCIDENTES
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//ROTA PARA LISTAR TODOS OS INCIDENTES DA ONG Especifica
routes.get('/profile', ProfileController.index);

module.exports = routes;
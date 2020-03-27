const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ROTA LOGIN(SESSÃO DA ONG)
routes.post('/sessions', SessionController.create);

//ROTAS ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        ciy: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

//ROTAS INCIDENTES
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//ROTA PARA LISTAR TODOS OS INCIDENTES DA ONG Especifica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

module.exports = routes;
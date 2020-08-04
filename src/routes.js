const express = require('express');
const routes = express.Router();
const TodosControllers = require('./controllers/TodosControllers');

routes.get('/todos', TodosControllers.index);
routes.get('/todos/:id', TodosControllers.show);
routes.post('/todos', TodosControllers.create);
routes.put('/todos/:id', TodosControllers.update);
routes.delete('/todos/:id', TodosControllers.delete)

module.exports = routes;

const express = require('express');
const routes = express.Router();

const projectsController = require('../../controllers/ProjectsController');
const defaultMiddleware = require('../../middlewares');
const projectMiddleware = require('../../middlewares/projectValidation');

routes.use(defaultMiddleware);

routes.get('/projects', projectsController.listContent);
routes.post('/projects/store', projectsController.StoreContent);
routes.put('/projects/:id', projectMiddleware.checkProjectExist, projectsController.EditContent);
routes.delete('/projects/:id', projectMiddleware.checkProjectExist, projectsController.DeleteContent);
routes.post('/projects/:id/tasks', projectMiddleware.checkProjectExist, projectsController.AddProjectTask);

module.exports = routes;
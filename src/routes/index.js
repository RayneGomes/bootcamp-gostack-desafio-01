const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({
    message: 'Server available'
  });
});

const projectRoutes = require('./projects');
routes.use(projectRoutes);

module.exports = routes;
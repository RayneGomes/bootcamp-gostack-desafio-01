const ProjectManager = require('../repositories/projects');

module.exports = {
  checkProjectExist(req, res, next) {
    const { id } = req.params;
    const itemId = ProjectManager.getItemById(id);

    if(!itemId) {
      return res.status(400).json({ error: 'Product ID not found' });
    }

    return next();
  }
}
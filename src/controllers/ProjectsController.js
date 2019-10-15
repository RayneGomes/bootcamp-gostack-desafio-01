const ProjectManager = require('../repositories/projects');

module.exports = {
  async listContent(req, res, next) {
    return res.json(ProjectManager.getAll());
  },

  async StoreContent(req, res, next) {
    const { id, title } = req.body;
    const tasks = [];

    const listProjects = ProjectManager.addItem({ id, title, tasks });

    return res.json(listProjects);
  },

  async EditContent(req, res, next) {
    const { id } = req.params;
    const { title } = req.body;

    const listProjects = ProjectManager.editItem({ id, title });

    return res.json(listProjects);
  },

  async DeleteContent(req, res, next) {
    const { id } = req.params;

    ProjectManager.deleteItem(id);

    return res.send();
  },

  async AddProjectTask(req, res, next) {
    const { id } = req.params;
    const { title } = req.body;

    listProjects = ProjectManager.addTasks({ id, title });

    return res.json(listProjects);
  }
}
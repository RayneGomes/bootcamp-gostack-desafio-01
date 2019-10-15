const Project = require('../models/Project');
const listItems = [];

module.exports = {
  getAll() {
    return listItems;
  },

  getItemById(id) {
    let item = listItems.find(x => x.id === id);
    return item;
  },

  getArrayIndex(item) {
    let index = listItems.indexOf(item);
    return index;
  },

  addItem(project = Project) {
    const newProject = Object.seal(project, Project);
    listItems.push(newProject);

    return listItems;
  },

  editItem(project = Project) {
    const projectToUpdate = this.getItemById(project.id);
    const index = this.getArrayIndex(projectToUpdate);

    projectToUpdate.title = project.title;
    listItems[index] = projectToUpdate;

    return listItems;
  },

  deleteItem(id) {
    try {
      const itemToDelete = this.getItemById(id);
      const index = this.getArrayIndex(itemToDelete);
      listItems.splice(index, 1);

      return true;
    }
    catch(err) {
      return false;
    }
  },

  addTasks(task) {
    let project = this.getItemById(task.id);
    const index = this.getArrayIndex(project);
    project.tasks.push(task.title);
    listItems[index] = project;

    return listItems;
  }

}
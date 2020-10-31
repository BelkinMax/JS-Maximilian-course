class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.updateProjectListsFunction = updateProjectListsFunction;
    this.id = id;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn();
  }

  connectMoreInfoBtn() {}

  connectSwitchBtn() {
    const projectItemEl = document.getElementById(this.id);
    const switchBtn = projectItemEl.querySelector("button:last-of-type");
    switchBtn.addEventListener("click", this.updateProjectListsFunction);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    for (const projectItem of projectItems) {
      this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject() {}

  switchProject(projectId) {
    // const projectIdx = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIdx, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();

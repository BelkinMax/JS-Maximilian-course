class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
  }
}

App.init();

export function getNewProjectData() {
  const newProject = function (title, description) {
    this.title = title;
    this.description = description;
  };
  const title = document.querySelector("#title-input").value;
  const descrip = document.querySelector("#descrip-input").value;

  const addNewProject = new newProject(`${title}`, `${descrip}`);
  projectData.push(addNewProject);
  console.log(projectData);
  window.localStorage.setItem("Task", JSON.stringify(projectData));
}
const projectData = [];

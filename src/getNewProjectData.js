export function getNewProjectData() {
  const newProject = function (title, description) {
    this.title = title;
    this.description = description;
  };

  let storedData = localStorage.getItem("Task");
  let lclStorage = JSON.parse(storedData);
  const title = document.querySelector("#title-input").value;
  const descrip = document.querySelector("#descrip-input").value;
  const addNewProject = new newProject(`${title}`, `${descrip}`);

  if (lclStorage !== null) {
    projectData = lclStorage;
    //console.log(projectData);
    //console.log(lclStorage);
  }

  projectData.push(addNewProject);
  localStorage.setItem("Task", JSON.stringify(projectData));

  lclStorage;
}
let projectData = [];

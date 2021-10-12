import { getNewProjectData } from "./getNewProjectData";
import { deleteProject } from "./deleteProject";
import { test } from "./test";
export const displayNewProject = () => {
  let storedData = localStorage.getItem("Task");
  let lclStorage = JSON.parse(storedData);
  if (lclStorage !== null) {
    projectData = lclStorage;
  }
  const dataToDisplay = JSON.parse(window.localStorage.getItem("Task"));
  const placeToDisplayProjects = document.querySelector(".project-bar");

  const divsToRemove = document.querySelectorAll(".new-prj-box");
  for (let i = 0; i < divsToRemove.length; i++) {
    console.log(divsToRemove);
    divsToRemove[i].remove();
  }

  for (let j = 0; j < dataToDisplay.length; j++) {
    const newProjectBox = document.createElement("div");
    newProjectBox.className = "new-prj-box";
    newProjectBox.dataset.projectNum = `${j}`;
    const prjNum = document.createElement("div");
    const title = document.createElement("div");
    const descrip = document.createElement("div");
    const infoBox = document.createElement("div");
    const buttonBox = document.createElement("div");
    const addBtn = document.createElement("button");
    const viewBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    infoBox.className = "prj-box-info";

    buttonBox.className = "prj-btn-box";

    addBtn.className = "prj-btn";
    addBtn.id = "prj-btn-add";
    addBtn.innerText = "add TO-DO";

    viewBtn.className = "prj-btn";
    viewBtn.id = "prj-btn-view";
    viewBtn.innerText = "view";

    delBtn.className = "del-prj-btn";
    delBtn.id = `prj-btn-del-${j + 1}`;
    delBtn.innerText = "delete project";
    delBtn.addEventListener("click", deleteProject);
    delBtn.dataset.btnNum = `${j}`;

    title.className = "displayed-data";
    descrip.className = "displayed-data";
    newProjectBox.id = "onscreen";
    prjNum.innerText = `Project ${j + 1}`;
    title.innerText = dataToDisplay[j]["title"];
    descrip.innerText = dataToDisplay[j]["description"];

    placeToDisplayProjects.appendChild(newProjectBox);

    newProjectBox.appendChild(prjNum);
    prjNum.appendChild(infoBox);
    infoBox.appendChild(title);

    infoBox.appendChild(descrip);
    infoBox.insertAdjacentElement("afterend", buttonBox);
    buttonBox.appendChild(addBtn);
    buttonBox.appendChild(viewBtn);
    buttonBox.appendChild(delBtn);
  }
};
let projectData = [];

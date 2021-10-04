import { inputBoxFunction } from "./createProject";
import { menuChange } from "./showMenu";

export function createTitle() {
  const body = document.querySelector("body");

  const appName = document.createElement("h1");
  appName.innerHTML = "Project Manager";
  appName.className = "heading";
  body.appendChild(appName);

  const container = document.createElement("div");
  container.className = "contain";
  container.id = "containId";
  appName.insertAdjacentElement("afterend", container);

  const addBox = document.createElement("div");
  addBox.className = "new-project";
  addBox.id = "project-show";
  addBox.innerText = " + New Project";
  container.appendChild(addBox);
  addBox.addEventListener("click", menuChange);

  return appName;
}

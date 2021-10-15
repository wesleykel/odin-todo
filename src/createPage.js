import { menuChange } from "./showMenu";
import Moon from "./moon.png";
import Sun from "./sun.png";

import { showSun } from "./nightMode";
import { showMoon } from "./nightMode";

export function createTitle() {
  const body = document.querySelector("body");
  //Project Name
  const appName = document.createElement("h1");
  appName.innerHTML = "Project Manager";
  appName.className = "heading";
  body.appendChild(appName);

  const nav = document.createElement("nav");
  nav.className = "nav-bar";
  nav.id = "nav-bar -id";
  appName.insertAdjacentElement("afterend", nav);

  const nightMode = document.createElement("span");
  nightMode.id = " moon-icon";

  nav.appendChild(nightMode);

  const moonIcon = new Image();
  moonIcon.src = Moon;
  moonIcon.className = "nav-icons";
  moonIcon.id = "moon";
  moonIcon.addEventListener("click", showMoon);

  const sunIcon = new Image();
  sunIcon.src = Sun;
  sunIcon.className = "nav-icons";
  sunIcon.id = "hide-moon-or-sun-icon";
  sunIcon.addEventListener("click", showSun);
  nightMode.appendChild(moonIcon);
  nightMode.appendChild(sunIcon);

  // This creates what you see when the page first load
  const container = document.createElement("div");
  container.className = "contain";
  container.id = "containId";
  nav.insertAdjacentElement("afterend", container);

  const addBox = document.createElement("div");
  addBox.className = "new-project";
  addBox.id = "project-show";
  addBox.innerText = " + New Project";

  container.appendChild(addBox);
  addBox.addEventListener("click", menuChange);

  const projectBar = document.createElement("div");
  projectBar.className = "project-bar";
  container.insertAdjacentElement("afterend", projectBar);

  return appName;
}

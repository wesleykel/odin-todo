import { inputBoxFunction } from "./createProject";
import { createTitle } from "./createPage";

export function menuChange() {
  const projectButton = document.querySelector(".new-project");
  projectButton.id = "hide-modal";
  const newProjectEntry = document.querySelector(".new-project-input");
  newProjectEntry.id = "show-modal";
}
export function closeMenu() {
  const newProjectEntry = document.querySelector(".new-project-input");
  newProjectEntry.id = "hide-modal";
  const projectButton = document.querySelector(".new-project");
  projectButton.id = "show-modal";
}

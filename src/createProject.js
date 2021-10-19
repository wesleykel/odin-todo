import { closeMenu } from "./showMenu";
import { getNewProjectData } from "./getNewProjectData";
import { displayNewProject } from "./displayProjectData";
import { openToDo } from "./accessTodoList";
// This function runs when  you click +New Project  it open up  the form to input new project
export function inputBoxFunction() {
  const container = document.getElementById("containId");

  const inputBox = document.createElement("div");

  inputBox.innerText = "What is your new project?";
  inputBox.className = "new-project-input";
  inputBox.id = "hide-modal";

  const inputInnerBox = document.createElement("div");
  inputInnerBox.className = "new-project-data";

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.innerText = "Title";

  const projectTitle = document.createElement("input", Text);
  projectTitle.id = "title-input";
  const projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.innerText = "Description";

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", closeMenu);
  submitButton.addEventListener("click", getNewProjectData);
  submitButton.addEventListener("click", displayNewProject);

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", closeMenu);
  const projectDescription = document.createElement("input", Text);
  projectDescription.id = "descrip-input";
  container.appendChild(inputBox);
  inputBox.appendChild(inputInnerBox);
  inputInnerBox.appendChild(projectTitleLabel);
  projectTitleLabel.insertAdjacentElement("afterend", projectTitle);
  projectTitle.insertAdjacentElement("afterend", projectDescriptionLabel);
  projectDescriptionLabel.insertAdjacentElement("afterend", projectDescription);
  projectDescription.insertAdjacentElement("afterend", submitButton);
  submitButton.insertAdjacentElement("afterend", cancelButton);
  return inputBox;
}
openToDo;

import { closeMenu } from "./showMenu";

export function inputBoxFunction() {
  const container = document.getElementById("containId");

  const inputBox = document.createElement("div");

  inputBox.innerText = "What is your new project?";
  inputBox.className = "new-project-input";
  inputBox.id = "hide-modal";

  const projectTitle = document.createElement("input", Text);
  const projectDescription = document.createElement("input", Text);

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", closeMenu);

  inputBox.appendChild(projectTitle);
  projectTitle.insertAdjacentElement("afterend", projectDescription);
  projectDescription.insertAdjacentElement("afterend", submitButton);
  container.appendChild(inputBox);

  return inputBox;
}

/*export function NewProject(title, todoDate) {
  this.title = title;
  this.todoDate = todoDate;
}*/

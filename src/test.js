export function showList() {
  const container = document.querySelector(".project-bar");
  const todoListContainer = document.createElement("div");

  todoListContainer.className = "to-do-hidden";
  const title = document.createElement("h3");
  title.innerText = "Project ";
  todoListContainer.appendChild(title);
  const toDoinputBox = document.createElement("div");
  toDoinputBox.className = "to-do-input-box";
  title.insertAdjacentElement("afterend", toDoinputBox);
  const inputLegend = document.createElement("span");
  inputLegend.innerText = "Add To -Do";
  const input = document.createElement("input");
  const submitBtn = document.createElement("button");
  const closeBtn = document.createElement("button");
  submitBtn.innerText = "Submit";
  closeBtn.innerText = "Close";
  closeBtn.addEventListener("click", close);
  const todoList = document.createElement("ul");

  container.insertAdjacentElement("afterend", todoListContainer);
  toDoinputBox.appendChild(inputLegend);
  toDoinputBox.appendChild(input);
  toDoinputBox.appendChild(submitBtn);
  toDoinputBox.appendChild(closeBtn);
  toDoinputBox.insertAdjacentElement("afterend", todoList);
}

export function openToDo() {
  const todoListContainer = document.querySelector(".to-do-hidden");
  const projectsOnScreen = document.querySelector(".project-bar");
  //todoListContainer.className = "to-do-show";
  // projectsOnScreen.className = "to-do-hidden";

  if (todoListContainer.className === "to-do-hidden") {
    todoListContainer.className = "to-do-show";
    projectsOnScreen.className = "to-do-hidden";
  }
}
export function close() {
  const todoListContainer = document.querySelector(".to-do-show");
  const projectsOnScreen = document.querySelector(".to-do-hidden");

  if (todoListContainer.className === "to-do-show") {
    todoListContainer.className = "to-do-hidden";
    projectsOnScreen.className = "project-bar";
  }
}

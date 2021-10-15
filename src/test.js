export function showList() {
  const container = document.querySelector(".project-bar");
  const todoListContainer = document.createElement("div");
  const title = document.createElement("h3");
  title.innerText = "Add To-Do ";
  todoListContainer.appendChild(title);
  const toDoinputBox = document.createElement("div");
  toDoinputBox.className = "to-do-input-box";
  const input = document.createElement("input");
  const submitBtn = document.createElement("button");
  const todoButtonContainer = document.createElement("section");

  todoListContainer.className = "to-do-hidden";

  container.insertAdjacentElement("afterend", todoListContainer);
}

export function switchBetween() {
  const todoListContainer = document.querySelector(".to-do-hidden");
  const projectsOnScreen = document.querySelector(".project-bar");
  //todoListContainer.className = "to-do-show";
  // projectsOnScreen.className = "to-do-hidden";

  if (todoListContainer.className === "to-do-hidden") {
    console.log("hi");
    todoListContainer.className = "to-do-show";
    projectsOnScreen.className = "to-do-hidden";
  } else {
    todoListContainer.className = "to-do-hidden";
    projectsOnScreen.className = "project-bar";
  }

  /* for (let i = 0; i < projectsOnScreen.length; i++) {
    projectsOnScreen[i].className = "new-prj-box-hidden";
  }*/
}

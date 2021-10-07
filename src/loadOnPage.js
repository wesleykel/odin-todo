export function loadOnPage() {
  const dataToDisplay = JSON.parse(window.localStorage.getItem("Task"));
  const placeToDisplayProjects = document.querySelector(".project-bar");
  if (dataToDisplay !== null) {
    for (let j = 0; j < dataToDisplay.length; j++) {
      const newProjectBox = document.createElement("div");
      newProjectBox.className = "new-prj-box";
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

      delBtn.className = "prj-btn";
      delBtn.id = "prj-btn-del";
      delBtn.innerText = "delete project";
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
  }
}
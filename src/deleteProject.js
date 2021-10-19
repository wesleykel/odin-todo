import { displayNewProject } from "./displayProjectData";
import { openToDo } from "./accessTodoList";
import { getNewTodoData } from "./test";
export const deleteProject = () => {
  let button = document.getElementsByClassName("del-prj-btn");
  //takes the array out of local storage
  let dataToDisplay = JSON.parse(window.localStorage.getItem("Task"));

  // identifies  button from click
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = function (e) {
      let delbutnum = this.id;

      let num = parseInt(delbutnum.substr(12) - 1);
      // gets the value num and removes  object at that  index
      dataToDisplay.splice(num, 1);
      //sends  the  array minus  the deleted object back to local storage
      localStorage.setItem("Task", JSON.stringify(dataToDisplay));
      // removes all projects  from screen
      const divsToRemove = document.querySelectorAll(".new-prj-box");
      for (let i = 0; i < divsToRemove.length; i++) {
        divsToRemove[i].remove();
      }
      const placeToDisplayProjects = document.querySelector(".project-bar");
      // this  repopulates  the screen with the shortend  array
      for (let j = 0; j < dataToDisplay.length; j++) {
        const newProjectBox = document.createElement("div");
        newProjectBox.className = "new-prj-box";
        newProjectBox.dataset.projectNum = `${j}`;
        const prjNum = document.createElement("h3");
        const title = document.createElement("h3");
        const descrip = document.createElement("h4");
        const infoBox = document.createElement("div");
        const buttonBox = document.createElement("div");
        const addBtn = document.createElement("button");
        //const viewBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        infoBox.className = "prj-box-info";

        buttonBox.className = "prj-btn-box";

        addBtn.className = "add-prj-btn";
        addBtn.id = `prj-btn-add-${j}`;
        addBtn.innerText = "add TO-DO";
        addBtn.addEventListener("click", openToDo);
        addBtn.addEventListener("click", getNewTodoData);
        addBtn.dataset.btnNum = `${j}`;

        /*viewBtn.className = "prj-btn";
        viewBtn.id = "prj-btn-view";
        viewBtn.innerText = "view";*/

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
        /*buttonBox.appendChild(viewBtn);*/
        buttonBox.appendChild(delBtn);
      }
    };
  }
};
openToDo;
getNewTodoData;

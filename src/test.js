import { forEach } from "lodash";

export const test = () => {
  let button = document.getElementsByClassName("del-prj-btn");
  const dataToDisplay = JSON.parse(window.localStorage.getItem("Task"));
  //console.log(dataToDisplay);

  for (let i = 0; i < button.length; i++) {
    button[i].onclick = function (e) {
      let delbutnum = this.id;

      let num = parseInt(delbutnum.substr(12) - 1);
      return num;
      //console.log(dataToDisplay);
      //let objectRemove
      //console.log(arrayToSet);
    };
    console.log(num);
    //localStorage.setItem("Task", JSON.stringify(arrayToSet));
  }
};
//
//console.log(arrayToSet);
// need to make another function to delete

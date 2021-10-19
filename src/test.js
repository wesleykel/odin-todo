import { menuChangeAddingTodo } from "./showMenu";

export function getNewTodoData() {
  const newTodo = function (todo) {
    this.todo = todo;
  };
  let todosArray = [];
  let todoButton = document.getElementsByClassName("add-prj-btn");
  console.log(todoButton);
  for (let i = 0; i < todoButton.length; i++) {
    todoButton[i].onclick = function (e) {
      let addButNum = this.id;

      let addNum = parseInt(addButNum.substr(12));
      console.log(addNum);

      const storedData = localStorage.getItem(`Todo${[i]}`);
      const lclStorage = JSON.parse(storedData);
      const todoInput = document.querySelector("#todo_input").value;
      todosArray[i] = new newTodo(`${todoInput}`);

      if (lclStorage !== null) {
        todoData = lclStorage;
      }
      todoData.push(todosArray[i]);
      localStorage.setItem(`Todo${[i]}`, JSON.stringify(todoData));
    };
  }
  console.log(todoData);
}

let todoData = [];

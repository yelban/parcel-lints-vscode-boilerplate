import todoData from "./todo.json";

// import "../css/index.css";
// import "../css/index.less";
import "../css/index.scss";

console.log("index.js");
console.log("todoData", todoData);

function renderTodos(todos) {
  const arrRenderItem = todos.map((todo) => {
    const classStatus = todo.done ? "done" : "";
    return `
      <li data-id="${todo.id}" class="${classStatus}">
        <span class="custom-checkbox"></span>
        <label>${todo.title}</label>
      </li>
    `;
  });
  document.querySelector(".todo-list").innerHTML = arrRenderItem.join("");
}

// <script src="./js/index.js" async defer>
// async after 'DOMContentLoaded'
// defer before 'DOMContentLoaded'
window.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
});

window.addEventListener("load", (event) => {
  console.log("load", event);

  renderTodos(todoData);
});

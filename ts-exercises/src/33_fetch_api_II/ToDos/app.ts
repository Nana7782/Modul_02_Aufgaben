import { IToDo } from "./interfaces/IToDo";

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

const todoList = document.getElementById("todo-list") as HTMLDivElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

fetch(TODO_URL)
  .then((resp: Response) => {
    return resp.json();
  })
  .then((todos: IToDo[]) => {
    const sortedTodos = todos.sort((a, b) => a.title.localeCompare(b.title));

    function createTodoElement(todo: IToDo): HTMLElement {
      const todoElement = document.createElement("div");
      todoElement.textContent = todo.title;
      todoElement.style.backgroundColor = todo.completed
        ? "lightgreen"
        : "lightcoral";
      return todoElement;
    }

    todoList.innerHTML = "";
    sortedTodos.forEach((todo) => {
      todoList.appendChild(createTodoElement(todo));
    });

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredTodos = sortedTodos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm)
      );

      todoList.innerHTML = "";
      filteredTodos.forEach((todo) => {
        todoList.appendChild(createTodoElement(todo));
      });
    });
  })
  .catch((err: Error) => {
    console.error("Error fetching ToDos:", err);
  });

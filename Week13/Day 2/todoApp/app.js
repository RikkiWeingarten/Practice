import { TodoList } from "./todo.js";

const todoList = new TodoList();

todoList.addTask("clean house");
todoList.addTask("walk dog");
todoList.complete("clean house");
todoList.getTasks();

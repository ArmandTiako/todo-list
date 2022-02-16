import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo.js";

afterEach(() => {
  cleanup();
});

test("Should render Todo List", () => {
  render(<Todo />);
  const todoElement = screen.getByTestId("allTodo");
  expect(todoElement).toBeInTheDocument();
});

test("Should have total number of Todo list", () => {
  const todos = [
    { id: 1, todo: "Acheter du pain" },
    { id: 2, todo: "Faire à manger" },
    { id: 3, todo: "Récupérer un colis" },
  ];
  render(<Todo />);
  const h1 = screen.getByTestId(`${todos.length}todos`);
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveTextContent(`${todos.length} To-do`);
});

test("Should render the sum", () => {
  expect(Todo.sum()).toEqual(3);
});

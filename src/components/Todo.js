import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Acheter du pain" },
    { id: 2, todo: "Faire à manger" },
    { id: 3, todo: "Récupérer un colis" },
  ]);

  //Booleen qui affiche le message d'alerte
  const [warning, setWarning] = useState(false);

  //Fonction qui parcourt le tableau todos et renvoie chaque objet sous forme de li
  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>
        {todo.todo}
      </li>
    );
  });

  //Fonction pour ajouter un nouveau Todo
  const addNewTodo = (newTodo) => {
    //Teste si l'input est vide
    if (newTodo !== "") {
      warning && setWarning(false);

      //Spread Operator
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          todo: newTodo,
        },
      ]);
    } else {
      setWarning(true);
    }
  };

  //Fonction d'affichage du Message d'alerte si l'input est vide
  const warningMessage = warning && (
    <div className="alert alert-danger" role="alert">
      Veuillez saisir un Todo
    </div>
  );

  function sum() {
    return 1 + 2;
  }

  return (
    <div className="mt-4">
      <div className="text-center">{warningMessage}</div>
      <h1 className="text-center" data-testid={`${todos.length}todos`}>
        {todos.length} To-do
      </h1>
      <ul className="list-group mt-4" data-testid="allTodo">
        {myTodos}
      </ul>
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default Todo;

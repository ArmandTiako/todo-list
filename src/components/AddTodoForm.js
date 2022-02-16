import React, { useState } from "react";

const AddTodoForm = ({ addNewTodo }) => {
  const [addTodo, setAddTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(addTodo);
    setAddTodo("");
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="card card-body">
        <div className="form-group">
          <label>Ajouter une tâche</label>
          <input
            className="ms-3"
            type="text"
            value={addTodo}
            onChange={(e) => {
              setAddTodo(e.target.value);
            }}
          />
          <input
            className="btn btn-success ms-3"
            type="submit"
            value="Valider"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;

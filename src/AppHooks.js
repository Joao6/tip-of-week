import React, { useState } from "react";
import TodoForm from "./Todos/TodoForm";
import TodoItem from "./Todos/TodoItem";

function AppHooks() {
  const initialForm = {
    title: "",
    priority: 0
  };
  const [form, setForm] = useState(initialForm);
  const [todos, setTodos] = useState([]);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  };

  const onAddTodo = todo => {
    if (todo.title && todo.title !== "") {
      setTodos([...todos, todo]);
    }
  };

  return (
    <div className="container">
      <h2 className="display-4">Todo List App!</h2>
      <hr />
      <TodoForm form={form} handleChange={handleChange} onAddTodo={onAddTodo} />
      <ul className="list-group list-group-flush">
        {todos.map((todo, index) => (
          <TodoItem key={index} title={todo.title} priority={todo.priority} />
        ))}
      </ul>
    </div>
  );
}

export default AppHooks;

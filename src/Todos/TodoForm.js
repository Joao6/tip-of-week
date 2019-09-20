import React from "react";

const TodoForm = props => (
  <form className="form">
    <div className="row">
      <div className="col-lg-6">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="title"
          placeholder="What needs to be done?"
          value={props.form.title}
          onChange={props.handleChange}
        />
      </div>
      <div className="col-lg-4">
        <input
          type="number"
          className="form-control mb-2 mr-sm-2"
          id="priority"
          placeholder="Priority"
          value={props.form.priority}
          onChange={props.handleChange}
        />
      </div>
      <div className="col-lg-2">
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={event => {
            event.preventDefault();
            props.onAddTodo(props.form);
          }}
        >
          Add
        </button>
      </div>
    </div>
  </form>
);

export default TodoForm;

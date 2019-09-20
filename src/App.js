import React from "react";
import TodoForm from "./Todos/TodoForm";
import TodoItem from "./Todos/TodoItem";

class App extends React.Component {
  state = {
    form: {
      title: "",
      priority: 0
    },
    todos: []
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillReceiveProps(nextProps){
    console.log("ÏcomponentWillReceiveProps");
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [event.target.id]: event.target.value
      }
    });
  };

  onAddTodo = todo => {
    if (todo.title && todo.title !== "") {
      this.setState({
        todos: [...this.state.todos, todo],
        form: {
          title: "",
          priority: 0
        }
      });
    }
  };

  render() {
    console.log("render");
    const { todos, form } = this.state;
    return (
      <div className="container">
        <h2 className="display-4">Todo List App!</h2>
        <hr />
        <TodoForm
          form={form}
          handleChange={this.handleChange}
          onAddTodo={this.onAddTodo}
        />
        <ul className="list-group list-group-flush">
          {todos.map((todo, index) => (
            <TodoItem key={index} title={todo.title} priority={todo.priority} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

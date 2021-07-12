import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  renderTodos = () =>
    this.props.todos.map((todo) => {
      return <Todo id={todo.id} text={todo.text} delete={this.props.delete} />;
    });

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    // How does this know what todoText even is?!
    delete: (todoText) => dispatch({ type: "DELETE_TODO", payload: todoText }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

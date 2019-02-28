import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  float: "right",
  borderRadius: "50%"
};

export default Todoitem;

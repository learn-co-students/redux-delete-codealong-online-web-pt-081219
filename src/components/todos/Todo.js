import React from "react";

const Todo = (props) => {
  return (
    <li>
      {props.text}
      <button onClick={() => props.delete(props.id)}>DELETE</button>
    </li>
  );
};

export default Todo;

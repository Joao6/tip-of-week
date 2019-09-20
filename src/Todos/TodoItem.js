import React from "react";

export default function TodoItem(props) {
  return (
    <li className="list-group-item align-items-center">
      <span className="badge badge-primary badge-pill mr-2">
        {props.priority}
      </span>
      {props.title}
    </li>
  );
}

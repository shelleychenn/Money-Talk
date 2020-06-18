import React from "react";

const Summary = (props) => {
  return (
    <div className="summary">
      <ul>
        {props.todos.map((entry) => (
          <Entry entry={entry} key={entry._id} />
        ))}
      </ul>
    </div>
  );
};

export default Summary;

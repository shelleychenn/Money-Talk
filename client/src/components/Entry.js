import React from "react";

const Entry = (props) => {
  return (
    <div className="entry">
      <li>{props.entry.description}</li>
    </div>
  );
};

export default Entry;

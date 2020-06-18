import React from "react";
import Entry from "./Entry.js";

const Summary = (props) => {
  return (
    <div className="summary">
      <ul>
        {props.entries.map((entry) => (
          <Entry entry={entry} key={entry._id} />
        ))}
      </ul>
    </div>
  );
};

export default Summary;

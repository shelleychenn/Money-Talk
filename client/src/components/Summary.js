import React from 'react';
import Entry from './Entry.js';

const Summary = ({ entries, update, deleteEntry }) => {
  return (
    <div className="summary">
      <ul>
        {entries.map((entry) => (
          <Entry
            entry={entry}
            key={entry._id}
            update={update}
            deleteEntry={deleteEntry}
          />
        ))}
      </ul>
    </div>
  );
};

export default Summary;

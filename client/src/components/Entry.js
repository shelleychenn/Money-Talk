import React from 'react';

const Entry = ({ entry, update, deleteEntry }) => {
  return (
    <div className="entry">
      <li>
        <div
          onClick={() => {
            update(entry, 'description');
          }}
        >
          {entry.description}
        </div>
        <div
          onClick={() => {
            update(entry, 'amount');
          }}
        >
          ${entry.amount}
        </div>
      </li>
      <button
        className="delete-button"
        onClick={() => {
          deleteEntry(entry);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Entry;

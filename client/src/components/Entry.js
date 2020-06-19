import React from 'react';

const Entry = ({
  entry,
  update,
  deleteEntry,
  getEntryByCategories,
  handleViewChange,
}) => {
  return (
    <tbody>
      <tr>
        <td className="date">{entry.date}</td>
        <td
          className="description"
          onClick={() => {
            update(entry, 'description');
          }}
        >
          {entry.description}
        </td>
        <td
          className="amount"
          onClick={() => {
            update(entry, 'amount');
          }}
        >
          {entry.amount}
        </td>
        <td className="transactionType">{entry.transactionType}</td>
        <td
          className="category"
          onClick={() => {
            getEntryByCategories(entry.category);
            handleViewChange();
          }}
        >
          {entry.category}
        </td>
        <td className="accountName">{entry.accountName}</td>
        <button
          className="button"
          onClick={() => {
            deleteEntry(entry);
          }}
        >
          Delete
        </button>
      </tr>
    </tbody>
  );
};

export default Entry;

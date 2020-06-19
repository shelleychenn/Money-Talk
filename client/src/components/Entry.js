import React from "react";

const Entry = (props) => {
  return (
    <tr>
      <td className="date">{props.entry.date}</td>
      <td className="description">{props.entry.description}</td>
      <td className="amount">{props.entry.amount}</td>
      <td className="transactionType">{props.entry.transactionType}</td>
      <td className="category">{props.entry.category}</td>
      <td className="accountName">{props.entry.accountName}</td>
      <button className="button">Delete</button>
    </tr>
  );
};

export default Entry;

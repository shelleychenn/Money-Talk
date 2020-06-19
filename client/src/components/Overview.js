import React from 'react';
import axios from 'axios';

var Overview = ({ entries }) => {
  let totalDebit = 0;
  let totalCredit = 0;
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].transactionType.toLowerCase() === 'debit') {
      totalDebit += entries[i].amount;
    } else {
      totalCredit += entries[i].amount;
    }
  }

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div>Total Debit: {totalDebit}</div>
      <div>Total Credit: {totalCredit}</div>
      <div>Net Worth: {totalCredit - totalDebit}</div>
    </div>
  );
};

export default Overview;

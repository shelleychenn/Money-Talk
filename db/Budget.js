const mongoose = require('mongoose');
const db = require('./mongoDB.js');
mongoose.Promise = global.Promise;

const budgetSchema = new mongoose.Schema({
  date: String,
  description: String,
  amount: Number,
  transactionType: String,
  category: String,
  accountName: String,
});

const BudgetEntry = mongoose.model('BudgetEntry', budgetSchema);

module.exports = BudgetEntry;

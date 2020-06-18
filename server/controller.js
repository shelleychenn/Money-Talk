const BudgetEntry = require('../db/Budget.js');

let budgetController = {};

// to save new entries based on user input
budgetController.post = (req, res) => {
  let newEntry = new BudgetEntry({
    date: req.body.date,
    description: req.body.description,
    amount: req.body.amount,
    transactionType: req.body.transactionType,
    category: req.body.category,
    accountName: req.body.accountName,
  });

  newEntry
    .save()
    .then(() => {
      console.log('entry saved successfully!');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

// to get all entries saved in database
budgetController.getAll = (req, res) => {
  BudgetEntry.find()
    .then((data) => {
      console.log('sucess: ', data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

// to update a selected entry
budgetController.update = (req, res) => {
  BudgetEntry.updateOne(
    { description: req.body.description },
    {
      $set: {
        date: req.body.newDate,
        description: req.body.newDescription,
        amount: req.body.newAmount,
        transactionType: req.body.newTransactionType,
        category: req.body.newCategory,
        accountName: req.body.newAccountName,
      },
    }
  )
    .then(() => {
      console.log('update successfully');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

// to delete a selected entry based on it's _id
budgetController.delete = (req, res) => {
  let params = req.params.id;
  BudgetEntry.deleteOne({ _id: params })
    .then(() => {
      console.log('entry successfuly deleted!');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = budgetController;

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

// to update the description of an entry
budgetController.update = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  BudgetEntry.updateOne(
    { _id: req.params.id },
    {
      $set: {
        date: req.body.date,
        description: req.body.description,
        amount: req.body.amount,
        transactionType: req.body.transactionType,
        category: req.body.category,
        accountName: req.body.accountName,
      },
    }
  )
    .then(() => {
      console.log('description successfully updated');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
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

budgetController.getByCategory = (req, res) => {
  let params = req.params.category;
  console.log(params);
  BudgetEntry.find({
    category: params,
  })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = budgetController;

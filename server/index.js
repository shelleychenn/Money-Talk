const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const BudgetEntry = require('../db/Budget.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

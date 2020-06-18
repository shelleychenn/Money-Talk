const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/budget';

mongoose.connect(mongoURL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => {
  console.log('database connection error');
});
db.once('open', () => {
  console.log('database connected!');
});

module.exports = db;

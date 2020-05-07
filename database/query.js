const mysql = require('mysql');
const { mysqlConfig } = require('./config');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.log('problem connecting to database');
  } else {
    console.log('connected to MySQL database');
  }
});

const getThisItem = (callback) => {
  connection.query('SELECT * FROM items WHERE id=1', (err, items) => {
    if (err) {
      console.log('problem querying for products');
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const getItems = (callback) => {
  connection.query('SELECT * FROM items', (err, items) => {
    if (err) {
      console.log('problem querying for products');
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};


//***************************
// Add new functions as needed
//***************************
module.exports = { getThisItem, getItems };


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });

// let Repo = mongoose.model('Repo', repoSchema);

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

// module.exports.save = save;
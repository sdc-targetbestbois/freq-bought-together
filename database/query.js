const mysql = require('mysql');
const { mysqlConfig } = require('./config');

const connection = mysql.createConnection(mysqlConfig);


setInterval(function () {
  connection.query('SELECT 1');
}, 5000);

function handleDisconnect() {
   // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();
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
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 4000;
const db = require('../database/query')
const newrelic = require('newrelic');
const app = express();


app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API 2.MONGO

app.get('/api2/:find', (req, res) => {
  db.findOne(req.params, (err, data) => {
    if (err) {
      console.log('problem finding item from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api2/new', (req, res) => {
  getThisItem((err, data) => {
    if (err) {
      console.log('problem creating an item from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.put('/api2/update', (req, res) => {
  getThisItem((err, data) => {
    if (err) {
      console.log('problem updating item from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api2/erase', (req, res) => {
  getThisItem((err, data) => {
    if (err) {
      console.log('problem deleting item from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});
app.listen(port, function() {
  console.log('listening on port 4000');
});

const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 4000;
const { getItems, getThisItem } = require('../database/query');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/items', (req, res) => {
  getItems((err, data) => {
    if (err) {
      console.log('problem getting all items from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/firstItem', (req, res) => {
  getThisItem((err, data) => {
    if (err) {
      console.log('problem getting all items from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});


app.listen(port, function() {
  console.log('listening on port 4000');
});

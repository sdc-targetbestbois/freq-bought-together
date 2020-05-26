const itemSchema = require('./schema');

const insertItem = (item, cb) => {
  let mongo = new itemSchema(item);

  mongo.insert((err, result) => {
    if (err) {
      console.log('error inserting item');
      cb(err, null);
    }
    cb(null, result);
  });
}

const findOne = (id, cb) => {
  itemSchema.find(id, (err, result) => {
    if (err) {
      console.log('error finding item');
      cb(err, null);
    }
    cb(null, result);
  })
}

module.exports = {
  insertItem,
  findOne,
};
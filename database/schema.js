const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/SDC", {useNewUrlParser: true})
    .then(() => {
        console.log('db connected');
    })
    .catch(() => {
        console.log('error connecting to db');
    })

let itemSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    itemName: {
        type: String,
        maxLength: 50
    },
    price: {
        type: Number,
        maxLength: 6
    },
    category: {
        type: String,
        maxLength: 25
    },
    imageLink: {
        type: String,
        maxLength: 150
    }
})

const itemSchema = mongoose.model('itemSchema', itemSchema);

module.exports = { itemSchema };
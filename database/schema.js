const mongoose = require('mongoose');
// const data = require('./data.csv');
// const parsedData = JSON.parse(data);
mongoose.connect("mongodb+srv://application:application@cluster0.b4yi2.mongodb.net/sdc?retryWrites=true&w=majority")
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
        },
    itemName: {
        type: String,
        require: true,
        },
    price: {
        type: Number,
        require: true,
        },
    category: {
        type: String,
        require: true,
        },
    imageLink: {
        type: String,
        require: true,
        }
    }, 
    {
        collection : 'items'
    });

let MongoRep = mongoose.model('mongoRep', itemSchema);

const insertItem = (item, cb) => {
    let newItem = new MongoRep(item);
    newItem.save((err, result) => {
    if (err) {
        console.log('error inserting item');
        cb(err, null);
    }else {
        cb(null, result);
    }
    })
}

const relFind = (idR, cb) => {
    MongoRep.find({id : Number(idR)}, {'_id': false}, function(err, results){
        if (err === undefined) {
            console.log(err, 'errorfinding based on id');
            cb(err, null);   
        }
        //find 21 reccommended items based off category
        catRandFind(results[0].category, cb, results);
    })
}

const catRandFind = (categorySearch, cb, results) => {
    MongoRep.find( { category : categorySearch }, {'_id': false})
    .limit(21)
    .exec((err, result) => {
        if(err) {
            console.log('errrrr',err);
            return err; 
        }
        results[1] = result;
        cb(null,results);
    })
}

module.exports = {
    insertItem,
    relFind,
};
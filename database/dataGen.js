let fs = require('fs');
let Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();
let csvWriter = require('csv-write-stream');
var writer = csvWriter();
var counter = 0;

let dataGen = () => {
    writer.pipe(fs.createWriteStream('./database/data.csv'));
    while(counter < 10000000) {
        writer.write({
            id: counter++,
            itemName: chance.word() + ' ' + chance.word(),
            price: chance.natural({ min: 1, max: 10000 }),
            category: chance.prefix(),
            imageLink: chance.domain(),
        })
    }
    writer.end();
    console.log('done');
}

dataGen();

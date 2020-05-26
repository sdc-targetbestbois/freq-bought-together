let fs = require('fs');
let Chance = require('chance');
let request = require('request');
let chance = new Chance();
let csvWriter = require('csv-write-stream');
let writer = csvWriter();

let imgUri = "https://picsum.photos/v2/list?page=2&limit=1000";
let counter = 0;
let getNewImagesCounter = 0;
let genImgLinks = [];


let imgLinks = () => {
        request(imgUri, (err, imageLinksData) => {
        if (err) {
            return console.log(err, 'error getting image links');
        }
        // console.log(imageLinksData.body, 'request return data');
        let parsed = JSON.parse(imageLinksData.body);
        // console.log('parsing',parsed);
        for(let i = 0; i < parsed.length; i++) {
            genImgLinks.push(parsed[i].download_url);
        }
        console.log(genImgLinks.length)
    })
}

let dataGen = () => {
    writer.pipe(fs.createWriteStream('./database/data.csv'));
    while(counter < 10000000) {
        let randomIndex = Math.floor(Math.random() * Math.floor(1000))
        writer.write({
            id: counter++,
            itemName: chance.word() + ' ' + chance.word(),
            price: chance.natural({ min: 1, max: 10000 }),
            category: chance.prefix(),
            imageLink: genImgLinks[randomIndex],
        })
    }
    writer.end();
    console.log('done');
}

while(getNewImagesCounter < 10) {
    imgLinks();
    if (getNewImagesCounter === 9) {
        setTimeout(function(){dataGen()}, 5000);
    }
    getNewImagesCounter++;
}
const fs = require('fs');

const readText = fs.createReadStream(__dirname + '/text.txt', {
    encoding: 'utf-8',
    highWaterMark: 100
});

const writeText = fs.createWriteStream(__dirname + '/newText.txt');

readText.pipe(writeText);
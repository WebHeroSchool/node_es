const fs = require('fs');

const text = fs.readFileSync("02.txt").toString();

console.log('Количество слов', text.split(' ').length);

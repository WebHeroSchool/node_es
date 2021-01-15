const fs = require('fs');

fs.readFile("02.txt", "utf8", function (err, contents) {
    if(err) return console.error(err);
    console.log('Количество слов', contents.split(' ').length)
});

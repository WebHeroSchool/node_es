const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
    if(err) return console.error(err);
    const dir = files.sort();
    dir.map(file => console.log(file));
});
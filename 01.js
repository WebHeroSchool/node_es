const fs = require('fs');

const dir = fs.readdirSync(__dirname).sort();

dir.map(file => console.log(file));

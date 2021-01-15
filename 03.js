const fs = require('fs');

const pathEx = fs.readFileSync("03.txt").toString();

(fs.existsSync(pathEx)) ? console.log('Путь существует') : console.log('Путь не существует')

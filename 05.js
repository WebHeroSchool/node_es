const fs = require('fs');
const path = require('path');

class File {
    constructor(name, file) {
        this.name = name;
        this.value = fs.readFileSync(file).toString().split('\r\n');
    }
}

const myFile1 = new File("original","04-1.txt");


const getChange = (newFile) => {
    const myFile2 = new File("newFile","04-1.txt");

    let left = myFile1;
    let right = myFile2;

    if (left.value.length <= myFile2.value.length) {
        left = myFile2;
        right = myFile1;
    }

    for (let i = 0; i < right.value.length; i++) {
        if (left.value[i] !== right.value[i]) {
            console.log(`В файле ${left.name} в строке ${i}: ${left.value[i]}; В файле ${right.name}: ${right.value[i]}`)
        }
    }
    for (let i = right.value.length; i < left.value.length; i++) {
        if (left.value[i] !== right.value[i]) {
            console.log(`В файле ${left.name} в строке ${i}: ${left.value[i]}; В файле ${right.name} строка отсутствует`)
        }
    }
};

fs.watchFile(path.resolve('04-1.txt'), () => getChange("myFile2"));


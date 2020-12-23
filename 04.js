const fs = require('fs');

class File {
    constructor(file) {
        this.name = file;
        this.value = fs.readFileSync(file).toString().split('\r\n');
    }
}

const myFile1 = new File( "04-1.txt");
const myFile2 = new File( "04-2.txt");

const compare = (file1, file2) => {
    let left = file1;
    let right = file2;

    if (file1.value.length < file2.value.length) {
        left = file2;
        right = file1;
    }

    if (file1.value.join('\r\n') === file2.value.join('\r\n')) {
        console.log('Сожержание файлов идентично')
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

compare(myFile1, myFile2);
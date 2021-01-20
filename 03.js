const fs = require('fs');

new Promise(resolve => {
    fs.readFile(__filename, ((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        resolve(data)
    }));
}).then(data => {

    fs.writeFile(__filename + '.exmaple', data.toString(), ((err) => {
        if (err) {
            console.error(err);
            return;
        }
        setTimeout(() => {
            console.log('success');
        }, 300)
    }));

});
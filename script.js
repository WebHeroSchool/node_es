const fs = require('fs');

setInterval(()=>{
    try {
        fs.readFile("text.tx", "utf8", function (err, contents) {
            if(err) return console.error(err);
            console.log('Количество слов', contents.split(' ').length)
        });
    } catch(err) {
        console.log("Error:" + err);
    }
},1000)
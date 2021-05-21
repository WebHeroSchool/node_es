const {Duplex} = require('stream');

const duplex = new Duplex({
    write(chunck, encoding, callback) {
        console.log(chunck.toString());
        callback()
    },
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++))
        if(this.currentCharCode > 90) {
            this.push(null)
        }
    }
});

duplex.currentCharCode = 65;
process.stdin.pipe(duplex).pipe(process.stdout)
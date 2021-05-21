const {Transform} = require('stream');

const upperCaseTr = new Transform({
    transform(chunck, encoding, callback) {
        this.push(`*${chunck.toString()}`);
        callback()
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
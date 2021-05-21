const http = require('http');
const port = 3000;

http.createServer((request, response)=>{
    // response.write('Hello');
    request.pipe(process.stdout)
    response.end();
}).listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});


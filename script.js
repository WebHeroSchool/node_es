const http = require('http');
require('dotenv').config();

console.log(process.env);
http.createServer((request, response)=>{
    request.pipe(process.stdout)
    response.end();
}).listen(process.env.PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${process.env.PORT}`)
});


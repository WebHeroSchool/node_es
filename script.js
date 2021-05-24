const http = require('http');
const port = 3000;

http.createServer((request, response)=>{
    response.setHeader(
        'Content-Type',
        'text/html; chaset=utf-8'
    );

    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Home</h2>");
    }
    else if(request.url == "/about"){
        response.write("<h2>About</h2>");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }

    response.end()
}).listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
const http = require('http');
const fs = require('fs');

// creating a server with raw node.js

const server = http.createServer();


// listener

server.on('request', (req, res) => {

    console.log(req.url);
    if (req.url === '/read-file' && req.method === 'GET') {
        // readableStream
        const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt');
        readableStream.on('data', (buffer) => {
            res.write(buffer);
        })

        readableStream.on('end', () => {
            res.end('Hello from world!')
        });
    }
    // res.end('Hello from world!');

})

server.listen(5000, () => {
    console.log('Server listening on port 5000')
})
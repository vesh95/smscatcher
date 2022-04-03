const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.writeHead(200, {
        'Content-Type': 'application/json',
    })

    res.end(JSON.stringify({'data': 'Hello'}))
});

server.listen(80, () => {
    console.log(`Server running at 80 port`);
 })
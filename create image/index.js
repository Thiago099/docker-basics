var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(process.env.PORT, '0.0.0.0');
console.log('Server running at http://localhost:1337/');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.SERVER_PORT || 3000, process.env.SERVER_IP || '127.0.0.1');

console.log('Server running at '+(process.env.SERVER_IP || '127.0.0.1')+':' + (process.env.SERVER_PORT || 3000));
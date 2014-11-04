var http = require('http');
var fs = require( 'fs' );

var data = fs.readFileSync( "index.html" );

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  res.write(data);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
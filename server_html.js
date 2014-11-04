var server,
    ip   = "127.0.0.1",
    port = 8888,
    http = require('http'),
    fs = require("fs"),
    folderPath = "Web",
    url = require('url'),
    path,
    filePath,
    encode = "utf8";

server = http.createServer(function (req, res) {
    path = url.parse(req.url);
    filePath = folderPath + path.pathname;
    console.log("Request from : "+filePath);
    filename = "Web/index.html";
	/*
	fs.readFile(filename, encode, fuction(err, file) {
		console.log("Response" + filename + "for request");
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(file);
		res.end();
	});
	*/
	/*
	fs.readFile(filePath, encode, function(err, file) {
      
	  console.log("err="+err);
      if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end();
          return;
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(file);
      console.log(file);
      res.end();
    });*/
	fs.readFile(filename, encode, function(err, file) {
      
	  console.log("Response" + filename + "for request");

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(file);
      //console.log(file);
      res.end();
    });
});

server.listen(port, ip);

console.log("Server running at http://" + ip + ":" + port);

const http = require('http'),
      fs = require('fs');
var port = process.argv[2],
    file = process.argv[3];

// HTTP server
// http.createServer takes a callback which is called once for each 
// connection. 
// the callback takes a request and a response as parameters.
// request: fetch properties (header, query-string)
// response: send data to the client (header and body)

var server = http.createServer(function (req, res) {

	res.writeHead(200, { 'content-type' : 'text/plain' })
	fs.createReadStream(file).pipe(res)
})
server.listen(port)
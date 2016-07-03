
const net = require('net'),
      strftime = require('strftime');
var port = process.argv[2]

// TCP server
// net.createServer takes as parameter a function called listener.
// this function is called when a connection is received.
// the socket object is a Node duplex Stream (it can be both read from, and
// written to).

var server = net.createServer(function (socket) {
	
	var date = strftime('%Y-%m-%d %H:%M\n')

	socket.end(date) 
})
// start the server
server.listen(port)
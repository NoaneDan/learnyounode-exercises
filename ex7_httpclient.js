
const http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
	
	// response is a Stream object.
	// A Stream object is an object that emits events.
	// Three events are of most importance: data, error and end.
	
	response.setEncoding('utf8')
	response.on('data', function (data) {
		console.log(data)	
	})
})
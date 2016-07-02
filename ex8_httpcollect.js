
const http = require('http')
var url = process.argv[2]

var result = ''
http.get(url, function (response) {

	response.setEncoding('utf8')
	response.on('error', function (err) {
		console.error(err)
	})
	response.on('data', function (data) {
		result += data
	})
	response.on('end', function () {
		console.log(result.length)
		console.log(result)
	})
})